import { LoginForm } from '@/components/auth/login-form';
import { OAuthButton } from '@/components/auth/oauth-button';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <LoginForm />
      <OAuthButton provider="github" />
    </div>
  );
}
