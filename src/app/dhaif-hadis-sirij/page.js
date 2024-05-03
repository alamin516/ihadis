import AllBooks from "@/components/AllBooks/AllBooks";
import ChapTitle from "@/components/AllBooks/ChapTitle";
import LeftSidebar from "@/components/Hadis/LeftSidebar";
import RightSidebar from "@/components/Hadis/RightSidebar";
import MasterLayout from "@/components/shared/MasterLayout";

const page = () => {
  return (
    <MasterLayout>
      <div
        id="scrollToTop"
        className="px-5 xss:pb-24 md-max:px-3 md:pb-8 lg:pb-20 md-max:overflow-y-auto md-max:h-screen"
      >
        <div className="grid gap-4 xl:gap-6 py-5 xss:pt-24 xss:pb-9 xs:pb-6 sm:col-start-1 sm-max:pt-[5rem] sm:pb-7 md:col-start-1 md:pb-6 lg:grid-cols-1 xl:grid-cols-[350px,1fr] 2xl-min:grid-cols-[350px,1fr,335px] ">
          <LeftSidebar/>
          <div className="col-auto">
            <ChapTitle />
            <div className="cat-scrl lg:h-[calc(100vh-190px)] xl-min:h-[calc(100vh-170px)] lg-min:bg-white lg:dark:bg-hadith-dark-card rounded-t-none rounded-b-xl w-full xss:mb-10 xss:rounded-xl xss:mt-4 xs:rounded-xl sm:rounded-xl md:mt-1 md:rounded-xl lg:rounded-xl scroll-mt-20">
              <AllBooks />
            </div>
          </div>
          <RightSidebar/>
        </div>
      </div>
    </MasterLayout>
  );
};

export default page;
