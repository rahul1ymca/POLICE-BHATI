import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ArticleHero } from './components/ArticleHero';
import { QuickSummary } from './components/QuickSummary';
import { TableOfContents } from './components/TableOfContents';
import { VerificationTimeline } from './components/VerificationTimeline';
import { AttestationGuide } from './components/AttestationGuide';
import { LegalRulings } from './components/LegalRulings';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { ReadinessChecker } from './components/ReadinessChecker';
import { StatePortals } from './components/StatePortals';
import { RejectionRemedies } from './components/RejectionRemedies';
import { FaqSection } from './components/FaqSection';
import { TechnicalSeoAudit } from './components/TechnicalSeoAudit';
import { Footer } from './components/Footer';
import {
  Shield,
  FileText,
  AlertCircle,
  CheckCircle,
  Building,
  Users,
  Compass,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export default function App() {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('action') === 'print') {
        const timer = setTimeout(() => {
          window.print();
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.warn('Auto print error:', e);
    }
  }, []);

  const getFontClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      default:
        return 'text-base';
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Site Header */}
      <Header
        fontSize={fontSize}
        setFontSize={setFontSize}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Area with Semantic SEO Microdata */}
      <main id="main-article" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16" role="main">
        <article
          className={`prose-slate dark:prose-invert ${getFontClass()}`}
          itemScope
          itemType="https://schema.org/BlogPosting"
          lang="hi"
        >
          {/* Article Header & Hero */}
          <ArticleHero />

          {/* 30-Second Quick Summary Card */}
          <QuickSummary />

          {/* Table of Contents */}
          <TableOfContents />

          {/* Section 1: Introduction */}
          <section id="introduction" className="my-12 scroll-mt-20">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/70 px-2.5 py-1 rounded-md">
                मूलभूत परिचय
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
                1. पुलिस वेरिफिकेशन क्या है और यह क्यों जरूरी है?
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                सरकारी नौकरी में चयन होने के बाद अंतिम नियुक्ति पत्र (Appointment Letter) जारी होने से पहले उम्मीदवार का <strong>चरित्र एवं पूर्ववृत्त सत्यापन (Character and Antecedents Verification)</strong> कराया जाता है, जिसे बोलचाल की भाषा में <strong>पुलिस वेरिफिकेशन (Police Verification Report - PVR)</strong> कहा जाता है।
              </p>

              <div className="p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 my-4">
                <h3 className="text-base font-bold text-blue-950 dark:text-blue-200 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                  <span>सत्यापन का कानूनी आधार (Statutory Framework):</span>
                </h3>
                <p className="text-sm text-blue-900 dark:text-blue-300 leading-relaxed">
                  केंद्रीय सिविल सेवा (आचरण) नियमावली 1964, अखिल भारतीय सेवा (आचरण) नियम और विभिन्न राज्यों के पुलिस विनियमों (Police Regulations) के तहत यह अनिवार्य है कि किसी भी व्यक्ति को लोक पद (Public Office) पर नियुक्त करने से पूर्व उसकी राष्ट्रीयता, चरित्र, वफादारी और किसी संज्ञेय अपराध में संलिप्तता की निष्पक्ष जांच की जाए।
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">
                सरकार पुलिस वेरिफिकेशन क्यों करवाती है? मुख्य कारण:
              </h3>
              <ul className="space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>आपराधिक रिकॉर्ड की पुष्टि:</strong> यह जांचना कि क्या उम्मीदवार के खिलाफ किसी न्यायालय में हत्या, डकैती, भ्रष्टाचार, दुष्कर्म, या धोखाधड़ी जैसे संगीन मुकदमे विचाराधीन तो नहीं हैं।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>नागरिकता एवं स्थायी पते की सत्यता:</strong> यह सुनिश्चित करना कि अभ्यर्थी भारत का वैध नागरिक है और उसने अपने निवास स्थान के संबंध में कोई फर्जी दस्तावेज प्रस्तुत नहीं किए हैं।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>राष्ट्र-विरोधी व प्रतिबंधित संगठनों से संबंध की जांच:</strong> यह सुनिश्चित करना कि चयनित व्यक्ति किसी गैरकानूनी या राष्ट्र की संप्रभुता को खतरा पहुंचाने वाले समूह (UAPA के तहत प्रतिबंधित संगठन) से संबद्ध नहीं है।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>सामाजिक प्रतिष्ठा व पड़ोसी अभिमत:</strong> स्थानीय समाज में उम्मीदवार का आचरण शांतिपूर्ण और विश्वसनीय है या नहीं, इसकी पुष्टि पड़ोसियों के बयानों से की जाती है।
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: When & How it happens */}
          <section id="when-happens" className="my-12 scroll-mt-20">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/70 px-2.5 py-1 rounded-md">
                नियुक्ति चरण
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
                2. यह प्रक्रिया कब शुरू होती है? (नियुक्ति से पहले या बाद)
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                सरकारी नौकरियों में पुलिस वेरिफिकेशन की समय-सीमा दो अलग-अलग मॉडलों पर कार्य करती है:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {/* Pre-appointment */}
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-900/60 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 text-xs font-bold">
                      मॉडल A
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      नियुक्ति से पूर्व सत्यापन (Pre-Appointment Verification)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    इस मॉडल में जब तक आपके गृह जनपद के एसपी कार्यालय से क्लीन चिट नहीं आ जाती, तब तक नियुक्ति पत्र या जॉइनिंग ऑर्डर जारी नहीं किया जाता।
                  </p>
                  <div className="text-xs text-indigo-950 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-200 dark:border-indigo-900">
                    <strong>किन नौकरियों में लागू:</strong> पुलिस कांस्टेबल, दरोगा (SI), अर्धसैनिक बल (CRPF, BSF, CISF, ITBP), रक्षा सेवाएं, खुफिया ब्यूरो (IB), और राज्य न्यायिक सेवाएं।
                  </div>
                </div>

                {/* Post-appointment Provisional */}
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-900/60 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                      मॉडल B
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      अनंतिम जॉइनिंग के बाद सत्यापन (Post-Appointment Provisional)
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                    प्रक्रिया में तेजी लाने हेतु विभाग अभ्यर्थी से शपथ पत्र (Affidavit) लेकर प्रोविजनल जॉइनिंग दे देता है, और वेरिफिकेशन प्रक्रिया बैकग्राउंड में चलती रहती है।
                  </p>
                  <div className="text-xs text-emerald-950 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-900">
                    <strong>किन नौकरियों में लागू:</strong> भारतीय रेलवे (RRB NTPC, ग्रुप D), SSC CGL/CHSL के कुछ मंत्रालय, राष्ट्रीयकृत बैंक (IBPS/SBI), और शिक्षा विभाग।
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                ⚠️ <strong>महत्वपूर्ण नोट:</strong> यदि प्रोविजनल जॉइनिंग के बाद पुलिस रिपोर्ट में कोई गंभीर प्रतिकूल तथ्य (Adverse finding) या जानबूझकर सच छिपाने का मामला पाया जाता है, तो भारतीय संविधान के अनुच्छेद 311(2) के तहत बिना किसी विस्तृत विभागीय जांच के सेवा तुरंत समाप्त की जा सकती है।
              </div>
            </div>
          </section>

          {/* Section 3: VerificationTimeline Component */}
          <VerificationTimeline />

          {/* Section 4: AttestationGuide Component */}
          <AttestationGuide />

          {/* Section 5: LegalRulings Component */}
          <LegalRulings />

          {/* Section 6: InteractiveChecklist Component */}
          <InteractiveChecklist />

          {/* Section 7: ReadinessChecker Component */}
          <ReadinessChecker />

          {/* Section 8: StatePortals Component */}
          <StatePortals />

          {/* Section 9: RejectionRemedies Component */}
          <RejectionRemedies />

          {/* Section 10: FaqSection Component */}
          <FaqSection />

          {/* Live Technical SEO Audit Section */}
          <TechnicalSeoAudit />
        </article>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
