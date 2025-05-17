'use client'

import { useState, useEffect } from 'react';
import Navbar from '@/components/common/Navbar';

export default function ComingSoon() {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // State for email input
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calculate countdown (30 days from now)
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Handle email submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  // Animation effect for background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Format time units to always show two digits
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="bg-gradient-to-t from-[#2F9BAE] to-[#071B1F] min-h-screen text-white">
      <Navbar />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-6">
          {/* Eyecatcher label */}
          <div className="inline-block px-4 py-1 rounded-full bg-teal-800/30 backdrop-blur-sm border border-teal-700/50 mb-4">
            <p className="text-sm font-medium text-teal-300">Exciting things await</p>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-[#2F9BAE] bg-clip-text text-transparent">
            Something Amazing<br />Is Coming Soon
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            We're working hard to bring you something extraordinary. 
            Sign up below to be the first to know when we launch.
          </p>
          
          {/* Countdown timer */}
          <div className="mt-10 grid grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700/50">
              <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.days)}</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700/50">
              <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.hours)}</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700/50">
              <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.minutes)}</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-gray-700/50">
              <span className="text-3xl sm:text-4xl font-bold">{formatTime(timeLeft.seconds)}</span>
              <span className="text-xs sm:text-sm text-gray-400 mt-1">Seconds</span>
            </div>
          </div>
          
          {/* Email signup form */}
          <div className="mt-12 max-w-md mx-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="block w-full rounded-lg border-0 bg-gray-800/50 backdrop-blur-sm py-3 pl-4 pr-10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-[#2F9BAE] hover:bg-[#39b4ca] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 ease-in-out"
              >
                Notify Me
              </button>
            </form>
            
            {/* Success message */}
            {submitted && (
              <div className="mt-2 text-sm text-teal-300 animate-pulse">
                Thank you! We'll notify you when we launch.
              </div>
            )}
          </div>
          
          {/* Social links */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}