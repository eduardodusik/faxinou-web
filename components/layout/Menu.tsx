"use client"
import {ReactElement} from "react";
import {RxChatBubble, RxFileText, RxHome, RxPerson} from "react-icons/rx";
import {cx} from "class-variance-authority";
import {usePathname, useRouter} from "next/navigation";

const Item = ({icon, text, path}: {
  icon: ReactElement;
  text: string;
  path: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  console.log({pathname})
  const selected = pathname === path;
  const basePath = pathname.includes('customer') ? '/customer' : '/professional';

  return (
    <div onClick={() => router.push(`${basePath}/${path}`)} className={cx("flex flex-col items-center justify-center gap-1 text-neutral-300 cursor-pointer", selected && "text-neutral-950")}>
      {icon}
      <div className="text-xs">{text}</div>
    </div>
  )
}

function ProfessionalMenus () {
  return (
    <>
      <Item path="/services" icon={<RxFileText className="text-2xl" />} text="Servicos" />
    </>
  )
}

export default function Menu ({professional}: {
  professional?: boolean;
}) {

  return (
    <div className="h-16 bg-white border-t border-neutral-100 fixed w-full bottom-0 right-0">
      <div className="flex gap-5 items-center justify-between h-full px-5">
        <Item path="/" icon={<RxHome className="text-2xl" />} text="Início" />
        {!professional && <Item path="/orders" icon={<RxFileText className="text-2xl"/>} text="Pedidos"/>}
        {professional && <ProfessionalMenus />}
        <Item path="chat" icon={<RxChatBubble className="text-2xl" />} text="Chat" />
        <Item path="profile" icon={<RxPerson className="text-2xl" />} text="Perfil" />
      </div>
    </div>
  )
}