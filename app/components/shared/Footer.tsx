import { GraduationCap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-header-background p-4 rounded-lg ">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex gap-3 items-center">
          <GraduationCap size={30} className="text-header-icon" />
          <span className="text-2xl text-white font-bold">BSc.CSIT Notes</span>
        </div>
        <div>
          <p className="text-white">
            {" "}
            Built for Computer Science and IT Students
          </p>
        </div>

        <span className="text-white">Contributed by Abishek Thapa</span>
      </div>
    </section>
  );
}
