import CleanType from "components/BookConfig/CleanType";
import {Button} from "@/components/ui/button";
import Description from "@/components/BookConfig/Description";
import {RadioGroup} from "@/components/ui/radio-group";
import {Services} from "@/app/customer/(withMenu)/components";

export default function BookPage() {
  return (
    <article>
     <section className="p-5 relative h-screen">
       <div className="h-screen">
        <Services />
       </div>
       <div className="flex sticky w-100 bottom-0 py-2 bg-white border-0">
         <Button className="w-full">
           Continuar
         </Button>
       </div>
     </section>
    </article>
  )
}