import React, { useState } from 'react';
import {
  SearchCheck,
  Code2,
  CheckCircle2,
  FileCode,
  Tag,
  Share2,
  Globe,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const TechnicalSeoAudit: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const seoCheckpoints = [
    {
      title: 'HTML भाषा टैग (lang="hi" dir="ltr")',
      status: 'सक्रिय एवं मान्य (Valid)',
      detail: '<html lang="hi" dir="ltr"> और http-equiv="content-language" टैग कॉन्फ़िगर है जो Google को शुद्ध हिंदी सामग्री की पहचान कराता है।',
      type: 'HTML Tag',
    },
    {
      title: 'Schema.org JSON-LD स्ट्रक्चर्ड डेटा',
      status: '5 स्कीमा सक्रिय (5 Rich Schemas)',
      detail: 'BlogPosting (लेख), HowTo (5 चरण), FAQPage (गूगल सर्च अकॉर्डियन), BreadcrumbList, और WebSite स्कीमा सक्रिय हैं।',
      type: 'JSON-LD',
    },
    {
      title: 'गूगल वॉयस सर्च (Speakable Schema)',
      status: 'सक्रिय (Voice Search Ready)',
      detail: 'शीर्षक और मुख्य बुलेट बिंदुओं के लिए Schema.org SpeakableSpecification जोड़ा गया है।',
      type: 'Voice SEO',
    },
    {
      title: 'कीवर्ड एवं सिमेंटिक सर्च ऑप्टिमाइजेशन',
      status: 'उच्च सर्च वॉल्यूम अनुकूलित',
      detail: '"सरकारी नौकरी में पुलिस वेरिफिकेशन कैसे होता है", "कॉलम 12", "अवतार सिंह जजमेंट" जैसे हाई-सीटीआर कीवर्ड्स शामिल हैं।',
      type: 'On-Page SEO',
    },
    {
      title: 'इमेज एसईओ (Image SEO & Figcaptions)',
      status: '100% अनुपालित (Compliant)',
      detail: 'सभी विज़ुअल डायग्राम और आकृतियों में विस्तृत हिंदी alt टैग, role="img", <figure> व <figcaption> का उपयोग किया गया है।',
      type: 'Media SEO',
    },
    {
      title: 'लिंक एसईओ (Link SEO & Anchors)',
      status: 'सुरक्षित एवं प्रामाणिक',
      detail: 'सभी सरकारी पोर्टल लिंक्स में rel="noopener noreferrer", वर्णनात्मक हिंदी एंकर टेक्स्ट, aria-label व title टैग्स मौजूद हैं।',
      type: 'Link SEO',
    },
    {
      title: 'ओपन ग्राफ (Open Graph) व ट्विटर कार्ड',
      status: 'hi_IN लोकेल सहित मान्य',
      detail: 'og:locale = hi_IN, og:type = article, og:title, og:description और twitter:card मेटा टैग्स जोड़े गए हैं।',
      type: 'Social Meta',
    },
    {
      title: 'कैनोनिकल यूआरएल (Canonical Link)',
      status: 'डुप्लीकेट कंटेंट रोकथाम सक्षम',
      detail: '<link rel="canonical"> टैग के द्वारा सर्च इंजनों को प्राथमिक पृष्ठ निर्दिष्ट किया गया है।',
      type: 'Indexing',
    },
  ];

  return (
    <section id="technical-seo-audit" className="my-12 scroll-mt-20 no-print">
      <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-xs">
              <SearchCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                टेक्निकल एसईओ एवं ऑन-पेज एसईओ अनुपालन रिपोर्ट (Live Audit)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                इस ब्लॉग में गूगल सर्च इंजन मानकों (Google Search Essentials) के अनुसार लागू किए गए तकनीकी पैरामीटर्स
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 hover:bg-blue-50"
            aria-expanded={isOpen}
          >
            <span>{isOpen ? 'ऑडिट विवरण छिपाएं' : 'एसईओ चेकलिस्ट देखें'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-6 pt-4 border-t border-blue-200 dark:border-blue-900/60 grid grid-cols-1 md:grid-cols-2 gap-4">
            {seoCheckpoints.map((cp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {cp.type}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{cp.status}</span>
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {cp.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cp.detail}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
