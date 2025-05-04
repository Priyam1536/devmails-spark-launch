
import React from 'react';
import HeroContent from '@/components/HeroContent';
import SplineViewer from '@/components/SplineViewer';
import PageLayout from '@/components/PageLayout';

const Index = () => {
  return (
    <PageLayout>
      <HeroContent />
      <SplineViewer url="https://prod.spline.design/ddIki0TszSWcJFtp/scene.splinecode" />
    </PageLayout>
  );
};

export default Index;
