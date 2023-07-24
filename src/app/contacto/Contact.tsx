"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export type FormData = {
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  message: string;
};

const inputClassName = `
  border-gradient
  w-full rounded-full
  border bg-white 
  border-blue-400
  py-2 px-4
  text-base font-medium text-gray-700 
  outline-none focus:border-purple-500 
  focus:shadow-md
  focus:ring-1 focus:ring-purple-700 
  focus:border-transparent
`;

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(data: FormData) {
    setEnviando(true);
    const apiEndpoint = "/api/contacto";

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
    <form className="max-w-3xl m-auto mb-16" onSubmit={handleSubmit(onSubmit)}>
      {error && <div>{error}</div>}

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Nombre
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("nombres", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="last-name"
            className="mb-3 block text-base font-medium text-black"
          >
            Apellido
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("apellidos", { required: true })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Telefono
          </label>
          <input
            type="text"
            className={inputClassName}
            {...register("telefono", { required: true })}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className={inputClassName}
            {...register("email", { required: true })}
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-[25px] border border-purple-500 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-400 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <button
        className={`
      flex items-center justify-center  sm:w-[354px] h-11
      text-white rounded-full p-2 px-6
      bg-purple-800 hover:bg-sky-400 transition-all m-auto`}
        disabled={enviando}
      >
        Enviar
        <Image
          src="/arrow-right.svg"
          alt="Arrow Right"
          className="pt-[2px] ml-2 w-4 h-4"
          width={18}
          height={18}
          priority
        />
      </button>
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

export default Contact;
