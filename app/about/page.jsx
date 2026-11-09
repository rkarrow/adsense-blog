export const metadata = {
  title: 'About Us & Editorial Standards | TechPulse Global',
  description: 'Learn about TechPulse Global, our technology contributors, research methodology, and editorial ethics.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Alex Vance',
      role: 'Lead AI & Machine Learning Architect',
      bio: 'Former senior ML researcher with over a decade of experience designing enterprise agentic systems and neural transformer architectures.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Marcus Sterling',
      role: 'Principal Cloud & FinOps Lead',
      bio: 'Specialist in hyper-scale cloud infrastructure, Kubernetes orchestration, and multi-cloud financial efficiency across Fortune 500 environments.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Sophia Bennett',
      role: 'Head of Financial Analysis',
      bio: 'Chartered financial analyst specializing in capital market liquidity, index fund compounding models, and algorithmic portfolio balancing.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-wider font-bold text-blue-600 block mb-3">Our Mission</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          Empowering Builders with Uncompromising Technical Clarity
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          TechPulse Global was established to bridge the divide between theoretical computational advances and practical enterprise implementation.
        </p>
      </div>

      {/* Editorial Principles */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Editorial Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Empirical Verification</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We test frameworks, benchmarking figures, and software configurations in real production sandboxes before publishing conclusions.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Editorial Independence</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Our analysis remains completely unbiased. Advertising partnerships and affiliate relationships never dictate our technical verdicts.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Continuous Accuracy</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Technology evolves rapidly. Our editorial team routinely revisits and updates established guides to ensure currency and relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Team Contributors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Editorial Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center flex flex-col items-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-50"
              />
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-xs font-semibold text-blue-600 mb-3">{member.role}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Prompt */}
      <div className="text-center bg-blue-600 text-white rounded-3xl p-8 sm:p-10 shadow-lg">
        <h3 className="text-2xl font-bold mb-3">Have an Inquiry or Press Pitch?</h3>
        <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
          We welcome pitches from engineering leaders, enterprise software developers, and research institutions.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-50 transition-colors shadow-md"
        >
          Contact Our Newsroom
        </a>
      </div>
    </div>
  );
}
