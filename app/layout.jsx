import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TechPulse Global | Technology, AI & Finance Insights',
    template: '%s | TechPulse Global',
  },
  description: 'In-depth analysis, tutorials, and strategic breakdowns on Artificial Intelligence, Cloud Computing, Cyber Defense, and Modern FinTech.',
  keywords: ['Artificial Intelligence', 'Cloud Computing', 'Personal Finance', 'Cybersecurity', 'Enterprise Tech', 'Next.js Blog'],
  authors: [{ name: 'TechPulse Editorial Board' }],
  creator: 'TechPulse Global',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'TechPulse Global | Technology, AI & Finance Insights',
    description: 'In-depth analysis, tutorials, and strategic breakdowns on Artificial Intelligence, Cloud Computing, and Modern FinTech.',
    siteName: 'TechPulse Global',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechPulse Global',
    description: 'Premier technology and financial analysis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const isAdSenseActive = adsenseClientId && !adsenseClientId.includes('XXXXXXXXXXXXXXXX') && !adsenseClientId.includes('0000000000000000');

  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script Integration */}
        {isAdSenseActive && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
