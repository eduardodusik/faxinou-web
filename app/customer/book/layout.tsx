import {IoIosArrowBack} from "react-icons/io";

export default function Layout ({children}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="w-screen p-5 flex items-center">
        <IoIosArrowBack className="text-rose-500" />
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