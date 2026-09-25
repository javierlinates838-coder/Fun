import { About, Contact, Intro, Services } from "@/components/home-sections";
import { ProjectNotes, ProjectShow } from "@/components/project-show";
import { projects } from "@/content/projects";

export default function HomePage() {
  const [lead, ...rest] = projects;

  return (
    <>
      <div className="home-open" id="work">
        <Intro />
        {lead ? <ProjectShow project={lead} lead /> : null}
      </div>
      {lead ? <ProjectNotes project={lead} /> : null}
      {rest.map((project) => (
        <ProjectShow key={project.slug} project={project} />
      ))}
      <Services />
      <About />
      <Contact />
    </>
  );
}
