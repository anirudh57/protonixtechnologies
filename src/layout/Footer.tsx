
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-dg-dark">
        <div className="w-full px-7 md:px-10 lg:px-16 py-6 lg:py-8">
          <div className="grid grid-cols-7 gap-2">
            <div className="col-span-3 flex justify-between h-full">
              <div className="mb-6 md:mb-0 flex flex-col justify-between h-full">
                <Link to="/" className="flex items-center">
                  <img
                    src="/images/logo/logo.png"
                    alt="Digient Logo"
                    title="Home"
                    // height="auto"
                    // width="auto"
                    className="w-28 sm:w-20 md:w-28 lg:w-40 h-auto"
                    loading="lazy"
                  />
                </Link>
                <p className="text-dg-light font-base my-5">
                  Empowering innovation through tailored software solutions. Explore our expertise and collaborate with us to bring your digital ambitions to life. Together, we'll drive progress and achieve excellence in technology
                </p>
                <div className="flex mt-4= sm:mt-0 mx-0 gap-10">
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/fb.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="Facebook" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/ig.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="Instagram" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/in.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="LinkedIn" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/yt.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="youtube" />
                    <span className="sr-only">YouTube</span>
                  </a>
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/pt.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="pinterest" />
                    <span className="sr-only">Pinterest</span>
                  </a>
                  <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                    <img src="/icons/light/be.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="behance" />
                    <span className="sr-only">Behance</span>
                  </a>
                </div>

                <div className="my-5">
                  <span className="text-sm text-dg-light sm:text-cente">
                    © {currentYear} <a href="/" className="hover:underline">Digient Technologies L.L.C</a>. All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>

             <div className="col-span-2 flex flex-col justify-between h-full">
              <h2 className="mb-6 text-base font-light underline text-dg-light">Contact Information</h2>
              <iframe
                title="Digient Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.6470422261064!2d55.3019112388812!3d25.159546022176304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c36f082541%3A0x16f65b407bb87f9!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1766054281716!5m2!1sen!2sae"
                width="auto"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <ul className="text-dg-light font-light">
                <li className="my-3">
                  <span>Meydan Grandstand - 6th floor Meydan Road Nad Al Sheba, P.O Box 242986, Dubai</span>
                </li>
                <li className="my-3">
                  <a href="tel:+9710542806708" className="hover:underline" rel="nofollow" title="Call Us">Phone: +971 542806708</a>
                </li>
                <li className="my-3">
                  <a href="mailto:contact@digientttechnologies.com" className="hover:underline" rel="nofollow" title="Email Us">Email Us</a>
                </li>
              </ul>

            </div>


            <div className="col-span-2 flex flex-col justify-between h-full ml-10 lg:ml-20">
              <h2 className="mb-6 text-base font-light underline text-dg-light">Quick Links</h2>

              <ul className="text-dg-light font-light">
                <li className="my-5">
                  <Link to="/" className="hover:underline" title="Home">Home</Link>
                </li>
                <li className="my-5">
                  <Link to="/services" className="hover:underline" title="Services">Services</Link>
                </li>
                <li className="my-5">
                  <Link to="/careers" className="hover:underline" title="Careers">Careers</Link>
                </li>
                <li className="my-5">
                  <Link to="/about-us" className="hover:underline" title="About Us">About</Link>
                </li>
                
                <li className="my-5">
                  <Link to="/contact-us" className="hover:underline" title="Contact Us">Contact</Link>
                </li>
                
               
              </ul>
            </div>


          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden bg-dg-dark">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo/logo.png"
                  alt="Digient Logo"
                  title="Home"
                //   height="auto"
                //   width="auto"
                className="w-36 sm:w-20 md:w-28 lg:w-40 h-auto"
                  loading="lazy"
                />
              </Link>
              <p className="text-dg-light font-base my-7">
                Empowering innovation through tailored software solutions. Explore our expertise and collaborate with us to bring your digital ambitions to life. Together, we'll drive progress and achieve excellence in technology
              </p>
            </div>

            <div>
              <div className="flex sm:justify-center gap-7 my-auto">
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/fb.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="Facebook" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/ig.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="instagram.com" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/in.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="linkedin.com/company" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/yt.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="youtube.com" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/pt.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="pinterest.com" />
                  <span className="sr-only">Pinterest</span>
                </a>
                <a href="#" className="text-dg-dark hover:text-dg-blue dark:hover:text-white my-auto" rel="nofollow">
                  <img src="/icons/light/be.png" height="auto" width="auto" loading="lazy" alt="digient-social-media" title="behance.net" />
                  <span className="sr-only">Behance</span>
                </a>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between mt-2">
            <span className="text-sm text-dg-light sm:text-center dark:text-gray-400">
              © {currentYear} <a href="/" className="hover:underline">Digient Technologies L.L.C</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
