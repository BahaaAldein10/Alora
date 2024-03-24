import Header from "@/components/shared/Header";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";
import { contacts } from "@/constants";
import Image from "next/image";

function Contact() {
  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <Header />

      <div className="container mt-10">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Contact" subTitle="Us" />

        {/* =======| GRID |======= */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <div className="p-10 w-[90%] h-[500px] text-white bg-gradient-to-r from-primary to-[#ff4d73] rounded-2xl">
            <h1 className="text-2">Contact Information</h1>
            <h2 className="mt-2 text-1">
              Have questions about our products or your order? We&apos;re here
              to help! Feel free to reach out to us using the following contact
              details
            </h2>

            <ul className="flex flex-col gap-10 mt-10">
              {contacts.map((contact, index) => (
                <li
                  key={`contact-${index}`}
                  className="flex items-center gap-5"
                >
                  <div>
                    <Image
                      src={contact.image}
                      alt={contact.name}
                      width={30}
                      height={30}
                    />
                  </div>

                  <h1 className="text-1">{contact.text}</h1>
                </li>
              ))}
            </ul>
          </div>

          <form action="#" className="p-10 h-[500px]">
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="input-data">
                <input type="text" required />
                <div className="underline" />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="input-data">
                <input type="text" required />
                <div className="underline" />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            <div className="input-data mb-10">
              <input type="text" required />
              <div className="underline" />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="input-data textarea mb-10">
              <textarea rows={8} cols={80} required />
              <div className="underline" />
              <label htmlFor="message">Write your message</label>
            </div>

            <div className="">
              <Button className="">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
