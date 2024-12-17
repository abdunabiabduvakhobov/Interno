import { ContainerWrapper } from "../container-wrapper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import home from '../../assets/icons/home.png';
import vs from '../../assets/icons/vs.png';
import brand from '../../assets/icons/brand.png';
import ne from '../../assets/icons/ne.png';
import classic from '../../assets/icons/classic.png';
import { Pagination, A11y } from 'swiper/modules';
export const BraendImg = () => {
  return (
    <section className="w-full    pt-[100px]"> 
      <ContainerWrapper>
        <div >
          <div>
          <Swiper
      spaceBetween={50}
      slidesPerView={5}
      modules={[Pagination, A11y]}
        pagination={true}
        scrollbar={{ draggable: true }}
        breakpoints={{
        
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
         
          1100: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
     
    >
      <SwiperSlide><img className="pt-[20px]" src={home} alt="" /></SwiperSlide>
      <SwiperSlide><img src={vs} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={brand} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={ne} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={classic} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={home} alt="" /></SwiperSlide>
      <SwiperSlide><img src={vs} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={brand} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]"  src={ne} alt="" /></SwiperSlide>
      <SwiperSlide><img className="pt-[20px]" src={classic} alt="" /></SwiperSlide>
      
    </Swiper>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  )
}
