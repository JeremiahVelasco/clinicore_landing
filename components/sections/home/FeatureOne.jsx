import { ChartPieIcon, ClipboardDocumentListIcon, SparklesIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Electronic Medical Records.',
    description:
      'Digitally manage patient records with secure access anytime. Eliminate paperwork and streamline medical documentation.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'AI Assistant.',
    description: 'Get instant support for administrative tasks, patient inquiries, and scheduling through an intelligent AI-powered assistant.',
    icon: SparklesIcon,
  },
  {
    name: 'Advanced Analytics.',
    description: 'Track clinic performance, patient trends, and operational metrics with comprehensive, real-time analytics.',
    icon: ChartPieIcon,
  },
]

const FeatureOne = () =>{
  return (
    <div className="overflow-hidden bg-[#071b1e] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-white md:text-4xl">
              Medical Record Management with Built-in AI Assistant
              </p>
              <p className="mt-6 text-lg/8 text-gray-200">
                Manage medical records, patient queues and analytics with the help of your AI assistant—bringing smarter, more efficient operations to your practice in one seamless platform.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-100">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-[#2F9BAE]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="MDMUTTNBG.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureOne;
