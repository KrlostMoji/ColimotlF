import React from 'react'
import CardHolderServicio from '../components/CardHolderServicio'

export default function page() {

  return (
    <div
    className="bg-greyBody">
      <div className="w-4/5 m-auto text-center h-full pb-4">
        <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-12 pb-4">Servicios</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4 h-fit'>
          <CardHolderServicio 
            nombre={'Básico'}
            precioAct={2000}
            precioAnt={2500}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio']}
          />
          <CardHolderServicio 
            nombre={'Completo'}
            precioAct={3000}
            precioAnt={3900}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio', 'Mantenimiento 1 año']}
            color='orangeMain'
          />
          <CardHolderServicio 
            nombre={'Plus'}
            precioAct={2000}
            precioAnt={2500}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio']}
          />
                    <CardHolderServicio 
            nombre={'E-Commerce'}
            precioAct={2000}
            precioAnt={2500}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio']}
          />
          <CardHolderServicio 
            nombre={'Admon.'}
            precioAct={2000}
            precioAnt={2500}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio']}
          />
                    <CardHolderServicio 
            nombre={'Login'}
            precioAct={2000}
            precioAnt={2500}
            caracteristicas={['Diseño Web Estático', 'Hasta 6 secciones', 'Formulario de Contacto', 'Host y Dominio']}
          />
        </div>
      </div>
    </div>
  )
}
