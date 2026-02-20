import { useState } from "react";
import Swal from "sweetalert2";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "+971",
    phone_no: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 20);
    setFormData((prev) => ({ ...prev, phone_no: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      country_code: "+971",
      phone_no: "",
      message: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "We’ve received your message and will get back to you shortly.",
        confirmButtonText: "OK",
      });

      resetForm();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <ContactHero />

      {/* Contact Details + Message */}
      <section className="py-12 md:py-20 bg-white">
        <div className="px-4 mx-auto max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            {/* Contact details + copy */}
            <ContactInfo
              email="contact@digientttechnologies.com"
              phone="+971 542806708"
            />

            {/* Contact form */}
            <ContactForm
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              onChange={handleChange}
              onPhoneChange={handlePhoneInput}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsPage;


