'use client';

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const faqs = [
  {
    question: 'Is the customer portal free to use?',
    answer:
      'Yes, the customer portal is free to use. You can access your account and manage your financial activities without any additional charges. Simply follow the link provided by your vendor to access your invoices or add it via the portals dashboard page.',
  },
  {
    question: 'How do I access my invoices?',
    answer:
      'To access your invoices, you can log in to your account via the customer portal. Once you are logged in, you can view your transactions, download invoices, and make any necessary adjustments. If you have any questions or need assistance, please contact your vendor for more information.',
  },
  {
    question: 'Where do I get my API key?',
    answer:
      'Your API key is provided by your vendor. If you do not have one, please contact your vendor to request an API key. Once you have your API key, you can use it to access your account and manage your financial activities via the customer portal.',
  },
  {
    question: 'Can I edit my invoice billing details?',
    answer:
      'Yes, you can edit your invoice billing details directly within the portal. This includes updating your address, contact information, and any other relevant billing details.',
  },
  {
    question: 'How secure is my financial information on the portal?',
    answer:
      'We take the security of your financial information very seriously. Our platform uses the authentication and security protocols to ensure that your data is safe and secure.',
  },
  {
    question: 'What if I have multiple vendors using the platform?',
    answer:
      'You can easily manage invoices from multiple vendors within the same portal. Each vendor will provide you with a unique API key or link to access their specific invoices.',
  },
  {
    question: 'How do I download my invoices?',
    answer:
      'You can download your invoices directly from the portal. Simply navigate to the invoice section and select the invoices you wish to download. You can then choose to download them as a PDF file for your records. If you have any questions or need assistance, please contact your vendor for more information.',
  },
  {
    question: 'Can I track my transactions on the portal?',
    answer:
      'Yes, the portal allows you to track all your transactions in real-time. You can view the status of your invoices and payments at any time. This makes it easy to stay up-to-date on your financial activities and manage your records effectively.',
  },
  {
    question: 'How do I get support if I encounter an issue?',
    answer:
      'Our support team is available to assist you with any issues you may encounter. You can reach out to us via the contact information provided within the portal. We are here to help you with any questions or concerns you may have.',
  },
  {
    question: 'Can I customize my invoices?',
    answer:
      "While you can edit billing details, customization options for the invoice layout itself may be limited based on the vendor's settings. Please check with your vendor for specific customization options.",
  },
  {
    question: 'Do I need to download any software to use the portal?',
    answer:
      'No, there is no need to download any software. The portal is web-based and can be accessed from any device with an internet connection. Simply follow the link provided by your vendor to get started.',
  },
  // More questions...
];

export default function FrequentlyAskedQuestions() {
  const path = usePathname();

  return (
    <div id="facts">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:py-10">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-xl font-semibold leading-7 text-indigo-600">
              FAQ
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              Frequently asked questions
            </p>
          </div>

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs?.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-800">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
