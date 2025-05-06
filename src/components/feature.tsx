import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
const location =
  "https://www.google.com/maps/place/9555+SW+175th+Terrace,+Palmetto+Bay,+FL+33157,+USA/@25.6071043,-80.3497759,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9c41445920073:0x1b19d098dcc14688!8m2!3d25.6070995!4d-80.3471956!16s%2Fg%2F11dzmy6bl4?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D";
const highlights = [
  "Led by a certified teacher & reading specialist.",
  "Literacy games, digital storytelling, comic strips and more!",
  "Flexible scheduling. Come when it works for you.",
  "Affordable pricing!",
];
export function Feature() {
  return (
    <Section className="py-20 bg-gradient-to-r from-[#2563EB] to-[#10B981] text-white">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="inline-block bg-white/20 rounded-lg px-4 py-2 mb-4">
            <span className="text-white font-semibold">Summer Camp</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-fredoka font-semibold mb-4">
            Page Turners 2025
          </h2>
          <p className="text-lg mb-6 text-white/90 text-justify">
            Don't let the summer slide affect your child's academic progress.
            Join our comprehensive summer camp designed to keep students engaged
            with learning while having fun!
          </p>
          <ul className="space-y-4 mb-8">
            {highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                  <Check className="size-4" aria-hidden />
                </div>
                <span className="text-white">{h}</span>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="capitalize">
            Reserve a spot
          </Button>
        </div>
        <Details />
      </div>
    </Section>
  );
}

function Details() {
  return (
    <Card className="md:w-1/2">
      <CardHeader>
        <CardTitle className="text-2xl font-fredoka text-blue-500">
          Camp Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <div className="flex gap-4">
            <div className="min-w-[100px] font-semibold text-blue-500">
              Dates:
            </div>
            <div className="text-neutral-700">June 16 - August 1, 2025</div>
          </div>
          <div className="flex gap-4">
            <div className="min-w-[100px] font-semibold text-blue-500">
              Times:
            </div>
            <div className="text-gray-700">Monday-Friday, 9 AM - 1 PM</div>
          </div>
          <div className="flex gap-4">
            <div className="min-w-[100px] font-semibold text-blue-500">
              Ages:
            </div>
            <div className="text-gray-700">11 - 13 years old</div>
          </div>
          <div className="flex gap-4">
            <div className="min-w-[100px] font-semibold text-blue-500 ">
              Location:
            </div>
            <div className="text-gray-700">
              {" "}
              <Link
                href={location}
                target="_blank"
                className="underline text-blue-400"
              >
                9555 SW 175 Terrace, Palmetto Bay, FL, 33157
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="min-w-[100px] font-semibold text-blue-500 ">
              Fee:
            </div>
            <div className="text-gray-700">
              $100/day or $300/week
              <p className="text-sm text-blue-500 mt-1">
                Sibling discount available
              </p>
            </div>
          </div>
        </ul>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-fredoka font-semibold mb-2 text-blue-500">
            What to bring:
          </h4>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Lunch and snacks</li>
            <li>Water bottle</li>
            <li>Notebook and pencils</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
