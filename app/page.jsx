import { ServerIcon, TvIcon, WrenchIcon } from '@heroicons/react/20/solid'
import Navbar from '@/components/common/Navbar';
import Pricing from '@/components/sections/home/Pricing';
import Footer from '@/components/common/Footer';
import Testimonial from '@/components/sections/home/Testimonial';
import Hero from '@/components/sections/home/Hero';
import CTA from '@/components/sections/home/CTA';
import Logos from '@/components/sections/home/Logos';
import PricingComponent from '@/components/common/Pricing';
import FeatureOne from '@/components/sections/home/FeatureOne';
import FeatureTwo from '@/components/sections/home/FeatureTwo';

const features = [
  {
    name: 'Intuitive Interface.',
    description:
      'Designed with clinicians in mind, Clinicore simplifies scheduling, patient record management, and billing. Its clean, logical interface minimizes learning curves and maximizes efficiency.',
    icon: TvIcon,
  },
  {
    name: 'Comprehensive Tools.',
    description: 'Clinicore automates appointment scheduling, generates accurate billing, and securely stores patient records, reducing errors and saving valuable time.',
    icon: WrenchIcon,
  },
  {
    name: 'Offline Functionality.',
    description: 'Available as part of the Pro version, this feature ensures uninterrupted access even in areas with unreliable connectivity, keeping critical data available at all times.',
    icon: ServerIcon,
  },
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      {/* <Testimonial /> */}
      {/* <PricingComponent /> */}
      <CTA />
      {/* <Logos /> */}
      <Footer />
    </div>
  )
}
