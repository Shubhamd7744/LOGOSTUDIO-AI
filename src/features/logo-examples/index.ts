export interface LogoExample {
  id: string;
  name: string;
  description: string;
  bgColor: string;
  textColor: string;
  imageUrl?: string;
}

export const featuredLogos: LogoExample[] = [
  {
    id: '1',
    name: 'diem',
    description: 'Financial services brand',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
  },
  {
    id: '2',
    name: 'ELEVATE',
    description: 'Lifestyle and wellness brand',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
  },
  {
    id: '3',
    name: 'WAVE',
    description: 'Technology innovation company',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
  },
  {
    id: '4',
    name: 'FIRST BITE',
    description: 'Premium food delivery service',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
  },
  {
    id: '5',
    name: 'MAPLE',
    description: 'Sustainable furniture business',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-900',
  },
];

export const showcaseLogos: LogoExample[] = [
  {
    id: '6',
    name: 'ULTRAX',
    description: 'Premium audio equipment brand',
    bgColor: 'bg-indigo-900',
    textColor: 'text-yellow-400',
  },
  {
    id: '7',
    name: 'NOVO',
    description: 'Modern architecture studio',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
  },
  {
    id: '8',
    name: 'RAW',
    description: 'Organic food company',
    bgColor: 'bg-green-700',
    textColor: 'text-white',
  },
];

export const colorPalettes = [
  { from: 'from-purple-500', to: 'to-indigo-600' },
  { from: 'from-blue-500', to: 'to-teal-400' },
  { from: 'from-red-500', to: 'to-pink-500' },
  { from: 'from-amber-500', to: 'to-red-500' },
  { from: 'from-green-500', to: 'to-emerald-500' },
  { from: 'from-indigo-500', to: 'to-purple-500' },
  { from: 'from-pink-500', to: 'to-rose-500' },
  { from: 'from-yellow-400', to: 'to-orange-500' },
  { from: 'from-teal-400', to: 'to-cyan-500' },
  { from: 'from-fuchsia-500', to: 'to-pink-500' },
]; 