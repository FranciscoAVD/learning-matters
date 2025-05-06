import { Feature } from "@/components/feature";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <Services />
        <Feature />
      </main>
      <Footer />
    </>
  );
}
