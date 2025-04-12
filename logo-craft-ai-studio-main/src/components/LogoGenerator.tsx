
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { generateLogo } from '@/lib/logoService';
import { Wand2 } from 'lucide-react';

export interface LogoOptions {
  businessName: string;
  industry: string;
  style: string;
  color: string;
  customPrompt?: string;
}

interface LogoGeneratorProps {
  onLogoGenerated: (logoUrl: string) => void;
  setIsLoading: (loading: boolean) => void;
}

const industries = [
  "Technology", "Food & Restaurant", "Health & Wellness", "Finance", 
  "Education", "E-commerce", "Entertainment", "Real Estate",
  "Fashion", "Travel", "Sport", "Automotive", "Art & Design"
];

const styles = [
  "Minimalist", "Modern", "Vintage", "Playful", "Elegant", 
  "Bold", "Abstract", "3D", "Hand-drawn", "Geometric"
];

const colors = [
  "Blue", "Red", "Green", "Purple", "Orange", 
  "Black", "Pink", "Teal", "Yellow", "Multi-color"
];

const LogoGenerator: React.FC<LogoGeneratorProps> = ({ onLogoGenerated, setIsLoading }) => {
  const [logoOptions, setLogoOptions] = useState<LogoOptions>({
    businessName: '',
    industry: 'Technology',
    style: 'Minimalist',
    color: 'Blue'
  });
  const [activeTab, setActiveTab] = useState('basic');
  const [complexity, setComplexity] = useState([50]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogoOptions({
      ...logoOptions,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setLogoOptions({
      ...logoOptions,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!logoOptions.businessName) return;
    
    setIsLoading(true);
    try {
      const complexityValue = complexity[0];
      const logoUrl = await generateLogo({
        ...logoOptions,
        complexity: complexityValue
      });
      onLogoGenerated(logoUrl);
    } catch (error) {
      console.error('Error generating logo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="basic" className="w-full" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="basic">Basic Options</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input 
                  id="businessName" 
                  name="businessName" 
                  placeholder="Enter your business name" 
                  value={logoOptions.businessName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('industry', value)} 
                  defaultValue={logoOptions.industry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="style">Logo Style</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('style', value)} 
                  defaultValue={logoOptions.style}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style} value={style}>{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="color">Color Theme</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('color', value)} 
                  defaultValue={logoOptions.color}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select color theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map((color) => (
                      <SelectItem key={color} value={color}>{color}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customPrompt">Custom Description (Optional)</Label>
                <Input 
                  id="customPrompt" 
                  name="customPrompt" 
                  placeholder="Describe specific elements you want in your logo" 
                  value={logoOptions.customPrompt || ''}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Complexity</Label>
                <div className="pt-4">
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={10}
                    value={complexity}
                    onValueChange={setComplexity}
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Simple</span>
                    <span>Complex</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Logo
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LogoGenerator;
