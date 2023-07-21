import Image from "next/image";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-white  bg-violet-950 rounded-full p-2 px-6 hover:bg-sky-400 transition-all">
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between m-auto">
      <div className="grid grid-cols-2 gap-4 w-full overflow-hidden">
        <div className=" my-auto">
          <div className="text-5xl font-bold mb-4">
            Diseña y proyecta el ser <br /> humano que hay en ti…
          </div>
          <div className="mb-4 text-3xl">
            Elevar el ancla, una opción que siempre <br />
            tendrás disponible en tu vida.
          </div>
          <Button>Conecta con tu proposito</Button>
        </div>
        <div>
          <Image
            src="/home1.png"
            alt="Home 1"
            width={500}
            height={500}
            className="w-full scale-125"
            priority
          />
        </div>
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

        <div className="text-2xl font-bold mb-4">
          Un Itinerario personal <br />
          de cultivo integral
        </div>
        <div className="mb-4">
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
          className="m-auto"
        />
      </div>

      <div className="text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-8">
            <div className="text-4xl font-bold mb-4">
              Nos conectamos con tus necesidades
            </div>
            <div className="mb-4">
              En conecta tu propósito, marcamos la diferencia con un enfoque
              humano y personalizado.
            </div>
            <div className="text-xl font-bold mb-4">
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
          <Button>Conoce más</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="mb-4">image</div>
          <div>
            <div className="text-xl font-bold mb-2">Familia</div>
            <div>
              <ul className="text-left">
                <li>Vivir inteligentemente saludable</li>
                <li>Familia inteligentemente saludable</li>
                <li>Adulto mayor inteligentemente saludable</li>
              </ul>
            </div>
          </div>
          <div className="text-blue-500 hover:text-blue-600">ver más +</div>
        </div>
        <div>
          <div className="mb-4">image</div>
          <div>
            <div className="text-xl font-bold mb-2">Familia</div>
            <div>
              <ul className="text-left">
                <li>Vivir inteligentemente saludable</li>
                <li>Familia inteligentemente saludable</li>
                <li>Adulto mayor inteligentemente saludable</li>
              </ul>
            </div>
          </div>
          <div className="text-blue-500 hover:text-blue-600">ver más +</div>
        </div>
        <div>
          <div className="mb-4">image</div>
          <div>
            <div className="text-xl font-bold mb-2">Familia</div>
            <div>
              <ul className="text-left">
                <li>Vivir inteligentemente saludable</li>
                <li>Familia inteligentemente saludable</li>
                <li>Adulto mayor inteligentemente saludable</li>
              </ul>
            </div>
          </div>
          <div className="text-blue-500 hover:text-blue-600">ver más +</div>
        </div>
      </div>
    </div>
  );
}
