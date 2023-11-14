"use server";
import {DetailsForm} from "@/app/customer/(withoutMenu)/details/page";
import {createServerSupabaseClient, getSession} from "@/app/supabase-server";

type CreateOrder = DetailsForm & {
  serviceType: string;
}

export const createOrder = async (form: CreateOrder) => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();
  const user = session?.user;

  try {
    await supabase.from('orders').insert({
      user_id: user?.id,
      form: form
    })
  } catch (e) {
    console.log(e)
    return null
  }
}

type Order = CreateOrder & {
  id: string
  form: CreateOrder;
  available: boolean;
  user_id: string;
  created_at: string;
}

export const listOrders = async () => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();
  const user = session?.user;


  try {
    const { data } = await supabase.from('orders').select('*').eq('user_id', user?.id).order('created_at', { ascending: false })
    return data as Order[]
  } catch (e) {
    return null
  }
}

export const getOrder = async (id: string) => {
  const supabase = createServerSupabaseClient();
  console.log({id})
  try {
    const { data } = await supabase.from('orders').select('*').eq('id', id).single()
    return data as Order
  } catch (e) {
    return null
  }
}

export const finishOrder = async (id: string) => {
  const supabase = createServerSupabaseClient();
  console.log({id})
  try {
    await supabase.from('orders').update({available: false}).eq('id', id)
    return true
  } catch (e) {
    return null
  }
}