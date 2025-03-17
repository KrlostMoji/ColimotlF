'use client'
import Image from "next/image";
import ContenedorProyecto from "./components/ContenedorProyecto";
import Link from "next/link";
import CardHolderCrew from "./components/CardHolderCrew";
import HexaSVG from "./components/HexaSVG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default function Home() {

  return (
    <>
      <div
        className="bg-greyBody">
          <div className="w-4/5 m-auto text-left h-full pb-4">
            <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-12 md:pt-32">Colimotl.</h1>
            <h2 className="text-[20px] lg:text-[36px] font-bold text-secondBlue pb-4">Diseño y Desarrollo Web</h2>
              <p className="text-[12px] lg:text-[16px] lg:w-2/4 md:w-3/5 text-left pb-2"> Empresa consolidada a finales de 2024, nace como un proyecto
              pequeño pero constante, enfocado en ofrecer servicios de calidad,
              en tiempo y forma a las personas usuarias.
              Colimotl, es una idea de emprender en el área de
              los servicios Web en un estado pequeño como lo es Colima,
              pero de gran desarrollo y un amplio nivel informático,
              desde las pequeñas tiendas de abarrotes, hasta los grandes
              empresarios o profesionistas, que están a la vanguardia y saben
              la importancia de darse a conocer en el medio digital.</p>
              <p className="text-[12px] lg:text-[16px] lg:w-2/4 md:w-3/5 text-left pb-2"> Colimotl, agradece el brindarnos
              tu confianza en aquellos proyectos de gran importancia para
              tu crecimiento profesional o de índole personal.</p>
            <Image src={'/home.webp'} alt="Imagen inicio" width={650} height={300} className="inline mb-4 drop-shadow-lg"></Image>
          </div>
          <div className="w-4/5 m-auto text-center h-full pb-4">
            <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-20 pb-4">Proyectos</h1>
            <div className="grid grid-flow-row md:grid-flow-col gap-5 pt-4">
              <ContenedorProyecto
                titulo={"Mi restaurante"}
                imagen={"/maravillas.webp"}
              />
              <Link 
                href={'https://inmobiliaria-campos.vercel.app'}
              >
                <ContenedorProyecto
                  titulo={"Femergy"}
                  imagen={"/inmobiliaria.webp"}
                />
              </Link>
              <Link
                href={'https://mehta-rana.vercel.app'}
              >
                <ContenedorProyecto
                  titulo={"Paquetería"}
                  imagen={"/mehta-ranna.webp"}
                />
              </Link>
                           
            </div>
            <div className="flex justify-center">
                <Link
                  href={'/proyectos'}
                >
                  <i className="fa-solid fa-circle-plus fa-2xl drop-shadow-lg hover:drop-shadow-2xl" style={{color: '#F87F5D'}}></i>
                </Link>
              </div>
          </div>
          <div className="w-3/4 md:w-5/6 m-auto text-center h-full pt-20 pb-4">
            <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pb-4">Tecnologías</h1>
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{clickable:true}}
                loop={true}
                className="h-[298px]"
                breakpoints={{
                  768: {
                    slidesPerView: 3
                  },
                  1280: {
                    slidesPerView: 5
                  }
                }}
              >
                <SwiperSlide
                >
                  <HexaSVG 
                    tecnologia="nextjs"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="tailwindcss"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="css"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="react"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="nodejs"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="html"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <HexaSVG 
                    tecnologia="javascript"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-4/5 m-auto text-center h-full pb-4">
            <h1 className="text-[24px] lg:text-[48px] font-bold text-secondBlue pt-20 pb-4">Equipo de Trabajo</h1>
            <div className="flex flex-col md:flex-row justify-center pb-4 gap-5">
              <CardHolderCrew 
                imagen="/crew1.jpg"
                nombre="Víctor Alberto Mojica Gálvez"
                titulo="Ing. En Telemática"
              />
              <CardHolderCrew 
                imagen="/crew2.jpg"
                nombre="Juan Carlos Mojica Cruz"
                titulo="Ing. En Sistemas Computacionales"
              />
            </div>
          </div>
          <div id="botones_flotantes" className="w-full lg:w-4/5 m-0 lg:m-auto flex flex-row justify-between">
            <div className="relative">
              <Link 
              href={'https://wa.me/+523125951190'}
              target="_blank">
                <i className="fa-brands fa-square-whatsapp fa-3x bottom-36 lg:bottom-20 lg:left-52 drop-shadow-lg hover:drop-shadow-2xl fixed z-[2]" style={{color: '#0DC042'}}
                >
                </i>
              </Link>
            </div>
            <div className="relative">
              <Link href={'#start'}>
                <i className="fa-solid fa-circle-up fa-3x bottom-36 lg:bottom-20 right-0 lg:right-52 drop-shadow-lg hover:drop-shadow-2xl fixed z-[2]" style={{color: '#19789F'}}></i>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
