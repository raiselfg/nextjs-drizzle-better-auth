'use server';

import { auth } from '../better-auth/auth';
import { FormState } from '@/lib/auth-actions/definitions';

export const logout = async (prevState: FormState): Promise<FormState> => {
  await auth.api.signOut();
  return { message: 'Logged out successfully', success: true };
};
