import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { featuredLogos, showcaseLogos, colorPalettes } from '../features/logo-examples';
import { Navbar } from '../components/ui/navbar';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Free AI Logo Generator</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning, professional logos in seconds with our AI-powered logo generator.
            No design skills required!
          </p>
          <Link to="/generator">
            <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Sample Logo Showcase */}
      <section className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/3d-assets/hero.svg" 
              alt="3D Logo Examples" 
              className="w-full rounded-lg mb-16"
            />
            
            <h2 className="text-2xl font-bold mb-2 text-center">Explore logos we've helped brands create</h2>
            <p className="text-gray-600 mb-8 text-center">Trusted by professionals</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {featuredLogos.slice(0, 5).map((logo, index) => (
                <div 
                  key={logo.id} 
                  className={`${logo.bgColor} p-4 rounded-lg ${index === 1 || index === 2 ? 'col-span-2' : ''}`}
                >
                  <div className={`flex items-center justify-center h-32 ${logo.textColor} font-bold text-2xl`}>
                    {logo.name}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{logo.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Design a stunning custom logo with AI</h2>
            <p className="text-gray-600">Try our logo creator today</p>
          </div>
          <div className="flex justify-center">
            <Link to="/generator">
              <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2">
                Create Your Logo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore color combinations</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {colorPalettes.map((palette, index) => (
              <div 
                key={index} 
                className={`aspect-square bg-gradient-to-br ${palette.from} ${palette.to} rounded-lg`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase 2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {showcaseLogos.map((logo) => (
            <div key={logo.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">{logo.name}</h3>
                <p className="text-gray-600 mb-4">{logo.description}</p>
                <Link to="/generator">
                  <Button variant="outline" className="self-start">
                    Create Yours
                  </Button>
                </Link>
              </div>
              <div className={`${logo.bgColor} rounded-lg p-16 flex items-center justify-center`}>
                <div className={`${logo.textColor} text-4xl font-bold`}>{logo.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Powerful Tools - Everything Your Business Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Design</h3>
              <p className="text-gray-600 text-sm">Create professional logos in seconds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">High Resolution</h3>
              <p className="text-gray-600 text-sm">Export in multiple formats</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">100% Ownership</h3>
              <p className="text-gray-600 text-sm">Full commercial rights</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Want to try creating your own logo?</h2>
          <Link to="/generator">
            <Button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2">
              Generate Logo Now
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">The quickest timeline for your logo design</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Enter details', desc: 'Describe your business' },
              { step: 2, title: 'Generate', desc: 'AI creates options' },
              { step: 3, title: 'Customize', desc: 'Refine your design' },
              { step: 4, title: 'Download', desc: 'Get your files' },
              { step: 5, title: 'Use', desc: 'Build your brand' }
            ].map((item) => (
              <div key={item.step} className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="text-sm text-gray-500 mb-2">{item.step}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              "How does the AI logo maker work?",
              "Can I edit my logo after I generate it?",
              "Do I own full rights to my logo?",
              "How many logo variations can I generate?",
              "Can I use my logo for commercial purposes?",
              "What file formats do I receive?"
            ].map((question, i) => (
              <div key={i} className="border-b py-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{question}</p>
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get started for free</h2>
            <Link to="/generator">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-2">
                Create Logo Now
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-4xl mx-auto">
            {["Home", "Features", "Pricing", "About", "Contact", "Blog", "Login", "Sign Up", "Terms", "Privacy"].map((item, i) => (
              <div key={i} className="text-sm">{item}</div>
            ))}
          </div>
          
          <div className="text-center text-sm opacity-80">
            © 2023 LogoStudio AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 