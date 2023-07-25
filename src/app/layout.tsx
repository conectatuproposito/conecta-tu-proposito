import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conecta tu proposito",
  description: "Diseña y proyecta el ser humano que hay en ti…",
};

export default function RootLayout({
  children,
  ...args
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className + " bg-[rgba(240,242,255,1)]"}>
        <Header />

        <main>{children} </main>

        <Footer />
      </body>
    </html>
  );
}
