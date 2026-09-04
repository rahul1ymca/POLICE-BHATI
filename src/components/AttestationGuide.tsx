import React, { useState } from 'react';
import {
  FileText,
  AlertOctagon,
  Check,
  X,
  HelpCircle,
  Copy,
  CheckCheck,
  ShieldCheck,
} from 'lucide-react';

interface QuestionItem {
  id: string;
  clause: string;
  questionHindi: string;
  questionEnglish: string;
  clarification: string;
  whatIfYes: string;
}

const COLUMN_12_QUESTIONS: QuestionItem[] = [
  {
    id: 'c12-a',
    clause: '12 (1) (a)',
    questionHindi: 'क्या आप कभी किसी भी अपराध के लिए गिरफ्तार (Arrested) किए गए हैं?',
    questionEnglish: 'Have you ever been arrested?',
    clarification: 'यदि पुलिस ने आपको औपचारिक रूप से गिरफ्तार कर मजिस्ट्रेट के सामने पेश किया था या हवालात में रखा था, तो यह लागू होता है। केवल थाने में पूछताछ हेतु बुलाए जाने को गिरफ्तारी नहीं माना जाता।',
    whatIfYes: 'यदि "हाँ" है, तो गिरफ्तारी की तारीख, संबंधित थाना, अपराध संख्या (FIR No.) और धाराओं का विवरण फॉर्म के साथ अलग पत्रक पर स्पष्ट लिखें।',
  },
  {
    id: 'c12-b',
    clause: '12 (1) (b)',
    questionHindi: 'क्या आप पर किसी भी न्यायालय में कोई अभियोजन (Prosecuted) चलाया गया है?',
    questionEnglish: 'Have you ever been prosecuted?',
    clarification: 'अभियोजन का अर्थ है कि पुलिस द्वारा कोर्ट में चार्जशीट दाखिल की गई और आपके विरुद्ध अदालती ट्रायल शुरू हुआ।',
    whatIfYes: 'यदि ट्रायल चला था और आप बरी हो चुके हैं, तो भी यहाँ "YES" लिखकर कोर्ट का नाम, केस नंबर और बरी होने का जजमेंट संलग्न करें।',
  },
  {
    id: 'c12-c',
    clause: '12 (1) (c)',
    questionHindi: 'क्या आपको कभी निवारक निरोध या हिरासत (Detained) में रखा गया है?',
    questionEnglish: 'Have you ever been kept under detention?',
    clarification: 'यह प्रावधान NSA, सार्वजनिक सुरक्षा कानून या मजिस्ट्रेट के आदेश से जेल/हिरासत में रखे जाने से संबंधित है।',
    whatIfYes: 'हिरासत की अवधि, आदेश देने वाले प्राधिकारी और आदेश की प्रति संलग्न करें।',
  },
  {
    id: 'c12-d',
    clause: '12 (1) (d)',
    questionHindi: 'क्या आपको कभी शांति भंग या अच्छे आचरण के लिए पाबंद (Bound Down) किया गया है?',
    questionEnglish: 'Have you ever been bound down?',
    clarification: 'ग्रामीण क्षेत्रों या चुनावों के दौरान सीआरपीसी की धारा 107/116 (अब BNSS की संबंधित धाराएं) के तहत मुचलका भरवाया जाना इसके तहत आता है।',
    whatIfYes: 'यह कोई आपराधिक दोषसिद्धि नहीं है। स्पष्ट लिखें कि चुनाव या शांति व्यवस्था हेतु धारा 107/116 में मुचलका पाबंद किया गया था जिसकी अवधि समाप्त हो चुकी है।',
  },
  {
    id: 'c12-e',
    clause: '12 (1) (e)',
    questionHindi: 'क्या किसी अदालत द्वारा आप पर कभी कोई आर्थिक जुर्माना (Fined) लगाया गया है?',
    questionEnglish: 'Have you ever been fined by a court of law?',
    clarification: 'इसमें आपराधिक न्यायालय द्वारा लगाया गया दंड शामिल है। सामान्य मोटर व्हीकल ट्रैफिक चालान (जैसे नो-पार्किंग या हेलमेट) इसमें शामिल नहीं होते, जब तक कि वह गंभीर आपराधिक केस न हो।',
    whatIfYes: 'जुर्माने का कारण, कोर्ट का नाम और रसीद संख्या का उल्लेख करें।',
  },
  {
    id: 'c12-f',
    clause: '12 (1) (f)',
    questionHindi: 'क्या आप किसी भी अपराध के लिए न्यायालय द्वारा दोषी (Convicted) ठहराए गए हैं?',
    questionEnglish: 'Have you ever been convicted by a court of law for any offence?',
    clarification: 'दोषसिद्धि (कनविक्शन) सबसे गंभीर स्थिति है। इसका अर्थ है कि अदालत ने आपको अपराध का दोषी पाया और सजा सुनाई।',
    whatIfYes: 'यदि अपील में सजा पर रोक (Stay on Conviction) लगी है या प्रोबेशन ऑफ ऑफेंडर्स एक्ट का लाभ मिला है, तो उसका विस्तृत अदालती आदेश अनिवार्य रूप से संलग्न करें।',
  },
  {
    id: 'c12-g',
    clause: '12 (1) (g)',
    questionHindi: 'क्या यह अटेस्टेशन फॉर्म भरते समय आपके खिलाफ किसी भी अदालत में कोई मुकदमा विचाराधीन (Pending) है?',
    questionEnglish: 'Is any case pending against you in any court of law at the time of filling up this Attestation Form?',
    clarification: 'वर्तमान स्थिति के लिए यह सबसे निर्णायक प्रश्न है। यदि पुलिस ने कोर्ट में चार्जशीट पेश कर दी है और मामला चल रहा है, तो इसे बिल्कुल न छिपाएं।',
    whatIfYes: 'अदालत का नाम, केस संख्या, भारतीय न्याय संहिता/आईपीसी की धाराएं और अगली तारीख का पूरा विवरण प्रस्तुत करें।',
  },
];

export const AttestationGuide: React.FC = () => {
  const [activeClause, setActiveClause] = useState<string>('c12-a');
  const [affidavitCopied, setAffidavitCopied] = useState<boolean>(false);

  const sampleAffidavitText = `समक्ष: सक्षम नियुक्ति प्राधिकारी / पुलिस अधीक्षक
शपथ पत्र (Affidavit)
मैं, [अभ्यर्थी का पूरा नाम], सुपुत्र/सुपुत्री [पिता का नाम], आयु लगभग [वर्ष], निवासी [पूरा स्थायी पता], शपथपूर्वक निम्नलिखित कथन करता हूँ:
1. यह कि मैं [भर्ती का नाम, उदा. SSC CGL / UP Police Constable / RRB] के पद [पद नाम] हेतु रोल नंबर [रोल नंबर] पर अनंतिम रूप से चयनित हुआ हूँ।
2. यह कि मेरे विरुद्ध भारत के किसी भी पुलिस थाने में कोई संज्ञेय अपराध दर्ज नहीं है और न ही किसी न्यायालय में कोई आपराधिक मुकदमा विचाराधीन है।
3. यह कि मुझे किसी भी न्यायालय द्वारा कभी भी किसी अपराध के लिए दोषी नहीं ठहराया गया है।
4. यह कि मेरे द्वारा अटेस्टेशन फॉर्म (साक्ष्यांकन प्रपत्र) में दी गई समस्त व्यक्तिगत, शैक्षणिक एवं आवासीय जानकारी 100% सत्य एवं प्रामाणिक है। यदि इसमें कोई भी तथ्य असत्य या छिपाया हुआ पाया जाए, तो मेरी नियुक्ति तत्काल प्रभाव से निरस्त करने का विभाग को पूर्ण अधिकार होगा।
शपथग्रहीता (हस्ताक्षर)
सत्यापन: मैं प्रमाणित करता हूँ कि उपरोक्त पैरा 1 से 4 तक की सभी बातें मेरे ज्ञान और विश्वास के अनुसार पूर्णतः सत्य हैं।`;

  const handleCopyAffidavit = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(sampleAffidavitText);
      setAffidavitCopied(true);
      setTimeout(() => setAffidavitCopied(false), 2500);
    }
  };

  const selectedItem = COLUMN_12_QUESTIONS.find((q) => q.id === activeClause) || COLUMN_12_QUESTIONS[0];

  return (
    <section id="attestation-form" className="my-12 scroll-mt-20">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/70 px-2.5 py-1 rounded-md">
          दस्तावेजी सटीकता
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-3">
          4. अटेस्टेशन फॉर्म (साक्ष्यांकन प्रपत्र) कैसे भरें? कॉलम 12 के नियम
        </h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          अटेस्टेशन फॉर्म (DoPT Form No. 109) भारत सरकार और सभी राज्य सरकारों द्वारा प्रयुक्त एक अति-संवेदनशील कानूनी दस्तावेज है। इसके शीर्ष पर ही चेतावनी (Warning) लिखी होती है कि कोई भी गलत सूचना देना या तथ्य छिपाना अयोग्यता मानी जाएगी और सेवा से बर्खास्तगी का कारण बन सकती है।
        </p>
      </div>

      {/* Critical Warning Alert Box */}
      <div className="p-5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-l-4 border-rose-600 border-t border-r border-b border-rose-200 dark:border-rose-900/60 mb-8">
        <div className="flex items-start gap-3">
          <AlertOctagon className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-bold text-rose-950 dark:text-rose-200 mb-1">
              वैधानिक चेतावनी (Statutory Caution): कभी भी "NO" लिखकर बात न दबाएं
            </h3>
            <p className="text-sm text-rose-900 dark:text-rose-300 leading-relaxed">
              सुप्रीम कोर्ट के अनेक फैसलों में यह स्पष्ट कहा गया है कि यदि अभ्यर्थी ने किसी पुराने केस का सच बता दिया, तो विभाग उसकी मेरिट पर विचार कर सकता है। लेकिन यदि किसी अभ्यर्थी ने उस केस को छिपाकर फॉर्म में "NO" लिख दिया, तो बाद में सच सामने आने पर <strong>"कपट व तथ्य छिपाने" (Suppression of Material Facts)</strong> के आधार पर बिना जांच के बर्खास्त कर दिया जाएगा।
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Column 12 Explorer */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs mb-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <span>कॉलम 12 के सभी उप-खंडों (Sub-Clauses) का व्यावहारिक विश्लेषण</span>
        </h3>

        {/* Clause Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
          {COLUMN_12_QUESTIONS.map((q) => (
            <button
              key={q.id}
              type="button"
              onClick={() => setActiveClause(q.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeClause === q.id
                  ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              कॉलम {q.clause}
            </button>
          ))}
        </div>

        {/* Clause Content Box */}
        <div className="mt-5">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">
            <span>खंड: {selectedItem.clause}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">{selectedItem.questionEnglish}</span>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
            {selectedItem.questionHindi}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-1">
                विधिक अर्थ और स्पष्टीकरण:
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedItem.clarification}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
              <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider block mb-1">
                यदि आपके मामले में उत्तर "हाँ" (YES) है तो क्या करें?
              </span>
              <p className="text-sm text-amber-950 dark:text-amber-200/90 leading-relaxed">
                {selectedItem.whatIfYes}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Affidavit / Declaration Box */}
      <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>मानक शपथ पत्र (Model Affidavit) का हिंदी प्रारूप</span>
            </h3>
            <p className="text-xs text-slate-400">
              यह शपथ पत्र ₹10 या ₹100 के नॉन-ज्यूडिशियल स्टांप पेपर पर नोटरी द्वारा सत्यापित कराया जाता है।
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyAffidavit}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            {affidavitCopied ? <CheckCheck className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{affidavitCopied ? 'प्रारूप कॉपी हो गया' : 'प्रारूप टेक्स्ट कॉपी करें'}</span>
          </button>
        </div>

        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed max-h-60 overflow-y-auto">
          {sampleAffidavitText}
        </pre>
      </div>
    </section>
  );
};
