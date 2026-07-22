export interface Button {
  title: string;
  url: string;
  target: string;
}
export interface ContactBannerBlock {
  heading: string;
  description: string;
  button: Button;
}

export interface ContactInfoDetail {
  icon: {
    url: string;
  };
  link: Button;
}

export interface ContactInfo {
  heading: string;
  contact_info_details_list: ContactInfoDetail[];
}

export interface SocialMedia {
  icon: {
    url: string;
  };
  link: Button;
}

export interface ContactDetailsBlock {
  contact_info_list: ContactInfo[];
  social_media_list: SocialMedia[];
}
export interface ContactPageData {
  contact_banner_block: ContactBannerBlock;
  contact_details_block: ContactDetailsBlock;
}
