import { Section } from "./ui/section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import img from "/public/how-we-work.jpeg";
export function HowWeWork() {
  return (
    <Section containerClassName="flex flex-col items-center lg:flex-row justify-evenly gap-20 lg:gap-10 py-20">
      <div className="space-y-6 shrink-0 text-center lg:text-left">
        <span className="capitalize text-sm bg-blue-300 text-white px-3 py-1 rounded-full">
          How we work
        </span>
        <h2 className="text-3xl font-semibold font-fredoka text-yellow-400 capitalize">
          Our impact
        </h2>
        <p className="lg:max-w-md text-neutral-700 text-lg text-justify">
          Learning Matters, Inc. is a full-service educational provider of
          individualized tutoring, small group tutoring, enrichment programs,
          and educational planning consultations. We tutor
          kindergarten-through-college students in all academic subjects. To
          advance educational achievement and make academic success accessible
          to all students, we provide services in a range of settings.
        </p>
        <Button
          className="bg-lime-500 hover:bg-lime-500/90 rounded-full"
          asChild
        >
          <Link href="/">
            Learn More
            <ChevronRight aria-hidden />
          </Link>
        </Button>
      </div>
      <div className="relative lg:max-w-md">
        <div className="hidden lg:block absolute inset-0 bg-lime-100 rounded-xl rotate-12 shadow-md"></div>
        <div className="hidden lg:block absolute inset-0 bg-blue-100 rounded-xl rotate-6 shadow-md"></div>
        <Image
          src={img}
          alt=""
          className="relative h-full object-cover rounded-xl shadow-md"
        />
      </div>
    </Section>
  );
}
