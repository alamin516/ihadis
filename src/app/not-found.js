"use client";
import MasterLayout from "@/components/shared/MasterLayout";

export default function NotFound() {
  return (
    <MasterLayout title={'পেজ খুঁজে পাওয়া যায়নি'}>
      <div
        id="scrollToTop"
        className="px-5 xss:pb-24 md-max:px-3 md:pb-8 lg:pb-20 md-max:overflow-y-auto md-max:h-screen"
      >
        <div className="scrl h-[calc(100vh-100px)]">
          <div className=" flex items-center justify-center h-[85vh] xs:px-4 xs:h-[60vh] sm:h-[70vh] md:h-[70vh] lg:h-[73vh] dark:bg-dark-bg">
            <div className="flex flex-col items-center justify-center bg-[url('/images/404.svg')] dark:bg-[url('/assets/404/404-dark.svg')] bg-no-repeat bg-contain">
              <div className="mt-72 flex flex-col items-center justify-center xs:mt-[37%] sm:mt-[37%] md:mt-[37%]">
                <h1 className="font-poppins font-semibold text-primary text-[56px] leading-[56px] uppercase mb-3 dark:text-[#6E86A1] xs:text-2xl xs:leading-6 sm:text-[35px] sm:leading-[35px] md:text-[40px] md:leading-[40px] lg:text-[45px] lg:leading-[45px]">
                  সুবহান আল্লাহ
                </h1>
                <h2 className="font-poppins mt-5 mb-5 font-semibold text-[36px] leading-[36px] text-[#353535] dark:text-dark-text xs:text-xl xs:leading-5 sm:text-2xl sm:leading-6 md:text-3xl md:leading-[30px] lg:text-[35px] lg:leading-[35px]">
                  পেজ খুঁজে পাওয়া যায়নি
                </h2>
                <div className="flex items-center justify-center">
                  <p className="font-inter text-center font-normal text-lg leading-6 text-mute-grey-200 mb-5 w-7/12 dark:text-dark-text dark:opacity-50 xs:text-base xs:leading-6 sm:text-base sm:leading-6">
                    আমরা দুঃখিত, আপনি যে পেজটি খুঁজছেন তা আমরা খুঁজে পাইনি। দয়া
                    করে হোমপেজে ফিরে যান
                  </p>
                </div>
                <button className="bg-primary rounded-md px-4 py-3">
                  <p className="font-inter font-normal text-base leading-4 text-white xs:text-xs sm:text-sm md:text-sm lg:text-mss">
                    ← হোম পেজে ফিরে যান
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}
