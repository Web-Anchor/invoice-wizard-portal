import Link from 'next/link';
import { useState } from 'react';
import Badge from './Badge';

type Props = {
  apiKey?: string;
  isValid?: boolean;
  isLoading?: boolean;
};

export default function KeyCard(props: Props): React.ReactElement | null {
  const [state, setState] = useState<{ key?: string }>({
    key: props.apiKey,
  });

  if (props.isValid || props.isLoading) {
    return null;
  }
  console.log('🚧 KeyCard', props);

  return (
    <div className="flex flex-col gap-2 relative min-w-full sm:min-w-64 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6">
      <section className="w-fit">
        <Badge
          title={props?.apiKey ? 'API Key not valid' : 'Add Your API Key'}
          type={props?.apiKey ? 'warning' : 'error'}
          tooltip="API Key is required to access your invoices!"
          tooltipPosition="tooltip-right"
        />
      </section>

      <section className="flex flex-row gap-5">
        <div className="fex flex-1">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-800"
          >
            Add Your API Key
          </label>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            To enable access for your invoices, please provide your unique API
            key provided by the vendor. If you have not received one from your
            vendor, kindly reach out to the company where you made your purchase
            for assistance.
          </p>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Enter your API Key"
              className="block w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={state.key ?? ''}
              onChange={(e) => setState({ key: e.target.value })}
            />
          </div>
        </div>

        <Link
          href={`/dashboard?id=${state.key}`}
          className="font-medium text-indigo-600 hover:text-indigo-500 mt-auto"
        >
          Add Key
        </Link>
      </section>
    </div>
  );
}
