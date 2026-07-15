import Link from "next/link";
import Image from "next/image";
import type { Button, SiteLogo } from "@/types/global";
import ThemeButton from "./ThemeButton";
import { useSplitText } from "../../hooks/useSplitText";
import { useEffect, useRef, useState } from "react";
type Props = {
  data: {
    site_logo: SiteLogo;
    site_header_button: Button;
  };
};
export default function Header({ data }: Props) {
    useSplitText();
    const headerRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const handleScroll = () => {
        if (!headerRef.current) return;

        if (window.scrollY > 50) {
            headerRef.current.classList.add("sticky");
        } else {
            headerRef.current.classList.remove("sticky");
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
    <header ref={headerRef} className={`site_header transition-all ${menuOpen ? "active" : ""}`}>
        <div
            className="container_wrapper header_wrapper md:!px-6 !py-3 mt-4 md:mt-6 bg-[#FFFFFF] rounded-full flex items-center justify-between">
            <div className="theme_logo">
                <Link href="index.html">
                <Image
                    src={data.site_logo.url}
                    alt={data.site_logo.alt}
                    width={150}
                    height={50}
                    />
                </Link>
            </div>
            <div id="mobile-menu" className={`nav_list_wrapper ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">Home</Link>
                    </li>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">About Us</Link>
                    </li>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">Services</Link>
                    </li>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">Projects</Link>
                    </li>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/" text-split="true" letters-slide-up="true">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="btn_wrapper">
                <ThemeButton href="{data.site_header_button.url}" className="theme_button theme_button_yellow bg-[#FFCC03]">
                    <span className="button__spotlight"></span>
                    <span className="button__text text-[#111111]">
                        {data.site_header_button.title}
                    </span>
                </ThemeButton>
            </div>
            <div className="nav_list__mobile_btn lg:hidden ">
                <button
                    id="menu-toggle"
                    className={`menu-btn cursor-pointer grid h-12 w-12 place-items-center bg-[#FFCC03] rounded-full bg-sun lg:hidden ${menuOpen ? "active" : ""}`}
                    type="button"
                    aria-label="Open menu"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                    >
                    <span className="flex flex-col gap-1.25" aria-hidden="true">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </span>
                </button>
            </div>
        </div>
    </header>
    );
}