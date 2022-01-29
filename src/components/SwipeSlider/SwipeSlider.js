import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export default function SwipeSlider ( {
  children,
  bPoint,
  isBreak,
  elementsPerSlide,
  space,
  delay,
} )
{
  SwiperCore.use( [ Autoplay, Navigation ] )
  const params = {
    autoplay: {
      delay: delay,
      disableOnInteraction: false,
    },
    navigation: true,
    breakpoints: {
      1920: {
        slidesPerView: 8,
        spaceBetween: 5,
      },
      1368: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 3,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
    },
  }

  return (
    <Swiper


      {...params}
    >
      {children}
    </Swiper>
  )
}
