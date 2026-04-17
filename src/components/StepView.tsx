import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, CheckCircle2, ExternalLink, ShieldCheck, MapPin, Building2, Globe2, X, FileText, ArrowRight, Tag, AlertCircle, FileSearch, Banknote, Map, Landmark, Database, Users, BookOpen } from "lucide-react";
import { identifyStakeholders, generateContextualizedPlan, AiContextData } from "../services/geminiService";

const COUNTRIES = [
  "Brazil", "United States", "India", "Germany", "South Africa",
  "Kenya", "Indonesia", "Mexico", "Colombia", "United Kingdom",
  "France", "Japan", "Australia", "Canada", "Nigeria", "Egypt"
].sort();

const PARTNER_TYPES = [
  "Multilateral Development Bank (MDB)",
  "Non-Governmental Organization (NGO)",
  "City Network",
  "Bilateral Donor",
  "Philanthropy",
  "Private Investor",
  "UN Agency"
];

function ContextModal({ item, onClose }: { item: any, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-ink pr-8 leading-tight">{item.title}</h3>
          <button onClick={onClose} className="absolute top-6 right-6 md:top-8 md:right-8 p-2 bg-white border border-slate-200 hover:bg-slate-100 rounded-full text-slate-500 transition-colors shadow-sm">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">{item.intro}</p>
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              {item.fullText.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {item.reports && item.reports.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                <FileText size={18} className="text-blue-600" />
                Key Partner Reports
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.reports.map((report: any, idx: number) => (
                  <a key={idx} href={report.link} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs font-bold text-blue-600 mb-2 block uppercase tracking-wider">{report.partner}</span>
                      <h5 className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors leading-snug">{report.title}</h5>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                      Read Report <ArrowRight size={16} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function UnifiedContextCard({ data }: { data: any }) {
  const [expandedBarrier, setExpandedBarrier] = useState<number | null>(null);
  const [expandedOpportunity, setExpandedOpportunity] = useState<number | null>(null);

  const barrierIcons = [AlertCircle, FileSearch, Banknote];
  const opportunityIcons = [Map, Landmark, Database, Users];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-12">
      {/* What is this step */}
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <h2 className="font-heading text-2xl font-bold text-ink mb-4">What is this step</h2>
        <p className="text-slate-700 leading-relaxed text-lg">{data.whatIsThisStep}</p>
      </div>

      {/* Barriers & Opportunities */ }
      <div className="flex flex-col divide-y divide-slate-100">
        
        {/* Barriers */}
        <div className="p-8 pb-10">
          <h2 className="font-heading text-xl font-bold text-ink mb-6">What barriers this step addresses</h2>
          <div className="space-y-4">
            {data.barriers.map((item: any, idx: number) => {
              const Icon = barrierIcons[idx % barrierIcons.length];
              return (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
                <button
                  className="w-full p-4 md:px-6 flex items-center justify-between text-left bg-white focus:outline-none focus:bg-slate-50 transition-colors"
                  onClick={() => setExpandedBarrier(expandedBarrier === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4 pr-6">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-red-50 text-red-600 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-slate-800 m-0 leading-snug">{item.title}</h3>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${expandedBarrier === idx ? 'rotate-180 bg-slate-200' : ''}`}>
                    <ChevronDown size={18} className="text-slate-500" />
                  </div>
                </button>
                <AnimatePresence>
                  {expandedBarrier === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:px-6 pt-0 border-t border-slate-100 bg-slate-50">
                        <p className="text-slate-800 font-bold mb-4 leading-relaxed mt-4 text-sm md:text-base">{item.shortText}</p>
                        <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                          {item.expandedText.map((p: string, pIdx: number) => (
                             <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )})}
          </div>
        </div>

        {/* Opportunities */}
        <div className="p-8 pt-10 bg-slate-50/30">
          <h2 className="font-heading text-xl font-bold text-ink mb-6">What opportunities this step presents</h2>
          <div className="space-y-4">
            {data.opportunities.map((item: any, idx: number) => {
              const Icon = opportunityIcons[idx % opportunityIcons.length];
              return (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors bg-white">
                <button
                  className="w-full p-4 md:px-6 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 transition-colors"
                  onClick={() => setExpandedOpportunity(expandedOpportunity === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4 pr-6">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-slate-800 m-0 leading-snug">{item.title}</h3>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${expandedOpportunity === idx ? 'rotate-180 bg-slate-200' : ''}`}>
                    <ChevronDown size={18} className="text-slate-500" />
                  </div>
                </button>
                <AnimatePresence>
                  {expandedOpportunity === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:px-6 pt-0 border-t border-slate-100 bg-emerald-50/30">
                        <p className="text-emerald-900 font-bold mb-4 leading-relaxed mt-4 text-sm md:text-base">{item.shortText}</p>
                        <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                          {item.expandedText.map((p: string, pIdx: number) => (
                             <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )})}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="p-8">
        <h2 className="font-heading text-xl font-bold text-ink mb-4">Key Resources</h2>
        <div className="flex flex-wrap gap-3">
          {data.resources.map((res: any, idx: number) => (
            <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="group px-4 py-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText size={16} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 mb-0.5 block uppercase tracking-wider">{res.name}</span>
                <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors line-clamp-1">{res.title}</h5>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContextCard({ item }: { item: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col h-full hover:shadow-md transition-shadow">
        <h3 className="font-heading font-bold text-ink text-xl mb-4 leading-snug">{item.title}</h3>
        <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-1">{item.intro}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200 hover:border-slate-300"
        >
          Know more <ArrowRight size={16} />
        </button>
      </div>
      <AnimatePresence>
        {isModalOpen && <ContextModal item={item} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function RecommendationCard({ rec, stepTitle }: { rec: any; stepTitle: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [form, setForm] = useState<AiContextData>({ country: '', city: '', partnerType: '' });
  
  const [stakeholders, setStakeholders] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [plan, setPlan] = useState<string | null>(null);
  const [phase, setPhase] = useState<'setup' | 'stakeholders' | 'plan'>('setup');

  const isNational = rec.actor === "National Governments";
  const isCity = rec.actor === "Cities & Subnationals";
  const isPartner = rec.actor === "International Partners";

  const isFormValid = () => {
    if (isNational) return form.country!.trim() !== '';
    if (isCity) return form.country!.trim() !== '' && form.city!.trim() !== '';
    if (isPartner) return form.partnerType!.trim() !== '';
    return false;
  };

  const handleIdentifyStakeholders = async () => {
    if (!isFormValid()) return;
    setIsIdentifying(true);
    setError(null);
    try {
      const result = await identifyStakeholders(rec.points, rec.actor, form);
      setStakeholders(result);
      setPhase('stakeholders');
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsIdentifying(false);
    }
  };

  const handleGeneratePlan = async () => {
    if (stakeholders.length === 0) return;
    setIsGenerating(true);
    setError(null);
    try {
      const result = await generateContextualizedPlan(rec.points, rec.actor, form, stakeholders);
      setPlan(result);
      setPhase('plan');
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsGenerating(false);
    }
  };

  const removeStakeholder = (indexToRemove: number) => {
    setStakeholders(stakeholders.filter((_, idx) => idx !== indexToRemove));
  };

  const addStakeholder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setStakeholders([...stakeholders, newTag.trim()]);
      setNewTag('');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-3">
          {isNational && <ShieldCheck size={20} className="text-blue-500" />}
          {isCity && <MapPin size={20} className="text-emerald-500" />}
          {isPartner && <Globe2 size={20} className="text-amber-500" />}
          <span className="font-bold text-ink text-lg">{rec.actor}</span>
        </div>
        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-slate-100' : ''}`}>
          <ChevronDown size={18} className="text-slate-500" />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Recommendations</h4>
              <ul className="space-y-3">
                {rec.points.map((p: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-slate-700 font-medium">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Contextualization Form */}
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-ink mb-6 flex items-center gap-2">
                <Sparkles size={16} className="text-blue-500"/> 
                Contextualize with AI
              </h4>
              
              {phase === 'setup' && (
                <div className="space-y-5">
                  {isNational && (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Country <span className="text-red-500">*</span></label>
                      <select value={form.country} onChange={e => setForm({...form, country: e.target.value})} className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium">
                        <option value="">Select Country...</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  )}
                  {isCity && (
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Country <span className="text-red-500">*</span></label>
                        <select value={form.country} onChange={e => setForm({...form, country: e.target.value})} className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium">
                          <option value="">Select Country...</option>
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div className="w-full md:w-1/2">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Enter City <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="e.g. São Paulo" value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium" />
                      </div>
                    </div>
                  )}
                  {isPartner && (
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Partner Type <span className="text-red-500">*</span></label>
                      <select value={form.partnerType} onChange={e => setForm({...form, partnerType: e.target.value})} className="w-full p-3 border border-slate-200 rounded-lg bg-white text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none font-medium">
                        <option value="">Select Partner Type...</option>
                        {PARTNER_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  )}
                  
                  <button 
                    onClick={handleIdentifyStakeholders} 
                    disabled={!isFormValid() || isIdentifying} 
                    className="w-full bg-ink text-white px-6 py-3.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isIdentifying ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Identifying Stakeholders...</>
                    ) : (
                      <><Tag size={16} /> Phase 1: Identify Stakeholders</>
                    )}
                  </button>
                </div>
              )}

              {phase === 'stakeholders' && (
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h5 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Tag size={16} className="text-blue-500" /> Mandatory Institutional Stakeholders
                    </h5>
                    <p className="text-xs text-slate-500 mb-4">Review and edit the stakeholders identified from the report. Add new ones by typing and pressing Enter.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {stakeholders.map((sh, idx) => (
                        <div key={idx} className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-bold">
                          {sh}
                          <button onClick={() => removeStakeholder(idx)} className="hover:bg-blue-200 p-0.5 rounded-full transition-colors">
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <input 
                      type="text" 
                      placeholder="Add stakeholder and press Enter..." 
                      value={newTag} 
                      onChange={e => setNewTag(e.target.value)}
                      onKeyDown={addStakeholder}
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <button 
                    onClick={handleGeneratePlan} 
                    disabled={isGenerating || stakeholders.length === 0} 
                    className="w-full bg-ink text-white px-6 py-3.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Generating Plan...</>
                    ) : (
                      <><Sparkles size={16} /> Phase 2: Generate Contextualized Plan</>
                    )}
                  </button>
                </div>
              )}

              {phase === 'plan' && plan && (
                <div className="mt-2 space-y-4">
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-6">
                    <h5 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-5 flex items-center gap-2">
                      <CheckCircle2 size={16} /> Final Contextualized Plan
                    </h5>
                    <div className="prose prose-sm prose-slate max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
                      {plan.split('\n').map((line, idx) => {
                        const cleanLine = line.replace(/\*\*/g, '').trim();
                        if (cleanLine.startsWith('1. The Core Directive:')) {
                          return <div key={idx} className="mb-4"><strong className="text-ink text-base block mb-1">1. The Core Directive:</strong><p className="text-slate-700">{cleanLine.replace('1. The Core Directive:', '').trim()}</p></div>;
                        }
                        if (cleanLine.startsWith('2. Stakeholder Integration:')) {
                          return <strong key={idx} className="text-ink text-base block mt-6 mb-2">2. Stakeholder Integration:</strong>;
                        }
                        if (cleanLine.startsWith('3. Implementation Pathway:')) {
                          return <strong key={idx} className="text-ink text-base block mt-6 mb-2">3. Implementation Pathway:</strong>;
                        }
                        if (cleanLine.match(/^[-*]\s/)) {
                          return <li key={idx} className="text-slate-700 ml-4 mb-2">{cleanLine.replace(/^[-*]\s/, '')}</li>;
                        }
                        if (cleanLine.match(/^\d+\.\s/) && !cleanLine.startsWith('1.') && !cleanLine.startsWith('2.') && !cleanLine.startsWith('3.')) {
                           return <li key={idx} className="text-slate-700 ml-4 mb-2 list-decimal">{cleanLine.replace(/^\d+\.\s/, '')}</li>;
                        }
                        if (cleanLine) {
                          return <p key={idx} className="text-slate-700 mb-2">{cleanLine}</p>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                  
                  <button onClick={() => {setPhase('setup'); setPlan(null); setStakeholders([]);}} className="text-xs font-bold text-slate-500 hover:text-ink underline underline-offset-2">
                    Start Over
                  </button>
                </div>
              )}

              {/* AI Errors */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default function StepView({ step }: { step: any }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'pathways' | 'recommendations'>('overview');

  // Reset tab when step changes
  useEffect(() => {
    setActiveTab('overview');
  }, [step.id]);

  if (!step) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-12 max-w-4xl mx-auto pb-32"
    >
      <div className="mb-8">
        <span className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2 block">Step {step.id}</span>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight mb-6">
          {step.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed font-medium">
          {step.goal}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit mb-12 shadow-inner overflow-x-auto max-w-full no-scrollbar">
        {[
          { id: 'overview', label: 'Overview & Context', icon: BookOpen },
          { id: 'pathways', label: 'Action Pathways', icon: MapPin },
          { id: 'recommendations', label: 'Recommendations', icon: Sparkles }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'overview' | 'pathways' | 'recommendations')}
            className={`
              flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-white text-ink shadow-sm ring-1 ring-slate-200/50' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }
            `}
          >
            <tab.icon size={18} className={activeTab === tab.id ? 'text-blue-600' : 'text-slate-400'} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Context and Rationale -> Why This Step is Needed */}
              {step.unifiedContext ? (
                <section>
                  <UnifiedContextCard data={step.unifiedContext} />
                </section>
              ) : (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-ink mb-6">Why This Step is Needed</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.context.map((ctx: any, idx: number) => (
                      <ContextCard key={idx} item={ctx} />
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          )}

          {activeTab === 'pathways' && (
            <motion.div
              key="pathways"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Operational Action Pathways -> Action Pathways */}
              <section>
                <div className="space-y-4">
                  {step.pathways.map((pathway: any, index: number) => (
                    <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                      <div className="p-6 md:p-8">
                        <h3 className="font-bold text-xl text-ink mb-4">{pathway.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">What it is</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">{pathway.what}</p>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How it works</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">{pathway.howItWorks}</p>
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-slate-100">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">How to implement</h4>
                          <p className="text-slate-700 leading-relaxed font-medium mb-6">{pathway.howToImplement}</p>
                          
                          <div className="flex flex-col md:flex-row gap-6">
                            {(pathway.framework || (pathway.frameworks && pathway.frameworks.length > 0)) && (
                              <div className="flex-1">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Reference Framework{(pathway.frameworks?.length > 1) ? 's' : ''}</span>
                                <div className="flex flex-wrap gap-2">
                                  {(pathway.frameworks || [pathway.framework]).filter(Boolean).map((fw: any, fwIdx: number) => (
                                    <a 
                                      key={fwIdx}
                                      href={fw.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                                    >
                                      <Building2 size={16} />
                                      {fw.name}
                                      <ExternalLink size={14} className="ml-0.5" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {pathway.partners && pathway.partners.length > 0 && (
                              <div className="flex-1">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Key Partners</span>
                                <div className="flex flex-wrap gap-2">
                                  {pathway.partners.map((p: any) => (
                                    <a 
                                      key={p.name} 
                                      href={p.link} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                                    >
                                      {p.name}
                                      <ExternalLink size={12} className="text-slate-400" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {pathway.caseStudies && pathway.caseStudies.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-slate-100">
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">Implementation Examples</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {pathway.caseStudies.map((cs: any, i: number) => (
                                  <a key={i} href={cs.link} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all flex items-stretch bg-white cursor-pointer h-24">
                                    <div className="w-24 shrink-0 overflow-hidden bg-slate-100 relative">
                                      {cs.image ? (
                                        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                      ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300"><FileText size={24}/></div>
                                      )}
                                    </div>
                                    <div className="p-4 flex-1 flex flex-col justify-center">
                                      <h5 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{cs.title}</h5>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'recommendations' && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Recommendations */}
              <section>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="font-heading text-2xl font-bold text-ink">Recommendations for Multilevel Governance Stakeholders</h2>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={14} /> AI-Powered
                  </div>
                </div>
                <div className="space-y-4">
                  {step.recommendations.map((rec: any, index: number) => (
                    <RecommendationCard key={index} rec={rec} stepTitle={step.title} />
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
