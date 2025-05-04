
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroContent from '@/components/HeroContent';
import SplineViewer from '@/components/SplineViewer';
import GradientBackground from '@/components/GradientBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />
      <div className="container mx-auto relative">
        <Navbar />
        <main className="flex justify-center min-h-[calc(90vh-6rem)] flex-col pt-10 md:pt-0">
          <HeroContent />
        </main>
      </div>
      <SplineViewer url="https://prod.spline.design/ddIki0TszSWcJFtp/scene.splinecode" />
    </div>
  );
};

export default Index;
