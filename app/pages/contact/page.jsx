'use client';
import Navbar from '@/components/common/Navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from '@/components/common/ContactForm';
import Footer from '@/components/common/Footer';

export default function Contact() {

  return (
    <div className='bg-[#071b1e] min-h-screen'>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get in Touch</h1>
            <p className="mt-6 text-lg/8 text-gray-400">
              We're here to assist you! Whether you have questions, need support, or just want to learn more, 
              our team is ready to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />

      {/* FAQ Section */}
      <div className="bg-[#071b1e] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-400">
              Find answers to common questions about our services, support, and processes.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white py-4">
                How quickly do you respond to inquiries?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-400 pb-4">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white py-4">
                Do you offer consultations for new clients?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-400 pb-4">
                Yes, we offer a complimentary 30-minute consultation for new clients to discuss your needs and how we can help you achieve your goals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white py-4">
                What is your service area?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-400 pb-4">
                We provide services nationwide. Our team is fully equipped to work remotely with clients anywhere in the Philippines.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-700">
              <AccordionTrigger className="text-lg font-medium text-white py-4">
                How can I request technical support?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-400 pb-4">
                Existing clients can access technical support through our client portal, by emailing support@example.com, or by calling our dedicated support line during business hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-[#081f22]">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Our team is ready to help you with any questions or needs you may have.
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <a
                href="#"
                className="rounded-md bg-[#2F9BAE] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#39b4ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F9BAE]"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="rounded-md bg-[#0b292e] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#0d3238] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}