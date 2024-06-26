import BookCard from "./BookCard";
import SubjectBookCard from "./SubjectBookCard";

const getData = async () => {
  const books = await (await fetch("http://localhost:8000/books")).json();
  return books.books;
};

const SubjectBooks = async () => {
  const data = await getData();

  console.log(data)

  return (
    <div className="mt-[75px] xss:mt-10 xs:mt-10 lg-max:max-w-[94%] lg-max:mx-auto sm:mt-9 md:p-0 md:mt-[35px] lg:mt-[65px]">
      <h3 className="flex items-center justify-center font-semibold text-hadith-black dark:text-hadith-deepoffwhite mb-[15px] xss:text-[22px] xs:text-[22px] sm:text-[22px] md:text-[28px] lg-min:text-[35px] lg-min:leading-[52.5px]">
        বিষয়ভিত্তিক হাদিস
      </h3>
      <div className="flex items-center justify-center title">
        <p className="mb-[35px] leading-6 text-center text-[#626D7D] dark:text-hadith-deepoffwhite xs:w-full xss:text-sm xs:text-sm sm:text-sm sm:w-full md:w-11/12 md:text-[15px] lg:w-6/12 lg:text-[15px] 2xl:text-[16px]">
          বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ দ্বারা
          নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট বিষয়গুলোর
          উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও শিক্ষকদের জন্যও
          সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা প্রদান করতে চাইছেন।
        </p>
      </div>

      <div className="grid gap-4 mb-[45px] sm:grid-cols-2 sm:mb-9 md:grid-cols-2 lg:grid-cols-4">
        {data.subjectWise.map((book, i) => {
          return <SubjectBookCard key={i} book={book} />;
        })}
      </div>

      <div className="flex items-center justify-center">
        <div className="py-[15px] text-white px-[20px] bg-hadith-button-background rounded-xl hover:drop-shadow-[0_10px_6px_rgba(0,0,0,0.1)]">
          <div className="text-base flex gap-3 cursor-pointer">
            <img src="/images/subject.svg" alt="" />
            সকল ক্যাটেগরি দেখুন
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectBooks;
