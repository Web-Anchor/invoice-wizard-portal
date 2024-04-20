'use client';

import { useSignIn } from '@clerk/clerk-react';
import Skeleton from '@components/Skeleton';

export default function Page() {
  const { isLoaded, signIn } = useSignIn();

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <div className="flex justify-center">
      <p>Invoicing APP</p>
    </div>
  );
}
