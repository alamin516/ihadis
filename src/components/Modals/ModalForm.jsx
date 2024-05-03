import React from "react";

const ModalForm = ({isModalOpen, setIsModalOpen}) => {
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsModalOpen(false)
    }

  return (
    <div
      className={`rodal duration-300 ${isModalOpen ? 'rodal-fade-enter': 'rodal-fade-leave hidden'}`}
      tabIndex="-1"
    >
      <div className="rodal-mask"></div>
      <div
        style={{
            width: '500px',
            height: '300px',
            animationDuration: '300ms',
            WebkitAnimationDuration: '300ms',
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }}
        className={`rodal-dialog ${isModalOpen ? 'rodal-zoom-enter':'rodal-zoom-leave'}`}
      >
        <div className="bg-white dark:bg-hadith-dark-card rounded-xl p-7 w-full h-fit">
          <div className="flex items-center gap-3 mb-6">
            <img src="/images/master/goto.svg" alt="hadis" />
            <h1 className=" font-semibold text-lg leading-5 dark:text-dark-text">
              হাদিসে যান
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <div className="relative">
                  <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                    <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                      <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-4"
                            src="/images/master/book.svg"
                            alt=""
                          />
                          <p className="style-Kalpurush">সহিহ বুখারী</p>
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
                    <div className="cursor-pointer text-[15px] flex flex-col px-2 drop-scrl h-[calc(100vh_-_75vh)]">
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সহিহ বুখারী
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সহিহ মুসলিম
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সুনানে আন-নাসায়ী
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সুনানে আবু দাউদ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        জামে' আত-তিরমিজি
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সুনানে ইবনে মাজাহ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        মুয়াত্তা ইমাম মালিক
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        রিয়াদুস সলেহিন
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        বুলুগুল মারাম
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        আল লু'লু ওয়াল মারজান
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        হাদিস সম্ভার
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সিলসিলা সহিহা
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        জাল জয়িফ হাদিস সিরিজ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        মিশকাতুল মাসাবিহ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        ৪০ হাদিস
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        আদাবুল মুফরাদ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        জুজ'উল রাফায়েল ইয়াদাইন
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সহিহ হাদিসে কুদসি
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        ১০০ সুসাব্যস্ত হাদিস
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        মিশকাতে জয়িফ হাদিস
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        শামায়েলে তিরমিযি
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সহিহ তারগিব ওয়াত তাহরিব
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        সহিহ ফাযায়েলে আমল
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        ঊপদেশ
                      </div>
                      <div className="style-Kalpurush-webKit text-base dark:text-dark-text hover:bg-[#f8f8f9] dark:hover:bg-hadith-dark-card px-4 py-2 rounded-md">
                        রমজানের দুর্বল হাদিস
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input
                min="0"
                className="focus:ring-primary border-[#DEE1E5]  
            w-full h-12 px-4 py-2 border border-solid rounded-lg focus:outline-none focus:ring-1 border-[#DEE1E5] dark:border-dark-cat-border dark:bg-darkchapter-list-hover "
                type="text"
                placeholder="Hadith No"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-subcat-hover mt-5 mb-3 px-4 py-2.5 rounded-md font-medium text-sm text-white"
                type="submit"
              >
                প্রয়োগ করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
