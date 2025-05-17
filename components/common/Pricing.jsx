"use client";

import React from 'react';

const PricingComponent = () => {
  // Plus icon component for feature lists
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  // Feature item component
  const FeatureItem = ({ text }) => (
    <li className="flex items-start py-2">
      <div className="mt-1">
        <PlusIcon />
      </div>
      <span className="ml-2 text-gray-200">{text}</span>
    </li>
  );

  // Pricing card component
  const PricingCard = ({ title, description, billing, price, features }) => (
    <div className="relative">
      {/* Animated shadow wrapper - only for Pro plan */}
      {title === "Pro" && (
        <div className="absolute inset-0 rounded-2xl border border-[#7DD956] animate-pulse shadow-xl shadow-[#7dd956aa]" />
      )}
      {/* Main card content - no animation */}
      <div className={`relative p-2 bg-transparent border rounded-2xl ${title === "Pro" ? "border-[#7DD956]" : "border-gray-100 shadow-xl shadow-[#888888]"}`}>
        <div className={`inset-0 bg-black/10 backdrop-blur-md rounded-2xl overflow-hidden border h-full ${title === "Pro" ? "border-[#7DD956]" : "border-gray-100"}`}>
          <div className="p-8">
            <h3 className="text-[#7DD956] font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-200 text-sm mb-6">{description}</p>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-100">{price}</span>
                <div className="ml-2 flex flex-col">
                  <span className="text-sm text-gray-400">{billing}</span>
                </div>
              </div>
            </div>
            
            <button className="bg-[#21707E] hover:bg-[#288697] text-white py-2 px-4 rounded-lg text-sm font-medium transition duration-200">
              Subscribe
            </button>
            
            <div className="mt-8">
              <p className="font-medium text-sm text-gray-200 mb-4">Features:</p>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const freeFeatures = [
    "3 AI Generated Documents /day",
    "Unlimited Clinic Users",
    "Electronic Medical Records",
    "SOAP",
    "e-Signatures"
  ];

  const basicFeatures = [
    "10 AI Generated Documents /day",
    "Unlimited Clinic Users",
    "Electronic Medical Records",
    "SOAP",
    "Clinic Analytics",
    "e-Signatures"
  ];

  const proFeatures = [
    "Unlimited AI Generated Documents",
    "Unlimited Clinic Users",
    "Electronic Medical Records",
    "SOAP",
    "Clinic Analytics",
    "e-Signatures",
    "POS",
    "Inventory",
    "OCR Scanning",
    "Medical Calculator"
  ];

  return (
    <div className="relative isolate bg-[#071b1e] py-16">
      <div className="container mx-auto px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Choose the perfect plan for your healthcare practice. 
            All plans include our core features with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <PricingCard 
            title="Free" 
            description="For new clinics or solo practitioners exploring digital tools — includes essential features."
            billing=""
            price="Free"
            features={freeFeatures}
          />
          
          {/* Basic Plan */}
          <PricingCard 
            title="Basic" 
            description="Great for growing clinics needing more encounters, users, and access to a basic POS and inventory system."
            billing="/mo"
            price="₱799"
            features={basicFeatures}
          />
          
          {/* Pro Plan */}
          <PricingCard 
            title="Pro" 
            description="Built for scaling clinics — includes POS and inventory, higher limits, and more tools."
            billing="/mo"
            price="₱1,499"
            features={proFeatures}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;