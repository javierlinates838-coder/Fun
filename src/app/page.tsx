import { About, Contact, Hero, Process, Services } from "@/components/home-sections";
import { SelectedWork } from "@/components/selected-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
