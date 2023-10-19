"use client";

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {useOrder} from "@/store/order";


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


export const Services = () => {
  const { serviceType, setServiceType } = useOrder(state => ({serviceType: state.serviceType, setServiceType: state.setServiceType}))
  return (
    <section className="flex flex-col gap-4 mt-3">
      <h1 className="text-lg font-bold">
        Qual serviço você está procurando?
      </h1>
      <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2" defaultValue={serviceType} onValueChange={setServiceType}>
        <ServiceType value="default" label="Limpeza completa" description="O serviço completo para sua casa ficar limpa e organizada." image="https://s3.amazonaws.com/www.ypedia.com.br/wp-content/uploads/2021/11/17155016/faxina_ypedia-1024x688.jpg" />
        <ServiceType value="pesada" label="Limpeza pesada" description="Limpeza pós obra, pós mudança ou faxina pesada." image="https://www.hygibras.com/wp-content/uploads/2020/12/Limpeza-pos-obra.png" />
        <ServiceType value="vidro" label="Limpar vidro" description="Limpeza de vidros, janelas e portas de vidro." image="https://www.canaldalimpeza.com.br/wp-content/uploads/2022/08/limpeza-de-vidros.png" />
        <ServiceType value="salao" label="Limpeza de salão de festas" description="Limpeza de salão de festas, churrasqueira e área gourmet." image="https://static.wixstatic.com/media/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg" />
        <ServiceType value="outro" label="Outros" description="Descreva o tipo de serviço que está procurando." image="https://static.wixstatic.com/media/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg" />
      </RadioGroup>
    </section>
  )
}