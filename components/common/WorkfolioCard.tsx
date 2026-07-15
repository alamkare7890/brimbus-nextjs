import Image from "next/image";
import type { BannerSlider } from "@/types/home";

type Props = {
  image: BannerSlider;
};

export default function WorkfolioCard({ image }: Props) {
  return (
    <div className="workfolio_box">
      <Image
        src={image.url}
        alt={image.alt || image.title}
        width={image.width}
        height={image.height}
        className="w-full h-auto"
      />
    </div>
  );
}