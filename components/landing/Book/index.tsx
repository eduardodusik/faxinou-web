import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {GiMagicBroom} from "react-icons/gi";
import {ReactNode} from "react";


type RadioItemProps = {
  value: string
  label: string
  Icon: ReactNode
}
const RadioItem = ({label, Icon, value}: RadioItemProps) => {
  return (
    <div>
      <RadioGroupItem
        value={value}
        id={value}
        className="peer sr-only"
      />
      <Label
        htmlFor={value}
        className="flex border-rose-500 bg-white text-rose-500 items-center gap-4 justify-start md:justify-center rounded-md border-2 p-4 hover:bg-rose-500 hover:text-white peer-data-[state=checked]:bg-rose-500 peer-data-[state=checked]:text-white"
      >
        {Icon}
        {label}
      </Label>
    </div>
  )
}

export default function Book () {
  return (
    <section className="p-5 md:px-20">
      <h1 className="text-lg font-bold">
        Qual serviço você está procurando?
      </h1>

      <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4 pt-4">
        <RadioItem value="default" Icon={<GiMagicBroom className="text-4xl"/>} label="Limpeza completa" />
        <RadioItem value="hard" Icon={<GiMagicBroom className="text-4xl"/>} label="Limpeza pesada" />
        <RadioItem value="glass" Icon={<GiMagicBroom className="text-4xl"/>} label="Somente uma área" />
        <RadioItem value="glass-2" Icon={<GiMagicBroom className="text-4xl"/>} label="outros" />
      </RadioGroup>
    </section>
  )
}