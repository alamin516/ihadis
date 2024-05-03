"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ModalForm from "../Modals/ModalForm";

const Navbar = () => {
  const router = useRouter();
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.body.removeEventListener("click", handleClickOutside);
    return () => {
      document.body.addEventListener("click", handleClickOutside);
    };
  }, []);


  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-white dark:bg-hadith-dark-card sticky shadow-sm top-0 z-50">
      <div className="mx-auto flex h-20 items-center justify-between md:p-0 lg:py-12 sm:p-0 lg:px-4 w-10/12 xs:min-w-full xs:p-0 xs:px-4 xss:w-full">
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <img
            onClick={() => router.push("/", { scroll: false })}
            className="w-10 h-10"
            src="/images/home-logo.png"
            alt="iHadith"
          />
          <h1 className="text-[1.7rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
            আল হাদিস
          </h1>
        </div>
        <div className="items-center justify-between  xl-min:block hidden d-hidden d-block">
          <div className="flex items-center justify-center gap-10 leading-5 text-hadith-sm font-[100] lg-max:flex-col lg-max:px-8 lg-max:gap-4">
            <div className="bg-hadith-button-background flex items-center gap-x-3 rounded-full cursor-pointer lg-max:w-full lg-min:py-2 lg-min:px-5 lg-max:rounded-xl">
              <img
                width="21"
                height="20"
                src="/images/home.svg"
                alt="iHadith"
              />
              <p className="style-Kalpurush font-medium text-white text-lg leading-5 cursor-pointer">
                হোম
              </p>
            </div>
            <p
              onClick={openModal}
              ref={ref}
              className="style-Kalpurush text-main-menu dark:text-hadith-deepoffwhite font-normal text-lg leading-5 cursor-pointer hover:lg-max:bg-subcat-hover hover:lg-max:text-white hover:xl-min:text-[#399e7b] lg-max:w-full lg-max:py-4 lg-max:px-6 lg-max:rounded-xl"
            >
              হাদিসে যান
            </p>
            <p
              onClick={() => router.push("/all-books", { scroll: false })}
              className="style-Kalpurush text-main-menu dark:text-hadith-deepoffwhite font-normal text-lg leading-5 cursor-pointer hover:lg-max:bg-subcat-hover hover:lg-max:text-white hover:xl-min:text-[#399e7b] lg-max:w-full lg-max:py-4 lg-max:px-6 lg-max:rounded-xl"
            >
              হাদিস গ্রন্থসমূহ
            </p>
            <p className="style-Kalpurush text-main-menu dark:text-hadith-deepoffwhite font-normal text-lg leading-5 cursor-pointer hover:lg-max:bg-subcat-hover hover:lg-max:text-white hover:xl-min:text-[#399e7b] lg-max:w-full lg-max:py-4 lg-max:px-6 lg-max:rounded-xl">
              আমাদের প্রজেক্ট
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-2 cursor-pointer">
          <div className="z-[2] xl-min:order-last ml-4 py-[13px] mr-3 text-white rounded-lg bg-hadith-button-background hover:drop-shadow-[0_10px_6px_rgba(0,0,0,0.1)] cursor-pointer sm-max:hidden flex items-center justify-center md:gap-2 px-[27px] gap-2">
            <p className="style-Kalpurush-webKit mt-1 font-medium text-[16px] hidden lg-min:block">
              সাপোর্ট করুন
            </p>
            <img
              width="24"
              height="24"
              src="/images/helping-hand.svg"
              alt="support us"
            />
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#ECEEF0] dark:bg-[#383838] flex items-center justify-center">
            <img width="24" height="24" src="/images/night.svg" alt="iHadith" />
          </div>
          <div className="hidden lg-max:block ml-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#ECEEF0] dark:bg-[#383838] flex items-center justify-center">
              <svg
                className="stroke-[#404040] dark:stroke-white "
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8863 14.7273H27.6136M12.8863 20.25H27.6136M21.1704 25.7727H27.6136"
                  strokeWidth="2.30114"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
        <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </nav>
  );
};

export default Navbar;
