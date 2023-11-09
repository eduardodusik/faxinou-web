"use client"
import {useOrder} from "@/store/order";
import {Options} from "@/app/customer/(withoutMenu)/details/options";
import {Button} from "@/components/ui/button";
import {createOrder} from "@/app/actions/order";
import {useCallback} from "react";
import {useRouter} from "next/navigation";

type ItemDetailProps = {
  label: string;
  value: string
}

const ItemDetail = ({value, label}: ItemDetailProps) => {
  return (
    <div className="flex flex-col">
          <span className="font-bold">
            {label}
          </span>
      <span>
        {value}
      </span>
    </div>
  )
}

const ServiceType: { [key: string]: string } = {
  default: "Limpeza completa",
  pesada: "Limpeza pesada",
  vidro: "Limpar vidro",
  salao: "Limpeza de salão de festas",
  outro: "Outros"
}


export default function ReviewOrder() {
  const order = useOrder()
  const router = useRouter()
  console.log({order})

  const handleCreateOrder = useCallback(async () => {
    try {
      await createOrder({serviceType: order.serviceType, ...order.detailsForm})
      router.push('/customer/orders')
    } catch (e) {
      console.log({e})
    }
  },[order.detailsForm, order.serviceType])

  return (
    <div className="relative p-10 min-h-screen">
      <h1 className="text-lg font-bold">
        Revise as informações
      </h1>

      <div className="flex flex-col gap-4 pt-5">
        <ItemDetail label="Tipo de serviço" value={ServiceType[order.serviceType]} />
        <ItemDetail label="Local" value={order.detailsForm.houseType} />
        <ItemDetail label="Quantidade de quartos" value={order.detailsForm.roomCount.toString()} />
        <ItemDetail label="Quantidade de banheiros" value={order.detailsForm.bathCount.toString()} />
        <ItemDetail label="Necessidades" value={order.detailsForm.options.map(item => Options.find(op => op.id === item)?.label).join(", ") || " - "} />
        <ItemDetail label="Descrição" value={order.detailsForm.description} />
      </div>

      <div className="flex sticky w-100 bottom-0 py-2 bg-popover border-0">
        <Button type="button" className="w-full" onClick={handleCreateOrder}>
          Confirmar
        </Button>
      </div>
    </div>
  )
}