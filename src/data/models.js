// Dados dos modelos sem importações fixas de imagens
const models = [
  {
    id: '1',
    name: 'Sophia Martinez',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Editorial, Commercial',
    location: 'São Paulo, SP',
    age: 24,
    price: 200,
    currency: 'USD',
    verified: true,
    top: true,
    featured: false,
    hasRecorded: true,
    rating: 4.8,
    reviewCount: 156,
    isOnline: true,
    lastSeen: 'online',
    description: 'Modelo profissional especializada em fotografia editorial e comercial. Experiência internacional.',
    badges: ['🔥 NOVA', '👑 VIP'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '2',
    name: 'Alexandre King',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Runway, Fitness',
    location: 'São Paulo, SP',
    age: 22,
    price: 180,
    currency: 'USD',
    verified: true,
    top: false,
    featured: true,
    hasRecorded: false,
    rating: 4.9,
    reviewCount: 89,
    isOnline: false,
    lastSeen: 'Visto por último 2h atrás',
    description: 'Especialista em runway e fitness modeling com portfólio diversificado e experiência em campanhas de moda.',
    badges: ['🎥 Vídeo novo'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      twitter: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '3',
    name: 'Jasmine Taylor',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Commercial, Print',
    location: 'São Paulo, SP',
    age: 26,
    price: 220,
    currency: 'USD',
    verified: false,
    top: true,
    featured: false,
    hasRecorded: true,
    rating: 4.6,
    reviewCount: 203,
    isOnline: true,
    lastSeen: 'online',
    description: 'Modelo versátil com experiência em fotografia comercial e campanhas publicitárias de grande escala.',
    badges: ['💬 Responde rápido'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '4',
    name: 'Luna Rivera',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Glamour, Editorial',
    location: 'São Paulo, SP',
    age: 23,
    price: 190,
    currency: 'USD',
    verified: true,
    top: false,
    featured: false,
    hasRecorded: false,
    rating: 4.7,
    reviewCount: 127,
    isOnline: false,
    lastSeen: 'Visto por último 5m atrás',
    description: 'Focada em glamour e editorial fashion, com trabalhos publicados em revistas internacionais.',
    badges: [],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '5',
    name: 'Marcus Johnson',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Lifestyle, Fitness',
    location: 'São Paulo, SP',
    age: 25,
    price: 210,
    currency: 'USD',
    verified: false,
    top: true,
    featured: true,
    hasRecorded: true,
    rating: 4.5,
    reviewCount: 78,
    isOnline: true,
    lastSeen: 'online',
    description: 'Especialista em lifestyle e fitness, trabalha com grandes marcas esportivas e de bem-estar.',
    badges: ['👑 VIP', '🔥 NOVA'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '6',
    name: 'Victoria Chen',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Editorial, Runway',
    location: 'São Paulo, SP',
    age: 21,
    price: 170,
    currency: 'USD',
    verified: true,
    top: false,
    featured: false,
    hasRecorded: false,
    rating: 4.9,
    reviewCount: 234,
    isOnline: false,
    lastSeen: 'Visto por último 1h atrás',
    description: 'Jovem talento com forte presença em editoriais e passarelas de moda contemporânea.',
    badges: ['💬 Responde rápido'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1374509/pexels-photo-1374509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '7',
    name: 'Ava Madison',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'High Fashion, Commercial',
    location: 'São Paulo, SP',
    age: 27,
    price: 250,
    currency: 'USD',
    verified: true,
    top: true,
    featured: false,
    hasRecorded: true,
    rating: 4.8,
    reviewCount: 189,
    isOnline: true,
    lastSeen: 'online',
    description: 'Modelo de alta costura com experiência em campanhas de luxo e fashion weeks internacionais.',
    badges: ['🎥 Vídeo novo', '👑 VIP'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      twitter: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1989748/pexels-photo-1989748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '8',
    name: 'Elijah Wright',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Commercial, Print',
    location: 'Rio de Janeiro, RJ',
    age: 24,
    price: 195,
    currency: 'USD',
    verified: false,
    top: false,
    featured: false,
    hasRecorded: false,
    rating: 4.4,
    reviewCount: 67,
    isOnline: false,
    lastSeen: 'Visto por último 3h atrás',
    description: 'Focado em fotografia comercial e campanhas print, com estilo natural e autêntico.',
    badges: [],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '9',
    name: 'Isabella Costa',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Fashion, Lifestyle',
    location: 'Rio de Janeiro, RJ',
    age: 23,
    price: 300,
    currency: 'BRL',
    verified: true,
    top: false,
    featured: true,
    hasRecorded: true,
    rating: 4.7,
    reviewCount: 145,
    isOnline: true,
    lastSeen: 'online',
    description: 'Modelo brasileira com forte presença na moda nacional e internacional, especialista em lifestyle.',
    badges: ['🔥 NOVA', '💬 Responde rápido'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: '10',
    name: 'Lucas Pereira',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Commercial, Fitness',
    location: 'Rio de Janeiro, RJ',
    age: 22,
    price: 280,
    currency: 'BRL',
    verified: false,
    top: true,
    featured: false,
    hasRecorded: false,
    rating: 4.6,
    reviewCount: 92,
    isOnline: false,
    lastSeen: 'Visto por último 30m atrás',
    description: 'Modelo fitness com experiência em campanhas comerciais e publicidade esportiva.',
    badges: ['🎥 Vídeo novo'],
    image: null, // Será preenchido dinamicamente
    socialMedia: {
      instagram: '#'
    },
    gallery: [
      null, // Será preenchido dinamicamente
      'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
];

export default models;
