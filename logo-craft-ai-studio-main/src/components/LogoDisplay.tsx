
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';

interface LogoDisplayProps {
  logoUrl: string | null;
  isLoading: boolean;
  onRegenerate: () => void;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logoUrl, isLoading, onRegenerate }) => {
  const handleDownload = () => {
    if (!logoUrl) return;
    
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = logoUrl;
    link.download = 'logo-craft-ai.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="w-full overflow-hidden">
      <div className="aspect-square bg-muted relative flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin-slow"></div>
            <p className="mt-4 text-sm text-muted-foreground">Our AI is crafting your perfect logo...</p>
          </div>
        ) : logoUrl ? (
          <img 
            src={logoUrl} 
            alt="Generated Logo" 
            className="object-contain w-full h-full p-4 animate-in logo-shadow"
          />
        ) : (
          <div className="text-center p-8">
            <p className="text-lg font-medium">Your logo will appear here</p>
            <p className="text-sm text-muted-foreground mt-2">
              Fill in the form and click "Generate Logo" to create your custom logo
            </p>
          </div>
        )}
      </div>
      
      {logoUrl && (
        <div className="p-4 flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={onRegenerate}
            disabled={isLoading}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Regenerate
          </Button>
          
          <Button 
            className="flex-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
            onClick={handleDownload}
            disabled={isLoading}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      )}
    </Card>
  );
};

export default LogoDisplay;
