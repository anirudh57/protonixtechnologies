interface ContactInfoProps {
  email: string;
  phone: string;
}

function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-light text-dg-dark uppercase">
        Get in touch
      </h2>
      <div className="space-y-3 text-sm md:text-base font-light text-dg-dark">
        <p>
          Email:{' '}
          <a href={`mailto:${email}`} className="underline hover:text-dg-blue">
            {email}
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href={`tel:${phone}`} className="underline hover:text-dg-blue">
            {phone}
          </a>
        </p>
        <p className="text-sm md:text-base font-light text-dg-dark">
          Office:
          <br />
          Meydan Grandstand,6th floor, Meydan Road
          <br />
          Nad Al Sheba, P.O Box 242986,
          <br />
          Dubai, UAE
        </p>
      </div>
      <p className="pt-4 text-sm md:text-base font-light text-justify md:text-left text-dg-dark">
        Share a bit about your product, your team, and where you are on your journey. We&apos;ll get back to you with
        clarity on how we can help, potential approaches, and what collaboration with our team could look like.
      </p>
      <p className="text-sm md:text-base font-light text-dg-dark">
        Prefer email? Reach us directly at{' '}
        <a href={`mailto:${email}`} className="underline hover:text-dg-blue">
          {email}
        </a>{' '}
        and we&apos;ll respond as soon as we can.
      </p>
    </div>
  );
}

export default ContactInfo;
