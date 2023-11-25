"use client"
import {Order} from "@/app/actions/order";
import {serviceTypes} from "@/store/constants";
import * as Dialog from '@radix-ui/react-dialog';
import {ServiceDetail} from "@/components/ServiceDetail";
import Link from "next/link";

type AvailableServiceProps = {
  order: Order
}
export default function AvailableService ({order}: AvailableServiceProps) {
  return (
    <Link href={`professional/order/${order.id}`} className="border border-zinc-200 p-5 rounded flex flex-col gap-2">
      <span className="font-semibold">{serviceTypes.find(item => item.key === order.form.serviceType)?.label}</span>
      <span className="capitalize text-zinc-600">{order.form.houseType}</span>
     </Link>
      // <ServiceDetail order={order} />
  )
}