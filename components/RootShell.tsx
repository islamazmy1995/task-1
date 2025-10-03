"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function RootShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/" || pathname === "/login" || pathname === "/register" || pathname === "/verify";
  return (
    <>
      {!isAuthRoute && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isAuthRoute && <Footer />}
      <Toaster />
    </>
  );
}


