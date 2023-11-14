"use client";

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {useOrder} from "@/store/order";
import {serviceTypes} from "@/store/constants";


type ServiceTypeProps = {
  value: string
  label: string
  description: string
  image: string
}

const ServiceType = ({label, description, image, value}: ServiceTypeProps) => {
  return (
    <div>
      <RadioGroupItem
        value={value}
        id={value}
        className="peer sr-only"
      />
      <Label
        htmlFor={value}
        className="transition-all cursor-pointer flex bg-white items-center gap-2 justify-start rounded-md border-2 hover:border-rose-300 peer-data-[state=checked]:border-rose-500"
      >
        <img src={image} className="rounded h-[100px] w-[100px]" alt="limpeza completa" width={100} height={100}/>
        <div className="flex flex-col p-2">
            <span className="font-semibold text-sm">
              {label}
            </span>
          <span className="text-sm text-neutral-500">
             {description}
            </span>
        </div>
      </Label>
    </div>
  )
}


type ServiceProps = {
  onChange?: (value: string) => void
}



export const Services = ({onChange}: ServiceProps) => {
  const { serviceType, setServiceType } = useOrder(state => ({serviceType: state.serviceType, setServiceType: state.setServiceType}))

  const handleChange = (value: string) => {
    setServiceType(value)
    onChange?.(value)
  }

  return (
    <section className="flex flex-col gap-4 mt-3">
      <h1 className="text-lg font-bold">
        Qual serviço você está procurando?
      </h1>
      <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2" defaultValue={serviceType} onValueChange={handleChange}>
        {
          serviceTypes.map(({key, label, description, imageUrl}) => (
            <ServiceType value={key} label={label} description={description} image={imageUrl} key={key} />
          ))
        }
      </RadioGroup>
    </section>
  )
}