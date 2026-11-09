import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Post from '../../../models/Post';
import { samplePosts } from '../../../lib/samplePosts';

export async function POST() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        success: false,
        error: 'MongoDB is not connected. Add your MongoDB Atlas connection string in .env.local to seed the database.',
      }, { status: 503 });
    }

    // Insert sample posts if they do not exist
    let inserted = 0;
    for (const post of samplePosts) {
      const exists = await Post.findOne({ slug: post.slug });
      if (!exists) {
        await Post.create(post);
        inserted++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Database seeded successfully! ${inserted} new high-quality articles added to MongoDB.`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
