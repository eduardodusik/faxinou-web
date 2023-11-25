import {acceptInterested, finishOrder, getInterestedInOrder, getOrder} from "@/app/actions/order";
import {IoIosArrowBack} from "react-icons/io";
import Link from "next/link";
import {UpdateOrder} from "@/app/customer/(withMenu)/orders/[id]/updateOrder";
import {Button} from "@/components/ui/button";
import {SelectProfessional} from "@/app/customer/(withMenu)/orders/[id]/selectProfessional";
import {serviceTypes} from "@/store/constants";

export const dynamic = 'force-dynamic'

export default async function OrderDetail({params}: { params: { id: string } }) {
  const response = await getOrder(params.id)
  console.log({response})
  const peopleInterested = await getInterestedInOrder(params.id)
  return (
    <div className="flex flex-col gap-4 pt-10 p-6">
      <Link className="cursor-pointer flex items-center gap-4 text-zinc-400" href="/customer/orders">
        <IoIosArrowBack className="text-rose-500" /> Voltar para pedidos
      </Link>


      <span className="font-bold pt-4">Detalhes do serviço</span>

      <div className="flex flex-col">
        <span>{serviceTypes.find(x => x.key === response?.form.serviceType)?.label}</span>
        <span>Endereço: {response?.form.address}</span>
        <span>Local: {response?.form.houseType}</span>
      </div>

      <span className="pt-5 font-bold">Pessoas interessadas</span>

      <section>
        {!peopleInterested?.length && (<>Ninguém se interessou ainda</>)}

        <div className="flex flex-col gap-5">
        {peopleInterested?.map(item => (
          <div key={item.id} className="flex flex-col gap-2 border border-zinc-200 rounded p-6">
            <span>Profissional: {item.profiles.full_name}</span>
            <span>Valor: {item.value}</span>
            <span>Observação: {item.description}</span>
            <div className="py-3 mt-3 border-t border-zinc-200">
              {response?.available ? <SelectProfessional interested={item}/> : (item.accepted ? 'Profissional selecionado' : '')}
            </div>
          </div>
        ))}
        </div>
      </section>

      <UpdateOrder orderId={params.id} isFinished={!response?.available} />

    </div>
  )
}