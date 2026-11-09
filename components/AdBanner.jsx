'use client';

import { useEffect, useRef } from 'react';

/**
 * AdBanner Component
 * Renders an official Google AdSense unit or a clean preview placeholder in development.
 * 
 * @param {string} slot - AdSense Ad Slot ID (optional)
 * @param {string} format - 'auto', 'fluid', 'rectangle', 'horizontal'
 * @param {string} label - Friendly label for the slot (e.g. "Header Leaderboard", "In-Article Ad")
 */
export default function AdBanner({ slot = "1234567890", format = "auto", label = "Advertisement", className = "" }) {
  const adRef = useRef(null);
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const isConfigured = adsenseClientId && !adsenseClientId.includes('XXXXXXXXXXXXXXXX') && !adsenseClientId.includes('0000000000000000');

  useEffect(() => {
    if (isConfigured) {
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.warn('AdSense push error:', err);
      }
    }
  }, [isConfigured]);

  return (
    <div className={`my-8 mx-auto text-center ${className}`}>
      {/* Discreet Ad label as required by Google AdSense policies */}
      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium block mb-1">
        {label}
      </span>

      {isConfigured ? (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      ) : (
        <div className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl p-6 text-center max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[120px] transition-all hover:bg-gray-100/70">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
            Google AdSense Ad Slot ({format})
          </div>
          <p className="text-xs text-gray-400 max-w-md">
            This responsive ad unit activates automatically once you add your AdSense Client ID (<code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">ca-pub-XXXXXXXX</code>) in <code className="bg-gray-200 px-1 rounded">.env.local</code>.
          </p>
        </div>
      )}
    </div>
  );
}
