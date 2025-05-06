import { Card, CardContent } from "./ui/card";
import { Section } from "./ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PencilRuler, TrendingUp, Lightbulb, Users } from "lucide-react";
import bg from "/public/services-bg.jpg";
import Image from "next/image";
const services = [
  {
    title: "Core Subject Tutoring",
    href: "/",
    bg: "bg-lime-50",
    card: "bg-lime-300",
    text: "text-lime-500",
    primary: "bg-lime-500",
    border: "border-lime-500",
    description:
      "We offer tutoring in all core subjects from Kindergarten through 12th grade and beyond.",
    icon: PencilRuler,
  },
  {
    title: "Academic Coaching",
    href: "/",
    bg: "bg-yellow-50",
    card: "bg-yellow-300",
    primary: "bg-yellow-500",
    text: "text-yellow-500",
    border: "border-yellow-500",
    description:
      "We strive to empower each student to achieve his or her academic and personal potential.",
    icon: TrendingUp,
  },
  {
    title: "Enrichment Programs",
    href: "/",
    bg: "bg-violet-50",
    card: "bg-violet-300",
    primary: "bg-violet-500",
    text: "text-violet-500",
    border: "border-violet-500",
    description:
      "We empower students to achieve success both inside and outside of the classroom.",
    icon: Lightbulb,
  },
  {
    title: "Parent Services",
    href: "/",
    bg: "bg-blue-50",
    card: "bg-blue-300",
    primary: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-500",
    description:
      "Our parents appreciate the wide array of support and services offered to them.",
    icon: Users,
  },
];
export function Services() {
  return (
    <Section className="relative  py-20">
      <div className="absolute inset-0">
        <Image src={bg} alt="" className="h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/90 to-white overflow-hidden"></div>
      </div>
      <div className="relative space-y-6 text-center">
        <span className="capitalize text-sm bg-blue-300 text-white px-3 py-1 rounded-full">
          What we offer
        </span>
        <h2 className="mb-4 text-3xl text-yellow-500 font-semibold font-fredoka">
          Our Services
        </h2>

        <p className="max-w-lg text-lg text-center mx-auto text-neutral-700">
          Our team of skilled tutors works with each student to determine an
          individualized evaluation of each student’s strengths and weaknesses,
          and then tailors a unique program to address specific needs and
          objectives in order to achieve the greatest level of learning success!
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <Card key={idx} className={`relative p-0 group`}>
              <div
                className={`absolute inset-0 border-2 ${s.border} rounded-xl ${s.card} group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all`}
              />
              <CardContent
                className={`relative flex flex-col h-full py-6 ${s.bg} border-2 ${s.border} rounded-xl`}
              >
                <div
                  className={`mx-auto flex items-center justify-center size-12 ${s.primary} rounded-full`}
                >
                  <s.icon className="text-white" />
                </div>
                <p
                  className={`mt-2 mb-4 font-fredoka text-xl text-center font-semibold ${s.text}`}
                >
                  {s.title}
                </p>
                <p className="mb-6 text-neutral-700 text-center">
                  {s.description}
                </p>
                <Button
                  className={`mt-auto ${s.primary} hover:${s.primary}/90 rounded-full`}
                  asChild
                >
                  <Link href={s.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
