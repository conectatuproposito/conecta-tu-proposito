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

      <div className="text-center md:text-left">
        <div className="">
          Registráte para obtener beneficios y contenido de valor
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
          <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
            Suscribir
          </button>
        </div>
      </div>

      <Button disabled={enviando} className="m-auto">
        Enviar
        <Image
          src="/arrow-right.svg"
          alt="Arrow Right"
          className="pt-[2px] ml-2 w-3 h-3 "
          width={17}
          height={17}
          priority
        />
      </Button>
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
