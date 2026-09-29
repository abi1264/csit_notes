"use client";
import { ArrowRight, LucideIcon } from "lucide-react";

import {
  BookOpen,
  FileText,
  Code,
  Database,
  Monitor,
  Brain,
  Globe,
  GraduationCap,
} from "lucide-react";

type Semester = {
  id: number;
  semester: string;
  subjects: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  driveUrl: string;
  arrowBgcolor: string;
};

type SemesterCardProps = {
  semester: Semester;
};
const iconMap = {
  BookOpen,
  FileText,
  Code,
  Database,
  Monitor,
  Brain,
  Globe,
  GraduationCap,
};

export default function SemesterCard({ semester }: SemesterCardProps) {
  const Icon = iconMap[semester.icon as keyof typeof iconMap];

  return (
    <div className="flex flex-col rounded-xl bg- border border-gray-200 gap-4 p-4 hover:scale-105 transition:smooth duration-300 ">
      {/* <div
        className={`bg-blue-400 font-bold  w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <h2 className="'text-black">{semester.id}</h2>
      </div> */}

      <div
        className={`${semester.bgColor} flex flex-col gap-3 min-h-35 p-8 rounded-xl hover:cursor-pointer`}
        onClick={() => window.open(semester.driveUrl, "_blank")}
      >
        <div className="text-2xl font-bold  rounded-md ">
          {semester.semester}
        </div>
        <div className="text-black min-h-40  rounded-md ">
          {semester.subjects}
        </div>
      </div>
      {/* <div className="flex justify-between"> */}
      {/* <Icon size={28} className={`${semester.iconColor}`} /> */}

      {/* <ArrowRight size={40} className={`${semester.iconColor} cursor-pointer rounded-3xl p-1 `} 
        onClick={()=>window.open(semester.driveUrl,"_blank")}
          />
      </div> */}

      <div>
        {/* <button className=' px-2 text-white bg-blue-500 w-full  py-1 rounded-lg hover:cursor-pointer hover:hover:bg-blue-600'>
          Explore
        </button> */}
      </div>
    </div>
  );
}
