'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-wider font-bold text-blue-600 block mb-2">Get In Touch</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Contact Our Editorial Team</h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Have an inquiry, correction request, or advertising partnership proposal? Reach out to our editors and we will respond within 48 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Information & Physical details */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Channels</h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Editorial Desk</p>
                <p className="font-medium text-slate-200">editorial@techpulse-global.com</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Advertising & Sponsorships</p>
                <p className="font-medium text-slate-200">advertising@techpulse-global.com</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Response Time Guarantee</p>
                <p className="text-slate-300 text-xs">Standard response cycle within 24 to 48 operational hours.</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">Press Inquiries</p>
                <p className="text-slate-300 text-xs">TechPulse Global Digital Publications, 500 Technology Square, Cambridge, MA.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400">
            For DMCA or copyright notices, please append [DMCA Request] in your email subject heading.
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Dispatched!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                Thank you for contacting TechPulse Global. Our editorial desk has logged your ticket and will be in touch shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Jane Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Editorial feedback, ad inquiry, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Message Body *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our editorial staff assist you today?"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all mt-4"
              >
                Send Inquiries
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
