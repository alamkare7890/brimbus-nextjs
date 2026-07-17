export interface Button {
  title: string;
  url: string;
  target: string;
}

export interface BannerSlider {
  id: number;
  title: string;
  alt: string;
  url: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    medium: string;
    medium_large: string;
    large: string;
  };
}

export interface HomeBannerBlock {
  short_heading: string;
  heading: string;
  button: Button;
  banner_sliders: BannerSlider[];
}
export interface Partner {
  logo: {
    url: string;
    alt?: string;
  };
};
export interface PartnersBlock {
  heading: string,
  partners_logos: Partner[];
};

export interface AboutBlock {
  short_heading: string;
  heading: string;
  description: string;
  about_image: {
    url: string;
    alt?: string;
  };
  button: {
    title: string;
    url: string;
  };
};

export interface works_gallery {
  project: {
    post_title: string;
    post_excerpt: string;
    image: {
      url: string;
      alt?: string;
    };
    url: string;
  };
  className?: string;
};
export interface ProjectBlock {
  short_heading: string;
  heading: string;
  button: {
    title: string;
    url: string;
  };
  works_gallery: any[];
};

export interface PerfomanceGroup {
  counter_number: number;
  symbol: number;
  counter_title: string;
};

export interface PerfomanceBlock {
  short_heading: string;
  heading: string;
  perfomance_group: PerfomanceGroup[];
};

export interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
}

export interface OurProjects {
  short_heading: string;
  heading: string;
  button: {
    title: string;
    url: string;
  };
  works_gallery: number[];
}

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
}

export interface OurServices {
  short_heading: string;
  heading: string;
  button: {
    title: string;
    url: string;
  };
  service_list: number[];
}

export interface ProcessItem {
  process_title: string;
  process_sub_title: string;
  process_description: string;
}

export interface ProcessBlock {
  short_heading: string;
  heading: string;
  process_list: ProcessItem[];
}

export interface TestimonialItem {
  video_or_content_block: "Video Box" | "Content Box";

  video_file?: {
    url: string;
  };

  description?: string;

  name?: string;

  designation?: string;

  partner_logo?: {
    url: string;
    alt: string;
  };
}

export interface TestimonialBlock {
  short_heading: string;
  heading: string;
  testimonial_list: TestimonialItem[];
}

export interface BlogPosts {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  categories: [];
}

export interface OurInsights {
  short_heading: string;
  heading: string;  
  insights_list: number[];
}