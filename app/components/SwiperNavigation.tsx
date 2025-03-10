import React from 'react'
import { useSwiper } from 'swiper/react'

export default function SwiperNavigation() {
    
    const swiper = useSwiper()
    console.log(swiper);
		
    return (
    <div className='buttonsNav'>
        <button
            onClick={() => swiper.slidePrev()}
						className='text-secondBlue bg-orangeMain'
        >Prev</button>
        <button
            onClick={() => swiper.slideNext()}
						className='text-secondBlue bg-orangeMain'
        >Next</button>
    </div>
  )
}
