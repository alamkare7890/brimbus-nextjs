import { getHomePage } from "@/lib/wordpress/home";

import Hero from "@/components/home/Hero";
import PartnerBlock from "@/components/home/Partners";
import AboutBlock from "@/components/home/About";
import ProjectsBlock from "@/components/home/Works";
import PerfomanceBlock from "@/components/home/Perfomance";

export default async function HomePage() {

    const home = await getHomePage();
    const heroBanner = home.acf.home_banner_block_source.formatted_value;
    const partnerblock = home.acf.partners_block_source.formatted_value;
    const aboutBlock = home.acf.about_brimbus_block_source.formatted_value;
    const projectsBlock = home.acf.our_works_block_source.formatted_value;
    const countersBlock = home.acf.perfomance_block_source.formatted_value;
    return (
        <>
            <Hero data={heroBanner} />
            <PartnerBlock data={partnerblock} />
            <AboutBlock data={aboutBlock} />
            <ProjectsBlock data={projectsBlock} />
            <PerfomanceBlock data={countersBlock} />
        </>
    );
}

