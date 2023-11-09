import {listOrders} from "@/app/actions/order";

export default async function Orders() {
  const response = await listOrders()
  console.log(response)
  return (
    <div>
      {response?.map(item => (
        <div key={item.id}>
          <span>{item.form.serviceType}</span>
        </div>
      ))}
    </div>
  )
}