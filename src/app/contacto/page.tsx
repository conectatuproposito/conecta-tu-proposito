import Image from "next/image";
import Contact from "./Contact";

export default function Contacto() {
  return (
    <div className="flex flex-col xl:max-w-screen-xl m-auto p-4 xl:p-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 my-16">
        <div className="order-2 md:order-1">
          <div>
            <Image
              src="/icon-person.png"
              alt="icon person"
              width={96}
              height={96}
              priority
            />
            <h2
              className="text-5xl font-bold mb-2
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
              "
            >
              Hablemos...
            </h2>
            <div className="mb-4 text-xl font-semibold">
              Ven y descubre que no existen cambios radicales, ni realidades
              terminadas.
            </div>
            <div>
              En conecta tu propósito, marcamos la diferencia con un enfoque
              humano y personalizado.
            </div>
          </div>
        </div>
        <Image
          src="/contacto.png"
          alt="Contacto"
          width={1500}
          height={1500}
          priority
          className="m-auto order-1 md:oder-2 w-full"
        />
      </div>

      <div className="text-center">
        <Image
          src="/isotipo.png"
          alt="isotipo"
          width={96}
          height={96}
          priority
          className="m-auto mb-3"
        />
        <h3
          className="text-5xl font-bold mb-4
            bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
          "
        >
          Contáctanos
        </h3>
        <div className="text-xl font-semibold mb-12">
          En breve nos comunicaremos contigo.
        </div>
      </div>

      <Contact />
    </div>
  );
}
