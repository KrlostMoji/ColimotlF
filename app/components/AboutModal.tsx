import React from 'react'

export default function AboutModal() {

	const handleClick = () => {
		const modal = document.querySelector('#modal')
		const inicio = document.querySelector('#start')
    if(!modal?.classList.contains('hidden')){
			modal?.classList.add('hidden')
			inicio?.classList.remove('overflow-y-hidden')
		}
	}

  return (
    <div id='modal' className='absolute bg-blackOpacity bottom-0 left-0 right-0 top-0 hidden z-[100] overscroll-y-none'>
      <div className='text-center text-white w-full md:w-2/3 lg:w-1/3 m-auto h-96 pt-32 bg-secondBlue relative top-[50%] -translate-y-[50%] rounded-lg'>
				<p>Acerca de... ON FOCUS Colima</p>
				<p>Empresa creada en Enero de 2025</p>
				<p>By: Víctor Mojica Gálvez y Juan Carlos Mojica Cruz</p>
				<button
					onClick={()=>handleClick()}
					className=' bg-red-700 uppercase text-white rounded-lg w-6 absolute top-0 right-0'
				>X</button>
			</div>
    </div>
  )
}
