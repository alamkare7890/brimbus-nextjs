
type Props = {
  data: {
    heading: string;
    background_image: string;
  };
};

export default function AboutBanner({ data }: Props) {
  return (
    <section
      className="about_banner overlay relative z-0 banner_overlay pt-60 pb-40 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${data.background_image})`,
      }}
    >
      <div className="container_wrapper">
        <div className="about_banner_content max-w-200">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 font-medium text-white"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        </div>
      </div>
    </section>
  );
}