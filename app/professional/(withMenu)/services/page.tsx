import {getMyInterestedServices} from "@/app/actions/order";
import {serviceTypes} from "@/store/constants";

export default async function Services() {
  const orders = await getMyInterestedServices()
  return (
    <section className="p-6 -mt-2">
      <h1 className="font-semibold">Seu serviços</h1>

      {orders?.length === 0 && (
        <div>
          Você ainda não tem serviços
        </div>
      )}

      <div className="mt-3 flex flex-col gap-4">
        {orders?.map(item => (
          <div key={item.id} className="p-4 border border-zinc-200 rounded">
            <div className="flex justify-between">
              <span className="font-semibold">
                {serviceTypes.find(x => x.key === item.form.serviceType)?.label}
              </span>
              <span>
                  {item.accepted ? "Aceito" : item.available ? "Pendente" : "Recusado"}
                </span>
            </div>
            <span className="text-zinc-500">
                {item.form.address}
              </span>
          </div>
        ))}
      </div>
    </section>
  )
}