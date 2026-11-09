export const metadata = {
  title: 'Privacy Policy | TechPulse Global',
  description: 'Our privacy practices, cookie usage policies, and Google AdSense compliance disclosures.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
        <span className="text-xs uppercase tracking-wider font-bold text-blue-600 block mb-2">Legal Compliance</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xs text-gray-400 mb-8">Last Updated: November 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              At <strong>TechPulse Global</strong> (accessible from our website), the privacy of our visitors is one of our utmost priorities. This Privacy Policy document outlines the types of information collected and recorded by TechPulse Global and how we utilize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Log Files and Web Analytics</h2>
            <p>
              Like most standard website operators, TechPulse Global follows standard logging procedures. These logs record visitors when they access website pages. The information collected via log files includes internet protocol (IP) addresses, browser application types, Internet Service Providers (ISPs), date and timestamp signatures, referring/exit pages, and the number of clicks. This data is not linked to any personally identifiable information and is utilized solely for analyzing trends, site administration, and traffic optimization.
            </p>
          </section>

          {/* CRITICAL GOOGLE ADSENSE DISCLOSURE SECTION */}
          <section id="cookies" className="p-6 bg-blue-50/60 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-blue-900 mb-3">3. Google DoubleClick DART Cookies & Advertising Partners</h2>
            <p className="mb-3 text-blue-950">
              Google is one of the third-party vendors on our website. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other websites across the internet.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-blue-950 text-sm">
              <li>
                Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TechPulse Global.
              </li>
              <li>
                Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-blue-700 hover:text-blue-900">https://policies.google.com/technologies/ads</a>.
              </li>
              <li>
                TechPulse Global has no access to or control over these cookies that are utilized by third-party advertisers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Privacy Policies</h2>
            <p>
              TechPulse Global’s Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p className="mb-2">Under the California Consumer Privacy Act (CCPA), California consumers have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Request disclosure of the specific categories and pieces of personal data collected.</li>
              <li>Request the deletion of any personal data collected.</li>
              <li>Request that a business does not sell the consumer’s personal information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. GDPR Data Protection Rights</h2>
            <p className="mb-2">We ensure full compliance with the European General Data Protection Regulation (GDPR). Every user is entitled to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct inaccurate information.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data under certain conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Consent and Inquiries</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our compliance team via our <a href="/contact" className="text-blue-600 underline font-semibold">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
