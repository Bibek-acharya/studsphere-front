
import { University, College } from './types';

export const MOCK_UNIVERSITIES: University[] = [
  {
    id: '1',
    name: 'Tribhuwan University',
    location: 'KamalPokari, Kathmandu',
    rating: 4.2,
    type: 'Private',
    rank: 156,
    isPopular: true,
    programsCount: 120,
    collegesCount: '2k+',
    popularPrograms: ['BBA', 'information Technology', 'BCA'],
    logo: 'https://picsum.photos/seed/tu/80/80'
  },
  {
    id: '2',
    name: 'Kathmandu University',
    location: 'Dhulikhel, Kavre',
    rating: 4.5,
    type: 'Private',
    rank: 120,
    isPopular: true,
    programsCount: 150,
    collegesCount: '1k+',
    popularPrograms: ['Engineering', 'MBBS', 'Management'],
    logo: 'https://picsum.photos/seed/ku/80/80'
  },
  {
    id: '3',
    name: 'Pokhara University',
    location: 'Lekhnath, Pokhara',
    rating: 4.0,
    type: 'Public',
    rank: 210,
    isPopular: false,
    programsCount: 85,
    collegesCount: '500+',
    popularPrograms: ['BE', 'BBA', 'BIT'],
    logo: 'https://picsum.photos/seed/pu/80/80'
  },
  {
    id: '4',
    name: 'Purbanchal University',
    location: 'Biratnagar, Morang',
    rating: 3.8,
    type: 'Public',
    rank: 345,
    isPopular: true,
    programsCount: 110,
    collegesCount: '800+',
    popularPrograms: ['BCA', 'BBA', 'Engineering'],
    logo: 'https://picsum.photos/seed/purb/80/80'
  }
];

export const MOCK_COLLEGES: College[] = Array.from({ length: 15 }).map((_, i) => ({
  id: `c${i}`,
  universityId: (i % 4 + 1).toString(),
  name: 'Advance Academy College',
  rating: 4.5,
  reviews: 209,
  affiliation: 'Tu Affiliation',
  type: 'Private',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Huawei_Logo.svg' // Using Huawei as per screenshot
}));
