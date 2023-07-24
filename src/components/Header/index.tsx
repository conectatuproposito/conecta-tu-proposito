"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Hamburg from "@/components/Hamburg";

import "./style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700 md:h-20 transition-all">
      <div
        className={`flex flex-col md:flex-row w-full md:justify-around mx-auto items-center  uppercase p-4 md:p-0 md:py-4`}
      >
        <div className="flex justify-between md:justify-around w-full  md:w-auto items-center">
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
          className={` flex flex-row flex-wrap gap-4 text-black ${
            !isMenuOpen && "hidden md:flex"
          } mt-4 md:mt-0 transition-all`}
        >
          {[
            { inicio: "/" },
            { nosotros: "/nosotros" },
            { conectate: "/conectate" },
            { blog: "//" },
            { contacto: "/contacto" },
          ].map((item, i) => {
            if (Object.keys(item)[0] === "blog") {
              return (
                <div key={i} className="cursor-default">
                  {Object.keys(item)[0]}
                </div>
              );
            }

            return (
              <div
                key={i}
                className={` ${
                  Object.keys(item)[0] === "conectate" && "conectate relative"
                }`}
              >
                <Link
                  href={Object.values(item)[0]}
                  className={`hover:text-pink-300 ${
                    pathname === Object.values(item)[0] && "text-pink-300"
                  }`}
                >
                  {Object.keys(item)[0]}
                </Link>

                {Object.keys(item)[0] === "conectate" && <OtroMenu />}
              </div>
            );
          })}

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
        </nav>
      </div>
    </header>
  );
};

export default Header;

const OtroMenu = () => (
  <div className="otro-menu absolute z-10 text-black w-60 hidden md:block ">
    <div className="h-2 bg-pink-300 rounded-t-xl " />
    <div className="flex flex-col gap-4 bg-[#D4EBF150] p-3">
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
      <Link className="hover:text-pink-300 cursor-pointer" href="/conectate">
        Bootcamp
      </Link>
    </div>
  </div>
);
