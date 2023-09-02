import React from "react";
import Menu from "@/components/layout/Menu";
import BookInput from "@/components/layout/BookInput";

export default function Layout ({children}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <BookInput />
      {children}
      <Menu />
    </section>
  )
}