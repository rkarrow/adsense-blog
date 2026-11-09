'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('admin12345');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'AI & Machine Learning',
    excerpt: '',
    content: '',
    coverImage: '',
    authorName: 'Alex Vance',
    authorRole: 'Lead Technology Analyst',
    tags: 'AI, Automation, Cloud',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const generatedSlug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setFormData({
      ...formData,
      title,
      slug: generatedSlug,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          adminKey,
          author: {
            name: formData.authorName,
            role: formData.authorRole,
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          },
          tags: formData.tags.split(',').map((t) => t.trim()),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: 'Article published successfully to MongoDB!' });
        setFormData({
          title: '',
          slug: '',
          category: 'AI & Machine Learning',
          excerpt: '',
          content: '',
          coverImage: '',
          authorName: 'Alex Vance',
          authorRole: 'Lead Technology Analyst',
          tags: '',
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to publish post.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSeedDatabase = async () => {
    setSeeding(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to seed.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Content Studio</span>
          <h1 className="text-3xl font-extrabold text-gray-900 mt-1">Editorial Management Portal</h1>
          <p className="text-sm text-gray-500">Publish high-value SEO articles directly into MongoDB</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSeedDatabase}
            disabled={seeding}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            {seeding ? 'Seeding...' : '⚡ Seed MongoDB with Sample Articles'}
          </button>
        </div>
      </div>

      {/* AdSense Readiness Checklist Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-xs text-blue-900">
        <h3 className="font-bold text-sm text-blue-950 mb-2">Google AdSense Quick-Check Guide:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span> Privacy Policy with DART cookies is generated
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span> About Us & Editorial Integrity standards published
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span> Responsive Ad unit placeholders in Header & Content
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span> Dynamic XML Sitemap & Robots.txt for Googlebot
          </li>
        </ul>
      </div>

      {/* Alert Status */}
      {status.message && (
        <div
          className={`p-4 rounded-xl text-sm mb-6 ${
            status.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Article Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Admin Secret Key *
              </label>
              <input
                type="password"
                required
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <span className="text-[11px] text-gray-400 mt-1 block">Configured in .env.local as ADMIN_SECRET_KEY</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="Personal Finance">Personal Finance</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Article Title (Headline) *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="e.g. How Autonomous AI Agents Are Reducing Cloud Infrastructure Costs"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Cover Image URL
              </label>
              <input
                type="text"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Short Excerpt / Meta Description (150-250 chars) *
            </label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="A concise summary of the article for Google Search snippet..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Full Content (Supports Markdown: ## Heading 2, ### Heading 3, - lists, &gt; quotes) *
            </label>
            <textarea
              required
              rows={12}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write or paste your article in markdown format..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-mono focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Author Role
              </label>
              <input
                type="text"
                value={formData.authorRole}
                onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="AI, Cloud, Security"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all disabled:opacity-50"
          >
            {loading ? 'Publishing Post...' : 'Publish Article to Website'}
          </button>
        </form>
      </div>
    </div>
  );
}
