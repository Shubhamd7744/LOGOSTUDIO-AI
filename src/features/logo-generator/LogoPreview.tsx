import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Download, RefreshCw } from 'lucide-react';

export const LogoPreview: React.FC = () => {
  // TODO: Replace with actual logo state from context/store
  const [isGenerating, setIsGenerating] = React.useState(false);

  const handleDownload = () => {
    // TODO: Implement download functionality
    console.log('Downloading logo...');
  };

  const handleRegenerate = () => {
    // TODO: Implement regeneration functionality
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-semibold">Logo Preview</h2>
          
          {/* Placeholder for the logo preview */}
          <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Your logo will appear here</p>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={handleRegenerate}
              disabled={isGenerating}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Regenerate'}
            </Button>
            
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          <div className="w-full space-y-4">
            <h3 className="font-medium">Export Options</h3>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">SVG</Button>
              <Button variant="outline" className="w-full">PNG</Button>
              <Button variant="outline" className="w-full">PDF</Button>
              <Button variant="outline" className="w-full">JPG</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 