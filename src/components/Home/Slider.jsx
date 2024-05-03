'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Slider = () => {
  const [dailyHadith, setDailyHadith] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/books");
        const data = await response.json();
        setDailyHadith(data.books.dailyHadith);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dailyHadith.map((hadis, i) => {
          return (
            <SwiperSlide key={i}>
              <div>
                <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 lg:leading-10 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-xl xl-min:text-xl xl-min:leading-10">
                  {hadis.bn}
                </div>
                <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-xl xl-min:text-xl">
                  [সহিহ ফাযায়েলে আমল: <span>৮৭</span>]
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
