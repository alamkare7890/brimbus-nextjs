import { ContactPageData } from "@/types/contact";
import ContactBanner from "./ContactBanner";

import ContactDetailsBlock from "./ContactDetailsBlock";

type Props = {
  data: ContactPageData;
};




export default async function About({ data }: Props) {

  return (
    <>
        <ContactBanner data={data.contact_banner_block} />
        <ContactDetailsBlock data={data.contact_details_block} />
    </>
  );
}