import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const dynamic = 'force-dynamic'

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient({ cookies })
);

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export async function getUserDetails() {
  const supabase = createServerSupabaseClient();
  const session = await getSession();
  const user = session?.user;
  try {
    const { data: userDetails, error, status } = await supabase
      .from('profiles')
      .select(`full_name, username, avatar_url, professional`)
      .eq('id', user?.id)
      .single()
    return userDetails;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
