export interface Button {
  title: string;
  url: string;
  target: string;
}

export interface SiteLogo {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
}

export interface CTAGroup {
  heading: string;
  button: Button;
}

export interface SocialItem {
  social_icon: Image;
  social_links: Button;
}

export interface SocialMediaGroup {
  heading: string;
  social_list: SocialItem[];
}

export interface SiteOptions {
  cta_group: CTAGroup;
  site_header_button: Button;
  site_logo: Image;
  social_media_group: SocialMediaGroup;
}