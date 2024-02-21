import GetById from "@/components/GetById";
import GetData from "@/components/GetData";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnServerCompo from "@/components/LearnServerCompo";
import LearnUseRouter from "@/components/LearnUseRouter";
import ModuleCSS from "@/components/ModuleCSS";
import Navbar from "@/components/Navbar";
import PostData from "@/components/PostData";
// import UseImage from "@/components/UseImage";

export const metadata = {
  title: "User Data",
  description: "This is all users data",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navbar />
      <LearnUseRouter />
      <LearnServerCompo />
      <GetById />
      <ModuleCSS />
      <PostData />
      <GetData />
      {/* <UseImage/> */}
      <LearnDataFetching />
      <h1 className="big-text">My Name Is Apurba</h1>
    </main>
  );
}
