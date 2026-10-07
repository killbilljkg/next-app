import AddressSection from "./Address/AddressSection";
import ContactEnquiries from "./ContactEnquiries/ContactEnquiries";
import ContactForm from "./Form/ContactForm";
import ContactHero from "./Hero/ContactHero";

export default function Contact() {
  return (
    <>
    <ContactHero />
    <ContactForm />
    <ContactEnquiries />
    <AddressSection />
    </>
  );
}
