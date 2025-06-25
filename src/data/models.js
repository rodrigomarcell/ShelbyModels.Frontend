import modelo1 from '../assets/img/modelo1.png'
import modelo2 from '../assets/img/modelo2.png'
import modelo3 from '../assets/img/modelo3.png'
import modelo4 from '../assets/img/modelo4.png'
import modelo5 from '../assets/img/modelo5.png'
import modelo6 from '../assets/img/modelo6.png'
import modelo7 from '../assets/img/modelo7.png'
import modelo8 from '../assets/img/modelo8.png'
import modelo9 from '../assets/img/modelo9.png'
import modelo10 from '../assets/img/modelo10.png'

// Sample model data
const models = [
  {
    id: '1',
    name: 'Sophia Martinez',
    category: 'Companionships',
    gender: 'Girls',
    specialty: 'Editorial, Commercial',
    location: 'New York, NY',
    verified: true,
    top: true,
    image: modelo1,
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      modelo1,
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
    location: 'Los Angeles, CA',
    verified: true,
    top: false,
    image: modelo2,
    socialMedia: {
      instagram: '#',
      twitter: '#'
    },
    gallery: [
      modelo2,
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
    location: 'Miami, FL',
    verified: false,
    top: true,
    image: modelo3,
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      modelo3,
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
    location: 'Chicago, IL',
    verified: true,
    top: false,
    image: modelo4,
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      modelo4,
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
    location: 'Atlanta, GA',
    verified: false,
    top: true,
    image: modelo5,
    socialMedia: {
      instagram: '#'
    },
    gallery: [
      modelo5,
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
    location: 'San Francisco, CA',
    verified: true,
    top: false,
    image: modelo6,
    socialMedia: {
      instagram: '#',
      twitter: '#',
      tiktok: '#'
    },
    gallery: [
      modelo6,
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
    location: 'Dallas, TX',
    verified: true,
    top: true,
    image: modelo7,
    socialMedia: {
      instagram: '#',
      twitter: '#'
    },
    gallery: [
      modelo7,
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
    location: 'Seattle, WA',
    verified: false,
    top: false,
    image: modelo8,
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      modelo8,
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
    verified: true,
    top: false,
    image: modelo9,
    socialMedia: {
      instagram: '#',
      tiktok: '#'
    },
    gallery: [
      modelo9,
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
    location: 'São Paulo, SP',
    verified: false,
    top: true,
    image: modelo10,
    socialMedia: {
      instagram: '#'
    },
    gallery: [
      modelo10,
      'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
]

export default models