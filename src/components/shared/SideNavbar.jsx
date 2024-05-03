"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ModalForm from "../Modals/ModalForm";

const SideNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
        setIsModalOpen(false)
      }
    };


    document.body.removeEventListener('click', handleClickOutside);
    return () => {
    document.body.addEventListener('click', handleClickOutside);
    };
  }, []);



  const openModal = () => {
    setIsModalOpen(true);
  };




  return (
    <>
      <div className="grid xss:grid-cols-5 xs:grid-cols-5 sm:grid-cols-5 md:grid-rows-1 md:grid-cols-5 lg:grid-cols-1 lg:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] place-content-center place-items-center my-auto h-full gap-[4.5%]">
        <img
          onClick={() => router.push("/", { scroll: false })}
          className="hover:bg-[#f8f8f9] p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-2 col-start-1"
          src="/images/master/home.svg"
          alt=""
        />
        <img
          onClick={() => router.push("/all-books", { scroll: false })}
          className={`${
            pathname === "/all-books" ? "bg-[#2B9E76]" : ""
          } hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-3`}
          src={`${
            pathname === "/all-books"
              ? "/images/master/active-book.svg"
              : "/images/master/book.svg"
          }`}
          alt=""
        />
        <img
          onClick={() => router.push("/subjectwise", { scroll: false })}
          className={`${
            pathname === "/subjectwise" ? "bg-[#2B9E76]" : ""
          } hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-4`}
          src={`${
            pathname === "/subjectwise"
              ? "/images/master/active-subject.svg"
              : "/images/master/subject.svg"
          }`}
          alt=""
        />
        <img
          onClick={() => router.push("/profile", { scroll: false })}
          className={`${
            pathname === "/profile" ? "bg-[#2B9E76]" : ""
          } hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover  md-max:p-2 md-max:w-9 p-4 rounded-lg cursor-pointer md-max:block lg-min:row-start-5 `}
          src={`${
            pathname === "/profile"
              ? "/images/master/active-bookmark.svg"
              : "/images/master/bookmark.svg"
          }`}
          alt=""
        />
        <div className="lg-min:row-start-6 cursor-pointer md-max:hidden lg-min:block">
          <img
          ref={ref}
          onClick={()=> setShow(!show)}
            className="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover  md-max:p-2 md-max:w-9 p-4 rounded-lg cursor-pointer md-max:block lg-min:row-start-5"
            src="/images/master/others.svg"
            alt=""
          />
        </div>
        <div
          className={`fixed hidden  bottom-[100px] z-10 py-4 rounded-xl bg-white dark:bg-hadith-dark-card h-fit lg-min:block lg-min:left-28 lg-min:w-80 
      ${!show && 'md-min:-translate-x-[200%]'} transition duration-500
        `}
        >
          <div className="grid gap-6 pt-2.5 pb-4 lg-min:gap-0">
            <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-2 ">
              <h2 className="px-6 py-4 text-lg lg-min:hidden md-max:block">
                কুইক মেনু
              </h2>
              <div className="flex flex-col py-1">
                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/images/master/blog.svg" alt="" />
                  <p>প্রাইভেসি</p>
                </div>
                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/images/master/tick.svg" alt="" />
                  <p>তাহকিক</p>
                </div>
                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/images/master/man.svg" alt="" />
                  <p>লেখক সম্পর্কে</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
              <div className="px-6 py-3">
                <div className="style-Kalpurush border-b dark:text-dark-text border-solid dark:border-none">
                  ডাউনলোড
                </div>
              </div>
              <div className="flex flex-col">
                <div className="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/images/master/project.svg" alt="" />
                  <p>আমাদের অন্যান্য প্রজেক্টস</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
              <div className="px-6 py-3 style-Kalpurush">
                <div className="style-Kalpurush border-b border-solid dark:border-none dark:text-dark-text">
                  সাপোর্ট করুন অথবা যোগাযোগ করুন
                </div>
              </div>
              <div className="flex flex-col">
                <div className="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/images/master/help-hand.svg" alt="" />
                  <p>সাপোর্ট করুন</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-min:row-start-7 cursor-pointer" onClick={openModal} ref={ref}>
          <img

            className="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover  md-max:p-2 md-max:w-9 p-4 rounded-lg cursor-pointer md-max:block lg-min:row-start-5"
            src="/images/master/goto.svg"
            alt=""
          />
        </div>
      </div>
      <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default SideNavbar;
