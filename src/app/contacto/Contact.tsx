"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  nombres: string;
  apellidos: string;
  telefono: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(data: FormData) {
    setEnviando(true);
    const apiEndpoint = "/api/email";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <div>{error}</div>}
      <div className="flex gap-4">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Nombre
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
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
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("apellidos", { required: true })}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Telefono
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
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
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
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
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>

      <div className="text-center">
        <button
          className="hover:bg-purple-900 rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none transition-all"
          disabled={enviando}
        >
          Submit
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

export default Contact;