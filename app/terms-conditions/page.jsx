export const metadata = {
  title: 'Terms of Service | TechPulse Global',
  description: 'Terms and conditions governing the use of TechPulse Global publications and resources.',
};

export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
        <span className="text-xs uppercase tracking-wider font-bold text-blue-600 block mb-2">Terms of Service</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-xs text-gray-400 mb-8">Effective Date: November 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing and using <strong>TechPulse Global</strong>, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with all of these terms, you are prohibited from using the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website, including all source code, databases, software, website designs, audio, video, text, photographs, and graphics on the site are owned or licensed to TechPulse Global, and are protected by international copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Informational and Financial Disclaimer</h2>
            <p>
              The information provided on TechPulse Global is for general informational and educational purposes only. Content regarding financial planning, software engineering, or cloud infrastructure does not constitute formal financial, investment, or legal advice. Readers should exercise their own due diligence before executing financial or technical decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. User Contributions & Comments</h2>
            <p>
              Users may post feedback and inquiries where applicable. By submitting content to our platform, you grant us an irrevocable, non-exclusive license to publish, display, and review such remarks. Content containing defamatory, obscene, or unlawful material will be removed immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of international e-commerce and relevant jurisdictional treaties, without regard to conflicts of law principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
