import React from 'react';
import {
  Zap,
  Clock,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Scale,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const QuickSummary: React.FC = () => {
  return (
    <div
      id="quick-summary-30sec"
      className="my-6 rounded-2xl border-2 border-blue-200 dark:border-blue-900 bg-linear-to-br from-blue-50/90 via-indigo-50/40 to-white dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900 p-5 sm:p-6 shadow-sm transition-all"
      aria-label="30-सेकंड में समझें: पुलिस वेरिफिकेशन त्वरित सारांश"
    >
      {/* Header Badge & Title */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-blue-200/80 dark:border-blue-900/60 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Zap className="w-5 h-5 text-amber-300" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
              त्वरित अवलोकन • Quick Overview
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 m-0">
              ⚡ 30-सेकंड में समझें: पुलिस वेरिफिकेशन के सबसे महत्वपूर्ण बिंदु
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-xs font-semibold">
          <Clock className="w-3.5 h-3.5" />
          <span>पठन समय: मात्र 30 सेकंड</span>
        </div>
      </div>

      {/* 4 Focused Core Takeaway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. प्रक्रिया (Verification Process) */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 m-0">
              1. वेरिफिकेशन की 5-चरणीय प्रक्रिया
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 list-none m-0">
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">①</span>
              <span><strong>अटेस्टेशन फॉर्म:</strong> विभाग द्वारा भेजे गए फॉर्म को भरकर जमा करना।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">②</span>
              <span><strong>एसपी कार्यालय:</strong> गृह जनपद के पुलिस अधीक्षक कार्यालय में फाइल प्रेषण।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">③</span>
              <span><strong>थाना स्तर भौतिक जांच:</strong> बीट सिपाही द्वारा निवास व 2 पड़ोसियों के बयान।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">④</span>
              <span><strong>CCTNS डेटाबेस जांच:</strong> अखिल भारतीय स्तर पर आपराधिक रिकॉर्ड का डिजिटल मिलान।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">⑤</span>
              <span><strong>अंतिम क्लीयरेंस:</strong> एसपी दफ्तर से विभाग को स्पष्ट PVR रिपोर्ट (समय: 15-30 दिन)।</span>
            </li>
          </ul>
        </div>

        {/* 2. जरूरी दस्तावेज (Essential Documents) */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
              <FileCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 m-0">
              2. अनिवार्य दस्तावेज चेकलिस्ट
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 list-none m-0">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>पहचान व जन्मतिथि:</strong> आधार कार्ड, पैन कार्ड और 10वीं की मूल अंकतालिका।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>निवास प्रमाण:</strong> मूल निवास प्रमाण पत्र (Domicile/PRC) या बिजली/राशन बिल।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>चरित्र प्रमाण पत्र:</strong> 2 राजपत्रित अधिकारियों (Gazetted Officers) द्वारा हस्ताक्षरित।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>गवाहों के दस्तावेज:</strong> 2 स्थानीय पड़ोसियों के आधार कार्ड व संपर्क नंबर।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>फोटोग्राफ:</strong> 4-6 हालिया पासपोर्ट साइज रंगीन फोटो।</span>
            </li>
          </ul>
        </div>

        {/* 3. अटेस्टेशन फॉर्म कॉलम 12 व कानूनी नियम */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 m-0">
              3. अटेस्टेशन फॉर्म (कॉलम 12) और FIR का नियम
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 list-none m-0">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">⚠️</span>
              <span><strong>सत्यता सर्वोपरि:</strong> पूर्व में हुई किसी भी FIR, शांति भंग (107/116), या चालान की जानकारी कभी न छिपाएं।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">⚖️</span>
              <span><strong>सुप्रीम कोर्ट (अवतार सिंह 2016):</strong> यदि आप कोर्ट से बरी (Acquitted) हो चुके हैं या मामला मामूली था, तो नियुक्ति नहीं रोकी जा सकती।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-rose-600 dark:text-rose-400 font-bold shrink-0">❌</span>
              <span><strong>तथ्य छिपाना (Suppression):</strong> कोर्ट केस से ज्यादा नुकसान सच छिपाने पर होता है, जिससे तत्काल सेवा समाप्ति हो सकती है।</span>
            </li>
          </ul>
        </div>

        {/* 4. त्वरित निवारण व सावधानियां */}
        <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 m-0">
              4. समय पर क्लीयरेंस के लिए 3 जरूरी सुझाव
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-1 list-none m-0">
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
              <span><strong>पड़ोसियों को पूर्व सूचना:</strong> घर के सदस्यों और पड़ोसियों को पहले से बता कर रखें कि पुलिस वेरिफिकेशन हेतु आ सकती है।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
              <span><strong>विलंब होने पर:</strong> 25 दिन से अधिक देरी होने पर एसपी कार्यालय की जनसुनवाई में डायरी नंबर के साथ आवेदन दें या RTI लगाएं।</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">✓</span>
              <span><strong>रिश्वत बिल्कुल न दें:</strong> अवैध मांग होने पर भ्रष्टाचार निरोधक हेल्पलाइन <strong>1064</strong> पर शिकायत दर्ज कराएं।</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Jump to Full Detailed Sections */}
      <div className="mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-900/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 dark:text-slate-400">
        <span>विस्तृत जानकारी के लिए नीचे दिए गए संबंधित अध्यायों पर सीधे जाएं:</span>
        <div className="flex items-center gap-2 font-semibold">
          <a
            href="#step-by-step"
            className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
          >
            <span>5-चरण प्रक्रिया</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="#documents-checklist"
            className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
          >
            <span>दस्तावेज चेकलिस्ट</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <span>•</span>
          <a
            href="#attestation-form"
            className="text-blue-700 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
          >
            <span>कॉलम 12 नियम</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
