import { Link } from 'react-router-dom';

const socialLinks = [
  { href: '#', label: 'Facebook', icon: '/icons/light/fb.png' },
  { href: '#', label: 'Instagram', icon: '/icons/light/ig.png' },
  { href: '#', label: 'LinkedIn', icon: '/icons/light/in.png' },
  { href: '#', label: 'YouTube', icon: '/icons/light/yt.png' },
  { href: '#', label: 'Pinterest', icon: '/icons/light/pt.png' },
  { href: '#', label: 'Behance', icon: '/icons/light/be.png' },
];

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/about-us', label: 'About' },
  { to: '/contact-us', label: 'Contact' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1a1510] to-[#0a0806]">
      {/* Main footer content */}
      <div className="mx-auto max-w-screen-xl px-4 py-10 md:px-8 md:py-12 lg:px-12">
        {/* Top: logo, tagline, socials */}
        <div className="flex flex-col gap-6 border-b border-amber-900/30 pb-8 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-sm">
            <Link to="/" className="inline-block" title="Home">
              <img
                src="/images/logo/logo.png"
                alt="Protonix Technologies Logo"
                className="h-auto w-28 md:w-32 lg:w-36"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm text-[#e5e0d8]/80 leading-relaxed">
              Tailored software solutions that bring your digital ambitions to life. Let's build something that scales.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-5">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="opacity-80 transition hover:opacity-100 focus:opacity-100"
                rel="nofollow"
                title={label}
                aria-label={label}
              >
                <img src={icon} alt="" className="h-5 w-5 object-contain md:h-6 md:w-6" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        {/* Links + Contact */}
        <div className="grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/90">Quick Links</h3>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 md:flex-col md:gap-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-[#e5e0d8]/90 transition hover:text-[#e5e0d8] hover:underline"
                    title={label}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600/90">Contact</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-5 lg:gap-6">
              <div className="overflow-hidden rounded-xl border border-amber-900/30 lg:col-span-2">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.6470422261064!2d55.3019112388812!3d25.159546022176304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c36f082541%3A0x16f65b407bb87f9!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1766054281716!5m2!1sen!2sae"
                  className="h-28 w-full border-0 lg:h-32"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ul className="space-y-2 text-sm text-[#e5e0d8]/90 lg:col-span-3">
                <li>
                  <span className="block">Meydan Grandstand, 6th floor<br />Meydan Road Nad Al Sheba, P.O Box 242986, Dubai</span>
                </li>
                <li>
                  <a href="tel:+9710542806708" className="transition hover:text-[#e5e0d8] hover:underline" rel="nofollow" title="Call us">
                    +971 542806708
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@protonixtechnologies.com" className="transition hover:text-[#e5e0d8] hover:underline" rel="nofollow" title="Email us">
                    contact@protonixtechnologies.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber-900/40 bg-[#0a0806]/60">
        <div className="mx-auto max-w-screen-xl px-4 py-4 md:px-8 md:py-5 lg:px-12">
          <p className="text-center text-xs text-[#e5e0d8]/70 md:text-sm">
            © {currentYear}{' '}
            <Link to="/" className="hover:text-[#e5e0d8]/90 hover:underline">
              Protonix Technologies L.L.C
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
