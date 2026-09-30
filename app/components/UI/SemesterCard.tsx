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
  folderId: string;
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
  
  
  function handleView(folderId: string) {
      window.open(`/pdf/${folderId}`,"_blank");
  }
  // const Icon = iconMap[semester.icon as keyof typeof iconMap];

  return (
    <div className="flex flex-col rounded-xl bg- border border-gray-200 gap-4 p-4 hover:scale-105 transition:smooth duration-300 ">
      <div
        className={`${semester.bgColor} flex flex-col gap-3 min-h-35 p-8 rounded-xl hover:cursor-pointer`}
        onClick={() => {
          handleView(semester.folderId);
        }}
      >
        <div className="text-2xl font-bold  rounded-md ">
          {semester.semester}
        </div>
      </div>
    </div>
  );
}
