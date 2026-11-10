
import React, { useState } from 'react';
import Header from '@/components/Header';
import LogoGenerator from '@/components/LogoGenerator';
import LogoDisplay from '@/components/LogoDisplay';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, PenTool, Download, Image, Code } from 'lucide-react';

const Index = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoGenerated = (url: string) => {
    setLogoUrl(url);
  };

  const handleRegenerate = () => {
    setIsLoading(true);
    // In a real app, this would trigger a new API call with the same parameters
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-grid">
          <div className="container py-16 md:py-24">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                  <Sparkles className="mr-1 h-3 w-3" /> AI-Powered
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                <span className="gradient-text">Create Stunning Logos</span> with AI in Seconds
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Design the perfect logo for your brand with our AI-powered logo generator. No design skills required.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
        
        {/* Logo Generator Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Design Your Logo</h2>
                <p className="text-muted-foreground mb-6">
                  Fill in the details below and our AI will generate a unique logo tailored to your brand.
                </p>
                <LogoGenerator 
                  onLogoGenerated={handleLogoGenerated}
                  setIsLoading={setIsLoading}
                />
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Your Custom Logo</h2>
                <p className="text-muted-foreground mb-6">
                  Preview your logo here. You can download it or regenerate if you want something different.
                </p>
                <LogoDisplay 
                  logoUrl={logoUrl} 
                  isLoading={isLoading}
                  onRegenerate={handleRegenerate}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-2">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create and manage professional logos for your brand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Instant Generation</h3>
                  <p className="text-muted-foreground">
                    Create logos in seconds with our state-of-the-art AI technology.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <PenTool className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Customizable Designs</h3>
                  <p className="text-muted-foreground">
                    Tailor your logo with industry-specific styles, colors, and elements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">High-Resolution Export</h3>
                  <p className="text-muted-foreground">
                    Download your logos in high quality formats ready for print and digital use.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Logo Variations</h3>
                  <p className="text-muted-foreground">
                    Generate multiple design options to find the perfect match for your brand.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Prompt Engineering</h3>
                  <p className="text-muted-foreground">
                    Advanced AI understanding of design principles and brand aesthetics.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 p-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">AI Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get intelligent suggestions for improvements based on design best practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-2">Simple Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your needs. No hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium">Free</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$0</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>3 logo generations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Basic customization</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>PNG downloads</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="w-full">Try for Free</Button>
                </CardContent>
              </Card>
              
              <Card className="border-primary shadow-lg">
                <CardContent className="pt-6">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium">Pro</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$19</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Unlimited generations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Advanced customization</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>PNG & SVG downloads</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Logo history & editing</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">Get Started</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-medium">Enterprise</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">$49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Brand kit & guidelines</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span>API access</span>
                    </li>
                  </ul>
                  
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to create your perfect logo?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of businesses who have created their brand identity with LogoCraft AI.
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
