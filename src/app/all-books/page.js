import AllBooks from "@/components/AllBooks/AllBooks";
import ChapTitle from "@/components/AllBooks/ChapTitle";
import MasterLayout from "@/components/shared/MasterLayout";


export const metadata = {
  title: 'সকল হাদিস গ্রন্থসমূহ',
  description: 'iHadis'
}

const page = () => {
  return (
      <MasterLayout>
      <div
        id="scrollToTop"
        className="px-5 xss:pb-24 md-max:px-3 md:pb-8 lg:pb-20 md-max:overflow-y-auto md-max:h-screen"
      >
        <div className="grid gap-6 mb-14 mb:mb-16 xss:pt-20 lg:grid-cols-8 xl:grid-cols-8">
          <div className="cat-scrl col-start-2 lg-min:h-[calc(100vh_-_65px)] lg-min:pt-5 md:col-start-1 sm:col-start-1 xl:pb-4 xs:col-start-1 xss:col-start-1 lg:col-span-6 lg:col-start-2">
            <ChapTitle title={'সকল বই'}/>
            <AllBooks/>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default page;
