"use client";

import {useOrder} from "@/store/order";
import {RxMinus, RxPlus} from "react-icons/rx";
import {useState} from "react";
import {cx} from "class-variance-authority";

type CounterProps = {
  label: string
}
const Counter = ({ label }: CounterProps) => {
  const [counter, setCounter] = useState(1)

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="flex justify-between items-center bg-zinc-100 rounded-full p-1">
      <div onClick={decrement}
           className={cx( "border rounded-full  bg-white p-5 flex items-center justify-center", counter === 1 ? "border-zinc-200 text-zinc-200" : "hover:border-rose-500 hover:text-rose-500 text-rose-300 border-rose-300 cursor-pointer")}>
        <div className="font-bold text-xl">
          <RxMinus/>
        </div>
      </div>

      <div className="font-bold text-lg flex gap-1">
        <span>
          {counter}
        </span>
        <span>
          {label}{counter > 1 ? "s" : ""}
        </span>
      </div>

      <div onClick={() => setCounter(counter + 1)}
           className="border cursor-pointer hover:border-rose-500 hover:text-rose-500 rounded-full text-rose-300 border-rose-300 bg-white p-5 flex items-center justify-center">
        <div className="font-bold text-xl">
          <RxPlus/>
        </div>
      </div>

    </div>
  )
}

export default function Details() {

  const {serviceType, setServiceType} = useOrder(state => ({
    serviceType: state.serviceType,
    setServiceType: state.setServiceType
  }))
  return (
    <div className="flex flex-col gap-3 p-4">
      <span className="font-bold text-xl">Como é o seu espaço?</span>
      <Counter label="Quarto" />
      <Counter label="Banheiro" />
    </div>
  )
}