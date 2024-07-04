import { classNames } from '@helpers/index';

type Props = {
  title?: string | number;
  description?: string;
  slogan?: string;
  url?: string;
  class?: string;
  hide?: boolean;
};

export default function SimpleOnDark(
  props: Props
): React.ReactElement | null {
  if (props.hide) {
    return null;
  }

  return (
    <div className={classNames('bg-gray-800 px-5 py-16 sm:py-24', props.class)}>
      <section className="w-full lg:mx-auto max-w-3xl lg:text-center text-white">
        {props.slogan && (
          <p className="text-xl font-semibold leading-7 text-indigo-400">
            {props.slogan}
          </p>
        )}
        {props.title && (
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            {props.title}
          </h2>
        )}
        {props.description && (
          <p className="mt-6 text-lg leading-8">{props.description}</p>
        )}
      </section>
    </div>
  );
}
