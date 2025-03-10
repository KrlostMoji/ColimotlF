import Image from 'next/image'
import React from 'react'
type HexaSVGProps = {
  tecnologia: string
}

export default function HexaSVG({tecnologia}:HexaSVGProps) {

    return (
      <div className='relative group'>
        <div className='absolute w-[200px] h-[200px] left-[20px] top-[10px] group-hover:brightness-90 group-hover:blur-sm'>
          <Image src={`/${tecnologia}3.svg`} fill={true} alt='Tecnologías'/>
        </div>
        <div className='absolute w-[180px] h-[180px] left-[30px] top-[20px] group-hover:brightness-90'>
          <Image src={`/${tecnologia}2.svg`} fill={true} alt='Tecnologías' />
        </div>
        <div className='absolute w-[160px] h-[160px] left-[40px] top-[30px] hover:brightness-125'>
          <Image src={`/${tecnologia}1.svg`} fill={true} alt='Tecnologías'/>
        </div>
      </div>
          
          
  )
}
