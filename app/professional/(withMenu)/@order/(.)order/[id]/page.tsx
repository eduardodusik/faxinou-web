import {ServiceDetail} from "@/components/ServiceDetail";
import {checkInterestingInOrder, getOrder, Order} from "@/app/actions/order";

export default async function ServiceDetailModal({params}: { params: { id: string } }) {
  const response = await checkInterestingInOrder(params.id)
  const order = await getOrder(params.id)

  if (!order) {
    return <div>loading</div>
  }

  return (
    <ServiceDetail order={order} interested={!!response} />
  )
}