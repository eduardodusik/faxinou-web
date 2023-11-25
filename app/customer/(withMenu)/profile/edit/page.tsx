import AccountForm from "./AccountForm"
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export default async function EditProfilePage() {
  const supabase = createServerComponentClient({cookies})

  const {
    data: {session},
  } = await supabase.auth.getSession()

  return <AccountForm session={session}/>
}

