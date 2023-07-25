"use client";

import Image from "next/image";
import Link from "next/link";
import Subscription from "../Subscription";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [reloadAnimation, setReloadAnimation] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setReloadAnimation(false);
    setReloadAnimation(true);
  }, [pathname]);

  return (
    <>
      <motion.footer
        initial={reloadAnimation ? "hidden" : "visible"}
        animate={reloadAnimation ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="xl:max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-8 px-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold">
              <Image
                src="/logo.svg"
                alt="Instagram Logo"
                className="pointer m-auto"
                width={300}
                height={90}
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-8">
            <div>
              <div className="text-xl text-purple-700 uppercase">Website</div>
              <div className="flex flex-col">
                <Link href="/" className=" hover:text-purple-700">
                  inicio
                </Link>
                <Link href="/nosotros" className=" hover:text-purple-700">
                  nosotros
                </Link>
                <Link href="/conectate" className=" hover:text-purple-700">
                  conectate
                </Link>
                <Link href="/contacto" className=" hover:text-purple-700">
                  contacto
                </Link>
              </div>
            </div>

            <div>
              <div className="text-xl text-purple-700 uppercase">Pronto</div>
              <div>
                <div className="">Blog</div>
                <div className="">Escuela conecta</div>
                <div className="">Bootcamp</div>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="text-xl  text-purple-700 uppercase">Aliados</div>
              <a href="/" className=" hover:text-purple-700">
                Happines Mark
              </a>
              <a
                href="https://www.iopenerinstitute.com/happiness-at-work-what"
                className=" hover:text-purple-700"
              >
                i Opener Institute
              </a>

              <a href="/" className=" hover:text-purple-700">
                Dicio
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="text-xl text-purple-700 uppercase">Contacto</div>
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

        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 ">
          <div></div>
          <div></div>

          <Subscription />

          <div className="mt-8 md:mt-0">
            <div className="mb-2 uppercase text-purple-500">
              Síguenos en redes sociales
            </div>

            <div className={`flex flex-row gap-4 text-black transition-all`}>
              <a href="" target="_blank" className="hover:text-gray-200 w-6">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={22}
                  height={22}
                  priority
                />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200">
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  width={22}
                  height={22}
                  priority
                />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200">
                <Image
                  src="/twitter.svg"
                  alt="twitter Logo"
                  width={22}
                  height={22}
                  priority
                />
              </a>

              <a href="" target="_blank" className="hover:text-gray-200">
                <Image
                  src="/facebook.svg"
                  alt="facebook Logo"
                  width={22}
                  height={22}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        className="flex items-center justify-center h-20 w-full  bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700"
      >
        ©2023 Conecta tu propósito. All rights reserved
      </motion.div>
    </>
  );
};

export default Footer;
