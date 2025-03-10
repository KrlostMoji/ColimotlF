import Image from 'next/image'
import React from 'react'

type CardHolderProps = {
  imagen: string,
  nombre: string,
  titulo: string
}

export default function CardHolderCrew({imagen, nombre, titulo}: CardHolderProps) {
  return (
    <div className='w-full md:w-[360px] h-[250px] flex flex-col p-2 rounded-lg shadow-xl hover:shadow-2xl bg-secondOrange text-[12px] md:text-[16px]'>
      <div className='flex flex-row justify-around p-2'>
        <Image src={imagen} width={80} height={80} alt='Imagen de personal 1' className='rounded-[40px]'/>
        <div className='flex flex-col justify-center p.2'>
          <p>{nombre}</p>
          <p>{titulo}</p>
        </div>
      </div>
      <div className='p-2'>
        <p>Proyectos importantes</p>
        <p>Proyectos importantes</p>
        <p>Proyectos importantes</p>
        <p>Proyectos importantes</p>
      </div>
    </div>
  )
}
