import React from 'react'
import ErrorMessage from './ErrorMessage'
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type ContactFormProps = {
  register: UseFormRegister<{
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  }>
  errors: FieldErrors<{
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
}>
}

export default function ContactForm({register, errors}: ContactFormProps) {
  

  return (
    <>
        <div className='flex flex-col'>
        <div className="grid grid-cols-3 mb-5 items-center pt-8">
            <label htmlFor="nombre" className="text-sm uppercase font-bold text-white">
                Nombre 
            </label>
            <input
                id="nombre"
                className="w-full col-start-2 col-end-4 p-3 border bg-softOrange border-gray-200 rounded-md"
                type="text"
                placeholder="Nombre Completo"
                {...register("nombre",{required: "El nombre es requerido"})}
                />
            </div>
            {errors.nombre?.message && <ErrorMessage>{errors.nombre.message}</ErrorMessage>}
            <div className="grid grid-cols-3 mb-5 items-center">
                <label htmlFor="email" className="text-sm uppercase font-bold text-white">
                    Email
                </label>
                <input
                    id="email"
                    className="w-full col-start-2 col-end-4 p-3 border bg-softOrange border-gray-200 rounded-md"
                    type="email"
                    placeholder="Tu Email"
                    {...register("email",{required: "El email es requerido"})}
                />
            </div>
            {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <div className="grid grid-cols-3 mb-5 items-center">
                <label htmlFor="telefono" className="text-sm uppercase font-bold text-white">
                    Teléfono
                </label>
                <input
                    id="telefono"
                    className="w-full col-start-2 col-end-4 p-3 border bg-softOrange border-gray-200 rounded-md"
                    type="tel"
                    placeholder="Tu Teléfono"
                    {...register("telefono",{required: "El telefono es requerido"})}
                />
            </div>
            {errors.telefono?.message && <ErrorMessage>{errors.telefono.message}</ErrorMessage>}
            <div className="grid grid-cols-3 mb-5 items-center">
                <label htmlFor="mensaje" className="text-sm uppercase font-bold text-white">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    rows={5}
                    className="w-full col-start-2 col-end-4 p-3 border bg-softOrange border-gray-200 rounded-md resize-none "
                    placeholder="Mensaje, inquietud, queja y/o sugerencia"
                    {...register("mensaje",{required: "El mensaje es requerido"})}
                />
            </div>
            {errors.mensaje?.message && <ErrorMessage>{errors.mensaje.message}</ErrorMessage>}
        </div>

    </>
  )
}