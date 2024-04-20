'use client';

import { SignIn } from '@clerk/nextjs';
import { useSignIn } from '@clerk/clerk-react';
import Skeleton from '@components/Skeleton';

export default function Page() {
  const { isLoaded, signIn } = useSignIn();

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <div className="flex justify-center">
      <SignIn signUpUrl="/sign-up" afterSignInUrl="/api/v1/users" />
    </div>
  );
}
