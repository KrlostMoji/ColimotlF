import React from 'react'

export default function HamburgueseMenu() {

  const handleClick = () => {
    const menuMovil = document.querySelector('#menu-movil')
    const botonMenu = document.querySelector('#botonMenu')
    const botonCerrar = document.querySelector('#botonCerrar')

    if(menuMovil?.classList.contains('hidden')){
      menuMovil.classList.remove('hidden')
      botonMenu?.classList.add('hidden')
      botonCerrar?.classList.remove('hidden')
    }else{
      menuMovil?.classList.add('hidden')
      botonMenu?.classList.remove('hidden')
      botonCerrar?.classList.add('hidden')
    }

    return 
  }

  return (
    <div>
      <button
        onClick={handleClick}
        id='botonMenu'
      >
        <i className="fa-solid fa-bars fa-2xl" style={{color: '#F87F5D'}}></i>
      </button>
      <button
        className='hidden'
        id='botonCerrar'
        onClick={handleClick}
      >
        <i className="fa-regular fa-rectangle-xmark fa-2xl"  style={{color: '#F87F5D'}}></i>
      </button>
    </div>
  )
}
