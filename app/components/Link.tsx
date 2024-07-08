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
  chargeid?: string;
} & LinkProps;

export default function Link(props: Props) {
  const searchParams = useSearchParams()!;
  const id = searchParams.get('id');
  const chargeid = searchParams.get('chargeid') || props.chargeid;

  const query: { id?: string; chargeid?: string } = {};
  if (id) {
    query.id = id;
  }
  if (chargeid) {
    query.chargeid = chargeid;
  }

  return (
    <NextLink
      {...props}
      href={{
        pathname: props.href || '#',
        query,
      }}
    >
      {props.children}
    </NextLink>
  );
}
