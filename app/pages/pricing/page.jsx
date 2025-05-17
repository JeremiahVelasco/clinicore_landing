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
import ContactForm from '@/components/common/ContactForm';
import Footer from '@/components/common/Footer';

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
      question: "What features are included in the Free plan?",
      answer: "The Free plan includes 1 clinic, unlimited users and patients, core EMR features like SOAP notes, vitals, ICD-10 codes, prescriptions, lab requests, and up to 3 AI-generated documents per day. It’s ideal for solo practitioners starting out."
    },
    {
      question: "What’s the difference between the Basic and Pro plans?",
      answer: "The Basic plan includes the same core features as Free, but increases AI document generation to 30/day and allows additional clinics for ₱450/month. The Pro plan supports 2 clinics by default, unlimited AI documents, and will include priority access to upcoming features like online consultations, POS, and inventory management."
    },
    {
      question: "Can I add more clinics to my plan?",
      answer: "Yes, additional clinics can be added. For Basic plans, it's ₱450 per clinic per month. For Pro plans, it's ₱1,199 per clinic per month."
    },
    {
      question: "Are online consultations available?",
      answer: "Online consultations are not yet available, but are coming soon. They will be available first for Pro plan users."
    },
    {
      question: "What is the limit on AI-generated documents?",
      answer: "AI-generated document limits depend on your plan: Free (3/day), Basic (30/day), and Pro (unlimited). These documents include medical records, notes, and patient-related reports powered by AI."
    },
    {
      question: "Are POS and Inventory features included?",
      answer: "POS and Inventory management features are currently in development and will be released soon. All plans will have access, but Pro users will get the most advanced functionality."
    },
    {
      question: "Do all plans support unlimited users and patients?",
      answer: "Yes, all plans—Free, Basic, and Pro—support unlimited users and unlimited patient records, ensuring scalability for clinics of any size."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade or downgrade your subscription at any time. Your data remains intact, and your new plan’s features will be applied immediately."
    },
    {
      question: "Is there a limit to the number of patient encounters?",
      answer: "Yes, the Free plan includes essential features for up to 30 patient encounters per month. Higher-tier plans remove this limit."
    }
  ];

  return (
    <div className="min-h-screen bg-[#071b1e] text-white">
      <Navbar />

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
                <th className="py-4 px-6 text-center">Free</th>
                <th className="py-4 px-6 text-center">Basic</th>
                <th className="py-4 px-6 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Clinics</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Users</td>
                <td className="py-4 px-6 text-center">1</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Patients</td>
                <td className="py-4 px-6 text-center">150</td>
                <td className="py-4 px-6 text-center">2,000</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">AI Generated Documents /day</td>
                <td className="py-4 px-6 text-center">3</td>
                <td className="py-4 px-6 text-center">10</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Medical Calculator</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">✅</td>
                <td className="py-4 px-6 text-center">✅</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Online Consultations</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">Coming soon</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">POS</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">Coming soon</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">Inventory</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">Coming soon</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-6">OCR Scanning</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">✖︎</td>
                <td className="py-4 px-6 text-center">Coming soon</td>
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
              <AccordionTrigger>What features are included in the Free plan?</AccordionTrigger>
                <AccordionContent>
                  The Free plan includes 1 clinic, unlimited users and patients, core EMR features like SOAP notes, vitals, ICD-10 codes, prescriptions, lab requests, and up to 3 AI-generated documents per day. It’s ideal for solo practitioners starting out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What’s the difference between the Basic and Pro plans?</AccordionTrigger>
                <AccordionContent>
                  The Basic plan includes the same core features as Free, but increases AI document generation to 30/day and allows additional clinics for ₱450/month. The Pro plan supports 2 clinics by default, unlimited AI documents, and will include priority access to upcoming features like online consultations, POS, and inventory management.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I add more clinics to my plan?</AccordionTrigger>
                <AccordionContent>
                  Yes, additional clinics can be added. For Basic plans, it's ₱450 per clinic per month. For Pro plans, it's ₱1,199 per clinic per month.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Are online consultations available?</AccordionTrigger>
                <AccordionContent>
                  Online consultations are not yet available, but are coming soon. They will be available first for Pro plan users.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What is the limit on AI-generated documents?</AccordionTrigger>
                <AccordionContent>
                  AI-generated document limits depend on your plan: Free (3/day), Basic (30/day), and Pro (unlimited). These documents include medical records, notes, and patient-related reports powered by AI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Are POS and Inventory features included?</AccordionTrigger>
                <AccordionContent>
                  POS and Inventory management features are currently in development and will be released soon. All plans will have access, but Pro users will get the most advanced functionality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>Do all plans support unlimited users and patients?</AccordionTrigger>
                <AccordionContent>
                  Yes, all plans—Free, Basic, and Pro—support unlimited users and unlimited patient records, ensuring scalability for clinics of any size.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>Can I upgrade or downgrade my plan later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your subscription at any time. Your data remains intact, and your new plan’s features will be applied immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger>How is the subscription billed?</AccordionTrigger>
                <AccordionContent>
                  All our paid plans are billed annually. This helps reduce administrative overhead and provides better value compared to monthly billing.
                </AccordionContent>
              </AccordionItem>
        </Accordion>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default PricingPage;