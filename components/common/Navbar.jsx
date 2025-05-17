'use client'
import Link from 'next/link'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  BanknotesIcon,
  Bars3Icon,
  ChartPieIcon,
  DocumentTextIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Electronic Medical Records', description: 'Streamline patient data management with secure digital records.', href: '#', icon: DocumentTextIcon },
  { name: 'Point of Sales', description: 'Simplify transactions and enhance customer experience with seamless POS solutions.', href: '#', icon: BanknotesIcon },
  { name: 'Analytics', description: `Gain deep insights into your clinic's performance with real-time data analysis.`, href: '#', icon: ChartPieIcon },
  { name: 'Inventory Management', description: 'Track, manage, and optimize your medical supplies effortlessly.', href: '#', icon: SquaresPlusIcon },
  { name: 'Employee Management', description: 'Efficiently manage staff schedules, payroll, and attendance.', href: '#', icon: UserGroupIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-screen z-50">
      {/* Blur background layer */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md shadow-sm"></div>
      
      <nav aria-label="Global" className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE] transition-colors">
            Home
          </Link>

          <Link href="/pages/pricing" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE] transition-colors">
            Pricing
          </Link>

          <Link href="/pages/coming_soon" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE] transition-colors">
            Blog
          </Link>

          <Link href="/pages/coming_soon" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE] transition-colors">
            Find Clinic
          </Link>

          <Link href="/pages/contact" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE] transition-colors">
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4 items-center">
            <a href="#" className="text-sm/6 font-semibold text-white rounded-md py-1 px-4 bg-[#2F9BAE] hover:bg-[#39b4ca]">
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-[#2F9BAE]">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/90 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Clinicore</span>
              <img
                alt="Clinicore"
                src="Clinicore_RSF.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/pages/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
                <a
                  href="/pages/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}