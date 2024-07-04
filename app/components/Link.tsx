'use client';

import { default as NextLink, LinkProps } from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  title?: string;
  rel?: string;
} & LinkProps;

export default function Link(props: Props) {
  const searchParams = useSearchParams()!;
  const id = searchParams.get('id');

  return (
    <NextLink
      {...props}
      href={{
        pathname: props.href || '#',
        query: { id },
      }}
    >
      {props.children}
    </NextLink>
  );
}
