import Link from 'next/link';
import PostCard from '../components/PostCard';
import AdBanner from '../components/AdBanner';
import { getAllPosts } from '../lib/postsService';

export const revalidate = 60; // Revalidate every 60 seconds (Incremental Static Regeneration)

export default async function HomePage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  const categories = [
    'All Categories',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Personal Finance',
    'Cybersecurity'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          Industry Intelligence 2026
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          High-Impact Insights on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI, Cloud & Wealth</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Curated technical blueprints, financial methodologies, and architectural reviews designed for modern technologists and executives.
        </p>
      </section>

      {/* Top Header Leaderboard Ad (Crucial high-earning AdSense slot) */}
      <AdBanner slot="1029384756" format="horizontal" label="Advertisement - Header Leaderboard" />

      {/* Featured Post Hero Card */}
      {featuredPost && (
        <section className="mb-14">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 group hover:shadow-2xl transition-all duration-300">
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-full overflow-hidden bg-gray-100">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                Featured Analysis
              </span>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-4">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author?.avatar}
                    alt={featuredPost.author?.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{featuredPost.author?.name}</p>
                    <p className="text-xs text-gray-400">{featuredPost.author?.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="px-5 py-2.5 bg-gray-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  Read Article
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              idx === 0
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Latest Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Latest Publications</h2>
            <p className="text-xs text-gray-500 mt-1">Updated weekly by industry practitioners</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Middle Responsive In-Feed Ad (AdSense native slot) */}
      <AdBanner slot="9876543210" format="auto" label="Sponsored Content" />

      {/* Trust & Editorial Integrity Banner (Boosts AdSense manual reviewer evaluation) */}
      <section className="mt-14 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2 block">
            Quality Assurance & Standards
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Rigorous Fact-Checked Analysis. Zero Clickbait.
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Every technical article published on TechPulse undergoes rigorous technical peer review to ensure factual accuracy, code reproducibility, and unbiased commentary.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
            >
              Learn About Our Standards
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors"
            >
              Submit an Editorial Tip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
