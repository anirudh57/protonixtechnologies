import type React from 'react';
import { staticCountries } from '../../../layout/QuoteDrawer';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    country_code: string;
    phone_no: string;
    message: string;
  };
  errors: Record<string, string>;
  isSubmitting: boolean;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function ContactForm({ formData, errors, isSubmitting, onChange, onPhoneChange, onSubmit }: ContactFormProps) {
  return (
    <div
      className="bg-white border border-dg-outline shadow-lg p-6 md:p-8 rounded-none"
      data-aos="fade-up"
      data-aos-duration="950"
    >
      <h3 className="text-xl md:text-2xl font-light text-dg-dark mb-4">
        Send us a message
      </h3>
      <p className="text-sm md:text-base font-light text-dg-dark mb-6">
        Tell us what you&apos;re working on, and we&apos;ll follow up with ideas, timelines, and next steps.
      </p>

      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              maxLength={40}
              className="block w-full p-3 md:p-4 text-dg-dark border border-dg-outline text-sm md:text-base focus:ring-dg-blue focus:border-dg-blue"
              required
              value={formData.name}
              onChange={onChange}
            />
            {errors.name && (
              <span className="input-error text-red-600 text-sm">{errors.name}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Work Email"
              className="block w-full p-3 md:p-4 text-dg-dark border border-dg-outline text-sm md:text-base focus:ring-dg-blue focus:border-dg-blue"
              required
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && (
              <span className="input-error text-red-600 text-sm">{errors.email}</span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <select
                id="countries"
                name="country_code"
                className="border border-dg-outline text-[#777777] focus:ring-dg-blue focus:border-dg-blue block w-full p-3 md:p-4 text-sm md:text-base"
                required
                value={formData.country_code}
                onChange={onChange}
              >
                {staticCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                maxLength={20}
                placeholder="Phone Number"
                className="block w-full p-3 md:p-4 border border-dg-outline text-sm md:text-base focus:ring-dg-blue focus:border-dg-blue"
                required
                value={formData.phone_no}
                onChange={onPhoneChange}
              />
              {errors.phone_no && (
                <span className="input-error text-red-600 text-sm">{errors.phone_no}</span>
              )}
            </div>
          </div>

          <div>
            <textarea
              id="message"
              rows={3}
              name="message"
              placeholder="How can we help?"
              className="block p-3 md:p-4 w-full text-dg-dark border border-dg-outline text-sm md:text-base focus:ring-dg-blue focus:border-dg-blue"
              required
              value={formData.message}
              onChange={onChange}
            />
            {errors.message && (
              <span className="input-error text-red-600 text-sm">{errors.message}</span>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-dg-dark px-8 py-3 text-sm md:text-base font-light text-white border border-dg-dark hover:bg-transparent hover:text-dg-dark transition-colors duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
