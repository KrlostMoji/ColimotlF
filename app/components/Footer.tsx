import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blueMain sticky bottom-0 z-[2]'>
      <div
        className='flex flex-col md:flex-row justify-evenly md:justify-between items-center w-4/5 m-auto h-32 md:h-[4rem]'
      >
        <div
          className='text-[10px] md:text-[16px] text-center text-white'
        >
          Copyright 2024.- On Focus (Servicios Informáticos y Desarrollo Web)
        </div>
        <nav
          className='flex gap-5 justify-center'
        >
          <Link
            href={'https://www.facebook.com/7mojimojito/'}
            id='Facebook Carlos Mojica'
          >
            <i className="fa-brands fa-square-facebook fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://www.instagram.com/_mojimojito/'}
            id='Instagram Carlos Mojica'
          >
            <i className="fa-brands fa-instagram fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://www.threads.net/@_mojimojito'}
            id='Trhread Carlos Mojica'
          >
            <i className="fa-brands fa-threads fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/mojimojitocarlos/'}
            id='Whatsapp Carlos Mojica'
          >
            <i className="fa-brands fa-linkedin fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://www.facebook.com/victormojica22/'}
            id='Facebook Victor Mojica'
          >
            <i className="fa-brands fa-square-facebook fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://www.instagram.com/victormojica22/'}
            id='Instagram Victor Mojica'
          >
            <i className="fa-brands fa-instagram fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
          <Link
            href={'https://wa.me/+523121044302'}
            id='Whatsapp Victor Mojica'
          >
            <i className="fa-brands fa-linkedin fa-xl hover:drop-shadow-blueMainShadow" style={{color: '#F87F5D'}}></i>
          </Link>
        </nav>
      </div>
    </div>
  )
}