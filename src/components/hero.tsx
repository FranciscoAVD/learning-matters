import { Section } from "./ui/section";
import Image from "next/image";
import bg from "/public/hero.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export function Hero() {
  return (
    <Section
      className="relative bg-gradient-to-br from-[#2563EB] to-[#10B981] overflow-hidden"
      containerClassName="pt-32 pb-58"
    >
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt=""
          className="h-full object-cover [mask-image:linear-gradient(to_bottom_right,transparent,black)]"
        />
      </div>
      <div className="relative">
        <span className="text-lime-300 capitalize">
          Perfecting student potential
        </span>
        <h1 className="mb-4 text-5xl font-semibold text-white font-fredoka uppercase">
          Learning Matters Inc.
        </h1>
        <p className="mb-6 max-w-lg text-lg text-white">
          Our team of tutors are comprised of highly skilled educators who are
          dedicated to unlocking each student’s full potential!
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-16 lg:h-20"
          style={{ fill: "white" }}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </Section>
  );
}
