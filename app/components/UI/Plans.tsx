import { Check } from "lucide-react";

type PlanProps = {
  id: number;
  title: string;
  features: string[];
};

export default function PlanCard({ id, title, features }: PlanProps) {
  return (
    <section className=" p-10 rounded-lg flex flex-col gap-4 border border-gray-300">
      <div className=" text-2xl font-bold rounded-md">{title}</div>

      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase">Features</span>
        <div className='flex flex-col gap-3'>
        {features.map((feature) => (
          <div className="flex gap-3 items-center">
            <Check className=" rounded-full w-4 h-4 sm:h-5 sm:w-5 md:h-8 md:w-8 p-1 bg-[#EBDDD3] " />

            <div key={feature} className="py-1 text-text-ash">
              {feature}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
