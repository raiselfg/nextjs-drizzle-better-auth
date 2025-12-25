'use server';

import { auth } from '../better-auth/auth';

export const oauthLogin = async (provider: string) => {
  try {
    const data = await auth.api.signInSocial({
      body: {
        provider,
      },
    });
    return data.url ?? null;
  } catch (error) {
    console.error('OAuth login error:', error);
    throw error;
  }
};
