import Image from 'next/image'
import React from 'react'

type ContenedorProps = {
    titulo: string,
    imagen: string
}

export default function ContenedorProyecto({imagen}: ContenedorProps) {
  return (
    <div className='flex flex-col align-middle justify-between'>
      <Image src={imagen} width={300} height={200} alt='miniatura_proyecto' className='h-full m-auto drop-shadow-lg hover:drop-shadow-2xl'></Image>
      {/* <h2 className='text-[24px] mb-3 font-semibold uppercase text-secondBlue'>{titulo}</h2> */}
    </div>
  )
}
