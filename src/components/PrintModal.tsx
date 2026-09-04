import React, { useState } from 'react';
import {
  Printer,
  ExternalLink,
  FileDown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  X,
  FileCheck,
} from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  const [printStatus, setPrintStatus] = useState<'idle' | 'attempted'>('idle');

  if (!isOpen) return null;

  const isInIframe = typeof window !== 'undefined' && window.self !== window.top;

  const handleDirectPrint = () => {
    setPrintStatus('attempted');
    try {
      window.print();
    } catch (e) {
      console.warn('Direct print could not be initiated:', e);
    }
  };

  const handleOpenInNewTabAndPrint = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('action', 'print');
      window.open(url.toString(), '_blank', 'noopener,noreferrer');
      onClose();
    } catch (e) {
      // Fallback
      window.open(window.location.href, '_blank');
      onClose();
    }
  };

  return (
    <div
      id="print-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="print-modal-title"
    >
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center">
              <Printer className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 id="print-modal-title" className="text-lg font-bold text-slate-900 dark:text-slate-100">
                गाइड प्रिंट करें या PDF में सेव करें
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ऑफलाइन पढ़ने या हार्डकॉपी रिकॉर्ड के लिए
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="डायलॉग बंद करें"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Action Buttons */}
        <div className="space-y-4">
          {isInIframe && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>ब्राउज़र प्रीव्यू सूचना:</strong> चूंकि आप अभी ऐप प्रीव्यू (iFrame) में हैं, कुछ ब्राउज़र सुरक्षा नियमों के कारण सीधे प्रिंट विंडो ब्लॉक कर देते हैं। 
                सर्वोत्तम अनुभव के लिए <strong>"नए टैब में खोलकर प्रिंट करें"</strong> विकल्प चुनें।
              </div>
            </div>
          )}

          {/* Primary Action Button 1: Open in New Tab & Print */}
          <button
            type="button"
            onClick={handleOpenInNewTabAndPrint}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-800 group-hover:bg-blue-900 transition-colors">
                <ExternalLink className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="block font-bold">नए टैब में खोलकर तुरंत प्रिंट करें (अनुशंसित)</span>
                <span className="block text-xs text-blue-200 font-normal">
                  नया टैब खुलते ही ब्राउज़र का प्रिंट व "Save as PDF" डायलॉग अपने आप खुल जाएगा
                </span>
              </div>
            </div>
            <span className="text-lg text-blue-200 group-hover:translate-x-1 transition-transform">➔</span>
          </button>

          {/* Secondary Action Button 2: Direct Print */}
          <button
            type="button"
            onClick={handleDirectPrint}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <Printer className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span>इसी विंडो में सीधे प्रिंट का प्रयास करें (Direct Print)</span>
            </div>
            <span className="text-xs text-slate-500">क्लिक करें</span>
          </button>

          {/* Tips for saving clean PDF */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>PDF में सेव करने के लिए टिप्स (Tips for Best PDF):</span>
            </h4>
            <ul className="space-y-1.5 pl-4 list-disc list-outside">
              <li>
                प्रिंट मेनू में <strong>Destination</strong> को <strong>"Save as PDF"</strong> चुनें।
              </li>
              <li>
                <strong>More settings</strong> में जाकर <strong>Background graphics</strong> को टिक (चैक) रखें ताकि सभी चार्ट्स और टेबल साफ दिखें।
              </li>
              <li>
                कागज़ का आकार (Paper size) <strong>A4</strong> रखें।
              </li>
            </ul>
          </div>
        </div>

        {/* Footer close */}
        <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            बंद करें
          </button>
        </div>
      </div>
    </div>
  );
};
