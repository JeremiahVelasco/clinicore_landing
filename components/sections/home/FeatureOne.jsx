import { BanknotesIcon, ChartPieIcon, ClipboardDocumentListIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Electronic Medical Records.',
    description:
      'Securely store and access patient records anytime, anywhere. Reduce paperwork and improve efficiency.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Point of Sale.',
    description: 'Easily manage transactions, billing, and inventory with an integrated POS system.',
    icon: BanknotesIcon,
  },
  {
    name: 'Advanced Analytics.',
    description: 'Gain insights into clinic performance with real-time reports and data-driven decision-making.',
    icon: ChartPieIcon,
  },
]

export default function FeatureOne() {
  return (
    <div className="overflow-hidden bg-[#071b1e] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Simplify Your Clinic’s Workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-200">
                Manage patient records, sales, and analytics—all in one seamless platform. A smarter way to run your clinic.
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
