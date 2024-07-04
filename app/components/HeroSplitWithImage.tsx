'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

type Props = {
  title?: string | number;
  description?: string;
  slogan?: string;
  url?: string;
  class?: string;
  hide?: boolean;
};

export default function HeroSplitWithImage(
  props: Props
): React.ReactElement | null {
  const { user, isLoaded } = useUser();

  if (props.hide) {
    return null;
  }

  return (
    <div className="relative lg:mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
      <div className="lg:col-span-7 lg:px-0 lg:py-20 xl:col-span-6">
        <div className="max-w-2xl text-left lg:text-center">
          {props.slogan && (
            <p className="text-xl font-semibold leading-7 text-indigo-600 lg:mt-16">
              {props.slogan}
            </p>
          )}
          {props.title && (
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:mt-10 sm:text-6xl">
              {props.title}
            </h1>
          )}
          {props.description && (
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-justify">
              {props.description}
            </p>
          )}
          <div className="mt-10 flex items-center gap-x-6">
            {!user && (
              <Link
                href="/sign-in"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            )}
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-800"
              >
                Go to dashboard <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
      {props.url && (
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 mt-10 lg:mt-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={props.url}
            alt="hero-section"
            fill
          />
        </div>
      )}
    </div>
  );
}

// Design Elements:

// Utilize a visually appealing background image that conveys a sense of organization and efficiency in financial management.
// Ensure the title is prominent and easy to read, drawing attention to the platform's core promise of simplifying finances.
// The description should provide a brief overview of the platform's key features and benefits, highlighting convenience and ease of use.
// The slogan should encapsulate the platform's mission to empower users in their financial journey through simple actions.
// Implementation Example:

// The hero section could feature a background image of a well-organized workspace with digital devices displaying financial data, symbolizing efficiency and control.
// The title, description, and slogan could be displayed in a clean and modern font style to maintain a professional look.
// Consider using subtle animation effects like parallax scrolling or fade-ins to enhance the visual appeal and draw users' attention to the key messaging.
// This hero section content is designed to captivate users' interest from the moment they land on the page, setting the tone for a user-friendly and empowering financial management experience. Feel free to let me know if you would like to explore any specific design elements or branding considerations further.
