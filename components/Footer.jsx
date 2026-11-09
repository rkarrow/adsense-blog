import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                TP
              </span>
              <span className="font-bold text-xl text-white">
                TechPulse<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering authoritative analysis and deep-dive technical insights into Generative AI, Cloud infrastructure, FinTech, and Enterprise Security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Latest Articles</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Editorial Mission</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Media Inquiries</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Author Portal</Link></li>
            </ul>
          </div>

          {/* Legal Pages (Essential for AdSense) */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Compliance & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy-policy#cookies" className="hover:text-white transition-colors">Cookie Preferences</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">DMCA / Contact</Link></li>
            </ul>
          </div>

          {/* AdSense Notice & Newsletter */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Ad Transparency</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              We partner with Google AdSense and accredited advertising networks to display relevant programmatic advertisements. Please review our Privacy Policy for details regarding cookie tracking.
            </p>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} TechPulse Global. All rights reserved.
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-xs text-center text-gray-500">
          Built with Next.js (App Router), React, Tailwind CSS, & MongoDB. Fully optimized for Google Core Web Vitals & Search Console.
        </div>
      </div>
    </footer>
  );
}
