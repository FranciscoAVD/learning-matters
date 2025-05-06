"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Summer Camp", href: "/summer-camp" },
];
export function Header() {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 text-white transition-all duration-300",
        isScrolled && "bg-white text-black shadow-md",
      )}
    >
      <div className="flex items-center container mx-auto px-4 md:px-0">
        <Image src={logo} alt="Logo" className="h-20 w-auto" />
        <nav className="mx-auto hidden lg:flex items-center gap-x-4">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} className="relative group">
              {n.label}
              <div
                className={cn(
                  "absolute bottom-0 inset-x-0 h-[3px] bg-lime-500 transition-all",
                  path !== n.href && "w-0 group-hover:w-full",
                )}
                aria-hidden
              />
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger className="ml-auto lg:hidden">
            <Menu aria-hidden />
            <span className="sr-only">Open navigation menu</span>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
