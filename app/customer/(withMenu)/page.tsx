"use client"
import {Services} from "@/app/customer/(withMenu)/components";
import {Hero} from "@/components/layout/Hero";
import {useRouter} from "next/navigation";

export default function CustomerPage() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/customer/details')
  }

  return (
    <section className="p-6">
      <Hero />
      <section className="pt-5">
         <Services onChange={handleClick} />
      </section>
    </section>
  )
}