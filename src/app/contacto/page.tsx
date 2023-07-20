import Image from "next/image";

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

      <div>
        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold mb-2">
            Nombres
          </label>
          <input type="text" className="py-2 px-4 border rounded-lg" />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold mb-2">
            Apellidos
          </label>
          <input type="text" className="py-2 px-4 border rounded-lg" />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold mb-2">
            Email
          </label>
          <input type="text" className="py-2 px-4 border rounded-lg" />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold mb-2">
            Teléfono
          </label>
          <input type="text" className="py-2 px-4 border rounded-lg" />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold mb-2">
            Mensaje
          </label>
          <textarea className="py-2 px-4 border rounded-lg" rows={4}></textarea>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Enviar
        </button>
      </div>
    </main>
  );
}
