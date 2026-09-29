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

const semesters = [
  {
    id: 1,
    semester: "Semester 1",
    subjects:
      "Introduction to Information Technology, C Programming, Digital Logic, Mathematics I, Physics",
    icon: "BookOpen",
    bgColor: "bg-[#E0F3FF]",
    iconColor: "text-blue-normal",
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/1my_Vh-CcaDqXSrr3QYjN3PlIeLb9r40r",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/1Vmv9zfw9Gh05Xyq8scuU_qiWudUNu0CW",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/1EuYT2EOVIJ3Q5_IZto_x40TELwrIft5y",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/17TFxC5jaZsUYTOQJ62eiuTXM16LdzD3Y",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/1rju8fHMfl5mMl-bCWlX9GfIoTsW3opEY",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/13NOj0ajKmKfH4MYjJi9KVQVluRCXFARk",
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
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/1fC3VHaG4IHz7BCAzG-JuICfaYt_VNCyg",
    arrowBgcolor: "bg-pruple-100",
  },
  {
    id: 8,
    semester: "Semester 8",
    subjects: "Advanced Database, Internship",
    icon: "GraduationCap",
    bgColor: "bg-[#D8F0EC]",
    iconColor: "text-blue-normal",
    driveUrl:
      "https://drive.google.com/drive/u/2/folders/15h7WI9VHkYv639xXHZPfuL-rfpZ9Dazz",
    arrowBgcolor: "bg-blue-100",
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

  return (
    <Container>
      <Header />
      {/* top section  */}
      <section className="mt-5 border border-gray-200 mb-2 ">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col gap-5 bg-white  p-4 ">
              <div className="text-blue-600 font-bold  ">
                An initiative to provide you with the best resources available
                to us.
              </div>
              <div>
                <span className="text-5xl font-bold text-blue">BSc.CSIT</span>
              </div>
              <div className="w-full">
                <p className="max-w-text-sm md:text-lg text-text-ash  ">
                  Access your semester-wise notes, resources and study
                  materials. Click on any semester to open the respective folder
                  in Google Drive.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 ">
                <div className="rounded-3xl border border-gray-1  text-center p-3 bg-text-blue text-white font-bold">
                  Comprehensive Notes
                </div>
                <div className="rounded-3xl border border-gray-1 text-center p-3 bg-text-blue text-white font-bold">
                  Lab Reports & Practicals
                </div>
                <div className="rounded-3xl border border-gray-1 text-center p-3 bg-text-blue text-white font-bold">
                  Past Questions & Solutions
                </div>
                <div className="rounded-3xl border border-gray-1 p-3 text-center bg-text-blue text-white font-bold">
                  Complete Study Materials
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
              className="h-100 w-200"
            />
          </div>
        </div>

        {/* Down Section */}

        <div className="flex flex-col  ">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-3xl text-text-blue">Semesters</span>
            <span className="text-text-ash text-lg ">
              Choose your semesters to view notes and study materials
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {semesters.map((semester) => (
              <SemesterCard key={semester.id} semester={semester} />
            ))}
          </div>
        </div>

        {/* Premium Plan */}
        <div className=" flex flex-col gap-5 p-6 bg-blue-140   ">
          <h1 className="text-3xl text-[#103766] font-bold ">
            Join Our premium Plan
          </h1>
          <ul className="list-disc pl-6 text-[#]  space-y-2 italic border border-gray-300 rounded-xl p-3  ">
            <li>
              <span className="font-bold text-blue-600">
                TU Syllabus Mastery:{" "}
              </span>
              <span className="font-bold text-text-ash">
                Semester-wise live tutoring, notes, lab sheets, and solved past
                questions.
              </span>
            </li>
            <li>
              <span className="font-bold text-blue-600">UI/UX Design:</span>
              <span className="font-bold text-text-ash">
                Interactive prototyping, wireframing, and modern design
                workflows.
              </span>
            </li>
            <li>
              <span className="font-bold text-blue-600">
                Full Stack & Backend:{" "}
              </span>
              <span className="font-bold text-text-ash">
                End-to-end web development, API engineering, and database
                design.
              </span>
            </li>
            <li>
              <span className="font-bold text-blue-600">
                AI & Machine Learning:
              </span>
              <span className="font-bold text-text-ash">
                Practical training in data science, ML algorithms, and model
                deployment.
              </span>
            </li>
            <li>
              <span className="font-bold text-blue-600">
                Exam & Career Prep:
              </span>
              <span className="font-bold text-text-ash">
                Live Q&A, exam solution breakdowns, and hands-on project
                guidance.
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-3 font-bold p-3">
            <span>
              Have a question or feedback? We'd love to hear from you. Reach out
              to us anytime.
            </span>
            <button className=" rounded-xl w-fit p-2 bg-blue-200 hover:scale-110 transition-smooth duration-400 curor-pointer ">
              <a
                href="https://wa.me/9761807892"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FaWhatsapp size={22} fill="green" />
                WhatsApp us
              </a>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
