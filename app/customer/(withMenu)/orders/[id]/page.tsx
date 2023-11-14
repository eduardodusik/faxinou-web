import {finishOrder, getOrder} from "@/app/actions/order";
import {IoIosArrowBack} from "react-icons/io";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {UpdateOrder} from "@/app/customer/(withMenu)/orders/[id]/updateOrder";

export default async function OrderDetail({params}: { params: { id: string } }) {
  const response = await getOrder(params.id)

  return (
    <div className="flex flex-col gap-4 pt-10 p-6">
      <Link className="cursor-pointer flex items-center gap-4 text-zinc-400" href="/customer/orders">
        <IoIosArrowBack className="text-rose-500" /> Voltar para pedidos
      </Link>

      <UpdateOrder orderId={params.id} isFinished={!response?.available} />

      <span className="font-bold pt-4">Detalhes do serviço</span>

      <span>preencher com informações</span>

      <span className="pt-5 font-bold">Pessoas interessadas</span>


      <section>

      </section>
    </div>
  )
}