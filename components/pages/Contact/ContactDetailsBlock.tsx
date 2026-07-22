import { ContactDetailsBlock } from "@/types/contact";
import Image from "next/image";
import ContactForm from "./ContactForm";
type Props = {
  data: ContactDetailsBlock;
};

export default function ContactDetails({ data }: Props) {
  return (
    <section className="py-16 sm:py-20 md:pt-24 pb-0 lg:py-32 bg-[#FBF9EF]">
      <div className="container_wrapper">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              {data.contact_info_list.map((office, index) => (
                <div
                  key={index}
                  className="info_box mb-8 py-4 border-b border-[#28282932]"
                >
                  <h3 className="text-2xl md:text-3xl font-medium uppercase mb-8">
                    {office.heading}
                  </h3>

                  <ul className="space-y-5 my-5">
                    {office.contact_info_details_list.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div
                            className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0">
                             <Image
                                src={item.icon.url}
                                alt={item.link.title}
                                width={24}
                                height={24}
                                />
                        </div>
                        <a
                          href={item.link.url}
                          target={item.link.target || "_self"}
                          className="text-base text-[#282829] hover:text-black transition"
                        >
                          {item.link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="social_media_box">
                <ul className="flex items-center gap-3 mt-6">
                  {data.social_media_list.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link.url}
                        target={social.link.target || "_self"}
                        className="group !flex h-12 w-12 items-center justify-center rounded-full border border-[#28282932] transition-all duration-300 hover:bg-black"
                        aria-label={social.link.title}
                      >
                        <Image
                            src={social.icon.url}
                            alt={social.link.title}
                            width={24}
                            height={24}
                            />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm mt-6">
                Contact us for Graphics designing work
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="contact_form lg:sticky lg:top-20 lg:self-start">
            {/* Contact Form */}
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}