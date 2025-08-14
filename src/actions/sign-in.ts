'use server'
import * as auth from '@/auth';

// Explicitly use the GitHub provider and redirect to home after sign-in.
export const signIn = async () => {
    return auth.signIn('github', { redirectTo: '/' });
}