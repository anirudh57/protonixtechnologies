import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import QuoteDrawer from "./QuoteDrawer";

function Header() {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path ? "underline" : "";
    };

    const handleNavClick = () => {
        // Auto-close mobile menu after navigating
        setIsMobileMenuOpen(false);
    };
    //   const openDrawer = () => {
    //     setIsDrawerOpen(true);
    //   };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <nav className="bg-dg-dark border-dg-outline z-20">
                <div className="max-w-screen-xl md:max-w-screen-lg 2xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 mt-1 rtl:space-x-reverse"
                    >
                        <img
                            src="/images/logo/logo.png"
                            alt="Digient Logo"
                            title="Home"
                            //   height="auto"
                            //   width="auto"
                            loading="lazy"
                            className="w-28 sm:w-24 md:w-28 lg:w-40 h-auto"
                        />
                    </Link>

                    <button
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        aria-expanded="false"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div
                        className={`${
                            isMobileMenuOpen ? "" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-dropdown"
                    >
                        <ul className="nav-link font-light text-sm flex flex-col p-2 md:p-0 mt-4 border border-dg-outline rounded-lg bg-dg-dark md:flex-row md:mt-0 md:border-0 gap-2">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 px-3 text-dg-light hover:underline rounded p-2 ${isActive(
                                        "/"
                                    )}`}
                                    aria-current="page"
                                    onClick={handleNavClick}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className={`block py-2 px-3 text-dg-light rounded hover:underline md:border-0 p-2 ${isActive(
                                        "/services"
                                    )}`}
                                    onClick={handleNavClick}
                                >
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers"
                                    className={`block py-2 px-3 text-dg-light rounded hover:underline md:border-0 p-2 ${isActive(
                                        "/careers"
                                    )}`}
                                    onClick={handleNavClick}
                                >
                                    CAREERS
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about-us"
                                    className={`block py-2 px-3 text-dg-light rounded hover:underline md:border-0 p-2 ${isActive(
                                        "/about-us"
                                    )}`}
                                    onClick={handleNavClick}
                                >
                                    ABOUT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact-us"
                                    className={`block py-2 px-3 text-dg-light rounded hover:underline md:border-0 p-2 ${isActive(
                                        "/contact-us"
                                    )}`}
                                    onClick={handleNavClick}
                                >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <QuoteDrawer
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                title="Get a Tailored Quote"
                btnLabel="Get a Tailored Quote"
            />
        </>
    );
}

export default Header;
