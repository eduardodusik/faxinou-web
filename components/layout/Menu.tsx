import {ReactElement} from "react";
import {RxChatBubble, RxFileText, RxHome, RxPerson} from "react-icons/rx";
import {cx} from "class-variance-authority";

const Item = ({icon, text, selected}: {
  icon: ReactElement;
  selected?: boolean;
  text: string;
}) => {
  return (
    <div className={cx("flex flex-col items-center justify-center gap-1 text-neutral-300", selected && "text-neutral-950")}>
      {icon}
      <div className="text-xs">{text}</div>
    </div>
  )
}

export default function Menu () {
  return (
    <div className="h-16 bg-white border-t border-neutral-100 sticky w-full bottom-0 right-0">
      <div className="flex gap-5 items-center justify-between h-full px-5">
        <Item selected icon={<RxHome className="text-2xl" />} text="Início" />
        <Item icon={<RxFileText className="text-2xl" />} text="Pedidos" />
        <Item icon={<RxChatBubble className="text-2xl" />} text="Chat" />
        <Item icon={<RxPerson className="text-2xl" />} text="Perfil" />
      </div>
    </div>
  )
}