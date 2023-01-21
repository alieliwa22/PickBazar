import React from "react";
import ReactDOM from "react-dom";
import SideMenuComp from "../store/sidemenu/SideMenuComp";

const LeftPopUp = ({ categories, logoImg }) => {
  const closeHandler = () => {
    const div = document.querySelector("#left-popup");
    div.style.left = "-50rem";
    setTimeout(() => {
      div.style.display = "none";
    }, 200);
  };
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 h-full d-none left--50 overflow-hidden"
      id="left-popup"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-dark bg-opacity-40"
          onClick={closeHandler}
        ></div>
        <div className="absolute inset-y-0 flex max-w-full outline-none left-0 ">
          <div className="h-full w-screen max-w-md">
            <div className="drawer flex h-full flex-col bg-light text-base shadow-xl">
              <div className="w-full h-full p-0">
                <div className="flex h-full flex-col">
                  <div className="fixed top-0 z-20 mb-4 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white p-5 md:mb-6">
                    <a href="/" className="inline-flex w-24 md:w-auto">
                      <span className="relative h-10 w-32 overflow-hidden md:w-40">
                        <span className="logo-container-side">
                          <img src={logoImg} alt="" />
                        </span>
                      </span>
                    </a>
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-body transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none"
                      onClick={closeHandler}
                    >
                      <box-icon
                        name="x"
                        color="#6b7280"
                        onClick={closeHandler}
                      ></box-icon>
                    </button>
                  </div>
                  <div className="pt-20">
                    <div className="h-full max-h-full">
                      <SideMenuComp categories={categories} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default LeftPopUp;
