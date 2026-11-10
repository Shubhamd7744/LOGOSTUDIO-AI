import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Slider } from '../../components/ui/slider';
import { Label } from '../../components/ui/label';
import { ColorPicker } from '../../components/ui/color-picker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';

export const LogoCustomization: React.FC = () => {
  const [primaryColor, setPrimaryColor] = React.useState('#000000');
  const [secondaryColor, setSecondaryColor] = React.useState('#FFFFFF');
  const [complexity, setComplexity] = React.useState(50);
  const [symmetry, setSymmetry] = React.useState(75);

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Customization</h2>
        
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <div className="space-y-4">
              <Label>Primary Color</Label>
              <ColorPicker
                value={primaryColor}
                onChange={setPrimaryColor}
              />
            </div>

            <div className="space-y-4">
              <Label>Secondary Color</Label>
              <ColorPicker
                value={secondaryColor}
                onChange={setSecondaryColor}
              />
            </div>
          </TabsContent>

          <TabsContent value="style" className="space-y-6">
            <div className="space-y-4">
              <Label>Complexity</Label>
              <Slider
                value={[complexity]}
                onValueChange={([value]) => setComplexity(value)}
                min={0}
                max={100}
                step={1}
              />
              <p className="text-sm text-gray-500">
                Adjust the level of detail in your logo
              </p>
            </div>

            <div className="space-y-4">
              <Label>Symmetry</Label>
              <Slider
                value={[symmetry]}
                onValueChange={([value]) => setSymmetry(value)}
                min={0}
                max={100}
                step={1}
              />
              <p className="text-sm text-gray-500">
                Control the balance and symmetry of your logo
              </p>
            </div>
          </TabsContent>

          <TabsContent value="layout" className="space-y-6">
            <div className="space-y-4">
              <Label>Text Position</Label>
              <div className="grid grid-cols-3 gap-2">
                <button className="p-2 border rounded">Top</button>
                <button className="p-2 border rounded">Center</button>
                <button className="p-2 border rounded">Bottom</button>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Icon Size</Label>
              <Slider
                value={[50]}
                min={0}
                max={100}
                step={1}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}; 