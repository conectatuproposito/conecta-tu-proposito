"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburg from "@/components/Hamburg";
import { motion } from "framer-motion";

import "./style.css";
import Instagram from "../svgs/Instagram";
import Facebook from "../svgs/Facebook";
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";
import Arrow from "../svgs/Arrow";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reloadAnimation, setReloadAnimation] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setReloadAnimation(false);

    setTimeout(() => {
      setReloadAnimation(true);
    }, 1000);
  }, [pathname]);

  return (
    <motion.header
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
      className="
        bg-gradient-to-r from-[#D4EBF1] via-[#3ABBED] to-[#6D2EA3] md:h-20
      "
    >
      <div
        className="
          flex flex-col  items-center justify-between w-full uppercase p-5
          md:pl-[7%] md:pr-[5%] md:flex-row md:h-20 sm:p-0
          "
      >
        <div className="flex justify-between md:justify-around w-full items-center md:w-auto">
          <Link className="h-fit" href="/">
            <Image
              src="/logo.svg"
              alt="Instagram Logo"
              className="pointer"
              width={140}
              height={40}
              priority
            />
          </Link>

          <div className="md:hidden">
            <Hamburg onChange={setIsMenuOpen} />
          </div>
        </div>

        <nav
          className={` flex flex-row flex-wrap  text-black content-center 
            gap-4 gap-y-2 
            md:justify-end md:gap-y-0.5 
            lg:gap-10 
           ${!isMenuOpen && "hidden md:flex"} mt-4 md:mt-0 transition-all`}
        >
          {[
            { name: "inicio", link: "/" },
            { name: "nosotros", link: "/nosotros" },
            { name: "conéctate", link: "/conectate" },
            { name: "blog", link: "//" },
            { name: "contacto", link: "/contacto" },
          ].map((item, i) => {
            if (item.name === "blog") {
              return (
                <div key={i} className="cursor-default">
                  {item.name}
                </div>
              );
            }

            return (
              <div
                key={i}
                className={` ${
                  item.name === "conéctate" && "conectate relative"
                } transition-all`}
              >
                <Link
                  href={item.link}
                  className={`hover:text-pink-300 ${
                    pathname === item.link && "text-pink-300"
                  } flex items-center transition-all`}
                >
                  {item.name}
                  {item.name === "conéctate" && (
                    <Arrow
                      className={`ml-1 ${
                        pathname === item.link && "fill-pink-300"
                      }`}
                    />
                  )}
                </Link>

                {item.name === "conéctate" && <OtroMenu />}
              </div>
            );
          })}

          <div className={`flex flex-row gap-5 text-black transition-all`}>
            <a
              href="https://www.instagram.com/conecta.tuproposito/"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Instagram className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100093252828696"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Facebook className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </a>

            <a
              href="https://twitter.com/ConectaTP"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Twitter className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/conecta-tu-propósito-7a2095266/"
              target="_blank"
              className="hover:text-gray-200 w-6"
            >
              <Linkedin className="fill-sky-300 hover:fill-pink-300 transition-all" />
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

const OtroMenu = () => (
  <div
    className="
      otro-menu absolute z-10 text-black w-60 hidden lg:block 
    "
  >
    <div className="h-2 bg-pink-300 rounded-t-xl " />
    <div className="flex flex-col gap-4 bg-[#D4EBF170] p-3">
      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#modelo"
      >
        Modelo de desempeño
      </Link>

      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#familia"
      >
        Salud en familia
      </Link>

      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#ejecutivos"
      >
        Ejecutivo
      </Link>

      <Link
        className="hover:text-pink-300 cursor-pointer"
        href="/conectate#psicoterapia"
      >
        Psicoterapia
      </Link>
      <div className="cursor-default">Bootcamp</div>
    </div>
  </div>
);
