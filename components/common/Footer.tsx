import Link from "next/link";
import Image from "next/image";
import type { SocialMediaGroup, CTAGroup, SiteLogo } from "@/types/global";
import ThemeButton from "./ThemeButton";
type Props = {
  data: {
    cta_group: CTAGroup;
    site_logo: SiteLogo;
    social_media_group: SocialMediaGroup;
  };
};
export default function Footer({ data }: Props) {
  return (
    <footer className="site_footer">
        <div className="footer_b invisible">
            <Image
                src={data.cta_group.background_image.url}
                width={150}
                height={50}
                />
        </div>
        <div className="container_cover bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${data.cta_group.background_image.url})`,
                }}>
            <div className="container_wrapper bg-transparent pt-20">
                <div className="footer_cta_content text-center w-full lg:max-w-[75%] mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-white"
                    dangerouslySetInnerHTML={{ __html: data.cta_group.heading }}
                    />

                    <div className="btn_wrapper mt-6">
                        <ThemeButton href={data.cta_group.button.url} className="theme_button theme_button_dark !border-none bg-[#FFFFFF]">
                            <span className="button__spotlight"></span>
                            <span className="button__text text-[#111111]">
                                {data.cta_group.button.title}
                            </span>
                        </ThemeButton>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-32 md:mt-60  lg:mt-80 gap-12 lg:gap-9">
                    <div className="footer_box">
                        <div className="footer_heading border-b border-[#FFFFFF30] pb-4">
                            <h5 className="text-2xl font-medium text-white">Services</h5>
                        </div>
                        <div className="footer_link_wrapper">
                            <ul>
                                <li>
                                    <Link href="#">Strategy</Link>
                                </li>
                                <li>
                                    <Link href="#">Branding</Link>
                                </li>
                                <li>
                                    <Link href="#">Website</Link>
                                </li>
                                <li>
                                    <Link href="#">Social Media</Link>
                                </li>
                                <li>
                                    <Link href="#">SEO/SEM</Link>
                                </li>
                                <li>
                                    <Link href="#">Naming</Link>
                                </li>
                                <li>
                                    <Link href="#">Graphic Design</Link>
                                </li>
                                <li>
                                    <Link href="#">ECommerce</Link>
                                </li>
                                <li>
                                    <Link href="#">Packaging</Link>
                                </li>
                                <li>
                                    <Link href="#">3D Visualisation</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_box">
                        <div className="footer_heading border-b border-[#FFFFFF30] pb-4">
                            <h5 className="text-2xl font-medium text-white">Navigation</h5>
                        </div>
                        <div className="footer_link_wrapper">
                            <ul>
                                <li>
                                    <Link href="#">Home</Link>
                                </li>
                                <li>
                                    <Link href="#">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#">Expertise</Link>
                                </li>
                                <li>
                                    <Link href="#">Insights</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact</Link>
                                </li>
                                <li>
                                    <Link href="#">Works</Link>
                                </li>
                                <li>
                                    <Link href="#">FAQs</Link>
                                </li>
                                <li>
                                    <Link href="#">Career</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact</Link>
                                </li>
                                <li>
                                    <Link href="#">Our Achivements</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_box">
                        <div className="footer_heading border-b border-[#FFFFFF30] pb-4">
                            <h5 className="text-2xl font-medium text-white">{data.social_media_group.heading}</h5>
                        </div>
                        <div className="social_media_list">
                            <ul>
                                {data.social_media_group?.social_list?.map((item, index) => (
                                    <li key={index}>
                                    <Link
                                        href={item.social_links}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                        src={item.social_icon.url}
                                        alt={item.social_icon.alt || "Social Icon"}
                                        width={24}
                                        height={24}
                                        />
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t py-6 lg:py-8 border-[#FFFFFF30] relative z-1 mt-16 lg:mt-28">
                    <div className="flex flex-wrap md:flex-nowrap footer_copy_rights items-center justify-between">
                        <p>© 2026 – 2027 | Alrights reserved by Brimbus</p>
                        <div className="footer_right_link">
                            <ul>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Refund Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}