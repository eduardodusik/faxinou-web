import {listOrders} from "@/app/actions/order";
import {serviceTypes} from "@/store/constants";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Orders() {
  const response = await listOrders()
  console.log(response)

  if (!response?.length) {
    return (
      <div className="flex flex-col pt-5 items-center w-full justify-center">
        Parece que você ainda não realizou pedidos.

        <Link className="text-rose-500 font-bold ml-2" href="/customer/book">
          Clique aqui para solicitar um serviço
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      {response?.map(item => (
        <Link  href={`orders/${item.id.toString()}`} key={item.id} className="flex flex-col border border-zinc-100 p-4 rounded">
          <div className="flex justify-between">
            <span>{serviceTypes?.find(x => x.key === item.form.serviceType)?.label}</span>
            <span className="border rounded-full px-2 py-1 text-xs">
              {item.available ? 'Em aberto' : 'Finalizado'}
            </span>
          </div>
          <span className="text-zinc-400">
            Solicitado: {new Date(item.created_at).toLocaleDateString('pt-BR')}
          </span>
        </Link>
      ))}
    </div>
  )
}