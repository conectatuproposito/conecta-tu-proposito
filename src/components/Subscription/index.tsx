"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export type FormData = {
  email: string;
};

const Subscription = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(data: FormData) {
    setEnviando(true);
    const apiEndpoint = "/api/subscripcion";

    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        setEnviado(true);
        setValue("email", "Bienvenido ahora estas conectado");
      })
      .catch((err) => {
        console.log({ err });
        setError(true);
        setValue("email", "Algo salio mal, algo salio mal");
      });
  }

  return (
    <form className="max-w-3xl m-auto" onSubmit={handleSubmit(onSubmit)}>
      {error && <div>{error}</div>}

      <div className="text-center md:text-left flex">
        <div className="mt-4 items-center">
          <div className="text-purple-500 mb-2">
            * Registráte para obtener beneficios y contenido de valor
          </div>
          <input
            type="email"
            placeholder="ejemplo@dominio.com"
            className={`
              h-8 w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium  outline-none focus:border-purple-500 focus:shadow-md rounded-s-[30px] 
              ${!(enviado || error) ? "text-gray-700" : ""}
              ${enviado ? "text-[#3ABBED] uppercase" : ""} ${
              error ? "text-[#E73D5C] uppercase" : ""
            } 
              transition-all
            `}
            {...register("email", { required: true })}
          />
        </div>

        <button
          disabled={enviando}
          className={`
            h-8 w-8 self-end rounded-e-[30px] flex items-center text-white hover:bg-sky-400 transition-all 
            disabled:bg-slate-500
            ${!(enviado || error) ? "bg-[#6D2EA3]" : ""}
             ${enviado ? "bg-[#3ABBED]" : ""} ${error ? "bg-[#E73D5C]" : ""}
          `}
        >
          <Image
            className="pt-[1px] ml-2 w-3 h-3"
            src="/arrow-right.svg"
            alt="Arrow Right"
            width={17}
            height={17}
            priority
          />
        </button>
      </div>
    </form>
  );
};

export default Subscription;
