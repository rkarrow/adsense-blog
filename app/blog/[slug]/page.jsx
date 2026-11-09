import { notFound } from 'next/navigation';
import Link from 'next/link';
import AdBanner from '../../../components/AdBanner';
import PostCard from '../../../components/PostCard';
import { getPostBySlug, getAllPosts } from '../../../lib/postsService';

export const revalidate = 60;

// Dynamic SEO Metadata for Google Search
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author?.name || 'TechPulse Editorial' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author?.name || 'TechPulse Editorial'],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Schema.org JSON-LD Article metadata for Google rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
      jobTitle: post.author?.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechPulse Global',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* JSON-LD Script for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{post.category}</span>
        <span>/</span>
        <span className="truncate max-w-[200px] text-gray-400">{post.title}</span>
      </nav>

      {/* Header Info */}
      <div className="mb-8">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Author & Publication Details */}
        <div className="flex items-center justify-between py-4 border-y border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={post.author?.avatar}
              alt={post.author?.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div>
              <p className="text-sm font-bold text-gray-900">{post.author?.name}</p>
              <p className="text-xs text-gray-500">{post.author?.role}</p>
            </div>
          </div>
          <div className="text-right text-xs text-gray-400">
            <p>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p className="font-semibold text-blue-600 mt-0.5">{post.readTime}</p>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="rounded-3xl overflow-hidden mb-8 shadow-md">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-auto max-h-[480px] object-cover"
        />
      </div>

      {/* Top of Article Ad (High CTR) */}
      <AdBanner slot="4567890123" format="auto" label="Advertisement - Top of Article" />

      {/* Main Body Content */}
      <div className="article-content bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm leading-relaxed">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          } else if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
                {paragraph.replace('### ', '')}
              </h3>
            );
          } else if (paragraph.startsWith('> ')) {
            return (
              <blockquote key={index} className="border-l-4 border-blue-600 pl-4 py-2 my-6 bg-blue-50/50 text-gray-700 italic rounded-r-lg">
                {paragraph.replace('> ', '')}
              </blockquote>
            );
          } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
            const items = paragraph.split('\n').filter(i => i.trim());
            return (
              <ul key={index} className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                {items.map((it, idx) => (
                  <li key={idx}>{it.replace(/^[-*]\s*/, '')}</li>
                ))}
              </ul>
            );
          } else if (paragraph.startsWith('---')) {
            return <hr key={index} className="my-8 border-gray-200" />;
          }

          // In-Content Ad after paragraph 3
          return (
            <div key={index}>
              <p className="text-gray-700 text-base sm:text-lg mb-5 leading-relaxed">
                {paragraph}
              </p>
              {index === 3 && (
                <div className="my-8">
                  <AdBanner slot="6543210987" format="auto" label="Advertisement - Inside Content" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Topics:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Bottom Ad Unit */}
      <AdBanner slot="7890123456" format="auto" label="Advertisement - Bottom of Article" />

      {/* Author Bio Box */}
      <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={post.author?.avatar}
          alt={post.author?.name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-500/30"
        />
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Article Written By</span>
          <h4 className="text-lg font-bold text-gray-900 mt-1">{post.author?.name}</h4>
          <p className="text-xs text-gray-500 mb-2">{post.author?.role} at TechPulse Global</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Specializing in distributed systems architecture, enterprise software optimization, and data-driven computational strategies.
          </p>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Analysis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rPost) => (
              <PostCard key={rPost.slug} post={rPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
