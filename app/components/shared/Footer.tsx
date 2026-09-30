import { GraduationCap, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-header-background p-4 rounded-lg ">
      <div className="flex flex-row gap-5 justify-between items-center">
        
        
          <div className="text-white text-xs md:text-sm lg:text-lg ">
            {" "}
            Built for Computer Science and IT Students
          </div>
          <button className=" text-white rounded-xl w-fit  hover:scale-110 transition-smooth duration-400 curor-pointer ">
            <a
              href="https://wa.me/9761807892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm lg:text-lg text-white "
            >
              <FaWhatsapp size={22} fill="green" />
              Contact us
            </a>
          </button>
          
        

        <div className="text-white text-xs md:text-sm lg:text-lg">© 2026 BSc.CSIT Notes. All rights reserved.</div>
      </div>

       
    </section>
  );
}
