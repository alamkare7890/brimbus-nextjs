import AboutBanner from "./AboutBanner";
import AboutOverview from "./AboutOverview";
import AboutSuccessStories from "./AboutSuccessStories";
import AboutServices from "./AboutServices";
import { AboutPageData } from "@/types/about";
type Props = {
  data: AboutPageData;
};
import { getHomePage } from "@/lib/wordpress/home";
import PartnerBlock from "@/components/home/Partners";



export default async function About({ data }: Props) {
  const home = await getHomePage();
  const partnerblock = home.acf.partners_block_source.formatted_value;
  return (
    <>
      <AboutBanner data={data.about_banner_block} />
      <AboutOverview data={data.about_overview_block} />
      <PartnerBlock data={partnerblock} />
      <AboutSuccessStories data={data.about_success_stories_block} />
      <AboutServices data={data.about_we_serve_block} />
    </>
  );
}