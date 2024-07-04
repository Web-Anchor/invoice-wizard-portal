import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  CursorArrowRaysIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Document Management.',
    description:
      'Access and download important documents anytime, anywhere. Organize and store your financial records securely in your dedicated space. Stay in control of your documents with our easy-to-use platform.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'User-Friendly Interface',
    description:
      'Monitor your transactions effortlessly with our intuitive interface. Keep track of payments and expenses seamlessly. Stay informed about your financial activities with our real-time updates feature.',
    icon: UserGroupIcon,
  },
  {
    name: 'Access Your Finances Anytime, Anywhere',
    description:
      'Stay in control of your financial activities with 24/7 access to your invoicing portal. Whether you`re in the office or on the go, you can manage transactions, view documents, and handle invoices at your convenience.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Secure and Reliable.',
    description:
      'Monitor your invoicing and payments in real-time, confident in the knowledge that your data is protected!',
    icon: FingerPrintIcon,
  },
];

export default function FeatureSectionsWithProductDark() {
  return (
    <div className="overflow-hidden bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                Empowering Your Financial Success
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Effortless Financial Management Features
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience an efficient and convenient platform designed to
                simplify your invoicing process. Handle invoices, download
                documents, and track transactions effortlessly. Our intuitive
                interface ensures you stay in control with ease.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_CDN}/FfNPG8nwlceFcbMGt6p3LQBCOwKpvx1jA5UlWR5mT8g.png`}
            alt="Product screenshot"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 my-auto ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
