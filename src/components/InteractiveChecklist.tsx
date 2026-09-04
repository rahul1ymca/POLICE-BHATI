import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  FileBadge,
  Printer,
  Sparkles,
  Info,
  RotateCcw,
} from 'lucide-react';
import { REQUIRED_DOCUMENTS } from '../data/contentData';

export const InteractiveChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(['aadhaar-card', 'passport-photos']);
  const [activeCategory, setActiveCategory] = useState<string>('सभी');

  const categories = ['सभी', 'पहचान', 'निवास', 'चरित्र', 'विधिक'];

  const toggleCheck = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((item) => item !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const filteredDocs =
    activeCategory === 'सभी'
      ? REQUIRED_DOCUMENTS
      : REQUIRED_DOCUMENTS.filter((doc) => doc.category === activeCategory);

  const completedPercentage = Math.round((checkedIds.length / REQUIRED_DOCUMENTS.length) * 100);

  const handleReset = () => {
    setCheckedIds([]);
  };

  const handleSelectAll = () => {
    setCheckedIds(REQUIRED_DOCUMENTS.map((d) => d.id));
  };

  return (
    <section id="documents-checklist" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-1 rounded-md">
          दस्तावेज तैयारी
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          6. आवश्यक दस्तावेजों की संपूर्ण चेकलिस्ट (इंटरएक्टिव ट्रैकर)
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          पुलिस वेरिफिकेशन के समय किसी भी दस्तावेज की कमी के कारण फाइल लटक सकती है। नीचे दी गई चेकलिस्ट में अपने तैयार दस्तावेजों पर टिक लगाएं और देखें कि आपकी तैयारी कितने प्रतिशत पूरी है:
        </p>
      </div>

      {/* Progress & Quick Control Bar */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                आपकी दस्तावेज तैयारी प्रगति:
              </span>
              <span className="text-sm font-extrabold text-blue-700 dark:text-blue-400">
                {checkedIds.length} / {REQUIRED_DOCUMENTS.length} दस्तावेज ({completedPercentage}%)
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {completedPercentage === 100
                ? 'अद्भुत! आपके सभी आवश्यक दस्तावेज पूरी तरह तैयार हैं।'
                : 'कृपया शेष दस्तावेजों को भी समय रहते तैयार कर लें।'}
            </p>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              type="button"
              onClick={() => {
                const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
                if (!isInIframe) {
                  window.print();
                } else {
                  const url = new URL(window.location.href);
                  url.searchParams.set('action', 'print');
                  window.open(url.toString(), '_blank', 'noopener,noreferrer');
                }
              }}
              className="px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 rounded-lg border border-emerald-200 dark:border-emerald-800 flex items-center gap-1 cursor-pointer"
              title="चेकलिस्ट व गाइड प्रिंट करें या PDF में सेव करें"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>प्रिंट / PDF</span>
            </button>
            <button
              type="button"
              onClick={handleSelectAll}
              className="px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 rounded-lg border border-blue-200 dark:border-blue-800 cursor-pointer"
            >
              सभी चुनें
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-2.5 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>रीसेट</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-600 to-emerald-500 transition-all duration-300"
            style={{ width: `${completedPercentage}%` }}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-thin no-print">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
            }`}
          >
            {cat} {cat === 'सभी' ? `(${REQUIRED_DOCUMENTS.length})` : ''}
          </button>
        ))}
      </div>

      {/* Checklist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDocs.map((doc) => {
          const isChecked = checkedIds.includes(doc.id);
          return (
            <div
              key={doc.id}
              onClick={() => toggleCheck(doc.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                isChecked
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-500 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleCheck(doc.id);
                }
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </span>
                    <h3
                      className={`text-sm font-bold ${
                        isChecked
                          ? 'text-emerald-950 dark:text-emerald-200'
                          : 'text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      {doc.title}
                    </h3>
                  </div>

                  <span
                    className={`text-xs px-2 py-0.5 rounded-md font-semibold shrink-0 ${
                      doc.isRequired
                        ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {doc.isRequired ? 'अनिवार्य' : 'यदि लागू हो'}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 pl-7 leading-relaxed mb-2">
                  {doc.description}
                </p>

                <div className="pl-7 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium mb-2">
                  <FileBadge className="w-3.5 h-3.5 text-slate-400" />
                  <span>आवश्यक संख्या: {doc.copiesRequired}</span>
                </div>
              </div>

              <div className="pl-7 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-xs text-amber-800 dark:text-amber-300/90 flex items-start gap-1 font-medium">
                  <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>सुझाव: {doc.tip}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
