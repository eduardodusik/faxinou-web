"use client";
import * as Dialog from "@radix-ui/react-dialog";
import {cx} from "class-variance-authority";
import {Button} from "@/components/ui/button";
import {acceptInterested, Interested} from "@/app/actions/order";
import {useState} from "react";
import {revalidatePath} from "next/cache";

type SelectProfessionalProps = {
  interested: Interested
}


const Content = ({interested}: SelectProfessionalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleAcceptInterested = async () => {
    try {
      setIsLoading(true)
      await acceptInterested(interested.id, interested.order_id)
      setSuccess(true)
      revalidatePath('/customer/orders/[id]')
      revalidatePath('/', 'layout')
    } catch (e) {
      console.log({e})
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <section className="relative p-6 pb-0 h-full min-h-full overflow-y-auto">
        <div className="w-full flex justify-center mt-1">
          <div className="bg-zinc-200 rounded-full h-2 w-10"/>
        </div>
        <div className="relative h-full w-full flex flex-col items-center pt-10">
          Profissional confirmado!

          <div className="fixed bottom-0 p-5 w-full">
            <Dialog.Close asChild>
              <Button variant="primaryOutline" className="w-full">
                Fechar
              </Button>
            </Dialog.Close>
          </div>
        </div>
      </section>
    )
  }


  return (
    <section className="relative p-6 pb-0 h-full min-h-full overflow-y-auto">
      <div className="w-full flex justify-center mt-1">
        <div className="bg-zinc-200 rounded-full h-2 w-10"/>
      </div>

      <div className="relative h-full w-full flex flex-col items-center pt-10">
              <span className="text-xl font-bold">
                Confirmar profissional selecionado
              </span>

        <div className="flex gap-2 pt-5">
          <span className="font-semibold">Nome do profissional: </span>
          <span>{interested.profiles.full_name}</span>
        </div>

        <div className="flex gap-2 pt-5">
          <span className="font-semibold">Mensagem: </span>
          <span>{interested.description}</span>
        </div>

        <div className="flex gap-2 pt-5">
          <span className="font-semibold">Valor do serviço: </span>
          <span>R$ {interested.value}</span>
        </div>

        <div className="fixed bottom-0 p-5 w-full">
          <Button disabled={isLoading} className="w-full" onClick={() => handleAcceptInterested()}>
            {isLoading ? 'Confirmando profissional...' : 'Confirmar'}
          </Button>
        </div>

      </div>

    </section>
  )
}


export const SelectProfessional = ({interested}: SelectProfessionalProps) => {


  return (
    <Dialog.Root modal>
      <Dialog.Trigger className="w-full" asChild>
        <Button className="w-full">
          Contratar profissional
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"/>
        <Dialog.Content
          className={cx(
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            "fixed left-[50%] top-[55%] z-50 w-screen h-[90%] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-t-2xl"
          )}>
          <Content interested={interested}/>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}