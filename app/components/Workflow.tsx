'use client';

import Image from 'next/image';
import {
  UserGroupIcon,
  CloudArrowUpIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/20/solid';

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

export default function Workflow() {
  return (
    <div className="overflow-hidden py-6 sm:py-10">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-6 lg:px-0 lg:mx-auto max-w-4xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">
            Empowering Your Financial Success
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Effortless Financial Management Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience an efficient and convenient platform designed to simplify
            your invoicing process. Handle invoices, download documents, and
            track transactions effortlessly. Our intuitive interface ensures you
            stay in control with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start lg:mt-16">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="max-w-2xl lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-800">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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
          <div className="sm:px-6 lg:px-0 my-auto">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 lg:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto lg:max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE_CDN}/FfNPG8nwlceFcbMGt6p3LQBCOwKpvx1jA5UlWR5mT8g.png`}
                  alt="Product screenshot"
                  width={2432}
                  height={1842}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
