import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { HotelDetail } from '../Detail/HotelDetail';

const SliderCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      modules={[Navigation, Pagination, Autoplay]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{"delay": 3000,}}
    >
      {HotelDetail.map(img => <SwiperSlide key={img.id}><img src={img.image} alt=""/></SwiperSlide>)}
    </Swiper>
  );
};

export default SliderCarousel;