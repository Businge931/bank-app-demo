import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { sidebarLinks } from "./../../constants/index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
       
      {children}
    </main>
  );
}
