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

const inputClass =
  'block w-full rounded-xl border border-amber-900/40 bg-[#0a0806]/60 px-4 py-3 text-[#e5e0d8] placeholder-[#e5e0d8]/50 text-sm md:text-base focus:border-amber-600/70 focus:ring-2 focus:ring-amber-600/20 focus:outline-none transition';

function ContactForm({ formData, errors, isSubmitting, onChange, onPhoneChange, onSubmit }: ContactFormProps) {
  return (
    <div
      className="rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-6 md:p-8 shadow-[0_0_24px_rgba(180,120,60,0.12)]"
      data-aos="fade-up"
      data-aos-duration="950"
    >
      <h3 className="text-xl md:text-2xl font-light text-[#e5e0d8] mb-4">
        Send us a message
      </h3>
      <p className="text-sm md:text-base font-light text-[#e5e0d8]/80 mb-6">
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
              className={inputClass}
              required
              value={formData.name}
              onChange={onChange}
            />
            {errors.name && (
              <span className="mt-1 block text-xs text-amber-400">{errors.name}</span>
            )}
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Work Email"
              className={inputClass}
              required
              value={formData.email}
              onChange={onChange}
            />
            {errors.email && (
              <span className="mt-1 block text-xs text-amber-400">{errors.email}</span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <select
                id="countries"
                name="country_code"
                className={`${inputClass} appearance-none cursor-pointer`}
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
            <div className="sm:col-span-2">
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                maxLength={20}
                placeholder="Phone Number"
                className={inputClass}
                required
                value={formData.phone_no}
                onChange={onPhoneChange}
              />
              {errors.phone_no && (
                <span className="mt-1 block text-xs text-amber-400">{errors.phone_no}</span>
              )}
            </div>
          </div>

          <div>
            <textarea
              id="message"
              rows={3}
              name="message"
              placeholder="How can we help?"
              className={`${inputClass} resize-none`}
              required
              value={formData.message}
              onChange={onChange}
            />
            {errors.message && (
              <span className="mt-1 block text-xs text-amber-400">{errors.message}</span>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl border border-amber-600/60 bg-gradient-to-br from-[#2d2218] to-[#1a1510] px-8 py-3 text-sm md:text-base font-medium text-[#e5e0d8] shadow-[0_0_20px_rgba(180,120,60,0.1)] transition-all duration-300 hover:border-amber-500/70 hover:shadow-[0_0_24px_rgba(200,140,80,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
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
