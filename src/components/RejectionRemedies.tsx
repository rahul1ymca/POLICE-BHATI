import React from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  PhoneCall,
  FileSearch,
  Users,
  Compass,
  Building,
} from 'lucide-react';

export const RejectionRemedies: React.FC = () => {
  const causes = [
    {
      title: '1. स्थायी या वर्तमान पते में असंगति',
      desc: 'यदि बीट कांस्टेबल आपके दिए गए पते पर पहुंचा और पड़ोसियों ने कहा कि आप वहां नहीं रहते या आपका परिवार शहर छोड़ चुका है, तो रिपोर्ट "उम्मीदवार अनुपस्थित/अज्ञात" लग सकती है।',
      solution: 'घर के सदस्यों और पड़ोसियों को पहले से सूचित रखें कि पुलिस सत्यापन हेतु आ सकती है। यदि आप अस्थायी रूप से बाहर हैं, तो अपना संपर्क नंबर घर पर अवश्य छोड़ें।',
    },
    {
      title: '2. शैक्षणिक व जन्मतिथि प्रमाण पत्र में नाम की वर्तनी (Spelling) भेद',
      desc: '10वीं की मार्कशीट में नाम "RAMESH KUMAR" है लेकिन आधार कार्ड या अटेस्टेशन फॉर्म में "RAMESH" लिखा है।',
      solution: 'तहसीलदार या प्रथम श्रेणी मजिस्ट्रेट से नाम साम्यता का शपथ पत्र (Name Clarification Affidavit) पहले से बनवाकर फाइल के साथ संलग्न करें।',
    },
    {
      title: '3. पुरानी राजनीतिक या छात्र रंजिश के तहत नई शिकायत',
      desc: 'कई बार चयन के बाद स्थानीय विरोधी या रंजिश रखने वाले व्यक्ति थाने में झूठा शिकायती प्रार्थना पत्र दे देते हैं।',
      solution: 'जांच अधिकारी के सामने विनम्रता से अपना पक्ष रखें। यदि कोई एफआईआर दर्ज नहीं है तो केवल शिकायत पत्र के आधार पर प्रतिकूल रिपोर्ट नहीं लगाई जा सकती। निष्पक्ष जांच हेतु सीओ/डीएसपी को प्रार्थना पत्र दें।',
    },
    {
      title: '4. बीट सिपाही द्वारा जानबूझकर रिपोर्ट दबाना या रिश्वत की मांग',
      desc: 'कुछ मामलों में निचले स्तर पर सत्यापन रिपोर्ट को 1-2 माह तक थाने में लंबित रखा जाता है।',
      solution: 'किसी भी परिस्थिति में रिश्वत न दें। तुरंत जिले के एसपी/एसएसपी के जनसुनवाई दिवस में उपस्थित होकर डायरी नंबर सहित त्वरित निस्तारण का आवेदन दें।',
    },
  ];

  return (
    <section id="rejection-remedies" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/70 px-2.5 py-1 rounded-md">
          समस्या निवारण
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          9. पुलिस वेरिफिकेशन में देरी या रिजेक्शन के मुख्य कारण और विधिक समाधान
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          यदि आपकी नियुक्ति प्रक्रिया में पुलिस वेरिफिकेशन रिपोर्ट के कारण विलंब हो रहा है, तो घबराने की आवश्यकता नहीं है। भारतीय प्रशासनिक कानून में अभ्यर्थियों को कई प्रभावी वैधानिक अधिकार प्रदान किए गए हैं:
        </p>
      </div>

      {/* Grid of Causes & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {causes.map((c, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{c.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
              <strong>कारण:</strong> {c.desc}
            </p>
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
              <strong>कारगर समाधान:</strong> {c.solution}
            </div>
          </div>
        ))}
      </div>

      {/* Legal Action Steps Helpline Box */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-blue-900 to-indigo-900 text-white shadow-md">
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <span>विलंब होने पर 3 त्वरित प्रशासनिक कदम:</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm mt-4">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
            <span className="font-bold text-amber-300 block mb-1">
              1. एसपी कार्यालय में जनसुनवाई
            </span>
            <p className="text-slate-200 leading-relaxed">
              प्रत्येक जिले में पुलिस कप्तान (SP/SSP) सप्ताह में निर्धारित दिनों में जनसुनवाई करते हैं। वहां लिखित आवेदन देकर थाने को 48 घंटे में रिपोर्ट भेजने का आदेश कराएं।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
            <span className="font-bold text-amber-300 block mb-1">
              2. सूचना का अधिकार (RTI 2005)
            </span>
            <p className="text-slate-200 leading-relaxed">
              जिले के जनसूचना अधिकारी (PIO/ASP) को ₹10 के पोस्टल ऑर्डर के साथ आरटीआई लगाएं और अपनी वेरिफिकेशन फाइल की दैनिक प्रगति (Daily Progress Report) मांगें।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
            <span className="font-bold text-amber-300 block mb-1">
              3. भ्रष्टाचार निरोधक हेल्पलाइन
            </span>
            <p className="text-slate-200 leading-relaxed">
              यदि कोई कर्मचारी रिपोर्ट लगाने के बदले अवैध मांग करता है, तो सीधे एंटी करप्शन ब्यूरो के राष्ट्रीय हेल्पलाइन नंबर <strong>1064</strong> पर शिकायत दर्ज कराएं।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
