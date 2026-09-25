import { HeroStage } from "@/components/hero-stage";
import { About, Contact, Process, Services } from "@/components/home-sections";
import { ProjectChapter } from "@/components/project-chapter";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <HeroStage />
      <div id="work">
        <ProjectChapter project={projects[0]} tone="srl" />
        <ProjectChapter project={projects[1]} tone="pc" />
      </div>
      <About />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
