"use server";
import {DetailsForm} from "@/app/customer/(withoutMenu)/details/page";
import {createServerSupabaseClient, getSession} from "@/app/supabase-server";
import {SendRequestForm} from "@/components/ServiceDetail";
import {supabase} from "@supabase/auth-ui-shared";
import {revalidatePath} from "next/cache";

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

export type Order = CreateOrder & {
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
    const {data} = await supabase.from('orders').select('*').eq('user_id', user?.id).order('created_at', {ascending: false})
    return data as Order[]
  } catch (e) {
    return null
  }
}

export const listAvailableOrders = async () => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();


  try {
    const {data} = await supabase.from('orders').select('*').eq('available', true).order('created_at', {ascending: false})
    return data as Order[]
  } catch (e) {
    return null
  }
}

export const getOrder = async (id: string) => {
  const supabase = createServerSupabaseClient();
  console.log({id})
  try {
    const {data} = await supabase.from('orders').select('*').eq('id', id).single()
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

export const setInterestingInOrder = async (orderId: string, form: SendRequestForm) => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();
  const user = session?.user;

  try {
    const response = await supabase.from('interested')
      .insert({
        user_id: user?.id,
        order_id: orderId,
        value: form.price,
        description: form.description
      })

    console.log({response})
    return true
  } catch (e) {
    console.log(e)
    return null
  }
}

export const checkInterestingInOrder = async (orderId: string) => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();
  const user = session?.user;

  try {
    const response = await supabase.from('interested').select('*').eq('user_id', user?.id).eq('order_id', orderId).single()
    return response.data
  } catch (e) {
    return null
  }
}

export type Interested = {
  id: string;
  user_id: string;
  order_id: string;
  value: number;
  description: string;
  accepted: boolean;

}

export type Profile = {
  profiles: {
    id: string;
    full_name: string;
  }
}

export type InterestedWithProfile = Interested & Profile

export const getInterestedInOrder = async (orderId: string) => {
  const supabase = createServerSupabaseClient();

  const session = await getSession();

  try {
    const response = await supabase.from( 'interested')
      .select(`
        id,
        order_id,
        value,
        description,
        accepted,
        profiles (id, full_name)
      `).eq('order_id', orderId)
    console.log(response.data)
    return response.data as unknown as InterestedWithProfile[]
  } catch (e) {
    return null
  }
}

export const acceptInterested = async (id: string, orderId: string) => {
  const supabase = createServerSupabaseClient();

    await Promise.all([
      supabase.from('interested').update({accepted: true}).eq('id', id),
      supabase.from('orders').update({available: false}).eq('id', orderId)
    ])

  revalidatePath('/')
  revalidatePath('/customer/orders/[id]')
}

export const getMyInterestedServices = async () => {
  const supabase = createServerSupabaseClient();
  const session = await getSession();

  try {
     const interestedServices = await supabase.from('interested').select('*').eq('user_id', session?.user?.id)
    const orders = await supabase.from('orders').select('*').in('id', (interestedServices?.data as Interested[])?.map((service) => service.order_id))
    return orders.data?.map((item) => ({
      ...item as Order,
      accepted: interestedServices.data?.find((service) => service.order_id === item.id)?.accepted
    }))
  } catch (err) {
    console.log(err)
    return null
  }
}