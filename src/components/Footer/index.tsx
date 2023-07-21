import Image from "next/image";
import Link from "next/link";
import Subscription from "../Subscription";

const Footer = () => {
  return (
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
    </footer>
  );
};

export default Footer;
