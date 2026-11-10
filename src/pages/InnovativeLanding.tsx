import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { featuredLogos, showcaseLogos, colorPalettes } from '../features/logo-examples';

// Interactive cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      animate={{ 
        x: position.x - 16, 
        y: position.y - 16,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      <div className="w-8 h-8 bg-white rounded-full" />
    </motion.div>
  );
};

// Particle background component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{ 
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20 + Math.random() * 30,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Horizontal scrolling section
const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full overflow-x-hidden py-16">
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      </div>
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// Interactive logo card
const LogoCard = ({ logo }: { logo: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative p-8 rounded-lg overflow-hidden ${logo.bgColor} cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      animate={{ 
        y: isHovered ? -10 : 0,
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 0 0 0 rgba(0, 0, 0, 0)' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className={`text-4xl font-bold ${logo.textColor} text-center mb-4`}
        animate={{ scale: isHovered ? 1.1 : 1 }}
      >
        {logo.name}
      </motion.div>
      <motion.p 
        className="text-sm text-center"
        animate={{ opacity: isHovered ? 1 : 0.7 }}
      >
        {logo.description}
      </motion.p>
      
      {isHovered && (
        <motion.div 
          className="absolute bottom-4 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/generator">
            <Button variant="default" size="sm" className="bg-white/90 text-indigo-900 hover:bg-white">
              Try this style
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

// Main innovative landing page
const InnovativeLanding = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      let newActiveSection = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          newActiveSection = index;
        }
      });
      
      setActiveSection(newActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Sections for vertical navigation
  const sections = [
    "Intro",
    "Create",
    "Showcase",
    "Interactive",
    "Features"
  ];
  
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white min-h-screen">
      <CustomCursor />
      <ParticleBackground />
      
      {/* Vertical side navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col items-center space-y-4">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="group flex items-center cursor-pointer"
              animate={{ 
                opacity: activeSection === i ? 1 : 0.5,
                x: activeSection === i ? -10 : 0
              }}
              onClick={() => {
                const targetSection = document.querySelectorAll('section')[i];
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className={`w-2 h-2 rounded-full ${activeSection === i ? 'bg-white' : 'bg-gray-400'} group-hover:bg-white`} />
              <div className="ml-3 text-sm origin-left opacity-0 group-hover:opacity-100 transition-opacity">
                {section}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hero section with 3D scroll effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-10"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        >
          <div className="text-[40rem] font-bold text-white/5">AI</div>
        </motion.div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 text-transparent bg-clip-text">
                Redefine Your Brand
              </h1>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                The next evolution in AI-powered identity creation. 
                Transform your vision into stunning visual logos in seconds.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/generator">
                <Button className="relative px-10 py-6 text-lg bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 transition-all group overflow-hidden">
                  <span className="relative z-10">Create Your Logo</span>
                  <motion.div 
                    className="absolute inset-0 bg-white z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween" }}
                  />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
              <p className="text-sm mt-2">Scroll to explore</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Interactive logo creation section */}
      <section className="min-h-screen py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold mb-8">Creative Control <br />Without Limits</h2>
                <p className="text-xl mb-8 text-indigo-100">
                  Our AI-powered system adapts to your vision, not the other way around.
                  Take control with intuitive tools that understand your creative intent.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Text-to-logo generation",
                    "Style customization",
                    "Color harmony intelligence",
                    "Vector-first output"
                  ].map((feature, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <p>{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link to="/generator">
                    <Button className="bg-white text-indigo-900 hover:bg-indigo-100">
                      Start Designing
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.div
                className="relative z-10 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-medium">Logo Generator</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-indigo-950/50 p-6 rounded-lg mb-6">
                  <p className="text-sm text-indigo-200 mb-2">Describe your brand:</p>
                  <div className="bg-white/10 p-3 rounded">
                    <p className="text-sm">A modern, tech-focused company that creates innovative software solutions for small businesses...</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {colorPalettes.slice(0, 4).map((palette, i) => (
                    <div 
                      key={i}
                      className={`h-12 rounded-md bg-gradient-to-r ${palette.from} ${palette.to}`}
                    ></div>
                  ))}
                </div>
                
                <div className="flex justify-center p-8 bg-black/20 rounded-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    QUANTUM
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl transform translate-x-4 translate-y-4 z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Horizontal scrolling logo showcase */}
      <HorizontalScroll>
        {showcaseLogos.concat(featuredLogos).map((logo) => (
          <div key={logo.id} className="inline-block px-4 min-w-[300px]">
            <LogoCard logo={logo} />
          </div>
        ))}
      </HorizontalScroll>
      
      {/* Parallax effect gallery section */}
      <section className="min-h-screen py-24 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Endless Possibilities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => {
              const randomLogo = [...featuredLogos, ...showcaseLogos][i % (featuredLogos.length + showcaseLogos.length)];
              return (
                <motion.div
                  key={i}
                  className="relative h-80 rounded-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className={`absolute inset-0 ${randomLogo.bgColor} flex items-center justify-center`}>
                    <motion.div 
                      className={`${randomLogo.textColor} text-4xl font-bold`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      {randomLogo.name}
                    </motion.div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <p className="font-bold text-xl mb-2">{randomLogo.name}</p>
                      <p className="text-sm text-gray-200 mb-4">{randomLogo.description}</p>
                      <Link to="/generator">
                        <Button variant="default" size="sm" className="bg-white/90 text-indigo-900 hover:bg-white">
                          Customize
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Interactive 3D feature section */}
      <section className="min-h-screen py-24 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-800/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-xl text-indigo-100">
                Our platform combines cutting-edge AI with intuitive design tools
                to deliver a revolutionary logo creation experience.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  title: "AI-Powered Precision",
                  description: "Trained on millions of professional logos to understand design principles and brand aesthetics.",
                  icon: "✨"
                },
                {
                  title: "Vector-First Approach",
                  description: "Get scalable SVG files that look perfect at any size, from favicon to billboard.",
                  icon: "⚡"
                },
                {
                  title: "Complete Ownership",
                  description: "100% rights to your generated logos with no recurring fees or attribution requirements.",
                  icon: "🔒"
                },
                {
                  title: "Rapid Iteration",
                  description: "Generate hundreds of options in seconds and refine them until they're perfect.",
                  icon: "🔄"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -left-10 top-0 text-3xl">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-indigo-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/generator">
                <Button className="bg-white text-indigo-900 hover:bg-indigo-100 text-lg px-8 py-6">
                  Start Creating For Free
                </Button>
              </Link>
              <p className="mt-4 text-sm text-indigo-200">No credit card required • Free plan available</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer with scroll interaction */}
      <footer className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">LogoStudio AI</h3>
              <p className="text-indigo-200 mb-6">
                The future of brand identity creation, powered by advanced AI models.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Examples", "Learn"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Contact"]
              },
              {
                title: "Resources",
                links: ["Help Center", "API", "Status", "Partners"]
              }
            ].map((column, i) => (
              <div key={i}>
                <h3 className="font-bold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-200 text-sm">
              © 2023 LogoStudio AI. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-6 md:mt-0">
              {["Terms", "Privacy", "Cookies"].map((item, i) => (
                <a key={i} href="#" className="text-indigo-200 hover:text-white text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/generator" className="inline-block group">
              <span className="block text-sm uppercase tracking-wider mb-2 text-indigo-300 group-hover:text-white transition-colors">
                Ready to start?
              </span>
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text group-hover:from-white group-hover:to-white transition-all">
                Create Your Logo Now →
              </span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      </footer>
    </div>
  );
};

export default InnovativeLanding; 