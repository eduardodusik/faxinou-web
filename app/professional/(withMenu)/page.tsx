import {listAvailableOrders} from "@/app/actions/order";
import AvailableService from "@/components/AvailableService";

export default  async function Home() {
  const services = await listAvailableOrders()
  return (
    <section className="p-6 mt-5">
      <span className="font-bold">Bem-vindo, profissional!</span>

      <div className="rounded bg-rose-400 flex flex-col gap-2 p-5 mt-5">
        <span className="text-3xl font-bold text-white">
          {services?.length || 0}
        </span>
        <span className="text-white/90">
          Serviços disponíveis na sua área
        </span>
      </div>

      <section className="flex flex-col gap-4 mt-5">
      {services?.map(item => (
        <AvailableService order={item} key={item.id} />
      ))}
      </section>
    </section>
  )
}