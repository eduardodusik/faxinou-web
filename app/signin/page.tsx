import {getSession} from '@/app/supabase-server';
import AuthUI from './authUI';

import {redirect} from 'next/navigation';

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect('/customer');
  }

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <AuthUI/>
      </div>
    </div>
  );
}