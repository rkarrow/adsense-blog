import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this post.'],
    maxlength: [150, 'Title cannot be more than 150 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a unique slug.'],
    unique: true,
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide a short excerpt.'],
    maxlength: [300, 'Excerpt cannot be more than 300 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this post.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify a category.'],
    enum: ['AI & Machine Learning', 'Personal Finance', 'Cloud & DevOps', 'Cybersecurity', 'Web Development'],
  },
  author: {
    name: { type: String, default: 'Editorial Team' },
    role: { type: String, default: 'Senior Technology Analyst' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
  },
  coverImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  tags: [String],
  readTime: {
    type: String,
    default: '5 min read',
  },
  published: {
    type: Boolean,
    default: true,
  },
  views: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
