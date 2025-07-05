import React from "react";

const products = [
  {
    name: "Nike Air Max Alpha",
    price: "$120.00",
    type: "Running",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/772de257-fbd7-49d8-abe6-b03247ded453/AIR+MAX+DN8.png",
  },
  {
    name: "Nike Court Legacy",
    price: "$85.00",
    type: "Casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/580e49a0-a858-4673-9f2f-30fb04b00df3/AIR+MAX+DN8.png",
  },
  {
    name: "Nike Pegasus 41",
    price: "$130.00",
    type: "Running",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/v6vr4e25eoq1ncjxqcjq/NIKE+P-6000.png",
  },
  {
    name: "Nike Tatum 2",
    price: "$105.00",
    type: "Sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6deeaf52-3288-43b2-a125-fdc1800ee2ee/NIKE+PEGASUS+PREMIUM.png",
  },
  {
    name: "Nike Blazer Mid '77",
    price: "$100.00",
    type: "Casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/69c51b77-0b69-4929-9424-79aa972652e6/AIR+MAX+TL+2.5.png",
  },
  {
    name: "Nike InfinityRN 4",
    price: "$160.00",
    type: "Running",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e8a5d47e-1ba6-4242-97dd-ab878357a1ce/AIR+JORDAN+1+LOW+G.png",
  },
  {
    name: "Nike Air Force 1 '07",
    price: "$115.00",
    type: "Casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/42aaa6f0-a0a0-44d6-aa7b-40aa4c648d5a/AIR+FORCE+1+%2707+LV8.png",
  },
  {
    name: "Nike Metcon 9",
    price: "$150.00",
    type: "Sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0abd1ece-612d-4c06-b21d-a8f3d8fa7901/AIR+JORDAN+1+LOW.png",
  },
  {
    name: "Nike Invincible 3",
    price: "$180.00",
    type: "Running",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be0f03c6-1f18-423b-b1d5-1730807015b5/WMNS+NIKE+FIELD+GENERAL.png",
  },
  {
    name: "Nike Air Zoom G.T. Cut",
    price: "$170.00",
    type: "Sports",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c9fb6d8-dcf3-4600-8744-5f18437dc8b5/NIKE+AIR+MAX+PLUS+PRM.png",
  },
  {
    name: "Nike Waffle Debut",
    price: "$85.00",
    type: "Casual",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd2a0420-e598-407d-a015-9f5fb409d486/NIKE+PEGASUS+PREMIUM.png",
  },
  {
    name: "Nike Downshifter 13",
    price: "$75.00",
    type: "Running",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43f01e3b-0fef-4633-915d-04855e52180e/NIKE+AIR+MAX+PLUS.png",
  },
];

const Men = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Men's Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="w-full h-52 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
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

export default Men;
