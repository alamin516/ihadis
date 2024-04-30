import React from "react";
import HeroSearchForm from "./HeroSearchForm";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="relative text-white hadissliderone w-full md-max:h-[30rem] h-[38rem]">
      <div className="absolute h-full w-full bg-[#2b9e76] dark:bg-dark-hero-bg opacity-95"></div>

      <div
        className={`mx-auto xss:max-w-full w-7/12 flex flex-col items-center justify-center h-full pb-8 bg-[url('/images/hero.svg')] dark:bg-[url('/images/hero-dark.svg')] bg-contain bg-no-repeat bg-center xss:w-11/12 xss:pt-10 xs:min-w-full xs:p-5 sm:p-0 sm:w-11/12 xs:pt-10 md:w-11/12 md:pt-10 md:px-4 lg:w-10/12 xl:w-9/12 2xl-min:w-9/12 lg:py-20`}
      >
        <h1 className="font-semibold z-0 lg:leading-[74px] mb-5 text-white dark:text-hadith-deepoffwhite xss:text-center xss:text-[28px] xss:leading-8 xs:w-11/12 xs:text-center xs:text-[26px] xs:leading-10 xs-max:mb-10 sm-max:text-[30px] sm:mt-5 md:leading-[52px] lg:mb-5 lg-min:text-[46px] xl-min:text-[46px] 2xl-min:text-[56px] lg:mt-8">
          আপনার পছন্দের হাদিস খুঁজুন
        </h1>
        <HeroSearchForm />
        <div className="w-full lg:h-64 h-48 text-center text-white xs:w-10/12 sm:w-9/12 md:w-9/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
