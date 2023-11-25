'use client'
import {useCallback, useEffect, useState} from 'react'
import {Session, createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function AccountForm({session}: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const user = session?.user
  const router = useRouter();
  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const {data, error, status} = await supabase
        .from('profiles')
        .select(`full_name, username`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data?.full_name)
        setUsername(data?.username)
      }
    } catch (error) {
      // alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
                                 username,
                                 fullname
                               }: {
    username: string | null
    fullname: string | null
  }) {
    try {
      setLoading(true)

      const {error} = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
      router.back()
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=" p-6 mt-5">
      <div className="flex flex-col gap-5">
        <div className="grid max-w-sm items-center gap-1.5">
          <label htmlFor="email">Email</label>
          <Input id="email" type="text" value={session?.user.email} disabled/>
        </div>

        <div className="grid max-w-sm items-center gap-1.5">
          <label htmlFor="fullName">Nome completo</label>
          <Input
            id="fullName"
            type="text"
            placeholder="Nome completo"
            value={fullname || ''}
            onChange={(e) => setFullname(e.target.value)}/>
        </div>
      </div>
      <div>
      </div>

      <div className="mt-5">
        <Button
          onClick={() => updateProfile({fullname, username})}
          disabled={loading}
        >
          {loading ? 'Carregando ...' : 'Salvar'}
        </Button>
      </div>
    </div>
  )
}