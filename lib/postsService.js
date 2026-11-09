import { connectToDatabase } from './mongodb';
import Post from '../models/Post';
import { samplePosts } from './samplePosts';

export async function getAllPosts() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const posts = await Post.find({ published: true }).sort({ createdAt: -1 }).lean();
      if (posts && posts.length > 0) {
        return posts.map(p => ({
          ...p,
          _id: p._id.toString(),
          createdAt: p.createdAt ? p.createdAt.toISOString() : new Date().toISOString(),
        }));
      }
    }
  } catch (error) {
    console.warn("Could not fetch posts from MongoDB, falling back to local dataset:", error.message);
  }

  // Fallback to rich high-quality sample posts
  return samplePosts;
}

export async function getPostBySlug(slug) {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const post = await Post.findOne({ slug, published: true }).lean();
      if (post) {
        return {
          ...post,
          _id: post._id.toString(),
          createdAt: post.createdAt ? post.createdAt.toISOString() : new Date().toISOString(),
        };
      }
    }
  } catch (error) {
    console.warn("Could not fetch post from MongoDB:", error.message);
  }

  // Fallback check in sample posts
  return samplePosts.find(p => p.slug === slug) || null;
}
