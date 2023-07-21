import Contact from "./Contact";

export default function Contacto() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        <div>image</div>
        <h2 className="text-2xl font-bold mt-4">Contáctanos</h2>
        <div className="mb-4">En breve nos comunicaremos contigo.</div>
      </div>

      <Contact />
    </main>
  );
}
