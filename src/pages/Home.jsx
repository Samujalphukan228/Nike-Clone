import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import ShoesSlider from "../components/ShoesSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-100 pt-3 pb-3 flex flex-col text-center font-medium">
        <p className="text-lg">New Styles On Sale : Up to 40% Of</p>
        <a className=" underline text-sm" href="#">
          Shops All Our New Maekdowns
        </a>
      </div>
      <div>
        <img
          className="w-full hidden lg:flex"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1647,c_limit/1c9da211-f815-4e36-88c2-0927d0c5bfb2/nike-just-do-it.png"
          alt=""
        />
        <img className="lg:hidden" src="Runner on Rocky Terrain.png" alt="" />

        <div className="pt-6 px-6 lg:flex-col lg:text-center">
          <h2 className="text-xl font-medium ">Structure 26</h2>
          <h1 className="mt-1 bowlby-one text-4xl lg:text-5xl font-medium">
            Run Supported
          </h1>
          <h2 className="mt-1 text-xl font-medium ">
            Support cushlioning to keep runners running.
          </h2>
          <button className="mt-8 text-lg bg-black text-white px-5 py-1 rounded-3xl font-medium">
            Shops
          </button>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="px-6 text-2xl font-medium mb-7">Featured</h2>
        <div className=" lg:flex lg:flex-wrap">
          <div className="lg:w-[50%] relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_917,c_limit/d9afe78f-dc21-42ca-9623-0d9e41a6bd0f/nike-just-do-it.png"
              className="w-full h-auto "
            />
            <div className="absolute  top-1/2  left-0 p-6 z-10 text-white ">
            

              <h2 className="text-lg font-semibold">Look of Football</h2>
              <h1 className="text-3xl font-bold">Total 90</h1>
              <button className="mt-4 font-medium text-lg bg-white text-black px-5 py-2 rounded-full">
                Shop
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_518,c_limit/1009a0aa-36dd-46e4-ba80-f000170adb12/nike-just-do-it.png"
              className="w-full h-auto"
            />
            <div className="absolute top-1/2 left-0 p-6 z-10 text-white ">
              <h2 className="text-lg font-semibold">Nike Sportswear</h2>
              <h1 className="text-3xl font-bold">Make a Impresson</h1>
              <button className="mt-4 font-medium text-lg bg-white text-black px-5 py-2 rounded-full">
                Shop LD-1000
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_512,c_limit/1bede52e-ae21-46e8-b2cf-82bd697813f0/nike-just-do-it.png"
              className="w-full h-auto"
            />
            <div className="absolute top-1/2 left-0 p-6 z-10 text-white ">
              <h2 className="text-lg font-semibold">Just in for Kids</h2>
              <h1 className="text-3xl font-bold">Nike Star runner 5</h1>
              <button className="mt-4 font-medium text-lg bg-white text-black px-5 py-2 rounded-full">
                Shop
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_512,c_limit/3da1caab-1040-4255-9337-ef63a468f5f1/nike-just-do-it.png"
              className="w-full h-auto"
            />
            <div className="absolute top-1/2  left-0 p-6 z-10 text-white ">
              <h2 className="text-lg font-semibold">Coming Soon</h2>
              <h1 className="text-3xl font-bold">Air Jordan 40</h1>
              <button className="mt-4 font-medium text-lg bg-white text-black px-5 py-2 rounded-full">
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-20 flex flex-col text-center justify-center px-6">
        <h1 className="bowlby-one text-4xl lg:text-6xl">NIKE FOOTBALL: THE HOME <br/> OF TERRIFYING SKILL</h1>
        <h2 className="text-xl font-medium">We're here to reprogramme your game.</h2>
      </div>

      <div>
        <div className="px-6 text-2xl  mt-20 font-medium mb-7">Shop by Icons</div>
        <ImageSlider/>
      </div>

      <div >
        <div className="px-6 text-2xl  mt-20 font-medium mb-7">New Arrivals</div>
        <ShoesSlider/>
      </div>

      <div className="px-6 mt-35"><div className="mb-10 border-gray-300   border-t-1"/>
      <Footer/>
      </div>
      <div className="flex gap-18 text-md font-medium justify-center text-gray-500 mt-20 mb-40">
        <p>© 2025 Nike, Inc. All rights reserved</p>
        <p>Guides</p>
        <p>Terms of Sale</p>
        <p>Terms of Use</p>
        <p>Nike Privacy Policy</p>
        <p>Privacy Settings</p>
      </div>
    </section>
  );
};

export default Home;
