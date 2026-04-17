import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { landingPageData, stepsData } from "../data/content";
import { ArrowRight, Globe, FileText, TrendingUp, ExternalLink, HelpCircle, Target, Rocket, CheckCircle2 } from "lucide-react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    const match = value.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const target = parseFloat(numStr);
    const isFloat = numStr.includes('.');
    
    let startTimestamp: number;
    const duration = 2000;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * target;
      
      if (isFloat) {
        setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

interface LandingPageProps {
  onStart: () => void;
  onIntro: () => void;
}

export default function LandingPage({ onStart, onIntro }: LandingPageProps) {
  const icons = [Globe, FileText, TrendingUp];

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 md:py-32 flex flex-col items-center text-center"
      >
        <div className="border border-slate-200 rounded-full px-5 py-2 mb-8">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Operational Manual for National Governments
          </span>
        </div>
        
        <h1 className="font-heading text-6xl md:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-8">
          <span className="text-[#111111]">CHAMP Toolkit: Financing</span><br/>
          <span className="text-[#9CA3AF]">Climate Action</span>
        </h1>
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Aligning national climate planning with local financial delivery through <strong className="text-ink font-semibold">Multilevel Governance (MLG)</strong>.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed">
            Explore a <strong className="text-slate-700">5-step journey to Multilevel Governance</strong>. This stepwise path is sequenced to cover the entire spectrum of actions needed to operationalize MLG, yet remains flexible—allowing countries to enter at different starting points based on their current readiness and national context.
          </p>
        </div>
        
        {/* Flowing MLG Journey Graphic */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2 lg:gap-4 w-full max-w-5xl mx-auto mb-16">
          {[
            { num: "1", label: "Assess Environments", goal: stepsData[0].goal },
            { num: "2", label: "Institutionalize MLG", goal: stepsData[1].goal },
            { num: "3", label: "Build Pipelines", goal: stepsData[2].goal },
            { num: "4", label: "Mobilize Finance", goal: stepsData[3].goal },
            { num: "5", label: "Scale & Enhance", goal: stepsData[4].goal }
          ].map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-2 lg:gap-4 group relative">
              <div className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold">{step.num}</span>
                <span className="text-sm font-bold text-slate-700 whitespace-nowrap">{step.label}</span>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-ink text-white text-xs p-3 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 shadow-xl pointer-events-none text-center leading-relaxed">
                {step.goal}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink"></div>
              </div>

              {i < 4 && (
                <ArrowRight size={18} className="text-slate-300 hidden md:block shrink-0" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            Start the 5-Step Journey
            <ArrowRight size={20} />
          </motion.button>
          
          <button
            onClick={onIntro}
            className="text-slate-500 hover:text-ink font-medium text-sm transition-colors underline underline-offset-4"
          >
            Or read the Introduction first
          </button>
        </div>
      </motion.div>

      {/* Interactive Data Dashboard */}
      <div className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landingPageData.dashboard.map((item, index) => {
            const Icon = icons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-ink" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{item.title}</h3>
                  <div className="font-heading text-5xl font-semibold text-ink mb-4 tracking-tight">
                    <AnimatedCounter value={item.value} />
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Toolkit Context Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink tracking-tight">The Strategic Context</h2>
          <p className="text-slate-500 mt-4 font-medium max-w-2xl mx-auto">Understanding the rationale, outcomes, and impact of the CHAMP Multilevel Governance Toolkit.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingPageData.toolkitContext.map((ctx, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="h-20 flex items-end mb-6 pb-4 border-b border-slate-200">
                <h3 className="font-heading text-xl font-bold text-ink">{ctx.question}</h3>
              </div>
              <ul className="space-y-4">
                {ctx.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-3 text-slate-600 font-medium leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* COP 30 Context */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#0B0F14] rounded-[2.5rem] p-10 md:p-16 mb-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl"
      >
        {/* Subtle background gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-900/20 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-900/20 blur-3xl rounded-full"></div>
        </div>

        <div className="relative z-10 md:w-1/2">
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5">
            <Globe size={14} className="text-white/60" />
            <span className="text-xs font-bold tracking-widest text-white/60 uppercase">
              COP 30 Belém Context
            </span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-white">Global Momentum</span><br/>
            <span className="text-[#6B7280]">Toward COP 30</span>
          </h2>
          
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-10 max-w-lg font-medium">
            {landingPageData.cop30Context}
          </p>
          
          <button className="bg-white text-ink px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-slate-200 transition-colors">
            Learn more about COP 30 <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end">
          <motion.div 
            initial={{ rotate: -2, y: 20 }}
            whileInView={{ rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-72 h-72 md:w-96 md:h-96 bg-[#1A1D24] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80" 
              alt="City Infrastructure" 
              className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/20 to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>


    </div>
  );
}
