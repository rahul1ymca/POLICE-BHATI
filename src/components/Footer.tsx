import React from 'react';
import { Shield, ExternalLink, Heart, AlertCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-site-footer"
      className="mt-16 bg-slate-900 text-slate-300 border-t border-slate-800 text-xs sm:text-sm no-print"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Shield className="w-5 h-5 text-amber-300" aria-hidden="true" />
              </div>
              <span className="font-bold text-lg text-white">
                सरकारी सेवा पुलिस सत्यापन गाइड
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg mb-4">
              यह ब्लॉग भारतीय प्रतियोगी छात्रों और सरकारी सेवा में नवनियुक्त उम्मीदवारों को चरित्र एवं पूर्ववृत्त सत्यापन (Police Verification Report), अटेस्टेशन फॉर्म के विधिक नियमों और सर्वोच्च न्यायालय के मार्गदर्शक सिद्धांतों पर निःशुल्क, सटीक और प्रामाणिक जानकारी उपलब्ध कराने के उद्देश्य से समर्पित है।
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                भाषा: हिन्दी (hi-IN)
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                सत्यापित: DoPT & MHA Guidelines
              </span>
            </div>
          </div>

          {/* Col 2: Quick Jump Links */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm">त्वरित विषय नेविगेशन</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#step-by-step"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="5-चरणीय सत्यापन प्रक्रिया"
                >
                  ➔ 5-चरणीय पुलिस सत्यापन प्रक्रिया
                </a>
              </li>
              <li>
                <a
                  href="#attestation-form"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="अटेस्टेशन फॉर्म कॉलम 12 नियम"
                >
                  ➔ अटेस्टेशन फॉर्म व कॉलम 12 के नियम
                </a>
              </li>
              <li>
                <a
                  href="#fir-legal-rules"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="सुप्रीम कोर्ट के अवतार सिंह दिशा-निर्देश"
                >
                  ➔ सुप्रीम कोर्ट के विधिक फैसले (FIR)
                </a>
              </li>
              <li>
                <a
                  href="#documents-checklist"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="दस्तावेज चेकलिस्ट"
                >
                  ➔ जरूरी दस्तावेज चेकलिस्ट
                </a>
              </li>
              <li>
                <a
                  href="#readiness-checker"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="रेडीनेस चेकर क्विज"
                >
                  ➔ सत्यापन योग्यता चेकर टूल
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="अक्सर पूछे जाने वाले सवाल"
                >
                  ➔ अक्सर पूछे जाने वाले सवाल (FAQs)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Portals Reference */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm">आधिकारिक संदर्भ पोर्टल</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://dopt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  title="कार्मिक एवं प्रशिक्षण विभाग भारत सरकार की वेबसाइट खोलें"
                >
                  <span>कार्मिक एवं प्रशिक्षण विभाग (DoPT)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  title="गृह मंत्रालय भारत सरकार की वेबसाइट खोलें"
                >
                  <span>गृह मंत्रालय (MHA India)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://ncrb.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  title="राष्ट्रीय अपराध रिकॉर्ड ब्यूरो (NCRB - CCTNS) खोलें"
                >
                  <span>CCTNS - राष्ट्रीय अपराध रिकॉर्ड ब्यूरो</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  title="भारत का सर्वोच्च न्यायालय (Supreme Court of India) खोलें"
                >
                  <span>भारत का सर्वोच्च न्यायालय</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 leading-relaxed mb-8">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">कानूनी डिस्क्लेमर (Legal Disclaimer):</strong> यह ब्लॉग केवल सामान्य जन-जागरूकता, शैक्षिक उद्देश्य और विधिक मार्गदर्शन हेतु तैयार किया गया है। यह किसी भी सरकारी विभाग, पुलिस बल या न्यायालय का आधिकारिक पोर्टल नहीं है। नियमों में समय-समय पर संशोधन हो सकते हैं। किसी भी विधिक संशय की स्थिति में अभ्यर्थी संबंधित भर्ती आयोग के मूल विज्ञापन, आधिकारिक कॉल लेटर और योग्य विधिक सलाहकार (Advocate) की सलाह पर ही कार्य करें।
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} सरकारी नौकरी पुलिस वेरिफिकेशन संपूर्ण मार्गदर्शिका। सर्वाधिकार सुरक्षित।
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            aria-label="पृष्ठ के शीर्ष पर जाएं"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>शीर्ष पर जाएं</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
