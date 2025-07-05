import React from "react";

const products = [
  {
    id: 1,
    name: "Nike Air Max Bliss",
    type: "Running",
    price: "$120",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48661e11-976a-45b5-8e74-2e326254b85e/W+LD-1000.png",
  },
  {
    id: 2,
    name: "Nike Motiva",
    type: "Walking",
    price: "$110",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e37e7297-87d0-4f84-831f-4917d0c20c7b/W+NIKE+CORTEZ+LT.png",
  },
  {
    id: 3,
    name: "Nike Zoom Fly 5",
    type: "Running",
    price: "$150",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b6206e7-5bbe-4b4d-9bc6-7ec80d52ad48/W+NIKE+SHOX+TL.png",
  },
  {
    id: 4,
    name: "Nike Air Max SC",
    type: "Casual",
    price: "$90",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c31efc11-2820-4298-83e9-2decd2eb8c1a/W+AIR+ZOOM+ALPHAFLY+NEXT%25+3+FK.png",
  },
  {
    id: 5,
    name: "Nike Invincible 3",
    type: "Running",
    price: "$180",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7414c6ed-74c1-4abd-9ebe-085e9184d0bd/W+NIKE+PEGASUS+PLUS+FK.png",
  },
  {
    id: 6,
    name: "Nike Court Legacy",
    type: "Casual",
    price: "$85",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65554476-eb02-4f2e-b393-13586a157049/W+NIKE+PEGASUS+41+FK.png",
  },
  {
    id: 7,
    name: "Nike Revolution 7",
    type: "Running",
    price: "$75",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e2d0b01-68b9-4f88-b1ee-7ceb632ca219/W+NIKE+AIR+MAX+MOTO+2K.png",
  },
  {
    id: 8,
    name: "Nike Waffle Debut",
    type: "Casual",
    price: "$85",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c15a43d2-9a88-419a-ae2c-72b14779501f/W+NIKE+STRUCTURE+26.png",
  },
  {
    id: 9,
    name: "Nike Structure 25",
    type: "Running",
    price: "$140",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f341259f-aa8c-41af-ae6a-ef934564901c/W+NIKE+VOMERO+18.png",
  },
  {
    id: 10,
    name: "Nike Flex Experience Run 12",
    type: "Running",
    price: "$75",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b20ad20b-7ffc-44f5-9774-8c6af6307f67/W+AIR+MAX+KOKO+SANDAL+SE.png",
  },
  {
    id: 11,
    name: "Nike V2K Run",
    type: "Lifestyle",
    price: "$110",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dbc1e469-b67e-46cd-9281-2f5a461dd8c3/WMNS+NK+CALM+ELEVATION.png",
  },
  {
    id: 12,
    name: "Nike Blazer Low Platform",
    type: "Casual",
    price: "$100",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/855f040e-4ef0-4f40-a97d-e709a14a64d5/WMNS+NIKE+FIELD+GENERAL.png",
  },
];

const Woman = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Women's Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="w-full h-52 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-1">{product.type} Shoes</p>
            <p className="text-gray-800 font-medium">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Woman;
