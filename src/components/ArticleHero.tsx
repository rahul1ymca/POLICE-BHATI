import React from 'react';
import {
  Calendar,
  Clock,
  UserCheck,
  ShieldCheck,
  Award,
  AlertTriangle,
  FileText,
  Share2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const ArticleHero: React.FC = () => {
  return (
    <section id="hero-section" className="pt-6 pb-10 border-b border-slate-200 dark:border-slate-800">
      {/* Semantic Breadcrumbs */}
      <nav
        id="article-breadcrumbs"
        aria-label="ब्रेडक्रम्ब नेविगेशन"
        className="mb-4 flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap"
      >
        <a
          href="#root"
          className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          title="सरकारी सेवा मुख्य पृष्ठ"
        >
          होम
        </a>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <a
          href="#guide"
          className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          title="सरकारी भर्ती मार्गदर्शन श्रेणी"
        >
          सरकारी भर्ती मार्गदर्शन
        </a>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span className="text-slate-800 dark:text-slate-200 font-medium truncate" aria-current="page">
          पुलिस वेरिफिकेशन गाइड
        </span>
      </nav>

      {/* Category Pill & Verification Badge */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          id="badge-category"
          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
        >
          विशेष विधिक एवं प्रशासनिक ब्लॉग
        </span>
        <span
          id="badge-verified-info"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span>DoPT व गृह मंत्रालय दिशानिर्देशों पर आधारित</span>
        </span>
      </div>

      {/* Main H1 Title */}
      <h1
        id="main-article-title"
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-snug lg:leading-tight mb-4"
        itemProp="headline"
      >
        सरकारी नौकरी में पुलिस वेरिफिकेशन कैसे होता है? प्रक्रिया, नियम, अटेस्टेशन फॉर्म कॉलम 12 व जरूरी दस्तावेज
      </h1>

      {/* Subtitle / Lead Paragraph */}
      <p
        className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mb-6"
        itemProp="description"
      >
        क्या आपका चयन SSC, UPSC, रेलवे, पुलिस, बैंक या किसी राज्य प्रशासनिक सेवा में हुआ है? जानिए चरित्र एवं पूर्ववृत्त सत्यापन (Police Verification Report - PVR) के 5 महत्वपूर्ण चरण, अटेस्टेशन फॉर्म का कॉलम 12 भरने का सही तरीका, और यदि कोई पुरानी FIR या कोर्ट केस हो तो सुप्रीम कोर्ट के अवतार सिंह दिशा-निर्देश (Avtar Singh vs Union of India) आपके पक्ष में क्या कहते हैं।
      </p>

      {/* Author, Editorial Review & Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
              आरके
            </div>
            <div>
              <span className="block font-semibold text-slate-900 dark:text-slate-100">
                राजेश कुमार शर्मा
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                सेवानिवृत्त उप सचिव, कार्मिक विभाग
              </span>
            </div>
          </div>

          {/* Legal Reviewer */}
          <div className="hidden sm:flex items-center gap-1.5 border-l pl-4 border-slate-300 dark:border-slate-700">
            <Award className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <div>
              <span className="block font-medium text-slate-800 dark:text-slate-200">
                विधिक समीक्षा: एडवोकेट अमित वर्मा
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                उच्च न्यायालय, सेवा मामले विशेषज्ञ
              </span>
            </div>
          </div>

          {/* Date & Reading time */}
          <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l sm:pl-4 border-slate-300 dark:border-slate-700 w-full sm:w-auto pt-2 sm:pt-0">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-400" aria-hidden="true" />
              <span>ताजा अपडेट: सितंबर 2026</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" aria-hidden="true" />
              <span>12 मिनट पठन समय</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Visual Feature Diagram / Figure with SEO Alt & Figcaption */}
      <figure
        id="hero-infographic-figure"
        className="mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              आधिकारिक सत्यापन फ्लोचार्ट
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">
              नियुक्ति से जॉइनिंग तक: पुलिस वेरिफिकेशन का संपूर्ण मार्ग
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              भारतीय प्रशासनिक व्यवस्था में निष्कलंक चरित्र और राष्ट्र सुरक्षा सुनिश्चित करने के लिए हर नवनियुक्त कर्मचारी का चरित्र एवं पूर्ववृत्त सत्यापन (Character & Antecedents Verification) कराया जाता है।
            </p>

            {/* Quick Flow Visual Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <span className="px-2.5 py-1 rounded-md bg-blue-900/80 border border-blue-600/50 text-blue-200">
                1. चयन विभाग
              </span>
              <span className="text-slate-400">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-900/80 border border-blue-600/50 text-blue-200">
                2. DM/SP कार्यालय
              </span>
              <span className="text-slate-400">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-900/80 border border-blue-600/50 text-blue-200">
                3. स्थानीय थाना
              </span>
              <span className="text-slate-400">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-blue-900/80 border border-blue-600/50 text-blue-200">
                4. CCTNS जांच
              </span>
              <span className="text-slate-400">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-900/80 border border-emerald-600/50 text-emerald-200">
                5. अंतिम PVR क्लीयरेंस
              </span>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            {/* Semantic SVG Diagram representing Police Character Verification badge & seal */}
            <svg
              className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-xl"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="सरकारी नौकरी पुलिस वेरिफिकेशन रिपोर्ट (PVR) सील एवं सुरक्षा चिह्न"
            >
              <circle cx="100" cy="100" r="90" fill="#1e293b" stroke="#3b82f6" strokeWidth="4" />
              <circle cx="100" cy="100" r="76" stroke="#60a5fa" strokeDasharray="4 4" strokeWidth="2" />
              <path
                d="M100 35L145 55V105C145 135 100 165 100 165C100 165 55 135 55 105V55L100 35Z"
                fill="#1e3a8a"
                stroke="#fbbf24"
                strokeWidth="3"
              />
              <path
                d="M85 100L95 110L120 85"
                stroke="#10b981"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text x="100" y="140" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="700">
                PVR VERIFIED
              </text>
              <text x="100" y="152" textAnchor="middle" fill="#93c5fd" fontSize="9">
                CCTNS CLEARED
              </text>
            </svg>
          </div>
        </div>
        <figcaption className="mt-4 text-xs text-slate-400 text-center border-t border-slate-800 pt-3">
          चित्र 1.1: सरकारी नौकरी में पुलिस वेरिफिकेशन रिपोर्ट (PVR) और CCTNS डिजिटल सत्यापन की मानक प्रशासनिक प्रक्रिया।
        </figcaption>
      </figure>

      {/* Key Takeaways Box (मुख्य बिंदु) */}
      <div
        id="quick-key-highlights"
        className="rounded-xl p-5 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 border-t border-r border-b border-amber-200 dark:border-amber-900/60"
      >
        <h3 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          एक नज़र में मुख्य बिंदु (उम्मीदवारों के लिए जरूरी सीख):
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-950 dark:text-amber-200/90 list-disc list-inside">
          <li>
            <strong>सच कभी न छिपाएं:</strong> अटेस्टेशन फॉर्म में किसी भी पूर्व एफआईआर या चालान की जानकारी छिपाना नौकरी रद्द होने का सबसे बड़ा कारण है।
          </li>
          <li>
            <strong>सुप्रीम कोर्ट का संरक्षण:</strong> अवतार सिंह (2016) फैसले के अनुसार बरी हो चुके या मामूली विवाद के मामलों में उम्मीदवार की नियुक्ति नहीं रोकी जा सकती।
          </li>
          <li>
            <strong>CCTNS ऑनलाइन जांच:</strong> भारत के सभी 16,000+ थानों का रिकॉर्ड अब केंद्रीय डेटाबेस से जुड़ा है, इसलिए अन्य राज्य का मामला भी ट्रैक हो जाता है।
          </li>
          <li>
            <strong>गवाहों का चयन:</strong> 2 स्थानीय पड़ोसियों का नाम दें जो रक्त-संबंधी न हों और पुलिस आने पर आपके अच्छे आचरण की पुष्टि कर सकें।
          </li>
        </ul>
      </div>
    </section>
  );
};
