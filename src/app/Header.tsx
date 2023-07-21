"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburg from "@/components/Hamburg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700 md:h-20 transition-all">
      <div
        className={`flex flex-col md:flex-row w-full md:justify-around mx-auto items-center  uppercase p-4 md:p-0 md:py-4`}
      >
        <div className="flex justify-between md:justify-around w-full  md:w-auto">
          <Link href="/">
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
          } transition-all `}
        >
          <Link href="/" className="hover:text-pink-300">
            inicio
          </Link>
          <Link href="/nosotros" className="hover:text-pink-300">
            nosotros
          </Link>
          <Link href="/conectate" className="hover:text-pink-300">
            contactate
          </Link>
          <Link href="/" className="hover:text-pink-300">
            blog
          </Link>
          <Link href="/contacto" className="hover:text-pink-300">
            contacto
          </Link>

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
