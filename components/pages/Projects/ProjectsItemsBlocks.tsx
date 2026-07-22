import ProjectCard from "@/components/common/ProjectCard";
import { ProjectItem } from "@/types/home";
type Props = {
  data: ProjectItem[];
};

export default function ProjectsListBanner({ data }: Props) {
  return (
    <section className="projects_listing">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}