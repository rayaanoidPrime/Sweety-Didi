import { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'health',
    title: {
      hindi: 'स्वास्थ्य सलाह',
      hinglish: 'Health ki Salah',
      telugu: 'ఆరోగ్య సలహా',
    },
    description: {
      hindi: 'आपके स्वास्थ्य और सुरक्षा के लिए महत्वपूर्ण जानकारी',
      hinglish: 'Aapki health aur safety ke liye important information',
      telugu: 'మీ ఆరోగ్యం మరియు భద్రత కోసం ముఖ్యమైన సమాచారం',
    },
    icon: 'HeartPulse'
  },
  {
    id: 'legal',
    title: {
      hindi: 'कानूनी अधिकार',
      hinglish: 'Legal Rights',
      telugu: 'చట్టపరమైన హక్కులు',
    },
    description: {
      hindi: 'अपने कानूनी अधिकारों को जानें',
      hinglish: 'Apne legal rights ke bare mein janein',
      telugu: 'మీ చట్టపరమైన హక్కులను తెలుసుకోండి',
    },
    icon: 'Scale'
  },
  {
    id: 'safety',
    title: {
      hindi: 'सुरक्षा टिप्स',
      hinglish: 'Safety Tips',
      telugu: 'భద్రతా చిట్కాలు',
    },
    description: {
      hindi: 'अपनी सुरक्षा के लिए महत्वपूर्ण सुझाव',
      hinglish: 'Apni safety ke liye important tips',
      telugu: 'మీ భద్రత కోసం ముఖ్యమైన చిట్కాలు',
    },
    icon: 'Shield'
  },
  {
    id: 'support',
    title: {
      hindi: 'सहायता नेटवर्क',
      hinglish: 'Support Network',
      telugu: 'మద్దతు నెట్‌వర్క్',
    },
    description: {
      hindi: 'सहायता और समर्थन के लिए संसाधन',
      hinglish: 'Help aur support ke liye resources',
      telugu: 'సహాయం మరియు మద్దతు కోసం వనరులు',
    },
    icon: 'Users'
  }
];