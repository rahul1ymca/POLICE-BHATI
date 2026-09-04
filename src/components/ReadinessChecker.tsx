import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { READINESS_QUESTIONS } from '../data/contentData';

export const ReadinessChecker: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let total = 0;
    READINESS_QUESTIONS.forEach((q) => {
      const idx = selectedAnswers[q.id];
      if (idx !== undefined) {
        total += q.options[idx].score;
      }
    });
    return total;
  };

  const totalAnswered = Object.keys(selectedAnswers).length;
  const isComplete = totalAnswered === READINESS_QUESTIONS.length;
  const score = calculateScore();

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResult(false);
  };

  const getAssessment = (sc: number) => {
    if (sc >= 85) {
      return {
        title: 'ग्रीन ज़ोन: उत्कृष्ट तैयारी एवं न्यूनतम विधिक जोखिम',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300',
        textColor: 'text-emerald-700 dark:text-emerald-400',
        summary:
          'बधाई हो! आपकी कागजी तैयारी और विधिक पृष्ठभूमि सरकारी सेवा के पुलिस वेरिफिकेशन के लिए पूरी तरह अनुकूल है। अटेस्टेशन फॉर्म को साफ-साफ भरें और बीट अधिकारी के आने पर शालीनता से दस्तावेज प्रस्तुत करें।',
      };
    } else if (sc >= 65) {
      return {
        title: 'येलो ज़ोन: मध्यम तैयारी, कुछ कागजातों में तुरंत सुधार आवश्यक',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300',
        textColor: 'text-amber-700 dark:text-amber-400',
        summary:
          'आपकी स्थिति अधिकांशतः ठीक है, लेकिन पते के प्रमाण, गवाहों से पूर्व-चर्चा या पुराने किसी विवाद के दस्तावेजीकरण पर तुरंत काम करने की आवश्यकता है। हमारे सुझावों को ध्यानपूर्वक पढ़कर औपचारिकताएं पूरी करें।',
      };
    } else {
      return {
        title: 'रेड ज़ोन: विधिक सतर्कता व पूर्ण सत्य प्रकटीकरण आवश्यक',
        badgeColor: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-300',
        textColor: 'text-rose-700 dark:text-rose-400',
        summary:
          'सावधान! यदि आप किसी पुराने मामले को छिपाने का विचार कर रहे हैं तो यह बहुत खतरनाक हो सकता है। किसी अच्छे सेवा मामलों के वकील से सलाह लें, कोर्ट के आदेश की प्रमाणित प्रतिलिपि निकालें और अटेस्टेशन फॉर्म में 100% सत्य लिखें।',
      };
    }
  };

  const assessment = getAssessment(score);

  return (
    <section id="readiness-checker" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/70 px-2.5 py-1 rounded-md">
          स्व-मूल्यांकन टूल
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          7. इंटरएक्टिव टूल: पुलिस वेरिफिकेशन रेडीनेस चेकर (Self-Assessment)
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          4 सरल प्रश्नों के उत्तर देकर 1 मिनट में अपनी पुलिस वेरिफिकेशन की तैयारी और विधिक जोखिम स्तर की जांच करें:
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Questions Loop */}
        <div className="space-y-6">
          {READINESS_QUESTIONS.map((q, qIndex) => {
            const currentSelected = selectedAnswers[q.id];
            return (
              <div
                key={q.id}
                className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80"
              >
                <div className="flex items-start gap-2.5 mb-3">
                  <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {qIndex + 1}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {q.question}
                  </h3>
                </div>

                <div className="space-y-2 pl-0 sm:pl-8">
                  {q.options.map((opt, optIndex) => {
                    const isSelected = currentSelected === optIndex;
                    return (
                      <button
                        key={optIndex}
                        type="button"
                        onClick={() => handleSelect(q.id, optIndex)}
                        className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 border ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-bold shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Immediate Tip */}
                {currentSelected !== undefined && (
                  <div className="mt-3 sm:ml-8 p-2.5 rounded-md bg-blue-50/70 dark:bg-blue-950/30 text-xs text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800/60 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>विधिक टिप्पणी:</strong> {q.options[currentSelected].tip}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button & Results Card */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              प्रगति: {totalAnswered} / {READINESS_QUESTIONS.length} प्रश्न हल किए
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रीसेट करें</span>
            </button>
            <button
              type="button"
              disabled={!isComplete}
              onClick={() => setShowResult(true)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white transition-all flex items-center gap-2 ${
                isComplete
                  ? 'bg-blue-700 hover:bg-blue-800 shadow-sm cursor-pointer'
                  : 'bg-slate-400 dark:bg-slate-700 cursor-not-allowed'
              }`}
            >
              <span>अंतिम परिणाम देखें</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Score Card Result Modal/Box */}
        {showResult && (
          <div className="mt-6 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-blue-600 dark:border-blue-500 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold border ${assessment.badgeColor}`}
              >
                {assessment.title}
              </span>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">कुल प्राप्तांक</span>
                <span className="text-2xl font-black text-blue-700 dark:text-blue-400">
                  {score} / 100
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium mb-4">
              {assessment.summary}
            </p>

            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
              💡 <strong>नोट:</strong> यह एक सूचनात्मक स्व-मूल्यांकन है। किसी भी वास्तविक कानूनी मामले में हमेशा अपने अधिवक्ता या नियुक्ति विभाग के अधिकृत भर्ती ब्रोशर के निर्देशों का ही पालन करें।
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
