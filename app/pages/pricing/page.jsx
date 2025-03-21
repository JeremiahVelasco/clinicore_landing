"use client";

import React, { useState } from 'react';
import PricingComponent from '/components/common/Pricing';
import Navbar from '@/components/common/Navbar';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const PricingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "What is included in the subscription plan?",
      answer: "Our subscription plan includes access to unlimited devices, unlimited patients, patient portal, encounter management, and comprehensive patient management tools. This is perfect for healthcare providers looking for a monthly payment option."
    },
    {
      question: "How does the Lifetime Premium differ from the basic subscription?",
      answer: "The Lifetime Premium plan provides all the features of the basic subscription, but instead of monthly payments, you make a one-time payment of ₱69,500 plus an annual fee of ₱5,000. This is ideal for practices looking for long-term cost savings."
    },
    {
      question: "What additional features come with the Lifetime Pro plan?",
      answer: "The Lifetime Pro plan includes all Premium features with enhanced capabilities, and comes with a one-time payment of ₱99,000 plus an annual fee of ₱8,000. This is our most comprehensive solution for larger medical practices."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade from subscription to Lifetime Premium or Pro at any time. We'll provide credit for your existing subscription toward your upgrade purchase."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for our subscription plan so you can experience our platform before committing to a purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-[#071b1e] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your healthcare practice. 
            All plans include our core features with no hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing Component */}
      <PricingComponent />

      {/* Features Comparison */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Detailed Features Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#2F9BAE]">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Subscription</th>
                <th className="py-4 px-6 text-center">Native</th>
                <th className="py-4 px-6 text-center">Lifetime Premium</th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Online Access</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✗</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Unlimited Devices</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Unlimited Patients</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Patient Portal</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Encounter Management</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">SOAP Notes</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">ICD-10 Codes</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Patient Management</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Annual Fee</td>
                <td className="py-4 px-6 text-center">Included in subscription</td>
                <td className="py-4 px-6 text-center">No annual fee</td>
                <td className="py-4 px-6 text-center">₱3,200 a year/ doctor</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Priority Support</td>
                <td className="py-4 px-6 text-center">Email, Chat</td>
                <td className="py-4 px-6 text-center">Email, Chat & Phone</td>
                <td className="py-4 px-6 text-center">Email, Chat & Phone</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">When to Choose</td>
                <td className="py-4 px-6 text-center">Ideal for clinics that need online access, regular updates, and support. Best for those who prefer lower upfront costs.</td>
                <td className="py-4 px-6 text-center">Perfect for single-location clinics that don’t need internet access. A one-time purchase with no recurring fees.</td>
                <td className="py-4 px-6 text-center">Best for long-term cost savings.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>How does the lifetime plan differ from the basic subscription?</AccordionTrigger>
                <AccordionContent>
                  The Lifetime Premium plan provides all the features of the basic subscription, but instead of monthly payments, you make a one-time payment of ₱50,000 plus an annual fee of ₱3,200 per doctor. This is ideal for practices looking for long-term cost savings.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade from subscription to the lifetime plan at any time. We'll provide credit for your existing subscription toward your upgrade purchase.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>Can I access my data online if I use the native app?</AccordionTrigger>
                <AccordionContent>
                  No, the native app includes all the features, but your data will only be accessible on your clinic computer. Online access is not available.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#106979] to-[#196977] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the plan that works for your practice and start managing your patients more efficiently today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-[#2F9BAE] hover:bg-[#39b4ca] px-8 py-3 rounded font-bold transition duration-150"
            >
              Subscribe
            </a>
            <a
              href="#"
              className="bg-transparent border border-white hover:bg-white hover:text-[#196977] px-8 py-3 rounded font-bold transition duration-150"
            >
              Get the Lifetime Plan
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="mb-8">
              Our team is here to help you choose the right plan for your healthcare practice. 
              Contact us for personalized assistance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#2F9BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>sales@clinicore.io</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-[#2F9BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+63 (2) 8123 4567</span>
              </div>
            </div>
          </div>
          <div className="bg-[#13343b] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-[#071b1e] rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-[#071b1e] rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-[#071b1e] rounded"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2F9BAE] hover:bg-[#39b4ca] px-8 py-3 rounded font-bold transition duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;