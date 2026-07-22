import { getHomePage } from "@/lib/wordpress/home";

import Hero from "@/components/home/Hero";
import PartnerBlock from "@/components/home/Partners";
import AboutBlock from "@/components/home/About";
import ProjectsBlock from "@/components/home/Works";
import PerfomanceBlock from "@/components/home/Perfomance";
import ServicesBlock from "@/components/home/Services";
import ProcessBlock from "@/components/home/Process";
import TestimonialBlock from "@/components/home/Testimonials";
import InsightsBlock from "@/components/home/Insights";

export default async function HomePage() {

    const home = await getHomePage();
    const heroBanner = home.acf.home_banner_block_source.formatted_value;
    const partnerblock = home.acf.partners_block_source.formatted_value;
    const aboutBlock = home.acf.about_brimbus_block_source.formatted_value;
    const projectsBlock = home.acf.our_works_block;
    const countersBlock = home.acf.perfomance_block_source.formatted_value;
    const servicesBlock = home.acf.our_service_block;
    const processsBlock = home.acf.process_block_source.formatted_value;
    const testimonialBlock = home.acf.testimonials_block_source.formatted_value;
    const insightsBlock = home.acf.insighs_block;
    return (
        <>
            <Hero data={heroBanner} />
            <PartnerBlock data={partnerblock} />
            <AboutBlock data={aboutBlock} />
            <ProjectsBlock data={projectsBlock} />
            <PerfomanceBlock data={countersBlock} />
            <ServicesBlock data={servicesBlock} />
            <ProcessBlock data={processsBlock} />
            <TestimonialBlock data={testimonialBlock} />
            <InsightsBlock data={insightsBlock} />
        </>
    );
}

