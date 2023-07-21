import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="bg-[#F0F2FF]">
    <div className="flex flex-col xl:max-w-screen-xl m-auto p-4 xl:p-100 bg-[#F0F2FF]">
      {/* nosotros */}
      <div className="grid md:grid-cols-2">
        <div className="md:pr-[50px]">
          <h1 className="text-4xl font-bold mb-4 font-bold text-3xl
          bg-gradient-to-b from-[#3ABBED] to-[#9647C9]
          bg-clip-text text-transparent">Nosotros</h1>
          <div className="mb-4 lg:text-[28px] font-semibold">
            Descubre la forma de poder integrar y unificar todas las dimensiones
            del ser humano proyectando, diseñando y edificando el ser humano que
            estás llamado a ser.
          </div>
          <div className="mb-4">
            El ser humano no puede reducirse unilateralmente a una dimensión o a
            una parte de su ser, hablar del individuo, de la persona, cada vez
            está encontrando un eco mayor en todos los ámbitos de la vida, no
            puede limitarse simplemente a una dimensión que lo caracteriza,
            teniéndose que prestar atención a todas las realidades, como lo son
            la dimensión biológica, psicológica, social y espiritual.
          </div>
        </div>
        <div className="shadow-inner 
              ">
          <Image
            src="/nosotros.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full 
              
              "
          />
        </div>
      </div>
      {/* nuestro equipo */}
      <div className="text-center">
        <div>
          <Image
            src="/isotipo.png"
            alt="isotipo"
            width={96}
            height={96}
            priority
            className="m-auto"
          />
          <h2 className="text-2xl font-bold mt-8 font-bold text-3xl
          bg-gradient-to-b from-[#3ABBED] to-[#9647C9]
          bg-clip-text text-transparent">Nuestro equipo</h2>
        </div>
        <div className="mt-4 text-left">
          Soy un ser humano que entendió la importancia de caer en la cuenta y
          ser consciente de la posibilidad infinita de elegir el camino de la
          educación comó, una oportunidad de sacar lo mejor de sí mismo.
          <br />
          <br />
          Arquitecto humano, por haberme atrevido a explorar el arte de fluir
          naturalmente como una manera de diseñar, proyectar y edificar el ser
          humano cuya vocación, sentía, estaba llamado a ser.
          <br />
          <br />
          La formación como ingeniero me abrió el camino para entender que la
          existencia humana era más que la razón, fue así como haciéndole caso a
          la intuición, me atreví a explorar nuevos caminos y opciones que me
          abrieron la posibilidad de hacer lo que verdaderamente le hablaba a mi
          corazón.
          <br />
          <br />
          En el transcurso de doce años he venido acompañando, procesos de
          promoción de desempeño y felicidad en las organizaciones, así como
          también implementación de programas de familias inteligentemente
          saludables desde el coaching, la psicología y la espiritualidad, como
          resultado de la satisfacción de haber podido experimentar un
          laboratorio en mi hogar con mi esposa e hijos, labor que se fue
          extendiendo a intervenciones personalizadas con jóvenes, adultos y
          familias que están enfrentando desafíos de adiciones, crisis
          emocionales, propósito y vocación.
          <br />
          <br />
          De esta manera, descubrí que el talento, no era más que mi propia
          identidad, reflejada en lo que hago de la cabeza a los pies en cuerpo
          y alma con amor.
          <br />
          <br />
          Razón por la cual decidí incubar y darle vida a CONECTA TU PROPOSITO.
          Una alternativa para incentivar y promover la salud como una
          perspectiva holística que no reduzca al ser humano a una dimensión o
          parte de su ser, sino a la integralidad a través de prestarle atención
          a todas las realidades que forman parte de él, como lo son la
          dimensión biológica, psicológica, social y espiritual.
        </div>
      </div>
      {/* alberto  */}
      <div className="grid md:grid-cols-2 relative ">
        <div className="grid">
          <h3 className="order-1  mt-8
          font-bold text-3xl
          bg-gradient-to-b from-[#3ABBED] to-[#9647C9]
          bg-clip-text text-transparent
          ">
            Alberto Aguirre,<br /> Arquitecto Humano
          </h3>
          <div className="mt-4 text-left order-3 md:order-2">
            Master en psicología y Coach ontológico profesional certificado por
            la federación internacional de coaching IFC.
            <br />
            <br />
            Especializado en liderazgo sustentable, felicidad en el trabajo,
            redes colaborativas de arquitectura humana, con experiencia laboral
            internacional en intervención en planes estratégicos de acción para
            promover y maximizar el capital psicológico para el éxito
            fortaleciendo el capital social y humano a partir de experiencias
            transformadoras que permiten a líderes, jóvenes, adolescentes,
            niños, instituciones, organizaciones y familias, desarrollar
            habilidades inter e intra-personales para identificar la cuota de
            responsabilidad en el crecimiento, el desarrollo personal y
            profesional, la felicidad en la vida y en el trabajo.
          </div>
        </div>
        <div className="relative w-full">
          <div className="order-2 md:order-3 md:absolute bottom-[-50px]">
            <Image
              src="/personaje.png"
              alt="iconos"
              width={500}
              height={500}
              priority
              className="w-full"
              />
          </div>
        </div>

      </div>
        
        
    </div>
      <div className="flex items-center justify-center h-20 w-full  bg-gradient-to-r from-blue-200 via-blue-400 to-purple-700"/>
      
    </div>
  );
}
