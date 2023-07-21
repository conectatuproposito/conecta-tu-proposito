import Image from "next/image";
import Contact from "./Contact";

export default function Contacto() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-center">
          <div>image</div>
          <h2 className="text-2xl font-bold mt-4">Hablemos...</h2>
          <div className="mb-4">
            Ven y descubre que no existen cambios radicales, ni realidades
            terminadas.
          </div>
          <div>
            En conecta tu propósito, marcamos la diferencia con un enfoque
            humano y personalizado.
          </div>
        </div>
        <div>image</div>
      </div>

      <div className="text-center">
        <Image
          src="/isotipo.png"
          alt="isotipo"
          width={96}
          height={96}
          priority
          className="m-auto"
        />
        <h2 className="text-2xl font-bold mt-4">Contáctanos</h2>
        <div className="mb-4">En breve nos comunicaremos contigo.</div>
      </div>

      <Contact />
    </div>
  );
}
