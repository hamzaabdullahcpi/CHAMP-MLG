import { useState } from "react";
import Sidebar from "./components/Sidebar";
import LandingPage from "./components/LandingPage";
import StepView from "./components/StepView";
import IntroPage from "./components/IntroPage";
import { stepsData } from "./data/content";
import { Menu, X } from "lucide-react";

export default function App() {
  const [currentStep, setCurrentStep] = useState<number | 'intro'>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-paper flex">
      <Sidebar currentStep={currentStep} setCurrentStep={setCurrentStep} isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <main className={`flex-1 min-h-screen overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-6 left-6 z-50 p-2.5 bg-white rounded-xl shadow-md border border-slate-200 text-slate-600 hover:text-ink hover:bg-slate-50 transition-colors"
            aria-label="Open Sidebar"
          >
            <Menu size={20} />
          </button>
        )}

        <div className="px-8 md:px-12 lg:px-16 pt-6">
          {currentStep === 0 ? (
            <LandingPage onStart={() => setCurrentStep(1)} onIntro={() => setCurrentStep('intro')} />
          ) : currentStep === 'intro' ? (
            <IntroPage onNext={() => setCurrentStep(1)} />
          ) : (
            <StepView step={stepsData.find(s => s.id === currentStep)} />
          )}
        </div>
      </main>
    </div>
  );
}
