import LearnDataFetching from "@/components/LearnDataFetching";
import LearnServerCompo from "@/components/LearnServerCompo";
import LearnUseRouter from "@/components/LearnUseRouter";
import ModuleCSS from "@/components/ModuleCSS";
import Navbar from "@/components/Navbar";
import UseImage from "@/components/UseImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navbar/>
      <LearnUseRouter/>
      <LearnServerCompo/>
      <ModuleCSS/>
      <UseImage/>
      <LearnDataFetching/>
      <h1 className="big-text">My Name Is Apurba</h1>
    </main>
  );
}