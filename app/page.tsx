import Hero from "@/components/Hero";
import MyText from "@/components/MyText";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WebTech from "@/components/WebTech";

export default function Home() {
  return (
    <main className=" scroll-smooth overflow-y-hidden">
      <section id="1" className="w-full  max-w-[1440px] m-auto  flex flex-col justify-center items-center relative ">
        <MyText/>
        <Hero/>
        <WebTech/>
        <Projects/>
        
      </section>
      <section id="2" className="w-full max-w-[1440px] m-auto max-h-[100vh] flex flex-col justify-center items-center relative " >
      
      </section>
    </main>
  )
}
