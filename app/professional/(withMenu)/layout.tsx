import React from "react";
import Menu from "@/components/layout/Menu";

export default async function Layout({children, order}: {
  children: React.ReactNode;
  order: React.ReactNode

}) {

  return (
    <section className="relative h-screen">
      {children}
      {order}
      <Menu professional/>
    </section>
  )
}