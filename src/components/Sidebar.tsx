import { motion } from "motion/react";
import { LayoutDashboard, Target, Building2, Network, Coins, TrendingUp, User, BookOpen, X } from "lucide-react";

interface SidebarProps {
  currentStep: number | 'intro';
  setCurrentStep: (step: number | 'intro') => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ currentStep, setCurrentStep, isOpen, toggleSidebar }: SidebarProps) {
  const navItems: { id: number | 'intro', label: string, icon: any }[] = [
    { id: 0, label: "Dashboard", icon: LayoutDashboard },
    { id: 'intro', label: "Introduction", icon: BookOpen },
    { id: 1, label: "1. Assess Environments", icon: Target },
    { id: 2, label: "2. Institutionalize MLG", icon: Building2 },
    { id: 3, label: "3. Build Pipelines", icon: Network },
    { id: 4, label: "4. Mobilize Finance", icon: Coins },
    { id: 5, label: "5. Scale Systems", icon: TrendingUp },
  ];

  return (
    <div className={`w-64 h-screen bg-surface border-r border-slate-200 flex flex-col fixed left-0 top-0 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 border-b border-slate-200 flex justify-between items-start">
        <div>
          <h1 className="font-heading font-bold text-xl tracking-tight text-ink">
            CHAMP Toolkit
          </h1>
          <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
            Multilevel Governance
          </p>
        </div>
        <button 
          onClick={toggleSidebar}
          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Close Sidebar"
        >
          <X size={18} />
        </button>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = currentStep === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentStep(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                isActive
                  ? "text-blue-700 bg-pastel-blue/50"
                  : "text-slate-600 hover:bg-slate-100 hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-pastel-blue rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={18} className={isActive ? "text-blue-600" : "text-slate-400"} />
              <span className="text-left">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-ink truncate">Focal Point</p>
            <p className="text-xs text-slate-500 truncate">Ministry of Finance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
