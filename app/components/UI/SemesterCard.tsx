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
  iconColor:string;
  driveUrl: string;
  arrowBgcolor:string;
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
    <div className="flex flex-col rounded-xl bg-white border border-gray-200 gap-4 p-4 hover:scale-105 transition:smooth duration-300">
      <div className={`${semester.bgColor} text-white font-bold border w-12 h-12 rounded-full flex justify-center items-center`}>
        <h2 className="'text-black">{semester.id}</h2>
      </div>

      <div className='flex flex-col gap-3 min-h-35'>
        <span className='text-3xl font-bold'>{semester.semester}</span>
        <div className='text-text-ash h-30'>{semester.subjects}</div>
      </div>
      <div className="flex justify-between">
        <Icon size={28} className={`${semester.iconColor}`} />
        
        <ArrowRight size={40} className={`${semester.iconColor} cursor-pointer rounded-3xl p-1 `} 
        onClick={()=>window.open(semester.driveUrl,"_blank")}
          />
      </div>
    </div>
  );
}
