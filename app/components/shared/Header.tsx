import { GraduationCap, House, Info } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-header-background p-4 rounded-lg sticky top-0 w-full">
      <div className='flex justify-between'>
        <div className="flex gap-3 items-center">
          <GraduationCap size={50} className="text-header-icon" />
          <span className="text-3xl text-white font-bold">BSc.CSIT Notes</span>
        </div>

        <div className='flex flex-col gap-5 p-5 md:flex-row'>
          <Link href='/homepage/'>
          <div className="flex gap-2 items-center hover:cursor-pointer hover:scale-105 transition-smooth duration-400">
            <House size={20} className="text-white" />
            <span className='text-white '>Home</span>
          </div>
          </Link>

          <Link href='/modules/aboutUs/'>
          <div className="flex gap-2 items-center hover:cursor-pointer hover:scale-105 transition:smooth duration:400">
            <Info size={20} className='text-white'/>
            <span className='text-white'>About</span>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
