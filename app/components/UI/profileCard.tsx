import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

type ProfileCardProps = {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin: string;
};

export default function ProfileCard({
  name,
  title,
  description,
  image,
  linkedin,
}: ProfileCardProps) {
  return (
    <section>
      <div className="flex flex-col  bg-white border border-gray-200 gap-4 p-4 hover:scale-105 transition:smooth duration-300 rounded-xl">
        {/* Card */}
        <div className="flex flex-col items-center gap-5 ">
          <Image
            src={image}
            alt={name}
            height={300}
            width={400}
            className="h-32 w-32 rounded-full object-cover"
          />

          <div className='flex flex-col gap-2 items-center '>
            <span className="text-2xl font-bold">{name}</span>

            <div className="text-text-ash font-bold">{title}</div>
            <span className='text-text-ash min-h-15 text-center'>{description}</span>

            <div className=''>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn Profile`}
                
              >
                <FaLinkedin size={20} className=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
