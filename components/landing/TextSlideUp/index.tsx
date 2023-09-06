'use client';

export const TextSlideUp = () => {
  return (
    <span
      className="font-bold text-2xl bg-clip-text text-rose-500 inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="whitespace-nowrap block animate-text-slide-5 text-left leading-tight [&_li]:block">
       <li>sua casa</li>
                        <li>sua sala</li>
                        <li>sua área gourmet</li>
                        <li>seu banheiro</li>
                        <li>sua roupa</li>
                        <li aria-hidden="true">sua casa</li>
      </ul>
    </span>
  )
}