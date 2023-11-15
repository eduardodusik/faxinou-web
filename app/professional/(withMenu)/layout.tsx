import React from "react";
import Menu from "@/components/layout/Menu";

export default function Layout ({children}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative h-screen">
      {children}
      <Menu  professional />
    </section>
  )
}