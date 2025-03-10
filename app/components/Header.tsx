'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import HamburgueseMenu from './HamburgueseMenu'
import AboutModal from './AboutModal'

export default function Header() {

  const pathname = usePathname()

  const handleClick = () => {
    const modal = document.querySelector('#modal')
    const inicio = document.querySelector('#start')
    console.log(inicio);
    
    if(modal?.classList.contains('hidden')){
      modal.classList.remove('hidden')
      inicio?.classList.add('overflow-y-hidden')
    }

    return
  } 

  return (
    <>
      <div className='bg-blueMain z-10'>
        {
          pathname === '/' ? <div className='absolute md:bg-banner2 md:bg-cover bg-top md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] rounded-[50px] md:-right-4 md:-top-60 lg:right-4 lg:-top-48 xl:-right-28 xl:-top-80 -rotate-45'></div> : ''
        }
        <div className='flex flex-row justify-between items-center w-4/5 m-auto h-[8rem] lg:h-[13rem]'>
          <Link
            href={'/'}
          >
            <Image src={'/logo-mobile.png'} width={100} height={100} alt='logo-mobile' className='rounded-lg lg:hidden animate-fade-up' />
            <Image src={'/logo.png'} width={140} height={140} alt='logo' className='rounded-lg hidden lg:block'></Image>
          </Link>
          
          <div className='lg:hidden z-50 lg:z-0'>
            <HamburgueseMenu />
          </div>
          <nav
            className="space-x-2 md:space-x-5 pr-0 text-[24px] font-bold hidden lg:block"
          >
            <Link
              href={'/'}
              className={`relative hover:text-greyLink after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-greyLink after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full ${pathname === '/' ? 'after:w-full text-greyLink' : 'text-orangeMain'}`}          >
              Inicio
            </Link>
            <Link
              href={'servicios'}
              className={`relative  hover:text-greyLink after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-greyLink after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full ${pathname === '/servicios' ? 'after:w-full text-greyLink' : 'text-orangeMain'}`}
            >
              Servicios
            </Link>
            <Link
              href={'proyectos'}
              className={`relative  hover:text-greyLink after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-greyLink after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full ${pathname === '/proyectos' ? 'after:w-full text-greyLink' : 'text-orangeMain'}`}
            >
              Proyectos
            </Link>
            <Link
              href={'contacto'}
              className={`relative  hover:text-greyLink after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-greyLink after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full ${pathname === '/contacto' ? 'after:w-full text-greyLink' : 'text-orangeMain'}`}
            >
              Contacto
            </Link>
            <button
              onClick={()=>handleClick()}
              className={`relative  hover:text-greyLink after:content-[''] after:h-1 after:w-0 after:-bottom-1 after:bg-greyLink after:left-0 after:absolute after:rounded-xl after:duration-200 hover:after:w-full ${pathname === '/nosotros' ? 'after:w-full text-greyLink' : 'text-orangeMain'}`}
            >
              Acerca de 
            </button>
        </nav>
        </div>
        <div id='menu-movil' className='hidden lg:hidden'>
            <button
              className={`w-full h-16 border-black border border-b-0 ${pathname === '/' ? 'bg-greyLink' : 'bg-blueLight'}`}
            >
              <Link
                href={'/'}
                className='flex justify-center md:justify-start'
              >
                <div className='w-[70px]'>
                  <i className="fa-solid fa-house fa-2xl" style={{color: '#F87F5D'}}></i>
                </div>
                <p>Home</p>
              </Link>
            </button>
            <button
              className={`bg-blueLight w-full h-16 border-black border border-b-0 ${pathname === '/servicios' ? 'bg-greyLink' : 'bg-blueLight'}`}
            >
              <Link
                href={'/servicios'}
                className='flex justify-center md:justify-start'
              >
                <div className='w-[70px]'>
                  <i className="fa-solid fa-desktop fa-2xl" style={{color: '#F87F5D'}}></i>
                </div>
                <p>Servicios</p>
              </Link>
            </button>
            <button
              className={`bg-blueLight w-full h-16 border-black border border-b-0 ${pathname === '/proyectos' ? 'bg-greyLink' : 'bg-blueLight'}`}
            >
              <Link
                href={'/proyectos'}
                className='flex justify-center md:justify-start'
              >
                <div className='w-[70px]'>
                  <i className="fa-solid fa-laptop-file fa-2xl" style={{color: '#F87F5D'}}></i>
                </div>
                <p>Proyectos</p>
              </Link>
            </button>
            <button
              className={`bg-blueLight w-full h-16 border-black border border-b-0 ${pathname === '/contacto' ? 'bg-greyLink' : 'bg-blueLight'}`}
            >
              <Link
                href={'/contacto'}
                className='flex justify-center md:justify-start'
              >
                <div className='w-[70px]'>
                  <i className="fa-solid fa-envelope fa-2xl pl-4" style={{color: '#F87F5D'}}></i>
                </div>
                <p>Contacto</p>
              </Link>
            </button>
            <button
              className='bg-blueLight w-full h-16 border-black border'
              onClick={()=>handleClick()}
            >
              <Link
                href={''}
                className='flex justify-center md:justify-start'
              >
                <div className='w-[70px]'>
                  <i className="fa-solid fa-circle-question fa-2xl pl-4" style={{color: '#F87F5D'}}></i>
                </div>
                <p>Acerca de</p>
              </Link>
            </button>
          </div>
      </div>
      <AboutModal />
    </>
  )
}
