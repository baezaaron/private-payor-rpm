import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import PreventativeCare from './components/PreventativeCare';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import LeadCapture from './components/LeadCapture';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Benefits Section */}
      <Benefits />

      {/* Preventative Care Section */}
      <PreventativeCare />
      
      {/* Testimonials Section (gray) */}
      <div className="bg-gray-50">
        <Testimonials />
      </div>
      
      {/* Pricing Section (white) */}
      <div className="bg-white">
        <Pricing />
      </div>
      
      {/* FAQ Section (gray) */}
      <div className="bg-gray-50">
        <FAQ />
      </div>
      
      {/* Lead Capture Form (white) */}
      <div className="bg-white">
        <LeadCapture />
      </div>
    </div>
  );
}

export default App; 