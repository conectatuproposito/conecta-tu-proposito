import Image from "next/image";

export default function Contactate() {
  return (
    <div className="flex flex-col xl:max-w-screen-xl m-auto p-4 xl:p-0 ">
      <div className="grid grid-cols-2">
        <div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Modelo de desempeño</h2>
            <div className="mb-4">
              Metodología desarrollada en Oxford Inglaterra por IOpener
              Institute, que permite transformar la forma en que las
              organizaciones evalúan, analizan y actúan con la información de
              desempeño de sus colaboradores. Identifica factores como la
              contribución, la convicción, la cultura, el compromiso y la
              capacidad, entre otros, para mejorar el desempeño y alcanzar el
              máximo potencial de las personas, logrando mejores resultados
              económicos y productivos en la organización.
            </div>
            <div className="mb-4">
              El capital humano es el activo número 1 de tu empresa, y la suma
              de este capital es lo que permite alcanzar los resultados.
            </div>
            <div>
              ¿Qué estás haciendo para promover el máximo potencial, mejorar el
              desempeño y la felicidad en el trabajo?
            </div>
            <div className="mt-4">
              <button className="mr-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                contacta ahora
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                ver certificado
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <Image
            src="/service-1.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/service-2.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-4">
            Familia inteligentemente saludable
          </h2>
          <div className="mb-4">
            Menú de opciones saludables para apoyar los proyectos enfocados en
            promover la educación que convoca hoy a las familias en las
            sociedades modernas. Apoya a tus hijos a aprender a sacar lo mejor
            de sí mismos, propiciando así la posibilidad de ver el mundo como
            es, no como la mayoría del tiempo pretenden verlo. Apóyalos de
            manera permanente, haciéndote su respaldo, cultivándose en los
            valores y generando un ambiente de armonía que propicie el logro de
            los objetivos personales y familiares.
          </div>
          <div className="mb-4">
            <ul>
              <li>Vivir Inteligentemente Saludable</li>
              <li>Familia Inteligentemente Saludable</li>
              <li>Jóvenes Inteligentemente Saludables</li>
              <li>Adulto Mayor Inteligentemente Saludable</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Contacta ahora
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div>Psicoterapia</div>
          <div className="mb-4">
            El fin de la práctica de la psicoterapia no es alcanzar la sanación,
            sino que la sanación sea consecuencia de un proceso y un camino. Es
            importante distinguir en este proceso el camino que nos aporte una
            perspectiva de hasta dónde podemos llegar y de qué forma podemos
            abrir el panorama para entender y comprender la dimensión de un
            proceso de meditación que se convierte en un itinerario o camino que
            abarca la globalidad de todas las dimensiones de la persona. Más
            importante que hablar de salud, es hablar de sanación orientada a
            forjar en nosotros una vida saludable que contemple todas las
            realidades que forman parte del ser, como lo son la dimensión
            biológica, psicológica, social y espiritual.
          </div>
          <div className="mb-4">
            <ul>
              <li>Intervenciones personalizadas</li>
              <li>Vida con sentido</li>
              <li>Conecta tu vida</li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Contacta ahora
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/service-3.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/service-4.png"
            alt="iconos"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
        <div>
          <div>Ejecutivos</div>
          <div className="mb-4">
            Cultivar un liderazgo transformacional y sustentable caracterizado
            para que las organizaciones aprovechen las fortalezas y el potencial
            de sus funcionarios, desde la promoción del capital psicológico,
            humano y social. Esto permite a los líderes y a los liderados
            ampliar su percepción del mundo para verse como seres humanos
            integrales, capaces de ser instrumentos al servicio del crecimiento
            de la organización y del logro efectivo de resultados, motivando y
            guiando a otros para lograrlos. Se sienten responsables de su
            crecimiento, desarrollo y felicidad en el trabajo.
          </div>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Contacta ahora
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Image
            src="/isotipo.png"
            alt="isotipo"
            width={96}
            height={96}
            priority
            className="m-auto"
          />
          <div className="text-center">Conexiones</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="mb-4">
            <div className="mb-2">estrellas</div>
            <div>
              A partir de la comprensión y el amor aprendí que en el cultivo de
              mi interioridad estaban las respuestas a las preguntas que
              insistentemente buscaba afuera. La apertura de conciencia, el
              influjo hacia los demás y la paz interior son el fruto de ese amor
              propio. Un regalo tan {'"'}sabroso{'"'} e infinito que vale la
              pena compartir.
            </div>
            <div className="mt-2">
              <div>Juan Esteban Reyes</div>
              <div>Ejecutivo</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2">estrellas</div>
            <div>
              Como familia, comprendimos que no existen realidades terminadas ni
              cambios radicales. Fue el camino para entender que nuestro hijo no
              lo podíamos seguir reduciendo unilateralmente a una dimensión que
              lo caracteriza. Aprendimos que teníamos que prestar atención
              también a la realidad biológica, psicológica, social y espiritual
              que forman parte de su ser.
            </div>
            <div className="mt-2">
              <div>Familia Emiliani Mejia</div>
              <div>Psicoterapia</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2">estrellas</div>
            <div>
              Al ser un modelo basado en la persona, se enfoca en potenciar el
              capital psicológico con el fin de minimizar las diferencias y
              maximizar las similitudes. Esto logra que la suma del capital
              humano impacte de manera saludable el capital social, facilitando
              el logro de los resultados financieros.
            </div>
            <div className="mt-2">
              <div>Cristina Muñoz Olce</div>
              <div>Modelo de desempeño</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
