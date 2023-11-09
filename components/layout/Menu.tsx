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

  const selected = pathname === path;
  return (
    <div onClick={() => router.push(path)} className={cx("flex flex-col items-center justify-center gap-1 text-neutral-300 cursor-pointer", selected && "text-neutral-950")}>
      {icon}
      <div className="text-xs">{text}</div>
    </div>
  )
}

export default function Menu () {

  return (
    <div className="h-16 bg-white border-t border-neutral-100 fixed w-full bottom-0 right-0">
      <div className="flex gap-5 items-center justify-between h-full px-5">
        <Item path="/customer" icon={<RxHome className="text-2xl" />} text="Início" />
        <Item path="/customer/orders" icon={<RxFileText className="text-2xl" />} text="Pedidos" />
        <Item path="/customer/chat" icon={<RxChatBubble className="text-2xl" />} text="Chat" />
        <Item path="customer/profile" icon={<RxPerson className="text-2xl" />} text="Perfil" />
      </div>
    </div>
  )
}