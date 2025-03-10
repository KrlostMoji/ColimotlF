import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center p-4'>
      <Image src={'/underconstr.webp'} width={500} height={200} alt='Under construction' />
    </div>
  )
}
