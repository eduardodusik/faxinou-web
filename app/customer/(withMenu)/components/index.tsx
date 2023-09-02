import Link from "next/link";


export const Services = () => {
  return (
    <section className="flex flex-col gap-4 mt-3">
      <Link className="flex gap-2" href="customer/book">
        <img src="https://s3.amazonaws.com/www.ypedia.com.br/wp-content/uploads/2021/11/17155016/faxina_ypedia-1024x688.jpg" className="rounded h-[100px] w-[100px]" alt="limpeza completa" width={100} height={100}/>
        <div className="flex flex-col">
            <span className="font-semibold text-sm">
              Limpeza completa
            </span>
          <span className="text-sm text-neutral-500">
              O serviço completo para sua casa ficar limpa e organizada.
            </span>
        </div>
      </Link>

      <div className="flex gap-2">
        <img src="https://www.hygibras.com/wp-content/uploads/2020/12/Limpeza-pos-obra.png" className="rounded h-[100px] w-[100px]" alt="limpeza completa" width={100} height={100}/>
        <div className="flex flex-col">
            <span className="font-semibold text-sm">
              Limpeza pesada
            </span>
          <span className="text-sm text-neutral-500">
             Limpeza pós obra, pós mudança ou faxina pesada.
            </span>
        </div>
      </div>

      <div className="flex gap-2">
        <img src="https://www.canaldalimpeza.com.br/wp-content/uploads/2022/08/limpeza-de-vidros.png" className="rounded h-[100px] w-[100px]" alt="limpeza completa" width={100} height={100}/>
        <div className="flex flex-col">
            <span className="font-semibold text-sm">
              Limpar vidro
            </span>
          <span className="text-sm text-neutral-500">
              Limpeza de vidros, janelas e portas de vidro.
            </span>
        </div>
      </div>

      <div className="flex gap-2">
        <img src="https://static.wixstatic.com/media/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/de0957_c851e9b7f51e4e31ad417b567bab2e1b~mv2.jpg" className="rounded h-[100px] w-[100px]" alt="limpeza completa" width={100} height={100}/>
        <div className="flex flex-col">
            <span className="font-semibold text-sm">
              Limpeza de salão de festas
            </span>
          <span className="text-sm text-neutral-500">
              Limpeza de salão de festas, churrasqueira e área gourmet.
            </span>
        </div>
      </div>
    </section>
  )
}