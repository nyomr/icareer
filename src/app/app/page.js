import Image from "next/image";
import Navbar from "@/components/Navbar";
import PostTable from "@/components/Table"; 

export default function Home() {
  return (
    <div className="full-home relative">
      <div className="absolute w-[500px] h-[550px] bg-[#EC458D] rounded-full blur-[200px] top-[10%] left-[10%] transform translate-x-[-50%] -translate-y-[-50%] z-[-10]"></div>
      <div className="absolute w-[500px] h-[550px] bg-[#474ED7] rounded-full blur-[300px] top-[20%] left-[40%] transform translate-x-[-50%] -translate-y-[-50%] z-[-10]"></div>
      <Navbar />
      <main className="hero-welcome px-20 min-h-screen flex flex-col justify-center items-center">
        <div className="hero-content text-center">
          <h1 className="latest-jobs font-inter">Latest Jobs</h1>
          <div className="rounded-lg shadow-md py-8 w-full max-w-4xl">
            <PostTable />
          </div>
        </div>
      </main>
    </div>
  );
}
