import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { landingPageData } from "../data/content";

interface IntroPageProps {
  onNext: () => void;
}

export default function IntroPage({ onNext }: IntroPageProps) {
  return (
    <div className="max-w-5xl mx-auto pb-20 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
          Introduction
        </h1>
        <p className="text-xl text-slate-500 font-medium">
          The CHAMP Opportunity for Multilevel Governance and Climate Finance
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm mb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
                {landingPageData.champOpportunity.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {landingPageData.champOpportunity.goal}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-ink text-lg">Content Focus:</h3>
              <ul className="space-y-3">
                {landingPageData.champOpportunity.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <a 
                href="https://www.cop28.com/en/cop28-uae-coalition-for-high-ambition-multilevel-partnerships-for-climate-action" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-ink px-6 py-3 rounded-full font-bold transition-all shadow-sm"
              >
                Know more about CHAMP and MLG
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Case Study */}
          <div className="lg:col-span-5">
            {/* Case Study Card */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden h-full flex flex-col border border-slate-200">
              <div className="h-56 w-full bg-slate-200 relative shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80" 
                  alt="Case Study Thumbnail" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider shadow-sm">
                  Case Study
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-white">
                <h3 className="font-heading text-2xl font-bold text-ink mb-4">
                  {landingPageData.champOpportunity.caseStudy.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  {landingPageData.champOpportunity.caseStudy.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Initiatives & Partnerships (Cards) */}
        <div className="pt-10 border-t border-slate-100">
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-ink">
              Global Ecosystem & Key Initiatives
            </h3>
            <p className="text-slate-500 font-medium mt-2">
              Key initiatives supporting CHAMP and synergies with the toolkit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landingPageData.champOpportunity.initiatives.map((init, idx) => (
              <a
                key={idx}
                href={init.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">{init.name}</span>
                  <h4 className="font-bold text-ink text-sm leading-snug group-hover:text-blue-600 transition-colors">{init.title}</h4>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-slate-200 group-hover:border-blue-600">
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
        >
          Continue to Step 1: Assess Environments
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
