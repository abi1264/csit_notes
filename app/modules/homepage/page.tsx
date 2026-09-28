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
    bgColor: "bg-blue-normal",
    iconColor: "text-blue-normal",
    driveUrl:
      "https://drive.google.com/drive/folders/1diydD8Ti0BaNRw9MJaCSaYh3lcbTdf5R?dmr=1&ec=wgc-drive-[module]-goto",
  },
  {
    id: 2,
    semester: "Semester 2",
    subjects:
      "Discrete Structure, Object Oriented Programming, Microprocessor, Mathematics II, Statistics I",
    icon: "FileText",
    bgColor: "bg-green-normal",
    iconColor: "text-green-normal",
    driveUrl: "YOUR_SEMESTER_2_DRIVE_URL",
  },
  {
    id: 3,
    semester: "Semester 3",
    subjects:
      "Data Structures and Algorithms, Numerical Method, Computer Architecture, Computer Graphics, Statistics II",
    icon: "Code",
    bgColor: "bg-purple-normal",
    iconColor: "text-green-normal",
    driveUrl: "YOUR_SEMESTER_3_DRIVE_URL",
  },
  {
    id: 4,
    semester: "Semester 4",
    subjects:
      "Theory of Computation, Computer Networks, Operating Systems, Database Management System, Artificial Intelligence",
    icon: "Database",
    bgColor: "bg-orange-normal",
    iconColor: "text-orange-normal",
    driveUrl: "YOUR_SEMESTER_4_DRIVE_URL",
  },
  {
    id: 5,
    semester: "Semester 5",
    subjects:
      "Design and Analysis of Algorithms, System Analysis and Design, Cryptography, Simulation and Modeling, Web Technology",
    icon: "Monitor",
    bgColor: "bg-green-normal",
    iconColor: "text-green-normal",
    driveUrl: "YOUR_SEMESTER_5_DRIVE_URL",
  },
  {
    id: 6,
    semester: "Semester 6",
    subjects:
      "Software Engineering, Compiler Design and Construction, E-Governance, NET Centric Computing, Technical Writing",
    icon: "Brain",
    bgColor: "bg-pink-normal",
    iconColor: "text-pink-normal",
    driveUrl: "YOUR_SEMESTER_6_DRIVE_URL",
  },
  {
    id: 7,
    semester: "Semester 7",
    subjects:
      "Advanced Java Programming, Data Warehousing and Data Mining, Principles of Management, Project Work",
    icon: "Globe",
    bgColor: "bg-purple-dark",
    iconColor: "text-purple-dark",
    driveUrl: "YOUR_SEMESTER_7_DRIVE_URL",
  },
  {
    id: 8,
    semester: "Semester 8",
    subjects: "Advanced Database, Internship",
    icon: "GraduationCap",
    bgColor: "bg-blue-normal",
    iconColor: "text-blue-normal",
    driveUrl: "YOUR_SEMESTER_8_DRIVE_URL",
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
      <section className="mt-10 mb-10">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-5 bg-[#E0EDFD]  p-4 ">
              <div className="rounded-lg  w-fit p-2  bg-[#99B9D7] ">
                <span className="text-blue-600 font-bold">
                  E-Learning Platfom
                </span>
              </div>
              <div>
                <span className="text-5xl font-bold text-blue">BSc.CSIT</span>
              </div>
              <div className="w-full">
                <p className="max-w-100 text-sm md:text-lg text-text-ash">
                  Access your semester-wise notes, resources and study
                  materials. Click on any semester to open the respective folder
                  in Google Drive.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-1 w-fit p-3 bg-text-blue text-white font-bold">
                Open in Google Drive
              </div>
            </div>

            <div className=" flex flex-col gap-5 p-3 bg-blue-140 ">
              <h1 className="text-4xl text-shadow-blue-700 ">
                Join Our premium Plan
              </h1>
              <ul className="list-disc pl-6 text-[#] max-w-160 space-y-2 italic ">
                <li>
                  <span className="font-bold text-blue-600">
                    TU Syllabus Mastery:{" "}
                  </span>
                  <span className="font-bold text-text-ash">
                    Semester-wise live tutoring, notes, lab sheets, and solved
                    past questions.
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
              <div className="flex">
                <div className=" rounded-xl w-fit p-2 bg-blue-200 ">
                  <a
                    href="https://wa.me/9761807892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <FaWhatsapp size={28} fill="green" />
                    <span className="font-bold text-sm">
                      Contact us on WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-amber-300">
            
            <Image
              src="/study_materials.jpg"
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
            <span className="text-text-ash text-lg">
              Choose your semesters to view notes and study materials
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 p-4 bg-gray-200">
            {semesters.map((semester) => (
              <SemesterCard key={semester.id} semester={semester} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
