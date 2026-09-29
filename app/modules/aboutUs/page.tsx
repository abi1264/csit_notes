import Container from "@/app/components/shared/Container";
import Footer from "@/app/components/shared/Footer";
import Header from "@/app/components/shared/Header";
import FeatureCard from "@/app/components/UI/featureCard";
import ProfileCard from "@/app/components/UI/profileCard";
import { Eye } from "lucide-react";
import Image from "next/image";

const profiles = [
  {
    name: "Abishek Thapa",
    title: "Founder & Educator",
    description: "Academician & Researcher with professional teaching experience",
    image: "/abishek.jpg",
    linkedin: "https://www.linkedin.com/in/abishek-thapa-935502254/",
  },
  {
    name: "Avisheak Shrestha",
    title: "Software Engineer",
    description: "Hand on complex projects includeing AI",
    image: "/man.jpg",
    linkedin: "https://www.linkedin.com/in/avisheak-shrestha/",
  },
  {
    name: "Rushan Buyo ",
    title: "Software Engineer",
    description: "Professional Software Engineer and Project Manager.",
    image: "/rushan.jpg",
    linkedin: "https://www.linkedin.com/in/rushan-buyo-0a5221294/",
  },
  {
    name: "krish",
    title: "Full Stack Developer",
    description: "Software Developer with hands on experience in commercial projects",
    image: "/krish.jpg",
    linkedin: "https://www.linkedin.com/in/krish-sitikhu-905b55293/",
  },
];

const features=[
  {
    icon:"BookOpen",
    title:"Learning Resources",
    description:"Notes, question papers, lab materials and other study resources ",
    iconBgcolor:"bg-blue-500",
    bgColor:"bg-[#F1F6FD]",
  },
  {
    icon:"GraduationCap",
    title:"Semester-wise Learning",
    description:"Notes, question papers, lab materials and other study resources ",
    iconBgcolor:"bg-green-500",
    bgColor:"bg-[#EEFAF6]",
  },
  {
    icon:"Lightbulb",
    title:"Academic Guidance",
    description:"Notes, question papers, lab materials and other study resources ",
    iconBgcolor:"bg-purple-500",
    bgColor:"bg-[#F3F2FD]",
  },
  {
    icon:"UserRoundGroup",
    title:"Community",
    description:"Notes, question papers, lab materials and other study resources ",
    iconBgcolor:"bg-orange-500",
    bgColor:"bg-[#F3F2FD]",
  },
  
]

export default function AboutUsPage() {
  return (
    <Container>
      <Header />
      {/* top section  */}
      <section className="mt-10 mb-10 w-full">
        <div className="flex flex-col md:flex-row justify-between  bg-[#E9F1FC]">
          <div className="flex flex-col gap-3 p-5">
            <span className="uppercase text-blue-500 font-bold w-fit">
              About us
            </span>
            <p className="text-3xl  max-w-120 font-bold">
              Making BSc.CSIT Learning Simpler, Smarter and More Accessible.
            </p>
            <p className="max-w-100 text-text-ash">
              We are a team of students, educators and technology enthusiasts
              building to bring quality learning resources, academic support and
              guidance together in one place - for every BSc.CSIT student.
            </p>
          </div>
          <div>
            <Image
              src="/flat_image.jpg"
              alt="About us logo"
              height={600}
              width={500}
              className='h-75 w-200 '
            />
          </div>
        </div>

        {/* Mid Section */}
         <div className="bg-[#F3F8FE] mt-10">
          <div className="flex flex-col gap-1 items-center p-4 bg-white">
            <span className="uppercase text-blue-500 font-bold">what we prove</span>
            <span className="text-2xl font-bold">
              {" "}
             Everything You Need, In One Place
            </span>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-white">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgcolor={feature.iconBgcolor}
                bgColor={feature.bgColor}
                
              />
            ))}
          </div>
        </div>
        {/* Mid Section finished */}


        <div className="bg-[#F3F8FE]">
          <div className="flex flex-col gap-1  items-center p-5">
            <span className="uppercase text-blue-500 font-bold">our team</span>
            <span className="text-2xl font-bold">
              {" "}
              Meet the People Behind This Initiative
            </span>
            <span className="text-text-ash ">
              A passionate team working to make BSc.CSIT learning better for
              you.
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 ">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.name}
                name={profile.name}
                title={profile.title}
                description={profile.description}
                image={profile.image}
                linkedin={profile.linkedin}
              />
            ))}
          </div>
        </div>

        {/* Below section */}
        <div className=" flex justify-betwen p-6 gap-10">
          <div className='flex flex-col md:flex-row'>
          <div className=" h-fit">
            <Image
              src="/sitting_man.jpg"
              alt="sitting man"
              height={600}
              width={500}
              className="h-70 w-300"
            />
          </div>

          {/* why Started */}
          <div className='flex flex-col md:flex-row'>
          <div className="flex flex-col gap-3 p-4">
            <span className="text-blue-500 font-bold uppercase">why we started</span>
            <span className="text-black font-bold text-xl">
              A Problem We Wanted to Solve
            </span>

            <p className="text-text-ash">
              BSc.CSIT students often have to search across different sources
              for notes,practical materials,past questions, and guidance. We
              wanted to bring these resources together into a single, organized
              platform.
            </p>
            <div className="flex gap-3  items-center ">
              <div className="rounded-lg h-20"></div>
              <div className="italic text-bold text-md font-bold">
                "Learning should be easier to access and easier to navigate"
              </div>
            </div>
          </div>

          {/* VISION */}
          <div className="flex gap-1 bg-[#F3F2FD] p-4 rounded-lg">
            <div className=" h-fit rounded-full ">
              <Eye
                size={50}
                className="text-[#2D427E] bg-[#DEDBFD] rounded-full p-1"
              />
            </div>

            <div className="flex flex-col gap-4  p-2">
              <span className="uppercase font-bold text-sm text-blue-700">
                our vision
              </span>
              <span className="text-xl font-bold">
                A Stronger Learning Ecosystem
              </span>
              <p className="text-text-ash">
                To build a reliable learning ecosystem where every BSc.CSIT
                student can easily find the resources and guidance they need
                throughout their academic journey.
              </p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}
