import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'health',
    title: {
      hindi: 'स्वास्थ्य सलाह',
      hinglish: 'Health ki Salah',
      telugu: 'ఆరోగ్య సలహా',
    },
    description: {
      hindi: 'योग, आयुर्वेद और पोषण संबंधी व्यावहारिक सलाह। दैनिक स्वास्थ्य दिनचर्या, घरेलू नुस्खे और आपातकालीन स्वास्थ्य मार्गदर्शन।',
      hinglish: 'Yoga, Ayurveda aur nutrition ke practical tips. Daily health routine, gharelu nuskhe aur emergency health guidance.',
      telugu: 'యోగా, ఆయుర్వేదం మరియు పోషణపై ఆచరణాత్మక సలహాలు. రోజువారీ ఆరోగ్య దినచర్య, ఇంటి వైద్యం మరియు అత్యవసర ఆరోగ్య మార్గదర్శకత్వం.',
    },
    icon: 'HeartPulse',
    color: 'rose-500',
    gradient: 'from-rose-100 to-rose-200'
  },
  {
    id: 'financial',
    title: {
      hindi: 'वित्तीय साक्षरता',
      hinglish: 'Financial Literacy',
      telugu: 'ఆర్థిక అక్షరాస్యత',
    },
    description: {
      hindi: 'बजट बनाना, बचत योजनाएं, निवेश के बुनियादी सिद्धांत और डिजिटल बैंकिंग की जानकारी। महिला उद्यमिता के लिए विशेष मार्गदर्शन।',
      hinglish: 'Budget banana, savings plans, investment ke basic principles aur digital banking ki knowledge. Women entrepreneurship ke liye special guidance.',
      telugu: 'బడ్జెట్ ప్లానింగ్, సేవింగ్స్ ప్లాన్స్, పెట్టుబడి ప్రాథమిక సూత్రాలు మరియు డిజిటల్ బ్యాంకింగ్ జ్ఞానం. మహిళా వ్యవసాయదారులకు ప్రత్యేక మార్గదర్శకత్వం.',
    },
    icon: 'Wallet',
    color: 'emerald-500',
    gradient: 'from-emerald-100 to-emerald-200'
  },
  {
    id: 'beauty',
    title: {
      hindi: 'ब्यूटी टिप्स',
      hinglish: 'Beauty Tips',
      telugu: 'అందం చిట్కాలు',
    },
    description: {
      hindi: 'प्राकृतिक सौंदर्य उपचार, त्वचा देखभाल, बालों की देखभाल और मेकअप टिप्स। आयुर्वेदिक और घरेलू नुस्खों का खजाना।',
      hinglish: 'Natural beauty treatments, skin care, hair care aur makeup tips. Ayurvedic aur gharelu nuskhon ka khazana.',
      telugu: 'సహజ సౌందర్య చికిత్సలు, స్కిన్ కేర్, హెయిర్ కేర్ మరియు మేకప్ చిట్కాలు. ఆయుర్వేద మరియు ఇంటి చిట్కాల నిధి.',
    },
    icon: 'Sparkles',
    color: 'pink-500',
    gradient: 'from-pink-100 to-pink-200'
  },
  {
    id: 'affirmations',
    title: {
      hindi: 'आत्मरक्षा प्रशिक्षण',
      hinglish: 'Self Defence Training',
      telugu: 'స్వయం రక్షణ శిక్షణ',
    },
    description: {
      hindi: 'आत्मरक्षा के मूल सिद्धांत, सुरक्षा तकनीकें और आपातकालीन प्रतिक्रिया। विशेष रूप से महिला सशक्तिकरण के लिए।',
      hinglish: 'Self defence ke basic techniques, safety tips aur emergency response. Special focus on women empowerment.',
      telugu: 'స్వయం రక్షణ ప్రాథమిక సూత్రాలు, భద్రతా పద్ధతులు మరియు అత్యవసర ప్రతిస్పందన. మహిళా సాధికారత కోసం ప్రత్యేక దృష్టి.',
    },
    icon: 'Shield',
    color: 'amber-500',
    gradient: 'from-amber-100 to-amber-200'
  },
  {
    id: 'games',
    title: {
      hindi: 'मनोरंजक गेम्स',
      hinglish: 'Fun Games',
      telugu: 'ఆటలు',
    },
    description: {
      hindi: 'दिमागी कसरत के लिए पहेलियां, क्विज और मेमोरी गेम्स। साथ ही शैक्षिक खेल जो ज्ञान और मनोरंजन दोनों प्रदान करें।',
      hinglish: 'Brain exercise ke liye puzzles, quiz aur memory games. Educational games jo knowledge aur entertainment dono provide karein.',
      telugu: 'మెదడు వ్యాయామం కోసం పజిల్స్, క్విజ్ మరియు మెమరీ గేమ్స్. జ్ఞానం మరియు వినోదం రెండింటినీ అందించే విద్యా ఆటలు.',
    },
    icon: 'Gamepad2',
    color: 'violet-500',
    gradient: 'from-violet-100 to-violet-200'
  },
  {
    id: 'emergency',
    title: {
      hindi: 'आपातकालीन जानकारी',
      hinglish: 'Emergency Information',
      telugu: 'అత్యవసర సమాచారం',
    },
    description: {
      hindi: 'तत्काल मदद के लिए महत्वपूर्ण संपर्क और जानकारी',
      hinglish: 'Important contacts aur information for immediate help. Women helpline, police, ambulance, aur nearby hospitals ki details.',
      telugu: 'తక్షణ సహాయం కోసం ముఖ్యమైన సంప్రదింపులు మరియు సమాచారం',
    },
    icon: 'Siren',
    color: 'red-500',
    gradient: 'from-red-100 to-red-200'
  },
  {
    id: 'community',
    title: {
      hindi: 'सामुदायिक ज्ञान',
      hinglish: 'Community Knowledge',
      telugu: 'సామాజిక జ్ఞానం',
    },
    description: {
      hindi: 'समुदाय द्वारा साझा किए गए स्वास्थ्य और सौंदर्य के टिप्स। सर्वश्रेष्ठ सुझावों और अनुभवों का संग्रह।',
      hinglish: 'Community dwara share kiye gaye health aur beauty tips. Best suggestions aur experiences ka collection.',
      telugu: 'సమాజం పంచుకున్న ఆరోగ్య మరియు అందం చిట్కాలు. ఉత్తమ సూచనలు మరియు అనుభవాల సేకరణ.',
    },
    icon: 'Users',
    color: 'indigo-500',
    gradient: 'from-indigo-100 to-indigo-200'
  },
  {
    id: 'help',
    title: {
      hindi: 'ऐप का उपयोग कैसे करें',
      hinglish: 'App Kaise Use Karein',
      telugu: 'యాప్ ఎలా వాడాలి',
    },
    description: {
      hindi: 'स्वीटी दीदी ऐप का पूरा मार्गदर्शन। सभी सुविधाओं का विस्तृत विवरण और उपयोग के तरीके।',
      hinglish: 'Sweety Didi app ka complete guide. Saari features ka detailed description aur use karne ke tarike.',
      telugu: 'స్వీటీ దీదీ యాప్ పూర్తి గైడ్. అన్ని ఫీచర్ల వివరణాత్మక వివరణ మరియు వాడే విధానం.',
    },
    icon: 'HelpCircle',
    color: 'blue-500',
    gradient: 'from-blue-100 to-blue-200'
  }
];