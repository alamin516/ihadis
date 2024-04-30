import ChapTitle from "@/components/AllBooks/ChapTitle";
import MasterLayout from "@/components/shared/MasterLayout";
import React from "react";

const page = () => {
  return (
    <MasterLayout>
      <div
        id="scrollToTop"
        className="px-5 xss:pb-24 md-max:px-3 md:pb-8 lg:pb-20 md-max:overflow-y-auto md-max:h-screen"
      >
        <div className="grid gap-6 mb-14 mb:mb-16 xss:pt-20 lg:grid-cols-5 xl:grid-cols-5">
          <div className="cat-scrl col-start-2 lg-min:h-[calc(100vh_-_65px)] lg-min:pt-5 md:col-start-1 sm:col-start-1 xl:pb-4 xs:col-start-1 xss:col-start-1 lg:col-span-3 lg:col-start-2">
            <ChapTitle title={"বুকমার্ক পেইজ"} />
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default page;
