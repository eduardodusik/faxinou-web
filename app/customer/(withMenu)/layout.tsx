import React from "react";
import Menu from "@/components/layout/Menu";

export default async function Layout({children}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative h-screen">
      {children}
      <div className="pb-20">
        <Menu/>
      </div>
    </section>
  )
}