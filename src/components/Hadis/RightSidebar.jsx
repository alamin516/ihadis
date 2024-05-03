import React from "react";

const RightSidebar = () => {
  return (
    <div className="side-bar 2xl-min:block w-[350px] xl-max:w-full cat-scrl 2xl-min:h-screen 2xl-min:pb-36 lg:block xl:block  hidden col-start-3">
      <div className="2xl-min:bg-white 2xl-min:dark:bg-hadith-dark-card mb-6 p-5 rounded-xl xl-max:p-0">
        <div className="font-medium text-center text-2xl dark:text-dark-text">
          সেটিংস
        </div>
        <div className="xl-max:mt-6">
          <div className="">
            <div className="style-Kalpurush dark:text-dark-text mt-4 mb-2 text-md">
              আরবি ফন্ট সিলেক্ট করুন
            </div>
            <div className="relative">
              <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                  <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                    <div>
                      <img
                        className="hidden"
                        src="/images/master/book.svg"
                        alt=""
                      />
                      <p className="style-Kalpurush">Me Quran</p>
                    </div>
                  </div>
                  <img
                    className="dark:hidden"
                    src="/images/master/downarrow.svg"
                    alt=""
                  />
                  <img
                    className="dark:block hidden"
                    src="/images/master/downarrow-dark.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
                <div className="cursor-pointer text-[15px] flex flex-col px-2 pb-2">
                  <div className="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                    KFGQ
                  </div>
                  <div className="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                    Me Quran
                  </div>
                  <div className="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                    Al Mushaf
                  </div>
                  <div className="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                    Amiri
                  </div>
                  <div className="hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                    Arial
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          <div className="mt-3">
            <label
              className="style-Kalpurush text-md font-medium block dark:text-hadith-deepoffwhite my-2.5"
              htmlFor="translation"
            >
              এরাবিক ফন্ট সাইজ
            </label>
            <div
              className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center"
              name="translation"
            >
              <input
                type="range"
                min="18"
                max="40"
                style={{ backgroundSize: "0% 100%" }}
                value="18"
              />
              <div className="dark:text-dark-text">১৮</div>
            </div>
          </div>
          <div className="mt-3">
            <label
              className="style-Kalpurush text-md font-medium block dark:text-hadith-deepoffwhite my-2.5"
              htmlFor="translation"
            >
              অনুবাদ ফন্ট সাইজ
            </label>
            <div
              className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center"
              name="translation"
            >
              <input
                type="range"
                min="14"
                max="25"
                style={{ backgroundSize: "0% 100%" }}
                value="14"
              />
              <div className="dark:text-dark-text">১৪</div>
            </div>
          </div>
          <div className="rounded-lg">
            <div className="mt-6 setting-accordion-content">
              <div className="flex justify-between items-center">
                <div className="text-md style-Kalpurush dark:text-dark-text">
                  নাইট মোড
                </div>
                <div>
                  <button
                    className="bg-[#ECEEF0] dark:bg-dark-polygon relative inline-flex h-5 w-10 items-center rounded-full"
                    id="headlessui-switch-:Rl7ana6:"
                    role="switch"
                    type="button"
                    tabIndex="0"
                    aria-checked="false"
                    data-headlessui-state=""
                  >
                    <span
                      aria-hidden="t
              rue"
                      className="translate-x-[3px] bg-white dark:bg-hadith-dark-card
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
