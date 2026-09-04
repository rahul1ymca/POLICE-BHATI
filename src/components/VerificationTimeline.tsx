import React, { useState } from 'react';
import {
  FileCheck2,
  Building2,
  MapPin,
  Database,
  CheckCircle2,
  Clock,
  HelpCircle,
  Lightbulb,
  ShieldAlert,
} from 'lucide-react';
import { VERIFICATION_STEPS } from '../data/contentData';

export const VerificationTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FileCheck2 className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case 2:
        return <Building2 className="w-5 h-5 text-indigo-600" aria-hidden="true" />;
      case 3:
        return <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />;
      case 4:
        return <Database className="w-5 h-5 text-purple-600" aria-hidden="true" />;
      case 5:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />;
      default:
        return <FileCheck2 className="w-5 h-5" aria-hidden="true" />;
    }
  };

  return (
    <section id="step-by-step" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/70 px-2.5 py-1 rounded-md">
          विस्तृत कार्यप्रणाली (Step-by-Step)
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          3. चरण-दर-चरण संपूर्ण पुलिस वेरिफिकेशन प्रक्रिया (5 मुख्य स्टेज)
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          सरकारी सेवा में शामिल होने के लिए पुलिस वेरिफिकेशन एक बहु-स्तरीय (Multi-tier) प्रक्रिया है। नीचे दिए गए प्रत्येक चरण पर क्लिक करके जानें कि संबंधित विभाग में आपकी फाइल कैसे आगे बढ़ती है और आपको क्या सावधानियां बरतनी हैं:
        </p>
      </div>

      {/* Stage Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin">
        {VERIFICATION_STEPS.map((step) => {
          const isCurrent = selectedStep === step.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setSelectedStep(step.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border ${
                isCurrent
                  ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
              aria-pressed={isCurrent}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  isCurrent ? 'bg-white text-blue-700 font-bold' : 'bg-slate-200 dark:bg-slate-700 text-slate-700'
                }`}
              >
                {step.id}
              </span>
              <span>{step.stageHindi}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Card for Selected Step */}
      {(() => {
        const step = VERIFICATION_STEPS.find((s) => s.id === selectedStep) || VERIFICATION_STEPS[0];
        return (
          <div
            id={`verification-stage-${step.id}-details`}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md transition-all"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  {getStepIcon(step.id)}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                    {step.stageHindi}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-800">
                  <Clock className="w-3.5 h-3.5" />
                  <span>अनुमानित समय: {step.timeTaken}</span>
                </span>
              </div>
            </div>

            {/* Department tag */}
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span>सक्षम प्राधिकारी: {step.department}</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {step.description}
            </p>

            {/* Key Action Points */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                इस चरण के मुख्य विधिक व प्रशासनिक बिंदु:
              </h4>
              <ul className="space-y-2">
                {step.keyPoints.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two Column Grid: Police Role & Candidate Advice */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h5 className="text-xs font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5 mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  <span>पुलिस/प्रशासनिक अधिकारी की भूमिका:</span>
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.policeOfficerRole}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
                <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  <span>अभ्यर्थी के लिए विशेष सलाह (Candidate Tip):</span>
                </h5>
                <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200/90 leading-relaxed">
                  {step.candidateAdvice}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
