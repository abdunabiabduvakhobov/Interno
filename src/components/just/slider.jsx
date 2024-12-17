import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { commets } from './static';

export const Slider = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        modules={[Pagination, A11y]}
        pagination={true}
        scrollbar={{ draggable: true }}
        breakpoints={{
        
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
         
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {commets.map((commet, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-[50px] mt-[80px]    xl:ml-[50px] w-full xl:w-[370px] h-[339px] ">
                <div className="flex xl:flex-row flex-col gap-[20px] ml-[20px] pt-4">
                  <img className="xl:w-[90px] w-[90px]" src={commet.img} alt="" />
                  <div>
                    <p className="xl:text-[24px] text-[20px] text-black font-normal leading-[42px]">
                      {commet.name}
                    </p>
                    <p className="text-[20px] font-normal text-[#E1B168] leading-[30px] tracking-[0.2px]">
                      {commet.city}
                    </p>
                  </div>
                </div>
                <p className="text-[18px] mt-[30px] ml-[20px] xl:w-[354px] text-gray-700">
                  {commet.commentText}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
