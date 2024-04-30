import DownloadApp from "@/components/Home/DownloadApp";
import HadisSlider from "@/components/Home/Hadis";
import Hero from "@/components/Home/Hero";
import HomeBooks from "@/components/Home/HomeBooks";
import SubjectBooks from "@/components/Home/SubjectBooks";
import PlainLayout from "@/components/shared/PlainLayout";

export default function Home() {
  return (
    <>
      <PlainLayout>
        <Hero />
        <div className="mx-auto w-full xss:w-full xs:w-full xs:mx-0 sm:px-4 md:w-11/12 xl:w-[70%]">
          <HomeBooks />
          <HadisSlider />
          <SubjectBooks />
        </div>
        <DownloadApp />
      </PlainLayout>
    </>
  );
}
