"use client";
import {IoIosArrowBack} from "react-icons/io";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Layout ({children}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <section>
      <div className="w-screen p-5 flex items-center">
        <div className="cursor-pointer" onClick={router.back}>
          <IoIosArrowBack className="text-rose-500" />
        </div>
        <div className="w-screen flex justify-center">
          <h1 className="font-bold">
            Agendar serviço
          </h1>
        </div>
      </div>
      {children}
    </section>
  )
}