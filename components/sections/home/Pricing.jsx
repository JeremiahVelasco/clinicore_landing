"use client";

import React, { useState } from 'react';

const PricingComponent = () => {
  const [billingType, setBillingType] = useState('month');
  const [prices, setPrices] = useState({
    freePrice: 'Free',
    basicPrice: '499',
    proPrice: '1,299'
  });
  
  const [billingTexts] = useState({
    subscription: '/ MONTH',
    basic: ' / MONTH',
    pro: ' / MONTH'
  });

  const handleBillingChange = (type) => {
    setBillingType(type);
    if (type === 'month') {
      setPrices({
        freePrice: 'Free',
        basicPrice: '499',
        proPrice: '1,299'
      });
    } else {
      setPrices({
        subscriptionPrice: 'Free',
        basicPrice: '499',
        proPrice: '1,299'
      });
    }
  };

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const PlanFeature = ({ included, feature }) => (
    <li className="flex items-center space-x-2 px-8">
      <span className={`${included ? 'bg-[#2F9BAE]' : 'bg-gray-300'} rounded-full p-1`}>
        <CheckIcon />
      </span>
      <span className={`${included ? 'text-white' : 'text-gray-400'} capitalize`}>{feature}</span>
    </li>
  );

  const PricingCard = ({ title, price, features }) => (
    <div className="bg-[#196977] shadow-2xl rounded-lg py-4">
      <p className="text-2xl text-center font-bold text-white">{title}</p>
      <p className="text-center py-8">
        <span className="text-4xl font-bold text-gray-100">
          ₱{price}
        </span>
        <span className="text-xs uppercase text-gray-300">
          {billingTexts[title.toLowerCase()]}
        </span>
      </p>
      <ul className="border-t border-gray-300 py-8 space-y-6 text-white">
        {features.map((feature, index) => (
          <PlanFeature key={index} included={feature.included} feature={feature.name} />
        ))}
      </ul>
      <div className="flex items-center justify-center mt-6">
        <a href="#" className="bg-[#2F9BAE] hover:bg-[#39b4ca] px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">Purchase</a>
      </div>
    </div>
  );

  const basicFeatures = [
    { name: 'Unlimited Devices', included: true },
    { name: 'Unlimited Patients', included: true },
    { name: 'Patient Portal', included: true },
    { name: 'Encounter Management', included: true },
    { name: 'Patient Management', included: true },
  ];

  const premiumFeatures = [
    { name: '₱5,000 - annual fee', included: true },
    { name: 'Unlimited Devices', included: true },
    { name: 'Unlimited Patients', included: true },
    { name: 'Patient Portal', included: true },
    { name: 'Encounter Management', included: true },
    { name: 'Patient Management', included: true },
  ];

  const proFeatures = [
    { name: '₱8,000 - annual fee', included: true },
    { name: 'Unlimited Devices', included: true },
    { name: 'Unlimited Patients', included: true },
    { name: 'Patient Portal', included: true },
    { name: 'Encounter Management', included: true },
    { name: 'Patient Management', included: true },
  ];

  return (
    <div className="min-h-full bg-[#071b1e] pb-12">
      <div className="w-full bg-gradient-to-t from-[#051b1f] to-[#106979] pt-16 pb-24 text-center">
        <h4 className="text-4xl font-bold text-gray-100">Choose the right plan for you</h4>
        <p className="text-sm text-gray-100 mt-2">Pricing built for businesses of all sizes. Choose package that suits your needs.</p>
        <div className="flex items-center justify-center mt-8">
          <button 
            onClick={() => handleBillingChange('month')} 
            className={`text-gray-800 px-4 py-2 rounded-tl-lg rounded-bl-lg ${billingType === 'month' ? 'bg-[#2F9BAE]' : 'bg-gray-200'}`} 
            title="Choose Monthly billing"
          >
            Monthly billing
          </button>
          <button 
            onClick={() => handleBillingChange('year')} 
            className={`text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg ${billingType === 'year' ? 'bg-[#2F9BAE]' : 'bg-gray-200'}`} 
            title="Choose Annual billing"
          >
            Annual billing
          </button>
        </div>
      </div>
      <div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
        <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
          <PricingCard 
            title="Free" 
            price={prices.subscriptionPrice} 
            features={basicFeatures}
          />
          <PricingCard 
            title="Basic" 
            price={prices.premiumPrice} 
            features={premiumFeatures}
          />
          <PricingCard 
            title="Pro" 
            price={prices.proPrice} 
            features={proFeatures}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;