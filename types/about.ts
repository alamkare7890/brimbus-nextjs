export interface Button {
  title: string;
  url: string;
  target: string;
}
export interface AboutBannerBlock {
  heading: string;
  background_image:{
    url: string,
    alt: string;
  };
}
export interface AboutOverviewBlock {
  image: string;
  short_heading: string;
  heading: string;
  description: string;
  button: Button;
}


export interface PerformanceItem {
  counter_number: string;
  symbol: string;
  counter_title: string;
}

export interface AboutSuccessStoriesBlock {
  short_heading: string;
  heading: string;
  description: string;
  button: Button;
  perfomance_group: PerformanceItem[];
}
export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  service_image: string;
}

export interface AboutServicesBlock {
  short_heading: string;
  heading: string;
  description: string;
  button: Button;
  service_list: number[];
}
export interface AboutPageData {
  about_banner_block: AboutBannerBlock;
  about_overview_block: AboutOverviewBlock;
  about_success_stories_block : AboutSuccessStoriesBlock;
  about_we_serve_block: AboutServicesBlock;
}
