'use client'
import { bengaliNumeral } from "@/utilities/bengaliNumeral";
import { usePathname } from "next/navigation";
import React from "react";

const SubjectBookCard = ({book}) => {
  const pathname = usePathname();

  return (
    <div
      name="bookCard"
      className={`p-5 sm-max:p-4 flex  group cursor-pointer  false ${pathname === '/subjectwise' ? 'hover:bg-[#ebfcf6]' : 'drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] '} bg-white  hover:dark:bg-darkchapter-list-hover dark:bg-hadith-dark-card justify-between items-center rounded-2xl h-[6.25rem]`}
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 sm-max:w-10 xl:w-12  flex items-center justify-center relative">
          <h3 className="text-gray-400 group-hover:text-white dark:text-hadith-deepoffwhite style-Kalpurush absolute md-max:text-base text-xl font-medium  group-hover:opacity-100  xl:text-lg">
            {bengaliNumeral(book.id)}
          </h3>
          <svg
            className="fill-[#f1f5f4] dark:fill-dark-bg-lite group-hover:fill-subcat-hover     "
            width="56"
            height="62"
            viewBox="0 0 56 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col justify-between gap-1.5 group">
          <h4 className="text-base font-medium leading-7 text-[15px] text-black group-hover: dark:group-hover:text-subcat-hover dark:text-hadith-deepoffwhite xss:text-[15px] md:text-base xl:text-base style-Kalpurush max-line-2">
            {book.bn}
          </h4>
          <div className="text-[#40404099] dark:text-dark-text-subtitle style-Kalpurush-dropdown text-sm leading-[26px] md:text-[13px]">
            হাদিসের রেঞ্জ: <span>{bengaliNumeral(book.hadith_count)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectBookCard;
