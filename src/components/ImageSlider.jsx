

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';

const images = [
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_456,c_limit/18536b46-bb6c-4145-9d01-f248fe31e20f/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/2d4ac6ac-dbeb-4fd9-9ce3-9607b1248deb/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/63af5777-ac51-4cee-b3bd-97bc2636da4b/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/2950cb2b-2d26-4a8b-b2b2-a170389775e1/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/89c1bb7e-ca2e-4051-a26e-e1f2aa60bb26/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/d044d110-10fe-49da-a68f-cc8a1fde4758/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/566ea252-eaf3-42cc-b738-4ad9cb720473/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/a2c4b31a-1891-4576-b63e-446ac1270674/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/c367bc55-8615-4aca-9f8c-b49506830bd9/nike-just-do-it.png",
  "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1280,c_limit/e76e9cc9-2a62-471f-aee5-25a723d74135/nike-just-do-it.png"
];

const ImageSlider = () => {
  return (
    <div className="w-full   my-8 ">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Nike Slide ${index}`}
              className="w-[100%] h-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
