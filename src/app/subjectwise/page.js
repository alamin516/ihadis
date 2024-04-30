import ChapTitle from "@/components/AllBooks/ChapTitle";
import SubjectBookCard from "@/components/Home/SubjectBookCard";
import MasterLayout from "@/components/shared/MasterLayout";
import React from "react";

const getData = async () => {
    const books = await (await fetch("http://localhost:8000/books")).json();
    return books.books;
  };


const page = async() => {
    const data = await getData();

  return (
    <MasterLayout>
      <div
        id="scrollToTop"
        className="px-5 xss:pb-24 md-max:px-3 md:pb-8 lg:pb-20 md-max:overflow-y-auto md-max:h-screen"
      >
        <div className="grid gap-6 mb-14 mb:mb-16 xss:pt-20 lg:grid-cols-5 xl:grid-cols-5">
          <div className="cat-scrl col-start-2 lg-min:h-[calc(100vh_-_65px)] lg-min:pt-5 md:col-start-1 sm:col-start-1 xl:pb-4 xs:col-start-1 xss:col-start-1 lg:col-span-3 lg:col-start-2">
            <ChapTitle title={"বিষয়ভিত্তিক হাদিস"} />
            <div className="grid gap-4 mb-8 mt-6 sm:grid-cols-2 sm:mb-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {data.subjectWise.map((book, i) => {
                return <SubjectBookCard key={i} book={book} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default page;
