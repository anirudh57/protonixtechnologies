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

    const inputClass =
        "block w-full rounded-xl border border-amber-900/40 bg-[#0a0806]/60 px-4 py-3 text-[#e5e0d8] placeholder-[#e5e0d8]/50 text-base focus:border-amber-600/70 focus:ring-2 focus:ring-amber-600/20 focus:outline-none transition";

    return (
        <div
            className="fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div
                id="drawer-navigation"
                className="drawer w-full sm:max-w-[28rem] h-screen p-0 overflow-y-auto bg-gradient-to-b from-[#1a1510] to-[#0a0806] border-l border-amber-900/30 shadow-[-8px_0_32px_rgba(0,0,0,0.4),-0_0_48px_rgba(180,120,60,0.08)] relative"
                tabIndex={-1}
                onClick={stopPropagation}
            >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-amber-900/30 bg-[#1a1510]/95 px-6 py-5">
                    <h2 className="text-xl font-light text-[#e5e0d8] pr-8">
                        {title}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#e5e0d8]/80 transition hover:bg-amber-900/30 hover:text-[#e5e0d8]"
                        aria-label="Close"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="py-6 px-6 overflow-y-auto">
                    <p className="text-center text-sm text-[#e5e0d8]/80 mb-6">
                        Tell us what you need, and we'll craft a quote that's as unique as your idea.
                    </p>

                    <form id="contact_form_header" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    maxLength={40}
                                    className={inputClass}
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="mt-1 block text-xs text-amber-400">{errors.name}</span>}
                            </div>

                            <div className="sm:col-span-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className={inputClass}
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="mt-1 block text-xs text-amber-400">{errors.email}</span>}
                            </div>

                            <div>
                                <select
                                    id="countries"
                                    name="country_code"
                                    className={`${inputClass} appearance-none cursor-pointer`}
                                    required
                                    value={formData.country_code}
                                    onChange={handleChange}
                                >
                                    {staticCountries.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} ({country.code})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    id="phone_no"
                                    name="phone_no"
                                    maxLength={20}
                                    placeholder="Phone"
                                    className={inputClass}
                                    required
                                    value={formData.phone_no}
                                    onChange={handlePhoneInput}
                                />
                                {errors.phone_no && <span className="mt-1 block text-xs text-amber-400">{errors.phone_no}</span>}
                            </div>

                            <div className="sm:col-span-2">
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    placeholder="Organization website (optional)"
                                    className={inputClass}
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                                {errors.website && <span className="mt-1 block text-xs text-amber-400">{errors.website}</span>}
                            </div>

                            <div className="sm:col-span-2">
                                <textarea
                                    id="message"
                                    rows={3}
                                    name="message"
                                    placeholder="Message"
                                    className={`${inputClass} resize-none`}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <span className="mt-1 block text-xs text-amber-400">{errors.message}</span>}
                            </div>

                            <div className="sm:col-span-2 flex justify-end pt-2">
                                <button
                                    type="submit"
                                    id="quote-form-submit"
                                    className="inline-flex items-center justify-center rounded-xl border border-amber-600/60 bg-gradient-to-br from-[#2d2218] to-[#1a1510] px-8 py-3 text-sm font-medium text-[#e5e0d8] shadow-[0_0_20px_rgba(180,120,60,0.1)] transition-all duration-300 hover:border-amber-500/70 hover:shadow-[0_0_24px_rgba(200,140,80,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : btnLabel}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="border-t border-amber-900/30 py-4 px-6">
                    <div className="flex justify-center gap-6">
                        {["Facebook", "Instagram", "LinkedIn", "YouTube", "Pinterest", "Behance"].map((label, i) => {
                            const icons = ["fb", "ig", "in", "yt", "pt", "be"];
                            return (
                                <a
                                    key={label}
                                    href="#"
                                    className="opacity-80 transition hover:opacity-100"
                                    rel="nofollow"
                                    title={label}
                                    aria-label={label}
                                >
                                    <img src={`/icons/light/${icons[i]}.png`} alt="" className="h-5 w-5 object-contain" loading="lazy" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-2 px-6 pb-6 text-center text-sm">
                    <a
                        href="https://maps.app.goo.gl/knAGErq6ruUb82xL7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#e5e0d8]/70 hover:text-[#e5e0d8] hover:underline transition"
                    >
                        Meydan Grandstand, 6th floor · Meydan Road Nad Al Sheba, P.O Box 242986, Dubai
                    </a>
                    <a href="mailto:contact@protonixtechnologies.com" className="block text-[#e5e0d8]/70 hover:text-[#e5e0d8] hover:underline transition">
                        contact@protonixtechnologies.com
                    </a>
                    <a href="tel:+9710542806708" className="block text-[#e5e0d8]/70 hover:text-[#e5e0d8] hover:underline transition">
                        +971 542806708
                    </a>
                </div>
            </div>
        </div>
    );
}

export default QuoteDrawer;

