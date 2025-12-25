import { OAuthButton } from '@/components/auth/oauth-button';
import { SignupForm } from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Signup</h1>
      <SignupForm />
      <OAuthButton provider="github" />
    </div>
  );
}
