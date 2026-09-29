import { GraduationCap, House, Info } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-header-background p-4 rounded-lg sticky top-0 w-full z-10">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <GraduationCap className="text-header-icon w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <span className="text-sm md:text-lg lg:text-2xl text-white font-bold">
            BSc.CSIT Notes
          </span>
        </div>

        {/* <div className='flex flex-col gap-5 p-5 md:flex-row'>
          <Link href='/homepage/'>
          <div className="flex gap-2 items-center hover:cursor-pointer hover:scale-105 transition-smooth duration-400">
            <House size={20} className="text-white" />
            <span className='text-white '>Home</span>
          </div>
          </Link> */}

        {/* <Link href='/modules/aboutUs/'>
          <div className="flex gap-2 items-center hover:cursor-pointer hover:scale-105 transition:smooth duration:400">
            <Info size={20} className='text-white'/>
            <span className='text-white'>About</span>
          </div>
          </Link> */}
        {/* </div> */}
      </div>
    </section>
  );
}
