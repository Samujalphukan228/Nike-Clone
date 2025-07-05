

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const products = [
  {
    name: "Nike Dunk Low SE",
    price: "₹9,695",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/b8bb35e5-5bbc-4853-812a-5d984e9a2f80/dunk-low-se-shoes-veNokWrQ.png"
  },
  {
    name: "Nike Field General",
    price: "₹10,295",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/855f040e-4ef0-4f40-a97d-e709a14a64d5/field-general-shoes-1hsplcqs.png"
  },
  {
    name: "Nike Pegasus 41",
    price: "₹13,295",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/abf1bdae-eb5a-4745-bcbb-b713b20d8c43/pegasus-41-road-running-shoes-vAD0knSI.png"
  },
  {
    name: "Nike Alphafly 3",
    price: "₹19,695",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/c31efc11-2820-4298-83e9-2decd2eb8c1a/alphafly-3-faith-kipyegon-road-racing-shoes-uieTYjgV.png"
  },
  {
    name: "Nike Pegasus Plus",
    price: "₹14,995",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/7414c6ed-74c1-4abd-9ebe-085e9184d0bd/pegasus-plus-faith-kipyegon-road-running-shoes-9wh1clqo.png"
  },
  {
    name: "Nike Pegasus 41 FK",
    price: "₹13,795",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/65554476-eb02-4f2e-b393-13586a157049/pegasus-41-faith-kipyegon-road-running-shoes-MEh64NhS.png"
  },
  {
    name: "Nike Pegasus FK",
    price: "₹12,995",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/4d40d814-fe8c-43f4-a5b0-40ad63d70fd3/pegasus-faith-kipyegon-road-running-shoes-K5aoltzU.png"
  },
  {
    name: "Nike Pegasus 41 ",
    price: "₹14,195",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/756d7dd5-383b-4b24-af97-2a605491099f/pegasus-41-lv8-road-running-shoes-zxLDOWNv.png"
  },
  {
    name: "Nike PSG Max DN8",
    price: "₹15,495",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/61e65571-dff5-4043-96fc-045486a652a7/paris-saint-germain-air-max-dn8-shoes-l7bwxRs2.png"
  },
  {
    name: "Nike Cortez ",
    price: "₹8,295",
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_386,c_limit/beabf7a4-a61f-4851-989d-cc80b3e1e104/cortez-leather-shoes-0VH7qz.png"
  }
];

const ImageSlider = () => {
  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl border border-gray-300 hover:shadow-xl transition-all duration-300 p-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto rounded-lg object-contain"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

