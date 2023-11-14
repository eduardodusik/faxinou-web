"use client"
import {Button} from "@/components/ui/button";
import {finishOrder} from "@/app/actions/order";
import {useCallback, useState} from "react";

type UpdateOrderProps = {
  orderId: string
  isFinished?: boolean
}

export const UpdateOrder = ({orderId, isFinished}: UpdateOrderProps) => {
  const [finished, setFinished] = useState(isFinished)

  const handleFinishOrder = useCallback(async () => {
    try {
      const res = await finishOrder(orderId)
      setFinished(true)
    } catch (err) {
      console.log({err})
    }
  }, [orderId])

  if (finished || isFinished) {
    return (
      <section className="p-5 rounded border border-zinc-100 flex flex-col gap-4">
        <span className="font-bold">Pedido finalizado!</span>
        <span className="text-zinc-500">Obrigado por realizar seu pedido na nossa plataforma.</span>
      </section>
    )
  }

  return (
    <section className="p-5 rounded border border-zinc-100 flex flex-col gap-4">
      <span className="font-bold">Pedido finalizado?</span>
      <span className="text-zinc-500">O profissional escolhido já realizou o serviço?</span>

      <Button onClick={handleFinishOrder}>
        Sim, finalizar pedido
      </Button>
    </section>
  )
}