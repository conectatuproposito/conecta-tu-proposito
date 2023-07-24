import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between m-auto overflow-hidden">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto md:my-20
          w-full xl:max-w-screen-xl p-4 xl:p-0 
          "
      >
        <div className="my-auto order-2 md:order-1">
          <div className="text-3xl leading-10 sm:text-[54px] sm:leading-[3.7rem] font-extrabold mb-4">
            Diseña y proyecta el ser <br /> humano que hay en ti…
          </div>
          <div className="text-xl sm:text-3xl font-semibold mb-8">
            Elevar el ancla, una opción que siempre <br />
            tendrás disponible en tu vida.
          </div>
          <Button href="/contacto">Conecta con tu proposito</Button>
        </div>
        <div className="order-1 md:order-2 relative min-h-[320px]">
          <Image
            src="/home1.png"
            alt="Home 1"
            width={400}
            height={400}
            className="absolute max-w-[500px] w-full md:scale-[1.40] -top-12 md:-top-10"
            priority
          />
        </div>
      </div>

      <div className="text-center  xl:max-w-screen-xl mt-12 md:mt-28  mx-auto p-4 xl:p-0 ">
        <Image
          src="/isotipo.png"
          alt="isotipo"
          width={96}
          height={96}
          priority
          className="m-auto mb-3"
        />

        <div
          className="text-5xl font-bold mb-4
            bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
          "
        >
          Un Itinerario personal <br />
          de cultivo integral
        </div>
        <div className="xl:max-w-5xl">
          Descubrir la dimensión vital, existencial y de continuidad es decir,
          la interioridad no es una práctica aunque exige práctica, la
          meditación no es un ejercicio, aunque exija ejercicio, el mismo que se
          convierte en una dinámica de vida. No hablamos de devociones, de
          repeticiones, de esquemas preestablecidos, sino de desarrollo, de
          descubrimiento, del potenciamiento de los valores inherentes a la
          persona humana.
        </div>
        <Image
          src="/iconos.png"
          alt="iconos"
          width={1031}
          height={408}
          priority
          className="mx-auto my-14"
        />
      </div>

      <div className="xl:max-w-screen-xl mt-6 mb-20 mx-auto p-4 xl:p-0 ">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-8">
            <div
              className="text-5xl font-bold mb-4
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
            "
            >
              Nos conectamos con tus <br /> necesidades
            </div>
            <div className="mb-4 text-xl font-semibold">
              En conecta tu propósito, marcamos la diferencia con un enfoque
              humano y personalizado.
            </div>
            <div className="text-4xl font-bold mb-4">
              Conecta es un itinerario
            </div>
            <div className="mb-4">
              El ser humano no puede reducirse unilateralmente a una dimensión o
              a una parte de su ser, hablar del individuo, de la persona, cada
              vez está encontrando un eco mayor en todos los ámbitos de la vida,
              no puede limitarse simplemente a una dimensión que lo caracteriza,
              teniéndose que prestar atención a todas las realidades, como lo
              son la dimensión biológica, psicológica, social y espiritual.
              Descubre la forma de poder, integrar y unificar todas las
              dimensiones; proyectando, diseñando y edificando el ser humano que
              estás llamado a ser.
            </div>
          </div>
          <Image
            src="/composition.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
        <div>
          <Button href="/contacto" className="m-auto">
            Conoce más
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700 w-full py-16">
        <div className="flex flex-wrap xl:grid xl:grid-cols-3 xl:max-w-screen-xl xl:w-fit xl:gap-10 m-auto p-4 xl:p-0 gap-8  ">
          <Card image="card-1" href="/conectate#familia">
            <div className="text-xl font-bold mb-2">Familia</div>

            <ul className="list-disc pl-5">
              <li>Vivir inteligentemente saludable</li>
              <li>Familia inteligentemente saludable</li>
              <li>Adulto mayor inteligentemente saludable</li>
            </ul>
          </Card>

          <Card image="card-2" href="/conectate">
            <div className="text-xl font-bold mb-2">Modelo de desempeño</div>

            <ul className="list-disc pl-5">
              <li>Auto-desempeño y felicidad en el trabajo</li>
              <li>Medición individual y de equipo</li>
              <li>Planes de acción</li>
            </ul>
          </Card>

          <Card image="card-3" href="/conectate#psicoterapia">
            <div className="text-xl font-bold mb-2">Psicoterapia</div>

            <ul className="list-disc pl-5">
              <li>Auto-desempeño y felicidad en el trabajo</li>
              <li>Medición individual y de equipo</li>
              <li>Planes de acción</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

const imageClassName =
  " w-full relative hover:scale-[1.66] top-0 hover:top-[41%] card-transition";

const Card = ({
  image,
  children,
  href,
}: {
  image: string;
  children: React.ReactNode;
  href: string;
}) => (
  <div className="w-[320px] rounded-[30px] mx-auto bg-white overflow-hidden cursor-pointer">
    <div className="h-40 overflow-hidden hover:overflow-visible">
      <Image
        className={imageClassName}
        src={`/${image}.png`}
        alt="Card 1"
        width={500}
        height={500}
        priority
      />
    </div>

    <div className="px-6 py-4">
      {children}

      <div className="text-end">
        <Link className="text-purple-700 hover:text-purple-900" href={href}>
          ver más +
        </Link>
      </div>
    </div>
  </div>
);
