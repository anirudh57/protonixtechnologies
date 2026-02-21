interface ContactInfoProps {
  email: string;
  phone: string;
}

const linkClass =
  "text-amber-400/90 underline decoration-amber-500/50 hover:text-amber-300 hover:decoration-amber-400 transition";

function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <div className="rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#2d2218] via-[#1a1510] to-[#0a0806] p-6 md:p-8 shadow-[0_0_24px_rgba(180,120,60,0.12)]">
      <h2 className="text-2xl md:text-3xl font-light text-[#e5e0d8] uppercase tracking-wide">
        Get in touch
      </h2>
      <div className="mt-6 space-y-3 text-sm md:text-base font-light text-[#e5e0d8]/90">
        <p>
          Email:{' '}
          <a href={`mailto:${email}`} className={linkClass}>
            {email}
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href={`tel:${phone}`} className={linkClass}>
            {phone}
          </a>
        </p>
        <p>
          Office:
          <br />
          Meydan Grandstand, 6th floor, Meydan Road
          <br />
          Nad Al Sheba, P.O Box 242986,
          <br />
          Dubai, UAE
        </p>
      </div>
      <p className="mt-6 pt-4 border-t border-amber-900/30 text-sm md:text-base font-light text-justify md:text-left text-[#e5e0d8]/80 leading-relaxed">
        Share a bit about your product, your team, and where you are on your journey. We&apos;ll get back to you with
        clarity on how we can help, potential approaches, and what collaboration with our team could look like.
      </p>
      <p className="mt-4 text-sm md:text-base font-light text-[#e5e0d8]/80">
        Prefer email? Reach us directly at{' '}
        <a href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>{' '}
        and we&apos;ll respond as soon as we can.
      </p>
    </div>
  );
}

export default ContactInfo;
