import React, { useState, useEffect } from 'react';
import {
  Shield,
  Share2,
  Printer,
  Bookmark,
  Sun,
  Moon,
  Type,
  Check,
  ExternalLink,
} from 'lucide-react';
import { PrintModal } from './PrintModal';

interface HeaderProps {
  fontSize: 'normal' | 'large' | 'xl';
  setFontSize: (size: 'normal' | 'large' | 'xl') => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  fontSize,
  setFontSize,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrintClick = () => {
    // If user is not in an iframe, try window.print() directly
    const isInIframe = typeof window !== 'undefined' && window.self !== window.top;
    if (!isInIframe) {
      try {
        window.print();
        return;
      } catch (e) {
        console.warn('Direct print failed, opening modal:', e);
      }
    }
    // In iframe or as fallback, open the Print modal with direct & new-tab print options
    setShowPrintModal(true);
  };

  const shareViaWhatsApp = () => {
    const title = encodeURIComponent('सरकारी नौकरी में पुलिस वेरिफिकेशन: पूरी प्रक्रिया और कानूनी नियम (संपूर्ण ब्लॉग गाइड)');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${title}%20-%20${url}`, '_blank', 'noopener,noreferrer');
  };

  const shareViaTelegram = () => {
    const title = encodeURIComponent('सरकारी नौकरी में पुलिस वेरिफिकेशन संपूर्ण गाइड');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://t.me/share/url?url=${url}&text=${title}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-50 transition-colors border-b shadow-xs backdrop-blur-md no-print ${
          isDarkMode
            ? 'bg-slate-900/90 border-slate-800 text-slate-100'
            : 'bg-white/95 border-slate-200 text-slate-900'
        }`}
      >
        {/* Top Reading Progress Bar */}
        <div
          id="reading-progress-track"
          className="w-full h-1 bg-slate-200 dark:bg-slate-800"
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="पठन प्रगति बार"
        >
          <div
            id="reading-progress-indicator"
            className="h-full bg-linear-to-r from-blue-600 to-indigo-600 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          {/* Logo & Portal Identity */}
          <a
            href="#main-article"
            id="site-logo-link"
            className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            title="सरकारी नौकरी पुलिस वेरिफिकेशन गाइड मुख्य पृष्ठ पर जाएं"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-800 transition-colors">
              <Shield className="w-6 h-6 text-amber-300" aria-hidden="true" />
            </div>
            <div>
              <span className="block font-bold text-base sm:text-lg leading-tight tracking-tight text-blue-900 dark:text-blue-300">
                सरकारी सेवा पुलिस सत्यापन
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">
                PVR संपूर्ण मार्गदर्शिका व विधिक नियम
              </span>
            </div>
          </a>

          {/* Quick Actions & Accessibility Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font Size Selector for Devanagari Readability */}
            <div
              id="font-size-controls"
              className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700"
              title="हिंदी फॉन्ट का आकार बदलें"
            >
              <button
                id="font-size-btn-normal"
                type="button"
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                aria-label="सामान्य फॉन्ट आकार"
              >
                अ
              </button>
              <button
                id="font-size-btn-large"
                type="button"
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                  fontSize === 'large'
                    ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                aria-label="मध्यम बड़ा फॉन्ट आकार"
              >
                अ+
              </button>
              <button
                id="font-size-btn-xl"
                type="button"
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                  fontSize === 'xl'
                    ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
                aria-label="अति बड़ा फॉन्ट आकार"
              >
                अ++
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-button"
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={isDarkMode ? 'लाइट मोड चालू करें' : 'डार्क मोड चालू करें'}
              aria-label={isDarkMode ? 'लाइट मोड में बदलें' : 'डार्क मोड में बदलें'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Print Guide Button */}
            <button
              id="print-guide-button"
              type="button"
              onClick={handlePrintClick}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
              title="इस ब्लॉग गाइड को प्रिंट या PDF में सेव करें"
              aria-label="गाइड प्रिंट करें"
            >
              <Printer className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              <span className="hidden sm:inline">प्रिंट / PDF</span>
            </button>

            {/* Share Menu Trigger */}
            <button
              id="open-share-dialog-button"
              type="button"
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors"
              title="मित्रों एवं अभ्यर्थियों के साथ साझा करें"
              aria-label="शेयर करें"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">शेयर करें</span>
            </button>
          </div>
        </div>
      </header>

      {/* Share Modal Dialog */}
      {showShareModal && (
        <div
          id="share-modal-overlay"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-modal-title"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 id="share-modal-title" className="text-lg font-bold text-slate-900 dark:text-slate-100">
                गाइड को शेयर करें
              </h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg p-1"
                aria-label="बंद करें"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
              सरकारी नौकरी में चयनित अभ्यर्थियों और पुलिस वेरिफिकेशन की तैयारी कर रहे साथियों को यह प्रामाणिक जानकारी भेजें।
            </p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                onClick={shareViaWhatsApp}
                className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-colors"
              >
                <span>व्हाट्सएप (WhatsApp)</span>
              </button>
              <button
                type="button"
                onClick={shareViaTelegram}
                className="flex items-center justify-center gap-2 p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium text-sm transition-colors"
              >
                <span>टेलीग्राम (Telegram)</span>
              </button>
            </div>

            <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
              <input
                type="text"
                readOnly
                value={typeof window !== 'undefined' ? window.location.href : ''}
                className="flex-1 bg-transparent text-xs text-slate-600 dark:text-slate-300 px-2 outline-hidden truncate"
                aria-label="वेबसाइट लिंक"
              />
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-md flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : null}
                {copied ? 'कॉपी हो गया' : 'लिंक कॉपी करें'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print & PDF Helper Modal */}
      <PrintModal
        isOpen={showPrintModal}
        onClose={() => setShowPrintModal(false)}
      />
    </>
  );
};
