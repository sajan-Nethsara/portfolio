import Hero from "@/components/Hero";
import MyText from "@/components/MyText";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[100vh] max-w-[1440px] m-auto max-h-[100vh] myBlue  ">
        <Navbar/>
        <MyText/>
        
      </div>
      
    </main>
  )
}
