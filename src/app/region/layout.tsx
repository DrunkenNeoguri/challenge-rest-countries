"use client";
import Header from "@/components/header/header";
import { Section } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Section>
      <Header />
      {children}
    </Section>
  );
}
