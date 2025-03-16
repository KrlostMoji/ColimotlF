'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import ContactForm from '../components/ContactForm'
import axios from 'axios'
import { toast } from 'react-toastify'

type ContactoForm = {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

export default function Page() {

  const initialValues = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }

  const {register, handleSubmit, reset, formState:{errors}} = useForm({defaultValues: initialValues})
  
  const handleContact = async (data:ContactoForm) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_EMAIL_URL}`, data)
    const mensaje = response.data
    if(mensaje.success){
      toast.success(mensaje.success)
      reset()
    }else{
      toast.error(mensaje.error)
    }    
  }

  return (
    <div
    className="bg-greyBody">
      <div className="w-full md:w-2/3 lg:1/3 m-auto text-center h-full pb-4">
        <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-12 pb-4">Contacto</h1>
        <form
          className='mt-10 bg-blueThird shadow-lg rounded-lg'
          noValidate
          onSubmit={handleSubmit(handleContact)}
        >
          <div className='bg-contacto w-full h-[300px] lg:h-[400px] bg-cover lg:bg-top rounded-t-lg '>
          </div>
          <fieldset className='pr-10 pl-10 lg:pl-0 pb-10 border rounded-lg'>
          <legend className='text-left px-4 text-white'>Envíanos un mensaje</legend>
          <ContactForm
            register={register}
            errors={errors}
          />
            <input 
            type='submit'
            value='Enviar email'
            className='bg-blueLight w-full lg:w-fit rounded-md py-4 px-14 uppercase font-bold cursor-pointer transition-colors'
          />
          </fieldset>
        </form>
      </div>
    </div>
  )
}
