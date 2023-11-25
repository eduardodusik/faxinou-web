"use client";

import {RxMinus, RxPlus} from "react-icons/rx";
import {cx} from "class-variance-authority";
import {Form, useForm, Field, FormProvider, FieldValues, SubmitHandler} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {useOrder} from "@/store/order";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {Options} from "@/app/customer/(withoutMenu)/details/options";
import {Input} from "@/components/ui/input";

type CounterProps = {
  label: string
  counter: number
  setCounter: (count: number) => void
}
const Counter = ({label, counter, setCounter}: CounterProps) => {

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="flex justify-between items-center bg-zinc-100 rounded-full p-1">
      <div onClick={decrement}
           className={cx("border rounded-full  bg-white p-5 flex items-center justify-center", counter === 1 ? "border-zinc-200 text-zinc-200" : "hover:border-rose-500 hover:text-rose-500 text-rose-300 border-rose-300 cursor-pointer")}>
        <div className="font-bold text-xl">
          <RxMinus/>
        </div>
      </div>

      <div className="font-bold text-lg flex gap-1">
        <span>
          {counter}
        </span>
        <span>
          {label}{counter > 1 ? "s" : ""}
        </span>
      </div>

      <div onClick={() => setCounter(counter + 1)}
           className="border cursor-pointer hover:border-rose-500 hover:text-rose-500 rounded-full text-rose-300 border-rose-300 bg-white p-5 flex items-center justify-center">
        <div className="font-bold text-xl">
          <RxPlus/>
        </div>
      </div>

    </div>
  )
}

export type DetailsForm = {
  roomCount: number
  address: string;
  bathCount: number
  options: string[]
  houseType: string
  description: string
}


export default function Details() {
  const {setForm, formDetails} = useOrder(state => ({
    setForm: state.setDetails,
    formDetails: state.detailsForm,
  }))
  const form = useForm<DetailsForm>({
    defaultValues: formDetails,
    mode: "onChange",
  })
  const router = useRouter()


  const onSubmit: SubmitHandler<DetailsForm> = (data) => {
    setForm(data as DetailsForm)
    router.push("/customer/review-order")
  }

  return (
    <FormProvider {...form}>
      {/*// @ts-ignore*/}
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 p-4">
          <span className="font-bold text-xl">Como é o seu espaço?</span>

          <FormField name="address" control={form.control} render={({field}) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Endereço completo"/>
              </FormControl>
            </FormItem>
          )} />

          <FormField
            name="houseType"
            control={form.control}
            render={({field}) => (
              <RadioGroup defaultValue={field.value} value={field.value} onValueChange={field.onChange}
                          className="grid grid-cols-2 gap-4">

                <div>
                  <RadioGroupItem
                    value="casa"
                    id="casa"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="casa"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Casa
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="apartamento"
                    id="apartamento"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="apartamento"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Apartamento
                  </Label>
                </div>
              </RadioGroup>
            )}
          />


          <FormField
            name="roomCount"
            control={form.control}
            render={({field}) => (
              <Counter counter={field.value} setCounter={field.onChange} label="Quarto"/>
            )}
          />

          <FormField
            name="bathCount"
            control={form.control}
            render={({field}) => (
              <Counter counter={field.value} setCounter={field.onChange} label="Banheiro"/>
            )}
          />

          <FormField
            control={form.control}
            name="options"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Necessidades</FormLabel>
                  <FormDescription>
                    Selecione de acordo com o que você procura.
                  </FormDescription>
                </div>
                {Options.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="options"
                    render={({field}) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({field}) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva o que você precisa"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Preencha com informações adicionais que possam ajudar o(a) profissional a entender melhor o que você
                  está procurando.
                </FormDescription>
                <FormMessage/>
              </FormItem>
            )}
          />

          <div className="flex sticky w-100 bottom-0 py-2 bg-popover border-0">

            <Button type="submit" className="w-full">
              Continuar
            </Button>
          </div>
        </div>
      </Form>
    </FormProvider>

  )
}