import { ProjectPageData } from "@/types/projects";
import ProjectsBanner from "./ProjectsBanner";
import ServiceListBanner from "./ProjectsListBlock";
import ProjectsItemsBlocks from "./ProjectsItemsBlocks";
import { getProjects } from "@/lib/wordpress/projects";


type Props = {
    data: ProjectPageData;
};



export default async function Projects({ data }: Props) {
    const projects = await getProjects();
    return (
        <>
            <ProjectsBanner data={data.service_banner_block} />
            <ServiceListBanner data={data.service_list_block} />
            <ProjectsItemsBlocks data={projects} />
        </>
    );
}