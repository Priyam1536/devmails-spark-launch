
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import GradientBackground from './GradientBackground';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GradientBackground />
      <div className="container mx-auto relative">
        <Navbar />
        <main className={`flex justify-center min-h-[calc(90vh-6rem)] flex-col pt-10 md:pt-0 ${className}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
