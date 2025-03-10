import React from 'react'
import { formatCurrency } from '../helpers';

type CardHolderServicioProps = {
  nombre: string,
  precioAnt: number,
  precioAct: number,
  caracteristicas: string[],
  color?: string
}

export default function CardHolderServicio({nombre, precioAnt, precioAct, caracteristicas, color='blueSuperLight'}: CardHolderServicioProps) {

  return (
    <div className={`border cursor-pointer border-blueMain rounded-md shadow-lg hover:shadow-2xl text-center flex flex-col ${color!='blueSuperLight'? 'bg-orangeMain' : 'bg-blueSuperLight'}`}>
      <p className='uppercase text-[12px] lg:text-[32px] font-bold my-4'>{nombre}</p>
      <p className='line-through text-[10px] lg:text-[14px] opacity-70'>{formatCurrency(precioAnt)}</p>
      <p className='text-12px lg:text-[24px] font-semibold mb-4'>{formatCurrency(precioAct)}</p>
      <p className='text-[12px] lg:text-[18px]'>Características:</p>
      <ol className='list-disc flex flex-col text-left mx-auto pb-4'>
        {
          caracteristicas.map(elemento=>(
            <li key={elemento}>{elemento}</li>
          ))
        }
      </ol>
    </div>
  )
}
