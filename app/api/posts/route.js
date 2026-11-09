import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Post from '../../../models/Post';
import { samplePosts } from '../../../lib/samplePosts';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const posts = await Post.find({ published: true }).sort({ createdAt: -1 });
      return NextResponse.json({ success: true, source: 'mongodb', data: posts });
    }
  } catch (error) {
    console.error("API GET Error:", error.message);
  }

  return NextResponse.json({ success: true, source: 'local_sample', data: samplePosts });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, coverImage, author, tags, adminKey } = body;

    const expectedKey = process.env.ADMIN_SECRET_KEY || 'admin12345';
    if (adminKey !== expectedKey) {
      return NextResponse.json({ success: false, error: 'Unauthorized. Invalid admin secret key.' }, { status: 401 });
    }

    if (!title || !slug || !excerpt || !content || !category) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        success: false,
        error: 'MongoDB is not connected yet. Please configure your MONGODB_URI in .env.local to persist posts in database.',
      }, { status: 503 });
    }

    const post = await Post.create({
      title,
      slug,
      excerpt,
      content,
      category,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      author: author || {
        name: 'Editorial Staff',
        role: 'Contributing Analyst',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      },
      tags: tags || ['Technology', 'Analysis'],
    });

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
