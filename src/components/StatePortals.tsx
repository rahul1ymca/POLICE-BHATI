import React from 'react';
import { ExternalLink, Smartphone, Clock, Shield, Search } from 'lucide-react';
import { STATE_PORTALS } from '../data/contentData';

export const StatePortals: React.FC = () => {
  return (
    <section id="online-portals" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-950/70 px-2.5 py-1 rounded-md">
          डिजिटल गवर्नेंस
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          8. राज्यवार ऑनलाइन पुलिस वेरिफिकेशन पोर्टल एवं CCTNS प्रणाली
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          भारत सरकार के गृह मंत्रालय द्वारा संचालित CCTNS (Crime and Criminal Tracking Network & Systems) के माध्यम से देश भर के पुलिस थानों को एकीकृत किया गया है। कई राज्यों में अब उम्मीदवार अपने पुलिस वेरिफिकेशन का स्टेटस ऑनलाइन भी ट्रैक कर सकते हैं:
        </p>
      </div>

      {/* Online Tracking 3-Step Guide */}
      <div className="p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/60 mb-8">
        <h3 className="text-base font-bold text-teal-950 dark:text-teal-200 mb-3 flex items-center gap-2">
          <Search className="w-5 h-5 text-teal-700 dark:text-teal-400" />
          <span>PVR आवेदन स्थिति (Status) ऑनलाइन कैसे ट्रैक करें?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-teal-100 dark:border-teal-900">
            <span className="font-bold text-teal-800 dark:text-teal-300 block mb-1">
              1. टोकन/आवेदन संख्या प्राप्त करें
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              जब विभाग आपके जिले के एसपी कार्यालय को डाक भेजता है, तो वहां एक डायरी नंबर (Diary No.) या CCTNS टोकन दर्ज होता है।
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-teal-100 dark:border-teal-900">
            <span className="font-bold text-teal-800 dark:text-teal-300 block mb-1">
              2. राज्य पुलिस पोर्टल पर जाएं
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              नीचे दी गई सूची में से अपने राज्य के आधिकारिक पोर्टल या मोबाइल ऐप (जैसे UPCOP) पर 'Track Verification' विकल्प चुनें।
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-teal-100 dark:border-teal-900">
            <span className="font-bold text-teal-800 dark:text-teal-300 block mb-1">
              3. बीट अधिकारी की स्थिति देखें
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              स्क्रीन पर प्रदर्शित होगा कि फाइल वर्तमान में एसपी ऑफिस में है, थाने में लंबित है, या रिपोर्ट डिस्पैच हो चुकी है।
            </p>
          </div>
        </div>
      </div>

      {/* State Portals Grid with SEO Compliant External Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STATE_PORTALS.map((portal, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {portal.state}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{portal.avgDays}</span>
                </span>
              </div>

              <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mb-2">
                {portal.portalName}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                <strong>सत्यापन सेवा:</strong> {portal.pvrService}
              </p>

              {portal.mobileApp && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg">
                  <Smartphone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="truncate">{portal.mobileApp}</span>
                </div>
              )}
            </div>

            {/* SEO-Optimized Link with descriptive anchor text & title */}
            <a
              href={portal.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 border border-blue-200 dark:border-blue-900 transition-colors"
              title={`${portal.state} का आधिकारिक पुलिस चरित्र सत्यापन पोर्टल खोलें`}
              aria-label={`${portal.state} आधिकारिक पोर्टल लिंक (नई विंडो में खुलेगा)`}
            >
              <span>{portal.state.split(' ')[0]} पुलिस पोर्टल पर जाएं</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
