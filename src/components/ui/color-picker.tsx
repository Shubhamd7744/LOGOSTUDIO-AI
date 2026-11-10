import React from 'react';
import { Label } from './label';
import { Input } from './input';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="h-8 w-8 rounded-md border" 
        style={{ backgroundColor: value }}
      />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24"
      />
      <Input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-8 cursor-pointer"
      />
    </div>
  );
}; 