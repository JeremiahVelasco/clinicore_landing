import React from 'react';
import { Check } from 'lucide-react';

const FeatureTwo = () => {
  const features = [
    {
      title: "Invite doctors to your clinic",
      description: "Easily onboard new physicians with secure, professional invitations, streamlining collaboration, shift coverage, and care continuity in just a few clicks."
    },
    {
      title: "AI assisted document generation",
      description: "Save hours on clinical paperwork. Our AI drafts referral forms, medical certificates, and more, so you stay focused on patient care, not admin work."
    },
    {
      title: "Clinic user activity",
      description: "Gain real-time visibility into your staff’s availability to see who’s online, on break, or on leave. Better planning, zero guesswork."
    },
    {
      title: "Google Calendar Syncing",
      description: "Seamlessly sync appointments and staff schedules with Google Calendar to reduce double bookings and keep your day running smoothly."
    },
    {
      title: "Access records anywhere & any time",
      description: "Secure, cloud-based access to patient records and clinic documents from any device. Whether you're at the hospital, home, or on the move."
    },
    {
      title: "Patient queueing",
      description: "Streamline patient flow with intelligent queue management. Know who's next, reduce waiting time, and improve patient satisfaction."
    },
    {
      title: "Analytics",
      description: "Track key performance indicators like patient volume, peak hours, and staff efficiency with real-time dashboards to make data-driven decisions."
    },
    {
      title: "Audit logs",
      description: "Every action is logged and traceable—enhancing security, accountability, and compliance with health regulations."
    }
  ];

  return (
    <section className="bg-[#071b1e] w-full py-24 px-4 text-white">
      <div className="max-w-7xl mx-auto flex gap-x-14">
        <div className="mb-16">
          <p className="text-[#2F9BAE] font-medium mb-4">Everything you need</p>
          <h2 className="text-5xl font-bold mb-6">All-in-one platform</h2>
          <p className="text-gray-300 text-xl max-w-4xl text-justify">
            Manage appointments, records, documents, sales, and inventory 
            from one simple dashboard—built to save time and let you focus 
            on delivering quality care.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
            <div className="grid gap-y-14">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2f9bae72]">
                      <Check className="h-4 w-4 text-[#7ED957]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
            <div className="grid gap-y-14">
              {features.slice(4, 8).map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2f9bae72]">
                    <Check className="h-4 w-4 text-[#7ED957]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;