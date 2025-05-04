
import React from 'react';
import HeroContent from '@/components/HeroContent';
import SplineViewer from '@/components/SplineViewer';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check, ChevronRight, Lock, Mail, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section with 3D model */}
      <section className="relative min-h-[90vh] flex items-center">
        <HeroContent />
        <SplineViewer url="https://prod.spline.design/ddIki0TszSWcJFtp/scene.splinecode" />
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Powerful Email Features for Developers</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to send transactional and marketing emails that reach humans instead of spam folders.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Mail size={24} />}
              title="Transactional Emails"
              description="Send order confirmations, receipts, and notification emails with guaranteed delivery."
            />
            <FeatureCard 
              icon={<Zap size={24} />}
              title="High Deliverability"
              description="Sophisticated infrastructure ensures your emails land in inboxes, not spam folders."
            />
            <FeatureCard 
              icon={<Shield size={24} />}
              title="Advanced Security"
              description="SPF, DKIM, and DMARC authentication to protect your domain reputation."
            />
          </div>
        </div>
      </section>
      
      {/* API Section */}
      <section className="py-20 bg-black/10 backdrop-blur-sm px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Simple API for Developers</h2>
              <p className="text-gray-500 mb-6">Integrate in minutes with our straightforward RESTful API or use our official libraries.</p>
              <pre className="bg-black/40 p-4 rounded-lg text-sm mb-6 overflow-x-auto">
                <code className="text-green-400">
{`// Send an email with just a few lines of code
await devmails.send({
  from: "hello@yourapp.com",
  to: "user@example.com",
  subject: "Welcome to your app!",
  text: "Thanks for signing up!"
});`}
                </code>
              </pre>
              <Link to="/docs">
                <Button variant="outline" className="group">
                  View documentation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg p-6">
                <h3 className="text-xl font-medium mb-4">Supported Languages</h3>
                <ul className="space-y-3">
                  {["JavaScript/Node.js", "Python", "Ruby", "PHP", "Go", "Java", ".NET"].map((lang) => (
                    <li key={lang} className="flex items-center">
                      <Check size={16} className="text-green-500 mr-2" />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing CTA Section */}
      <section className="py-20 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Start Sending Better Emails Today</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">From startups to enterprises, DEVMAILS scales with your business. Choose a plan that fits your needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/subscription">
              <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-gray-400 px-8 py-6">
                View pricing <ChevronRight className="ml-1" size={16} />
              </Button>
            </Link>
            <Link to="/getstarted">
              <Button variant="outline" className="rounded-full text-[#5b22c6] border-[#2a2a2a] hover:bg-[#1a1a1a] px-5 py-6">
                Get started free <ChevronRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border border-[#2a2a2a] rounded-lg p-6 transition-all hover:border-[#3a3a3a] hover:translate-y-[-5px]">
      <div className="bg-[#1A1A1A] p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Index;
