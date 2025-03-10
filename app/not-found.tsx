'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFound() {  

  const router = useRouter()
  
  return (
    <div
    className="bg-greyBody">
      <div className="w-full md:w-2/3 lg:1/3 m-auto text-center h-full pb-4">
        <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-12 pb-4">Página no encontrada</h1>
        <div className='flex flex-row justify-between w-1/3 m-auto'>
          <Link 
            href={'/'}
          ><i className="fa-solid fa-house fa-2xl" style={{color: '#F87F5D'}}></i></Link>
          <button
            onClick={()=>router.back()}
          ><i className="fa-solid fa-circle-left fa-2xl" style={{color: '#F87F5D'}}></i></button>
        </div>
      </div>
    </div>
  )
}
