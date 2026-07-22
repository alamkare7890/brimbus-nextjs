export interface Button {
  title: string;
  url: string;
  target: string;
}
export interface ProjectsBannerBlock {
  short_heading: string;
  heading: string;
  description: string;
  button: Button | "";
  banner_image: string;
  banner_video: string;
}
export interface ProjectsListBlock {
  short_heading: string;
  heading: string;
  description: string;
  button: Button;
}

export interface ProjectPageData {
  service_banner_block: ProjectsBannerBlock;
  service_list_block: ProjectsListBlock;
}