"use client";
import AnimationMain from "@/components/AnimationDiv";
import Button from "@/components/Button";
import Image from "next/image";

export default function Contactate() {
  const handleOpenImage = () => {
    window.open("/certificado.jpeg", "_blank");
  };

  return (
    <AnimationMain
      className="
        flex flex-col m-auto gap-10 overflow-hidden
        xl:gap-28  max-w-[1440px]
        
      "
    >
      <Article
        id="modelo"
        title="Modelo de desempeño"
        image="service-1"
        direction="left"
      >
        <div className="">
          Metodología desarrollada en Oxford Inglaterra por IOpener Institute,
          que permite transformar la forma en que las organizaciones evalúan,
          analizan y actúan con la información de desempeño de sus
          colaboradores. Identifica factores como la contribución, la
          convicción, la cultura, el compromiso y la capacidad, entre otros,
          para mejorar el desempeño y alcanzar el máximo potencial de las
          personas, logrando mejores resultados económicos y productivos en la
          organización.
        </div>
        <div className="mt-6 font-semibold mb-4">
          El capital humano es el activo número 1 de tu empresa, y la suma de
          este capital es lo que permite alcanzar los resultados.
        </div>
        <div className="font-semibold">
          ¿Qué estás haciendo para promover el máximo potencial, mejorar el
          desempeño y la felicidad en el trabajo?
        </div>
        <div className="flex gap-4 mt-4">
          <Button
            target="_blank"
            href="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
            className="md:w-[350px]"
          >
            Conéctate ahora
          </Button>
          <button
            className="
              flex items-center justify-center h-11
            text-white rounded-full px-10 w-56
            bg-sky-400 hover:bg-pink-300 transition-all"
            onClick={handleOpenImage}
          >
            Ver certificado
          </button>
        </div>
      </Article>
      <Article
        id="familia"
        title="Familia inteligentemente saludable"
        image="service-2"
        direction="right"
      >
        <div className="mb-4">
          Menú de opciones saludables para apoyar los proyectos enfocados en
          promover la educación que convoca hoy a las familias en las sociedades
          modernas. Apoya a tus hijos a aprender a sacar lo mejor de sí mismos,
          propiciando así la posibilidad de ver el mundo como es, no como la
          mayoría del tiempo pretenden verlo. Apóyalos de manera permanente,
          haciéndote su respaldo, cultivándose en los valores y generando un
          ambiente de armonía que propicie el logro de los objetivos personales
          y familiares.
        </div>
        <div className="mb-4">
          <ul className="list-disc pl-6">
            <li>Vivir Inteligentemente Saludable</li>
            <li>Familia Inteligentemente Saludable</li>
            <li>Jóvenes Inteligentemente Saludables</li>
            <li>Adulto Mayor Inteligentemente Saludable</li>
          </ul>
        </div>
        <div>
          <Button
            target="_blank"
            href="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
            className="mt-2"
          >
            Conéctate ahora
          </Button>
        </div>
      </Article>
      <Article
        id="psicoterapia"
        title="Psicoterapia"
        image="service-3"
        direction="left"
      >
        <div className="mb-4">
          El fin de la práctica de la psicoterapia no es alcanzar la sanación,
          sino que la sanación sea consecuencia de un proceso y un camino. Es
          importante distinguir en este proceso el camino que nos aporte una
          perspectiva de hasta dónde podemos llegar y de qué forma podemos abrir
          un panorama para entender y comprender, la dimensión de un proceso de
          meditación que se convierte en un itinerario o camino que, abarca la
          globalidad de todas las dimensiones de la persona. Más importante que
          hablar de salud, es hablar de sanación orientada a forjar una vida
          saludable que, contemple todas las realidades que forman parte del
          ser, como lo son: la dimensión bilógica, psicológica, social y
          espiritual.
        </div>
        <div className="mb-4">
          <ul className="list-disc pl-6">
            <li>Intervenciones personalizadas</li>
            <li>Vida con sentido</li>
            <li>Conecta tu vida</li>
          </ul>
        </div>
        <div>
          <Button
            target="_blank"
            href="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
            className="mt-2"
          >
            Conéctate ahora
          </Button>
        </div>
      </Article>

      <Article
        id="ejecutivos"
        title="Ejecutivos"
        image="service-4"
        direction="right"
      >
        <div className="mb-4">
          Promover y Cultivar un liderazgo transformacional y sustentable,
          sensible a la esencia humana en donde se reflejen y aprovechen las
          fortalezas y el potencial de los funcionarios en las organizaciones, a
          través de la promoción del capital psicológico, humano y social, que
          permita a lideres y liderados ampliar la percepción del mundo para
          proyectarse como seres humanos integrales , capaces, de ser un
          instrumento al servicio del crecimiento de la organización, aportando
          al logro efectivo de resultados; liderando y orientado a otros para
          lograrlo, sintiéndose responsable de su crecimiento personal ,
          desempeño y felicidad en el trabajo.
        </div>
        <div>
          <Button
            target="_blank"
            href="https://wa.me/573107675203?text=Estoy%20interesado%20en%20su%20contacto"
            className="mt-2"
          >
            Conéctate ahora
          </Button>
        </div>
      </Article>
      <div>
        <div>
          <Image
            src="/isotipo-ctp.png"
            alt="isotipo"
            width={96}
            height={96}
            priority
            className="m-auto"
          />
          <h3
            className="text-5xl font-bold mb-4 text-center
                bg-gradient-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent
              "
          >
            Conexiones
          </h3>
        </div>

        <div
          className="flex flex-wrap gap-4 m-2
              xl:grid xl:grid-cols-3 xl:w-fit xl:mx-auto xl:gap-8"
        >
          <Card nombre="Juan Esteban Reyes" profesion="Ejecutivo">
            A partir de la comprensión y el amor aprendí que en el cultivo de mi
            interioridad estaban las respuestas a las preguntas que
            insistentemente buscaba afuera. La apertura de conciencia, el
            influjo hacia los demás y la paz interior son el fruto de ese amor
            propio. Un regalo tan {'"'}sabroso{'"'} e infinito que vale la pena
            compartir.
          </Card>

          <Card nombre="Familia Emiliani Mejia" profesion="Psicoterapia">
            Como familia, comprendimos que no existen realidades terminadas ni
            cambios radicales. Fue el camino para entender que nuestro hijo no
            lo podíamos seguir reduciendo unilateralmente a una dimensión que lo
            caracteriza. Aprendimos que teníamos que prestar atención también a
            la realidad biológica, psicológica, social y espiritual que forman
            parte de su ser.
          </Card>

          <Card nombre="Cristina Muñoz Olce" profesion="Modelo de desempeño">
            Al ser un modelo basado en la persona, se enfoca en potenciar el
            capital psicológico con el fin de minimizar las diferencias y
            maximizar las similitudes. Esto logra que la suma del capital humano
            impacte de manera saludable el capital social, facilitando el logro
            de los resultados financieros.
          </Card>
        </div>
      </div>

      <div className="linea-gradient-card" />
    </AnimationMain>
  );
}

const Article = ({
  id,
  title,
  children,
  image,
  direction,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  image: string;
  direction: "left" | "right";
}) => {
  return (
    <div
      id={id}
      className="
        grid grid-cols-1 gap-5 
        md:grid-cols-2 
        lg:gap-3
      "
    >
      <div
        className={`order-2 ${
          direction === "left" ? "md:order-1" : "md:order-2"
        }`}
      >
        <div
          className={`flex flex-col ${
            direction === "left" && " lg:ml-[14%] xl:ml-[12%]"
          } 
          m-5 
          md:ml-8
          lg:my-[6%] 
          xl:my-[8%] xl:mr-4
           `}
        >
          <h3
            className="text-5xl font-bold bg-gradient-to-b 
              from-blue-400 to-purple-500 bg-clip-text text-transparent
              mb-3
              lg:mb-2 lg:text-4xl xl:mb-4
              "
          >
            {title}
          </h3>
          <div
            className="flex flex-col leading-[1.123rem]
              lg:text-[0.99rem]
              xl:text-xl xl:leading-[1.75rem]  
            "
          >
            {children}
          </div>
        </div>
      </div>
      <div
        className={`order-1 ${
          direction === "left" ? "md:order-2" : "md:order-1"
        }`}
      >
        <div
          className={`linea-gradient ${direction === "right" && "reverse"}`}
        />
        <div
          className={`w-full md:h-full h-96 `}
          style={{
            backgroundImage: `linear-gradient(${
              direction === "right" ? "90deg" : "270deg"
            }, rgba(255,255,255,0) 50%, rgba(240,242,255,1) 99%), url(/${image}.png)`,
            backgroundSize: "cover",
            backgroundPosition: direction === "right" ? "left" : "right",
          }}
        />
        <div
          className={`linea-gradient ${direction === "right" && "reverse"}`}
        />
      </div>
    </div>
  );
};

const Card = ({
  children,
  nombre,
  profesion,
}: {
  children: React.ReactNode;
  nombre: string;
  profesion: string;
}) => {
  return (
    <div
      className="flex flex-col mx-auto mb-4 w-[360px] 
        shadow-xl rounded-b-3xl overflow-hidden
        text-center 
      "
    >
      <div className="linea-gradient-card" />
      <div className="flex-1 p-7">
        <div className="flex gap-2 w-fit mx-auto mb-2">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src="/star.svg"
              alt="star"
              width={20}
              height={20}
              priority
              className="m-auto"
            />
          ))}
        </div>
        <div>{children}</div>
      </div>
      <div
        className="flex flex-col justify-center text-white
          bg-gradient-to-b from-blue-400 to-purple-500 h-28 
        "
      >
        <div>{nombre}</div>
        <div>{profesion}</div>
      </div>
    </div>
  );
};
