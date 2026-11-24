import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";




function Header() {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(true);

    // PAGE LOADER
useEffect(() => {
    setLoaderVisible(true);

    const timer = setTimeout(() => {
        setLoaderVisible(false);
    }, 500);

    return () => clearTimeout(timer);

}, [location.pathname]);

    // STICKY NAVIGATION
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // CLOSE MENU WHEN CLICKING OUTSIDE
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                window.innerWidth <= 768 &&
                !event.target.closest(".nav-container")
            ) {
                setMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    // MOBILE MENU
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setActiveDropdown(null);
    };

    // MOBILE DROPDOWNS
    const toggleDropdown = (name, event) => {
        if (window.innerWidth <= 768) {
            event.preventDefault();

            setActiveDropdown((prev) =>
                prev === name ? null : name
            );
        }
    };

    // CLOSE MENU AFTER NAVIGATION
    const closeMenu = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            {/* SITE LOADER */}
            {loaderVisible && (
                <div id="site-loader">
                    <div className="site-loader-content">
                        <div className="site-loader-logo">
                            <img
                                src="/Assets/images/logo/MG.png"
                                alt="Machica Group"
                            />
                        </div>

                        <div className="site-loader-line">
                            <div className="site-loader-progress"></div>
                        </div>

                        <p>Please Wait</p>
                    </div>
                </div>
            )}

            {/* HEADER */}
            <header className="header">

                {/* TOP HEADER */}
                <div className="top-header">

                    {/* LOGOS */}
                    <div className="logo-group">
                        <Link to="/" onClick={closeMenu}>
                            <img
                                src="/Assets/images/logo/STAMP Since 1999.png"
                                alt="Machica Group Since 1999"
                                className="logo-small"
                            />
                        </Link>

                        <Link to="/" onClick={closeMenu}>
                            <img
                                src="/Assets/images/logo/MACHICA-GROUP_LOGO.png"
                                alt="Machica Group"
                                className="logo-main"
                            />
                        </Link>
                    </div>

                    {/* SEARCH */}
                    <div className="search-box">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search..."
                                aria-label="Search website"
                            />

                            <button type="submit" aria-label="Search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>

                {/* NAVIGATION */}
                <nav
                    className={`nav-container ${scrolled ? "scrolled" : ""}`}
                    id="navbar"
                >

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="menu-btn"
                        id="menuBtn"
                        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                        aria-expanded={menuOpen}
                        onClick={toggleMenu}
                        type="button"
                    >
                        <i
                            className={`fas ${
                                menuOpen ? "fa-times" : "fa-bars"
                            }`}
                        ></i>
                    </button>

                    {/* NAVIGATION LINKS */}
                    <ul
                        className={`nav-links ${menuOpen ? "active" : ""}`}
                        id="navLinks"
                    >

                        {/* HOME */}
                        <li>
                            <Link to="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>

                        {/* ABOUT */}
                        <li
                            className={`dropdown ${
                                activeDropdown === "about" ? "active" : ""
                            }`}
                        >
                            <Link
                                to="/about-us"
                                onClick={(e) => toggleDropdown("about", e)}
                            >
                                About Us
                                <i className="fas fa-chevron-down"></i>
                            </Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/leader" onClick={closeMenu}>
                                        Our Leaders
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/career" onClick={closeMenu}>
                                        Career
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/corporate-event"
                                        onClick={closeMenu}
                                    >
                                        Corporate Events
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* SERVICES */}
                        <li
                            className={`dropdown ${
                                activeDropdown === "services" ? "active" : ""
                            }`}
                        >
                            <Link
                                to="/services"
                                onClick={(e) => toggleDropdown("services", e)}
                            >
                                Services
                                <i className="fas fa-chevron-down"></i>
                            </Link>

                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        to="/Comprehensive-Tax-Solutions"
                                        onClick={closeMenu}
                                    >
                                        Comprehensive Tax Solutions
                                        (Domestic &amp; International)
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/corporate-formation"
                                        onClick={closeMenu}
                                    >
                                        Corporate Formation and Structuring
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/employee-benefits"
                                        onClick={closeMenu}
                                    >
                                        Employee Benefits &amp; Actuarial
                                        Consulting
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/financial-reporting"
                                        onClick={closeMenu}
                                    >
                                        Financial Reporting, Budgeting &amp;
                                        Analysis
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/regulatory-compliance"
                                        onClick={closeMenu}
                                    >
                                        Regulatory Compliance &amp; Business
                                        Support
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/transfer-pricing"
                                        onClick={closeMenu}
                                    >
                                        Transfer Pricing &amp; Valuation
                                        Advisory
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* CONTACT */}
                        <li>
                            <Link to="/contact-us" onClick={closeMenu}>
                                Contact Us
                            </Link>
                        </li>

                        {/* REGISTER */}
                        <li>
                        <Link to="/inquiry-form" onClick={closeMenu}>
                            Register
                        </Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;