import AboutBanner from "./AboutBanner";


export default function About({ data }) {
  return (
    <>
      <AboutBanner data={data.about_banner_block} />
    </>
  );
}