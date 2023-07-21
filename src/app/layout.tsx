import "./globals.css";
import type { Metadata } from "next";
// import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Subscription from "@/components/Subscription";

// const nunito = Nunito({
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
//   style: ["normal", "italic"],
//   subsets: ["cyrillic", "latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      // className={nunito.className}
      >
        <Header />

        <main>{children}</main>

        <footer className="xl:max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 py-8 px-4">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold">
                <Image
                  src="/logo.svg"
                  alt="Instagram Logo"
                  className="pointer"
                  width={300}
                  height={90}
                  priority
                />
              </div>
            </div>

            <div className="flex justify-around gap-16">
              <div>
                <div className="text-xl text-purple-700">Website</div>
                <div className="flex flex-col">
                  <Link href="/" className=" hover:text-purple-700">
                    inicio
                  </Link>
                  <Link href="/nosotros" className=" hover:text-purple-700">
                    nosotros
                  </Link>
                  <Link href="/conectate" className=" hover:text-purple-700">
                    contactate
                  </Link>
                  <Link href="/contacto" className=" hover:text-purple-700">
                    contacto
                  </Link>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-xl text-purple-700">Pronto</div>
                <div>
                  <div className="">Blog</div>
                  <div className="">Escuela conecta</div>
                  <div className="">Bootcamp</div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="text-xl  text-purple-700">Aliados</div>
                <a
                  href="https://www.iopenerinstitute.com/happiness-at-work-what"
                  className=" hover:text-purple-700"
                >
                  i Opener Institute
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="text-xl font-bold">Contacto</div>
              <div>
                <div>
                  {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                  <div className="">info@conectatuproposito.com</div>
                </div>
                <div>
                  {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                  <div className="">(+57) 310 767 52 03</div>
                </div>
                <div>
                  {/* <img src="/path/to/img" alt="icon" className="h-6" /> */}
                  <div className="">Envigado - Colombia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center py-8 px-4 ">
            <div></div>
            <div></div>

            <Subscription />

            <div className="mt-8 md:mt-0">
              <div className="">Síguenos en redes sociales</div>
              <div className="mt-2 flex space-x-2">
                <a href="" target="_blank" className=" hover:text-purple-700">
                  instagram
                </a>
                <a href="" target="_blank" className=" hover:text-purple-700">
                  linkedin
                </a>
                <a href="" target="_blank" className=" hover:text-purple-700">
                  twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex items-center justify-center h-20 w-full  bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700">
          ©2023 Conecta tu propósito. All rights reserved
        </div>
      </body>
    </html>
  );
}
