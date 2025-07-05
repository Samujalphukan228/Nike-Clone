import React from "react";

const kidsProducts = [
  {
    id: 1,
    name: "Nike Flex Runner 2",
    type: "Running",
    price: "$60",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/e1d84250-4c0d-443b-9dfd-92f8262bd42b/jordan-1-low-rm-older-shoes-dSSeDljt.png",
  },
  {
    id: 2,
    name: "Nike Team Hustle D 11",
    type: "Sports",
    price: "$65",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/66fa78bf-cd66-479e-986e-e55140822025/isofly-older-basketball-shoes-fXX7gH.png",
  },
  {
    id: 3,
    name: "Nike Dynamo Go",
    type: "Casual",
    price: "$55",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/81535b0d-0e50-4260-97ca-815997c5b838/gato-older-shoes-GNJ8Ph.png",
  },
  {
    id: 4,
    name: "Nike Court Borough Low",
    type: "Casual",
    price: "$70",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/dc457b72-a1fb-42d0-9a47-5712c05f9a4d/air-max-nova-older-shoes-FZiI7Z4H.png",
  },
  {
    id: 5,
    name: "Nike Revolution 6",
    type: "Running",
    price: "$50",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/e2cfa2cf-faad-407d-a2bb-5b96467a34da/flex-runner-4-older-running-shoes-SgLos7rm.png",
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    type: "Sports",
    price: "$80",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/dfa837c6-5ec4-462c-8d90-2ae4f6e175b8/cortez-older-shoes-mGxbkcFQ.png",
  },
  {
    id: 7,
    name: "Nike Pico 5",
    type: "Casual",
    price: "$45",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/e087f6d4-e1d7-40e5-bbb0-db99633edad6/shox-r4-older-shoes-nc3SSQ.png",
  },
  {
    id: 8,
    name: "Nike Blazer Mid '77",
    type: "Casual",
    price: "$75",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/e78fe1b1-8e27-4885-8fa1-9419408ea6cf/air-jordan-1-low-se-older-shoes-AF0ecCar.png",
  },
  {
    id: 9,
    name: "Nike Downshifter 12",
    type: "Running",
    price: "$60",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/0bae9a23-953f-4c0a-9735-b9a923915f82/jordan-cmft-era-older-shoes-gTQbcUv1.png",
  },
  {
    id: 10,
    name: "Nike Court Borough Mid",
    type: "Casual",
    price: "$70",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b350590-37d0-4b1b-80f2-b0da3cd8a0b9/W+NIKE+COURT+LITE+4.png",
  },
  {
    id: 11,
    name: "Nike Air Force 1 LE",
    type: "Casual",
    price: "$85",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/e78fe1b1-8e27-4885-8fa1-9419408ea6cf/air-jordan-1-low-se-older-shoes-AF0ecCar.png",
  },
  {
    id: 12,
    name: "Nike Tanjun",
    type: "Running",
    price: "$55",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/0bae9a23-953f-4c0a-9735-b9a923915f82/jordan-cmft-era-older-shoes-gTQbcUv1.png",
  },
];

const Kids = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Kids' Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kidsProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
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

export default Kids;
