import { BookOpen, GraduationCap, Lightbulb, UserRoundGroup } from "lucide-react";
import { ReactNode } from "react";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  iconBgcolor:string;
  bgColor:string;
};

const iconMap={
    BookOpen,
    UserRoundGroup,
    Lightbulb,
    GraduationCap,
}

export default function FeatureCard({
  icon,
  title,
  description,
  iconBgcolor,
  bgColor,
}: FeatureCardProps) {

    const Icon=iconMap[icon as keyof typeof iconMap];
  return (
    <section>
      <div className={`${bgColor} flex flex-col  border-gray-200 gap-4 p-4 hover:scale-105 transition:smooth duration-300 rounded-xl`}>
        {/* Card */}

            <Icon size={60} className={`${iconBgcolor} rounded-full p-2 text-white` }/> 
        
        <div className='flex flex-col gap-2'>
            <span className='text-xl font-bold'>{title}</span>
            <span className='text-text-ash'>{description}</span>
        </div>
      </div>
    </section>
  );
}
