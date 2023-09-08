export const TextSlideUp = () => {
  return (
    <span
      className="font-bold text-lg md:text-2xl bg-clip-text text-rose-500 inline-flex flex-col md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
       <li>sua casa</li>
       <li>sua sala</li>
       <li>sua área</li>
       <li>sua loja</li>
       <li>sua casa</li>
       <li aria-hidden="true">sua casa</li>
      </ul>
    </span>
  )
}