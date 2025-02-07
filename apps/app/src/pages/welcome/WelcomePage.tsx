import { ArrowRight, Box, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WelcomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-background/50 p-6">
      <div className="max-w-3xl text-center space-y-8">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          IA Flow Builder Page
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground">
          This area is under construction
        </p>
      </div>
    </div>
  );
} 