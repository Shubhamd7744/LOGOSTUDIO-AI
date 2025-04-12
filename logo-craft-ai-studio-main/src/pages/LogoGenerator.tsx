import React from 'react';
import { LogoPromptForm } from '../features/logo-generator/LogoPromptForm';
import { LogoPreview } from '../features/logo-generator/LogoPreview';
import { LogoCustomization } from '../features/logo-generator/LogoCustomization';

export const LogoGenerator: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Logo Generator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <LogoPromptForm />
          <LogoCustomization />
        </div>
        <div className="sticky top-8">
          <LogoPreview />
        </div>
      </div>
    </div>
  );
}; 