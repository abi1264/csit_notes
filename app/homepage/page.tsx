"use client";
import Container from "@/app/components/shared/Container";
import SemesterCard from "@/app/components/UI/SemesterCard";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import PlanCard from "../components/UI/Plans";

const semesters = [
  {
    id: 1,
    semester: "Semester 1",
    subjects:
      "Introduction to Information Technology, C Programming, Digital Logic, Mathematics I, Physics",
    icon: "BookOpen",
    bgColor: "bg-[#E0F3FF]",
    iconColor: "text-blue-normal",
    folderId: "1my_Vh-CcaDqXSrr3QYjN3PlIeLb9r40r",
    arrowBgcolor: "",
  },
  {
    id: 2,
    semester: "Semester 2",
    subjects:
      "Discrete Structure, Object Oriented Programming, Microprocessor, Mathematics II, Statistics I",
    icon: "FileText",
    bgColor: "bg-[#D9E2EF]",
    iconColor: "text-green-normal",
    folderId: "1Vmv9zfw9Gh05Xyq8scuU_qiWudUNu0CW",
    arrowBgcolor: "",
  },
  {
    id: 3,
    semester: "Semester 3",
    subjects:
      "Data Structures and Algorithms, Numerical Method, Computer Architecture, Computer Graphics, Statistics II",
    icon: "Code",
    bgColor: "bg-[#FFF3C4]",
    iconColor: "text-purple-normal",
    folderId: "1EuYT2EOVIJ3Q5_IZto_x40TELwrIft5y",
    arrowBgcolor: "",
  },
  {
    id: 4,
    semester: "Semester 4",
    subjects:
      "Theory of Computation, Computer Networks, Operating Systems, Database Management System, Artificial Intelligence",
    icon: "Database",
    bgColor: "bg-[#EBDDD3]",
    iconColor: "text-orange-normal",
    folderId: "17TFxC5jaZsUYTOQJ62eiuTXM16LdzD3Y",
    arrowBgcolor: "bg-orange-100",
  },
  {
    id: 5,
    semester: "Semester 5",
    subjects:
      "Design and Analysis of Algorithms, System Analysis and Design, Cryptography, Simulation and Modeling, Web Technology",
    icon: "Monitor",
    bgColor: "bg-[#FFD6D6]",
    iconColor: "text-green-normal",
    folderId: "1rju8fHMfl5mMl-bCWlX9GfIoTsW3opEY",
    arrowBgcolor: "bg-green-100",
  },
  {
    id: 6,
    semester: "Semester 6",
    subjects:
      "Software Engineering, Compiler Design and Construction, E-Governance, NET Centric Computing, Technical Writing",
    icon: "Brain",
    bgColor: "bg-[#DDF2DC]",
    iconColor: "text-pink-normal",
    folderId: "13NOj0ajKmKfH4MYjJi9KVQVluRCXFARk",
    arrowBgcolor: "bg-pink-100",
  },
  {
    id: 7,
    semester: "Semester 7",
    subjects:
      "Advanced Java Programming, Data Warehousing and Data Mining, Principles of Management, Project Work",
    icon: "Globe",
    bgColor: "bg-[#E0E4FA]",
    iconColor: "text-purple-dark",
    folderId: "1fC3VHaG4IHz7BCAzG-JuICfaYt_VNCyg",
    arrowBgcolor: "bg-pruple-100",
  },
  {
    id: 8,
    semester: "Semester 8",
    subjects: "Advanced Database, Internship",
    icon: "GraduationCap",
    bgColor: "bg-[#D8F0EC]",
    iconColor: "text-blue-normal",
    folderId: "15h7WI9VHkYv639xXHZPfuL-rfpZ9Dazz",
    arrowBgcolor: "bg-blue-100",
  },
];

const plans = [
  {
    id: 1,
    title: "Academic Excellence",
    features: ["TU Syllabus Mastery", "Exam & Carrer Preparation","Live Q&A and doubt solving",
      "Exam-focused preparation","Project Guidance"
    ],
  },
  {
    id: 2,
    title: "Technology and Skills",
    features: ["Full-stack web development", "UI/UX design and prototyping",
      "Wireframing and modern design workflows",
      "Backend and API development",
      "Data science fundamentals",
      "Machine learning algorithms",
      "Database design and management",
    ],
  },
];

export default function Homepage() {
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

  function handleSyllabus(syllabusFolderId: string) {
    window.open(`/pdf/${syllabusFolderId}`, "_blank");
  }

  return (
    <Container>
      <Header />
      {/* top section  */}
      <section className="mt-5 mb-5 p-5">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col gap-5 bg-white  ">
              <div className="text-black-600 font-bold  ">
                An initiative to provide you with the best resources available
                to us.
              </div>
              <div>
                <span className="text-5xl font-bold text-blue">BSc.CSIT</span>
              </div>
              <div className="w-full">
                <p className="max-w-150 text-sm md:text-lg text-text-ash">
                  Access your semester-wise notes, resources and study
                  materials. Click on any semester to open the respective
                  folder.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-1">
                <div className="rounded-3xl border border-gray-1  text-center p-3 bg-text-blue text-white font-bold">
                  Comprehensive Notes
                </div>
                <div className="rounded-3xl border border-gray-1 text-center p-3 bg-text-blue text-white font-bold">
                  Lab Reports & Practicals
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <Image
              src="/homepage_computer.png"
              alt="formula board"
              width={500}
              height={500}
              className="h-80 w-140  object-cover "
            />
          </div>
        </div>

        {/* Down Section */}

        <div className="flex flex-col ">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-3xl text-text-blue">Semesters</span>
            <span className="text-text-ash text-lg ">
              Choose your semesters to view notes and study materials
            </span>
            <button
              className="border border-gray-200 rounded-lg w-fit p-2 bg-[#D8F0EC] cursor-pointer text-black font-bold hover:scale-105 transition-smooth duration-300"
              onClick={() => {
                handleSyllabus(
                  "1P0IWRx0-C-Pd40HPcz8OmBwWuA_Ze_Zx?usp=drive_link",
                );
              }}
            >
              New Syllabus
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {semesters.map((semester) => (
              <SemesterCard key={semester.id} semester={semester} />
            ))}
          </div>
        </div>


        {/* Premium Plan */}
        <div className='mt-7'>
        <span className='text-3xl text-[#193358] font-bold '>Our Courses</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              title={plan.title}
              features={plan.features}
            />
          ))}
        </div>

        </div>
      </section>
      <Footer />
    </Container>
  );
}
