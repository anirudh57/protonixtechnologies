import { useState } from "react";
import Swal from "sweetalert2";

interface QuoteDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    btnLabel: string;
}

interface Country {
    name: string;
    code: string;
}

// Static country codes - no API calls
export const staticCountries: Country[] = [
    { name: "United Arab Emirates", code: "+971" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "India", code: "+91" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Japan", code: "+81" },
    { name: "China", code: "+86" },
];

function QuoteDrawer({ isOpen, onClose, title, btnLabel }: QuoteDrawerProps) {
    console.log(title);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country_code: "+971",
        phone_no: "",
        website: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            country_code: "+971",
            phone_no: "",
            website: "",
            message: "",
        });
        setErrors({});
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        // Static form submission - just show success message
        // In a real static site, you might want to use a form service like Formspree
        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1000));

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Your message has been received. We will get back to you soon!",
                confirmButtonText: "OK",
            });

            resetForm();
            onClose();
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

    if (!isOpen) return null;

    const handleBackdropClick = () => {
        resetForm();
        onClose();
    };

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 z-40 flex justify-end bg-black/40"
            onClick={handleBackdropClick}
        >
            <div
                id="drawer-navigation"
                className="drawer w-full sm:w-[25%] h-screen p-0 overflow-y-auto transition-transform transform translate-x-0 bg-white relative"
                tabIndex={-1}
                onClick={stopPropagation}
            >
                <div className="px-4 py-6 my-auto py-auto text-center mx-auto w-[100%] bg-dg-dark">
                    <span className="text-3xl py-auto font-light text-center my-auto text-dg-light">
                        {title}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className="py-4 px-8 overflow-y-auto">
                    <p className="mx-auto text-center text-base text-dg-dark my-8">
                        Tell us what you need, and we'll craft a quote that's as
                        unique as your idea. It's that simple!
                    </p>

                    <form id="contact_form_header" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="mb- col-span-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    maxLength={40}
                                    className="block w-full p-4 text-dg-dark border border-dg-outline text-base focus:ring-dg-blue focus:border-dg-blue"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <span className="input-error text-red-600">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            <div className="mb- col-span-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="block w-full p-4 text-dg-dark border border-dg-outline text-base focus:ring-dg-blue focus:border-dg-blue"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <span className="input-error text-red-600">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <div className="mb- col-span-2 md:col-span-1">
                                <select
                                    id="countries"
                                    name="country_code"
                                    className="mb-5 lg:mb-0 border border-dg-outline text-[#777777] focus:ring-dg-blue focus:border-dg-blue block w-full p-4"
                                    required
                                    value={formData.country_code}
                                    onChange={handleChange}
                                >
                                    {staticCountries.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.code}
                                        >
                                            {country.name} ({country.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb- col-span-2 md:col-span-1">
                                <input
                                    type="number"
                                    id="phone_no"
                                    name="phone_no"
                                    maxLength={20}
                                    placeholder="Phone"
                                    className="lg:mb-0 block w-full p-4 border border-dg-outline text-base focus:ring-dg-blue focus:border-dg-blue"
                                    required
                                    value={formData.phone_no}
                                    onChange={handlePhoneInput}
                                />
                                {errors.phone_no && (
                                    <span className="input-error mb-5 text-red-600">
                                        {errors.phone_no}
                                    </span>
                                )}
                            </div>

                            <div className="mb- col-span-2">
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    placeholder="Organization Website (optional)"
                                    className="block w-full p-4 text-dg-dark border border-dg-outline text-base focus:ring-dg-blue focus:border-dg-blue"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                                {errors.website && (
                                    <span className="input-error text-red-600">
                                        {errors.website}
                                    </span>
                                )}
                            </div>

                            <div className="mb- col-span-2">
                                <textarea
                                    id="message"
                                    rows={2}
                                    name="message"
                                    placeholder="Message"
                                    className="block p-4 w-full text-dg-dark rounded-none border border-dg-outline focus:dg-blue focus:dg-blue"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && (
                                    <span className="input-error text-red-600">
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <div className="col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    id="quote-form-submit"
                                    className="inline-flex items-center justify-center bg-blue-500  px-8 py-3 text-sm font-medium text-white"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : btnLabel}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="py-4 px-8">
                    <hr />
                </div>

                <div className="py-4 px-8">
                    <div className="flex sm:justify-center gap-10 my-auto">
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/fb.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"
                                title="Facebook"
                            />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/ig.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"
                                title="instagram.com"
                            />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/in.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"
                                title="#"
                            />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/yt.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"
                                title="#"
                            />
                            <span className="sr-only">YouTube</span>
                        </a>
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/pt.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"
                                title="#"
                            />
                            <span className="sr-only">Pinterest</span>
                        </a>
                        <a
                            href="#"
                            className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto"
                            rel="nofollow"
                        >
                            <img
                                src="/icons/dark/be.png"
                                height="auto"
                                width="auto"
                                loading="lazy"
                                alt="digient-social-media"

                            />
                            <span className="sr-only">Behance</span>
                        </a>
                    </div>
                </div>

                <div className="py-4 px-8 text-center text-dg-dark hover:underline">
                    <a
                        href="https://maps.app.goo.gl/knAGErq6ruUb82xL7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Meydan Grandstand - 6th floor Meydan Road Nad Al Sheba, P.O Box 242986, Dubai
                    </a>
                </div>

                <div className="py-4 px-8 text-center text-dg-dark hover:underline">
                    <a href="mailto:contact@digientttechnologies.com">
                        contact@digientttechnologies.com
                    </a>
                </div>

                <div className="py-4 px-8 text-center text-dg-dark hover:underline">
                    <a href="tel:+9710542806708">+971 542806708</a>
                </div>
            </div>
        </div>
    );
}

export default QuoteDrawer;

