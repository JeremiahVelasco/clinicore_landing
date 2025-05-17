import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-t from-[#2F9BAE] to-[#071B1F]">
      <div className="md:w-2/3 w-full px-4 text-gray-800 flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full text-white tracking-tight md:w-2/3">Get in touch.</h1>
        </div>
        
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-white">
          We're here to assist you! Whether you have questions, need support, or just want to learn more, our team is ready to help you every step of the way.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link href={'/pages/contact'} className="bg-[#2F9BAE] hover:bg-[#33abc0] text-white justify-center text-center rounded-lg shadow px-10 py-3 flex items-center cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between items-center">
            <div className="hidden md:block">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Clinicore</span>
                {/* Use Next.js Image component with proper import */}
                <img
                  alt="Clinicore"
                  src="/Clinicore_RSF.png" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link href={'/pages/coming_soon'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Demo</Link>
              <Link href={'/pages/pricing'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Pricing</Link>
              <Link href={'/pages/coming_soon'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Find Clinic</Link>
              <Link href={'/pages/contact'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Contact</Link>
              <Link href={'/pages/coming_soon'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Data & Security</Link>
              <Link href={'/pages/coming_soon'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Terms of Use</Link>
              <Link href={'/pages/coming_soon'} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">FAQ</Link>
              {/* <Link href={} className="cursor-pointer text-gray-50 hover:text-[#2F9BAE] uppercase">Why us</Link> */}
            </div>
          </div>
          
          <hr className="border-gray-50"/>
          <p className="w-full text-center my-12 text-gray-50">
            Copyright © 2025 Clinicore
          </p>
        </div>
      </div>
    </div>
  );
};

const Logo = () => (
  <img className='w-52' src='Clinicore_RSF.png'></img>
);

const FacebookIcon = () => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345Z" fill="white"/>
    <path d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z" fill="white"/>
    <path d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975Z" fill="white"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z" fill="white"/>
  </svg>
);

export default Footer;