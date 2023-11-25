"use client"
import * as Dialog from '@radix-ui/react-dialog';
import {Order, setInterestingInOrder} from "@/app/actions/order";
import {serviceTypes} from "@/store/constants";
import {ReactElement, useCallback, useState} from "react";
import {RxCalendar} from 'react-icons/rx';
import {LuBedDouble} from "react-icons/lu";
import {MdOutlineMapsHomeWork} from "react-icons/md";
import {CiBookmarkCheck, CiMap} from "react-icons/ci";
import {PiBathtub} from "react-icons/pi";
import {Options} from "@/app/customer/(withoutMenu)/details/options";
import {FaCheck} from "react-icons/fa";
import {BsChatLeftText} from "react-icons/bs";
import {Button} from "@/components/ui/button";
import {cx} from "class-variance-authority";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {DetailsForm} from "@/app/customer/(withoutMenu)/details/page";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";

type ItemDetailProps = {
  label: string;
  icon: ReactElement
}

const ItemDetail = ({label, icon}: ItemDetailProps) => {
  return (
    <div className="p-6 flex gap-3 items-center border-zinc-200 border-b">
      <div className="min-w-[30px]">
      {icon}
      </div>
      <span className="text-zinc-500 normal-case">
      {label}
      </span>
    </div>
  )
}


const FirstStep = ({order}: { order: Order }) => {
  const serviceType = serviceTypes.find(item => item.key === order.form.serviceType)
  return (
    <>

      <section className="mt-4 border-b border-zinc-200 p-5">
        <div className="flex flex-col md:flex-row items-start gap-6">

          <img src={serviceType?.imageUrl} className="rounded h-auto w-full md:w-[100px]" alt="limpeza completa"
               width={100}
               height={100}/>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">
              {serviceType?.label}
            </span>
            <span className="text-zinc-500">
              {serviceType?.descriptionForProfessional}
            </span>
          </div>
        </div>
      </section>

      <section>
        <ItemDetail label={order.form?.address || ''} icon={<CiMap/>}/>
        {/*<ItemDetail label="20/11/2023 as 08h" icon={<RxCalendar/>}/>*/}
        <ItemDetail label={order.form.houseType} icon={<MdOutlineMapsHomeWork/>}/>
        <ItemDetail label={`${order.form.roomCount} Quartos`} icon={<LuBedDouble/>}/>
        <ItemDetail label={`${order.form.roomCount} Banheiros`} icon={<PiBathtub/>}/>
        <ItemDetail label={order.form.description} icon={<BsChatLeftText/>}/>

        {
          order.form.options.map(op => (
            <ItemDetail key={op} label={Options.find(x => x.id === op)?.label || op} icon={<CiBookmarkCheck/>}/>
          ))
        }
      </section>

    </>
  )
}

export type SendRequestForm = {
  price: number
  description: string
}

const SecondStep = ({order}: { order: Order }) => {

  const form = useFormContext()
  return (
    <div className="flex flex-col">
      <span className="font-semibold">
        Manifestar interese
      </span>

      <div className="flex flex-col gap-5 mt-6">

        <FormField
          name="price"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormLabel>
                Preço do serviço
              </FormLabel>
              <Input {...field} type="number" required placeholder="R$ 120,00"/>
            </FormItem>
          )}/>

        <FormField
          control={form.control}
          name="description"
          render={({field}) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Deixe uma mensagem para o cliente"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Este é um espaço aberto para você realizar a oferta do seu serviço.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}


const Content = ({order, interested}: { order: Order; interested: boolean }) => {
  const [showingecondStep, setShowingecondStep] = useState(false)
  const [successOnSave, setSuccessOnSave] = useState<boolean | null>(interested || null)

  const handleNextStep = () => {
    if (!showingecondStep) {
      return setShowingecondStep(true)
    }
    return onSubmit()
  }

  const form = useForm<SendRequestForm>({
    defaultValues: {},
    mode: "onChange",
  })

  const onSubmit = useCallback(async () => {
    const response = await setInterestingInOrder(order.id, form.getValues())
    setSuccessOnSave(response)
    setShowingecondStep(false)
  }, [form, order.id])


    return (
      <FormProvider {...form}>

        <>
          {successOnSave && (
            <section className="w-full flex items-center font-semibold justify-center mt-4 bg-rose-400 text-white rounded p-5">Você manifestou interesse nesse serviço</section>

          )}
          {!showingecondStep && <FirstStep order={order}/>}
          {showingecondStep && <SecondStep order={order}/>}

          <div
            className={cx("bottom-0 left-0 bg-white py-3 pt-5 w-full gap-2 items-center flex justify-center border-zinc-200", showingecondStep ? "fixed px-6" : "sticky")}>
            {showingecondStep && (
              <Button variant="primaryOutline" className="w-full" onClick={() => setShowingecondStep(false)}>
                Voltar
              </Button>
            )}
            {!successOnSave && <Button className="w-full" onClick={handleNextStep}>
              Manifestar interesse
            </Button>}
          </div>
        </>
      </FormProvider>
    )
}

export const ServiceDetail = ({order, interested}: { order: Order; interested: boolean }) => {
  const router = useRouter();
  return (
    <Dialog.Root open modal onOpenChange={() => router.back()}>
    <Dialog.Portal>
      <Dialog.Overlay
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"/>
      <Dialog.Content
        className={cx(
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          "fixed left-[50%] top-[55%] z-50 w-screen h-[90%] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-t-2xl"
        )}>
        <section className="relative p-6 pb-0 h-full min-h-full overflow-y-auto">
          <div className="w-full flex justify-center mt-1">
            <div className="bg-zinc-200 rounded-full h-2 w-10"/>
          </div>
          <Content order={order} interested={interested} />
        </section>
      </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>

  )
}