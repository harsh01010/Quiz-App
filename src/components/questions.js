const questions = [
  {
    qNo: 1,
    summary: "भारत का सबसे बड़ा राज्य कौनसा है?",
    options: [
      { oNo: 1, text: "उत्तर प्रदेश", isCorrect: true },
      { oNo: 2, text: "महाराष्ट्र", isCorrect: false },
      { oNo: 3, text: "राजस्थान", isCorrect: false },
      { oNo: 4, text: "मध्य प्रदेश", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 2,
    summary: "भारत की सबसे ऊँची चोटी कौनसी है?",
    options: [
      { oNo: 1, text: "माउंट एवरेस्ट", isCorrect: true },
      { oNo: 2, text: "कांगचेंजुँगा", isCorrect: false },
      { oNo: 3, text: "नंदा देवी", isCorrect: false },
      { oNo: 4, text: "मकालु", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 3,
    summary: "भारत का राष्ट्रीय फूल क्या है?",
    options: [
      { oNo: 1, text: "कमल", isCorrect: true },
      { oNo: 2, text: "गुलाब", isCorrect: false },
      { oNo: 3, text: "सनफ्लावर", isCorrect: false },
      { oNo: 4, text: "गेंदा", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 4,
    summary: "भारतीय संविधान कब लागू हुआ था?",
    options: [
      { oNo: 1, text: "1947", isCorrect: false },
      { oNo: 2, text: "1950", isCorrect: true },
      { oNo: 3, text: "1942", isCorrect: false },
      { oNo: 4, text: "1945", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 5,
    summary: "भारत का सबसे लंबा नदी कौन सी है?",
    options: [
      { oNo: 1, text: "यमुना", isCorrect: false },
      { oNo: 2, text: "गंगा", isCorrect: false },
      { oNo: 3, text: "गोदावरी", isCorrect: true },
      { oNo: 4, text: "कृष्णा", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 6,
    summary: "भारत का सबसे बड़ा शहर कौनसा है?",
    options: [
      { oNo: 1, text: "मुंबई", isCorrect: false },
      { oNo: 2, text: "कोलकाता", isCorrect: false },
      { oNo: 3, text: "दिल्ली", isCorrect: true },
      { oNo: 4, text: "बैंगलोर", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 7,
    summary: "ताजमहल कहाँ स्थित है?",
    options: [
      { oNo: 1, text: "दिल्ली", isCorrect: false },
      { oNo: 2, text: "आगरा", isCorrect: true },
      { oNo: 3, text: "जयपुर", isCorrect: false },
      { oNo: 4, text: "लखनऊ", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 8,
    summary: "भारत की सबसे बड़ी झील कौनसी है?",
    options: [
      { oNo: 1, text: "दाल झील", isCorrect: false },
      { oNo: 2, text: "वुलर झील", isCorrect: false },
      { oNo: 3, text: "चिल्का झील", isCorrect: true },
      { oNo: 4, text: "पुलिकट झील", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 9,
    summary: "भारतीय संगीत के प्रमुख राग कौन-कौन से हैं?",
    options: [
      { oNo: 1, text: "यमन", isCorrect: false },
      { oNo: 2, text: "भैरव", isCorrect: true },
      { oNo: 3, text: "हिन्दोल", isCorrect: false },
      { oNo: 4, text: "भैरों", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 10,
    summary: "भारत की सबसे पुरानी राजमहल कहाँ स्थित है?",
    options: [
      { oNo: 1, text: "दिल्ली", isCorrect: false },
      { oNo: 2, text: "आगरा", isCorrect: false },
      { oNo: 3, text: "वाराणसी", isCorrect: false },
      { oNo: 4, text: "पटलिपुत्र", isCorrect: true },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 11,
    summary: "भारतीय सम्राट अशोक की राजधानी कौन-कौन सी थी?",
    options: [
      { oNo: 1, text: "पाटलिपुत्र", isCorrect: false },
      { oNo: 2, text: "अयोध्या", isCorrect: false },
      { oNo: 3, text: "मथुरा", isCorrect: false },
      { oNo: 4, text: "पटना", isCorrect: true },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 12,
    summary: "भारतीय स्वतंत्रता सेनानी भगत सिंह का जन्म स्थान क्या है?",
    options: [
      { oNo: 1, text: "आगरा", isCorrect: false },
      { oNo: 2, text: "फरीदकोट", isCorrect: true },
      { oNo: 3, text: "जालंधर", isCorrect: false },
      { oNo: 4, text: "लाहौर", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 13,
    summary: "भारतीय साहित्य के महाकवि तुलसीदास की कौन-सी रचना है?",
    options: [
      { oNo: 1, text: "रामचरितमानस", isCorrect: true },
      { oNo: 2, text: "शकुंतला", isCorrect: false },
      { oNo: 3, text: "कुमारसम्भव", isCorrect: false },
      { oNo: 4, text: "मेघदूत", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 14,
    summary: "भारतीय नृत्य शैली 'कथक' किस राज्य से सम्बंधित है?",
    options: [
      { oNo: 1, text: "राजस्थान", isCorrect: true },
      { oNo: 2, text: "महाराष्ट्र", isCorrect: false },
      { oNo: 3, text: "उत्तर प्रदेश", isCorrect: false },
      { oNo: 4, text: "केरल", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 15,
    summary: "भारत की संविधान सभा का सभापति कौन थे?",
    options: [
      { oNo: 1, text: "राजेन्द्र प्रसाद", isCorrect: true },
      { oNo: 2, text: "भीमराव अंबेडकर", isCorrect: false },
      { oNo: 3, text: "जवाहरलाल नेहरू", isCorrect: false },
      { oNo: 4, text: "सरदार पटेल", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 16,
    summary: "भारतीय संविधान में कितने अनुच्छेद हैं?",
    options: [
      { oNo: 1, text: "395", isCorrect: false },
      { oNo: 2, text: "396", isCorrect: false },
      { oNo: 3, text: "397", isCorrect: true },
      { oNo: 4, text: "398", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 17,
    summary: "भारतीय उपमहाद्वीप की सबसे ऊँची पर्वत श्रृंगल कौनसी है?",
    options: [
      { oNo: 1, text: "हिमालय", isCorrect: true },
      { oNo: 2, text: "अल्पस", isCorrect: false },
      { oNo: 3, text: "अंडामान", isCorrect: false },
      { oNo: 4, text: "विंध्य", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 18,
    summary: "भारतीय संविधान की कौन-सी अनुसूची अनुच्छेद 15 के तहत आती है?",
    options: [
      { oNo: 1, text: "अनुसूची 1", isCorrect: false },
      { oNo: 2, text: "अनुसूची 2", isCorrect: false },
      { oNo: 3, text: "अनुसूची 3", isCorrect: false },
      { oNo: 4, text: "अनुसूची 4", isCorrect: true },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 19,
    summary: "भारत के किस राज्य में 'बृहदीश्वर मंदिर' स्थित है?",
    options: [
      { oNo: 1, text: "मध्य प्रदेश", isCorrect: false },
      { oNo: 2, text: "उत्तर प्रदेश", isCorrect: false },
      { oNo: 3, text: "तमिलनाडु", isCorrect: true },
      { oNo: 4, text: "केरल", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 20,
    summary: "भारतीय संविधान में राज्यपाल का क्या पद है?",
    options: [
      { oNo: 1, text: "राष्ट्रपति", isCorrect: false },
      { oNo: 2, text: "प्रधानमंत्री", isCorrect: false },
      { oNo: 3, text: "गवर्नर", isCorrect: true },
      { oNo: 4, text: "मुख्यमंत्री", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
];

export default questions;
