import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="full-home relative items-center justify-center">
      <div className="absolute w-[500px] h-[550px] bg-[#EC458D] rounded-full blur-[200px] top-[10%] left-[10%] translate-x-[-50%] translate-y-[-50%] -z-10"></div>
      <div className="absolute w-[500px] h-[550px] bg-[#474ED7] rounded-full blur-[300px] top-[20%] left-[40%] translate-x-[-50%] translate-y-[-50%] -z-10"></div>
      <Navbar />
      <main className="hero-welcome px-20 min-h-screen grid place-items-center max-w-4xl">
        <div className="hero-content">
          <h1 className="title-hero font-inter">Testing</h1>
          <p className="sub-title-hero font-inter py-4">Dive into the world of careers and discover your perfect fit. Start exploring today!</p>
        </div>
      </main>
    </div>
  )
}
