'use server';

import { headers } from 'next/headers';
import { auth } from '../better-auth/auth';
import { FormState } from '@/lib/auth-actions/definitions';

export const logout = async (prevState: FormState): Promise<FormState> => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return { message: 'Logged out successfully', success: true };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'Failed to logout',
      success: false,
    };
  }
};

// todo fix toast not showing in logout button
