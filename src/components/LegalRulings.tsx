import React, { useState } from 'react';
import {
  Scale,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Gavel,
  Shield,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { LEGAL_CASE_STUDIES } from '../data/contentData';

export const LegalRulings: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<number>(0);

  const scenarios = [
    {
      title: 'केस 1: कोर्ट से बाइज्जत बरी (Honorably Acquitted)',
      status: 'सुरक्षित (Safe)',
      statusColor: 'emerald',
      detail:
        'यदि अदालत ने सबूतों के अभाव में या झूठा मामला पाते हुए आपको दोषमुक्त (Acquitted) कर दिया है, तो आप कानूनी रूप से निर्दोष हैं। सुप्रीम कोर्ट के अनुसार बरी हो चुके उम्मीदवार को नियुक्ति से वंचित नहीं किया जा सकता, बशर्ते आपने फॉर्म में उस केस का केस नंबर व बरी होने का जजमेंट सच-सच लगाया हो।',
    },
    {
      title: 'केस 2: आपसी राजीनामा या समझौता (Compromise / Compounded)',
      status: 'समीक्षाधीन (Review Needed)',
      statusColor: 'amber',
      detail:
        'यदि किसी पारिवारिक या पड़ोस के विवाद में धारा 320 CrPC के तहत समझौता हो चुका है और केस बंद हो गया है, तो यह दोषसिद्धि नहीं मानी जाती। नियोक्ता (Employer) अपराध की प्रकृति देखेगा कि क्या इसमें नैतिक अधमता (Moral Turpitude) शामिल थी या केवल सामान्य झगड़ा था।',
    },
    {
      title: 'केस 3: एफआईआर दर्ज है लेकिन ट्रायल अभी चल रहा है (Pending Trial)',
      status: 'संवेदनशील (High Caution)',
      statusColor: 'rose',
      detail:
        'यदि मामला अभी अदालत में विचाराधीन है, तो सामान्यतः अंतिम फैसला आने तक जॉइनिंग रोक (Withheld) दी जाती है या यदि अपराध मामूली है तो कानूनी राय लेकर प्रोविजनल जॉइनिंग दी जा सकती है। यदि आपने इसे छिपाया तो यह अपराध से भी बड़ा उल्लंघन माना जाएगा।',
    },
    {
      title: 'केस 4: कॉलेज छात्र आंदोलन, धरना-प्रदर्शन या पुतला दहन',
      status: 'अनुकूल राहत (Relief Granted)',
      statusColor: 'blue',
      detail:
        'सुप्रीम कोर्ट ने स्पष्ट व्यवस्था दी है कि छात्र जीवन में अधिकारों की मांग या शांतिपूर्ण धरने-प्रदर्शन के दौरान दर्ज सामान्य धाराओं के मामलों को आपराधिक मानसिकता नहीं माना जाना चाहिए। नियोक्ता को ऐसे मामलों में उदार दृष्टिकोण अपनाना चाहिए।',
    },
  ];

  return (
    <section id="fir-legal-rules" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/70 px-2.5 py-1 rounded-md">
          विधिक अधिकार एवं न्यायशास्त्र
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          5. यदि कोई FIR या कोर्ट केस हो तो क्या करें? (सुप्रीम कोर्ट के महत्वपूर्ण दिशानिर्देश)
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          भारत के लाखों युवा इस दुविधा में रहते हैं कि किसी पुरानी पारिवारिक रंजिश या झूठी एफआईआर के कारण क्या उनकी बरसों की मेहनत से मिली सरकारी नौकरी छिन जाएगी? आइए समझें कि देश की शीर्ष अदालत (Supreme Court of India) इस विषय में क्या कानून स्थापित कर चुकी है:
        </p>
      </div>

      {/* 4 Realistic Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {scenarios.map((sc, idx) => {
          const borderClass =
            sc.statusColor === 'emerald'
              ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
              : sc.statusColor === 'amber'
              ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20'
              : sc.statusColor === 'rose'
              ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/20'
              : 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20';

          const badgeClass =
            sc.statusColor === 'emerald'
              ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
              : sc.statusColor === 'amber'
              ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200'
              : sc.statusColor === 'rose'
              ? 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200'
              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';

          return (
            <div
              key={idx}
              className={`p-5 rounded-xl border-l-4 border-t border-r border-b border-slate-200 dark:border-slate-800 shadow-xs ${borderClass}`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {sc.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ${badgeClass}`}>
                  {sc.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {sc.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Supreme Court Landmark Judgments Accordion */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Gavel className="w-5 h-5 text-purple-600" />
          <span>सर्वोच्च न्यायालय के ऐतिहासिक फैसले (Landmark Judgements)</span>
        </h3>

        <div className="space-y-4">
          {LEGAL_CASE_STUDIES.map((c, idx) => {
            const isOpened = expandedCase === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/60 dark:bg-slate-800/40"
              >
                <button
                  type="button"
                  onClick={() => setExpandedCase(isOpened ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-expanded={isOpened}
                >
                  <div className="flex items-center gap-2.5">
                    <Scale className="w-4 h-4 text-purple-600 shrink-0" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                        {c.title}
                      </h4>
                      <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">
                        {c.court}
                      </span>
                    </div>
                  </div>
                  {isOpened ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>

                {isOpened && (
                  <div className="p-4 pt-2 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                      {c.summary}
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800/60">
                      <span className="text-xs font-bold text-purple-900 dark:text-purple-300 block mb-1">
                        इस निर्णय के प्रमुख विधिक नियम:
                      </span>
                      <ul className="space-y-1.5">
                        {c.rules.map((r, rIdx) => (
                          <li
                            key={rIdx}
                            className="text-xs sm:text-sm text-purple-950 dark:text-purple-200 flex items-start gap-2"
                          >
                            <span className="text-purple-500 font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
