
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Example logos for the gallery
const exampleLogos = [
  {
    id: 1,
    name: 'Chem',
    industry: 'Cosmetics',
    color: 'bg-pink-50',
    imageUrl: 'https://images.unsplash.com/photo-1602664876866-d3b33d0fbdcc?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'First Bite',
    industry: 'Restaurant',
    color: 'bg-red-100',
    imageUrl: 'https://images.unsplash.com/photo-1602664806195-a2c97333d994?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Twinkle',
    industry: 'Entertainment',
    color: 'bg-blue-100',
    imageUrl: 'https://images.unsplash.com/photo-1602664798245-9c78d8f8b42d?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Ultrax',
    industry: 'Technology',
    color: 'bg-indigo-900',
    textColor: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1602664812663-fe11fb0395cf?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Sunshine',
    industry: 'Travel',
    color: 'bg-yellow-100',
    imageUrl: 'https://images.unsplash.com/photo-1602664798245-9c78d8f8b42d?q=80&w=300&h=300&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'BAR',
    industry: 'Nightlife',
    color: 'bg-purple-900',
    textColor: 'text-white',
    imageUrl: 'https://images.unsplash.com/photo-1602664812663-fe11fb0395cf?q=80&w=300&h=300&auto=format&fit=crop'
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="examples" className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-display font-semibold mb-3">Check out our AI-generated logos</h2>
          <p className="text-gray-600 mb-8">
            Discover what our AI can create for various industries and styles
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleLogos.map((logo) => (
            <Card key={logo.id} className={`overflow-hidden border-0 shadow-sm ${logo.color}`}>
              <div className="aspect-square p-8 flex items-center justify-center">
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="object-contain max-h-full"
                />
              </div>
              <div className={`p-4 ${logo.textColor || 'text-gray-900'}`}>
                <h3 className="font-display font-medium text-lg">{logo.name}</h3>
                <p className={`text-sm ${logo.textColor || 'text-gray-600'}`}>{logo.industry}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            View more examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
