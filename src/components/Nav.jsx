import gsap from "gsap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [togglenav, setTogglenav] = useState(false);
  const [togglesearch, setTogglesearch] = useState(false);

  const showNav = () => {
    gsap.to("#nav", {
      right: 0,
      duration: 0.2,
    });
    gsap.to("#TbgNav", {
      right: 0,
      duration: 0.1,
    });
  };
  const hideNav = () => {
    gsap.to("#nav", {
      right: "-80%",
      duration: 0.2,
    });
    gsap.to("#TbgNav", {
      right: "-100%",
      duration: 0.1,
    });
  };

const showsearch = () => {
  gsap.to("#search", {
    top: 0,
    right: 0,
    duration: 0.2,
  });
  document.body.style.overflow = "hidden";
};

const hidesearch = () => {
  gsap.to("#search", {
    top: 0,
    right: "-100%",
    duration: 0.2,
  });
  document.body.style.overflow = "auto";
};


  return (
    <>
      <div
        id="TbgNav"
        className="fixed h-[100%] w-[100%] right-[-100%] bg-[#00000081]  z-40"
      ></div>

      <nav className="bg-white px-6 flex items-center justify-between">
        <Link to="/">
          <img
            className="h-13 w-auto"
            src="/android-chrome-512x512.png"
            alt="Logo"
          />
        </Link>

        <div className="  font-medium gap-5 relative ml-45 hidden lg:flex text:lg">
          <Link className="p-2 flex justify-between items-center" to="/men">
            Men{" "}
          </Link>
          <Link className="p-2 flex justify-between items-center" to="/woman">
            Woman{" "}
          </Link>
          <Link className="p-2 flex justify-between items-center" to="/kids">
            Kids{" "}
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 text-xl text-[#808080]">
          <div className=" lg:hidden">
            <i onClick={showsearch} className="fas fa-search "></i>
          </div>

          <div
            onClick={showsearch}
            className=" items-center hidden lg:flex  bg-gray-100 rounded-full px-3 py-1.5  "
          >
            <i className="fas fa-search text-gray-500 hover:text-black cursor-pointer text-lg mr-3"></i>
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none bg-transparent text-gray-800 text-base"
            />
          </div>

          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <div className=" lg:hidden">
            <i onClick={showNav} className="fa-solid fa-bars text-2xl "></i>
          </div>
        </div>

        {/*  ========================================search bar ======================================== */}

        <div
          id="search"
          className="fixed bg-[#ffffff] z-50 w-full h-full top-0 right-[-100%] px-6 pt-4 lg:pt-0 lg:h-[70%] "
        >
          <div className="flex justify-between items-center gap-6">
            <img
              className="h-24 w-auto hidden lg:flex leading-none"
              src="/android-chrome-512x512.png"
              alt="Logo"
            />
            <div className="flex items-center justify-center  w-full max-w-2xl px-4 h-10 bg-gray-100  rounded-4xl   ">
              <i className="fas fa-search text-gray-400 mr-3"></i>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <button onClick={hidesearch} className="font-medium text-xl">
              Cancel
            </button>
          </div>

          <div className="flex lg:justify-center lg:ml-12 ">
            <div className="pt-14 max-w-2xl flex justify-center flex-col">
              <h2 className="text-gray-800 text-md font-bold">
                Popular Search Items
              </h2>
              <div className="flex flex-wrap gap-4 pt-6">
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  summer essentials
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  jordan cmft era
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  air jordan 1
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  shoes
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  air force 1
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  sneakers men
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  jordan
                </button>
                <button className=" text-lg font-medium bg-gray-100 px-4 py-3 rounded-4xl leading-none">
                  running shoes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================sidenav======================================== */}

        <div
          id="nav"
          className="fixed  bg-white w-[80%] h-[100%] -right-[80%] top-0 p-5 flex flex-col z-50"
        >
          <i
            onClick={hideNav}
            className="fa-solid fa-x text-2xl absolute right-5"
          ></i>
          <div className="flex flex-col mt-16 text-3xl font-medium">
            <Link className="p-2 flex justify-between items-center" to="/men">
              Men{" "}
              <i className="fa-solid fa-angle-right text-xl text-[#808080]"></i>
            </Link>
            <Link className="p-2 flex justify-between items-center" to="/woman">
              Woman{" "}
              <i className="fa-solid fa-angle-right text-xl text-[#808080]"></i>
            </Link>
            <Link className="p-2 flex justify-between items-center" to="/kids">
              Kids{" "}
              <i className="fa-solid fa-angle-right text-xl text-[#808080]"></i>
            </Link>
          </div>

          <div className="flex items-center mt-15 mb-15">
            <img className="h-10" src="/air-jordan-logo.png" alt="logo" />
            <p className="text-2xl font-medium">Jordan</p>
          </div>

          <div>
            <p className="text-xl font-medium text-[#808080]">
              Become a Nike member for <br /> the best products, <br />{" "}
              inspration and storyes in
              <br /> sports.{" "}
              <span className="font-extrabold text-black">Learn more</span>
            </p>
            <div className="mt-6 flex gap-6 pb-[34px]">
              <button className="bg-black text-white p-3 text-lg font-bold rounded-4xl px-6 text-center">
                Join us
              </button>
              <button className="bg-white text-black border-1 border-gray-300 p-1 text-lg font-bold rounded-4xl px-6 text-center">
                Sign in
              </button>
            </div>
          </div>

          <div className="pt-[24px] text-2xl ">
            <div className="flex items-center gap-5 mt-[8px] mb-[8px]">
              <i className=" text-[#808080] fas fa-question-circle"></i>{" "}
              <p className="text-xl font-bold">Help</p>
            </div>
            <div className="flex items-center gap-5 mt-[8px] mb-[8px]">
              <i className=" text-[#808080] fa-solid fa-bag-shopping"></i>{" "}
              <p className="text-xl font-bold">Bag</p>
            </div>
            <div className="flex items-center gap-5 mt-[8px] mb-[8px]">
              <i className=" text-[#808080] fa-solid fa-truck"></i>{" "}
              <p className="text-xl font-bold">Order</p>
            </div>
            <div className="flex items-center gap-5 mt-[8px] mb-[8px]">
              <i className=" text-[#808080] fa-solid fa-store"></i>{" "}
              <p className="text-xl font-bold">Shop</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
