"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Image from "next/image";

export type FormData = {
  email: string;
};

const Subscription: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
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
      })
      .catch((err) => {
        console.log({ err });
        setError(err);
      })
      .finally(() => {
        setEnviando(false);
      });
  }

  const Form = () => (
    <form className="max-w-3xl m-auto" onSubmit={handleSubmit(onSubmit)}>
      {error && <div>{error}</div>}

      <div className="text-center md:text-left flex">
        <div className="mt-4 items-center">
          <div className="text-purple-500 mb-2">
            * Registráte para obtener beneficios y contenido de valor
          </div>
          <input
            type="email"
            placeholder="example@domain.com"
            className=" h-8 w-full border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md rounded-s-[30px] transition-all"
            {...register("email", { required: true })}
          />
        </div>

        <button
          disabled={enviando}
          className="h-8 w-8 self-end rounded-e-[30px] flex items-center text-white  bg-violet-950  hover:bg-sky-400 transition-all "
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

  return (
    <div>
      {enviado ? (
        <div>
          Gracias por contactar con nosotros, dentro de poco estaremos en
          contacto con tigo.
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
};

export default Subscription;
