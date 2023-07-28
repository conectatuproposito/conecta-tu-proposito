import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import AnimationMain from "@/components/AnimationDiv";

export default function Home() {
  return (
    <AnimationMain
      className="
        flex flex-col items-center justify-between m-auto overflow-hidden
      "
    >
      <div
        className="grid grid-cols-1 gap-4 mx-auto w-full    
          md:mt-[4.2%] md:grid-cols-2
          lg:pl-[7%]                           
          xl:max-w-screen-xl xl:mt-[5.2%] xl:pl-[1%]        
        "
      >
        <div className="order-2 md:order-1 p-4 lg:p-0">
          <div
            className=" font-extrabold mb-4           
              text-[2rem] leading-[2.75rem]   
              md:text-[1.8rem] md:leading-[2.5rem]   
              lg:text-[2.5rem] lg:leading-[2.75rem]   
              xl:text-5xl xl:leading-[3.25rem]        
            "
          >
            Diseña y proyecta el ser <br /> humano que hay en ti…
          </div>
          <div
            className=" font-semibold mb-6            
              md:text-xl 
              lg:text-2xl 
              xl:text-[1.72rem] xl:leading-[2.25rem]  
            "
          >
            Elevar el ancla, una opción que siempre <br />
            tendrás disponible en tu vida.
          </div>
          <Button href="/contacto" className="sm:w-[430px]">
            Conecta tu propósito
          </Button>
        </div>

        <div
          className="order-1 md:order-2 relative 
            min-h-[300px]
            lg:min-h-[350px]
          "
        >
          <Image
            src="/home-1.png"
            alt="Home 1"
            width={1000}
            height={1000}
            className="absolute pointer-events-none
              w-full 
              md:scale-[1.1] md:-top-[25px] md:left-[18px]
              lg:scale-[1.25] lg:-top-[16px] lg:left-[8px]
              xl:scale-[1.4] xl:-top-[4%] xl:left-[2%]
            "
            priority
          />
        </div>
      </div>

      <div
        className="text-center mx-auto p-4 mt-7
          text-[1.275rem] leading-[1.5rem]
          lg:mt-0
          xl:p-0 xl:mt-28
          xl:max-w-screen-xl"
      >
        <Image
          src="/isotipo.png"
          alt="isotipo"
          width={116}
          height={96}
          priority
          className="m-auto"
        />

        <div
          className="font-bold mt-2 mb-4
            bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
            text-2xl
            md:text-4xl
            lg:text-5xl
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
          className="mx-auto mt-[4.3rem] md:mb-[6rem]"
        />
      </div>

      <div className="xl:max-w-screen-xl mt-6 mb-20 mx-auto p-4 xl:p-0 ">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-8 pl-[2%]">
            <div
              className="  font-bold
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
                text-2xl
                md:text-4xl
                lg:text-5xl
            "
            >
              Nos conectamos con tus <br /> necesidades
            </div>
            <div className="mt-5 text-[1.75rem] leading-[2rem] font-semibold">
              En conecta tu propósito, marcamos la diferencia con un enfoque
              humano y personalizado.
            </div>
            <div className="text-2xl md:text-4xl font-bold mt-9">
              Conecta es un itinerario
            </div>
            <div className="mt-2 text-[1.275rem] leading-[1.5rem]">
              El ser humano no puede reducirse unilateralmente a una dimensión o
              a una parte de su ser, hablar del individuo, de la persona, cada
              vez está encontrando un eco mayor en todos los ámbitos de la vida,
              no puede limitarse simplemente a una dimensión que lo caracteriza,
              teniéndose que prestar atención a todas las realidades, como lo
              son la dimensión biológica, psicológica, social y espiritual.
            </div>
            <div className="mt-7 text-[1.275rem] leading-[1.5rem]">
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
          <Button href="/contacto" className="m-auto sm:w-[430px]">
            Conoce más
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#D4EBF1] via-[#3ABBED] to-[#6D2EA3] w-full py-16">
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
              <li>Intervenciones personalizadas</li>
              <li>Vida con sentido</li>
              <li>Conecta tu vida</li>
            </ul>
          </Card>
        </div>
      </div>
    </AnimationMain>
  );
}

const imageClassName =
  " w-full relative group-hover:scale-[1.9] top-0 group-hover:top-[30%] card-transition";

const Card = ({
  image,
  children,
  href,
}: {
  image: string;
  children: React.ReactNode;
  href: string;
}) => (
  <div className="group w-[365px] rounded-[30px] mx-auto bg-white overflow-hidden cursor-pointer">
    <Link href={href}>
      <div className="h-40 overflow-hidden group-hover:overflow-visible">
        <Image
          className={imageClassName}
          src={`/${image}.png`}
          alt="Card 1"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="px-5 py-4">
        {children}

        <div className="text-purple-700 hover:text-purple-900 font-bold text-end mt-1">
          ver más +
        </div>
      </div>
    </Link>
  </div>
);
