
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Leader() {
    const [selectedLeader, setSelectedLeader] = useState(null);

    const leaderProfiles = {
        leader1: {
            name: "Dr. Michael A. Machica, Ph.D., DBA, CPA, CIA, CFSA, CWP",
            position: "Managing Partner & Chairman",
            image: "/images/leaders/MAM.png",
            description:
                "Managing Partner & Chairman, MTC&Co.,CPAs Chief Consultant & Chairman, Machica FIRM, Inc.",
            expertise: [
                "Transfer Pricing",
                "Wealth Planning",
                "Business & Corporate Advisory",
                "Tax Planning",
                "Insurance and Risk Consulting",
                "Independent Directorship",
            ],
            linkedin: "#",
            email: "mailto:info@machicagroup.com",
        },

        leader2: {
            name: "Joan C. Machica, Hon, Ph.D.",
            position: "Chief Executive Officer",
            image: "/images/leaders/JCM.png",
            description:
                "CEO, MAXIN INSURANCE AGENCY / Machica Group Consulting / Machica FIRM, Inc.",
            expertise: [
                "Human Resource Consulting",
                "BPO Consulting",
                "Insurance and Risk Consulting",
                "Corporate Management",
            ],
            linkedin: "#",
            email: "mailto:info@machicagroup.com",
        },

        leader3: {
            name: "Ma. Grace A. Machica, CPA (PH & ASEAN), CrFA, PGD, MDA",
            position: "Partner",
            image: "/images/leaders/GAM.png",
            description: "Partner, MTC & Co., CPAs",
            expertise: [
                "Audit and Forensic",
                "Business & Corporate Advisory",
                "Tax Planning",
                "Corporate Management",
            ],
            linkedin: "#",
            email: "mailto:info@machicagroup.com",
        },

        leader4: {
            name: "Willard Aswigui, CPA, EMBA",
            position: "Business Development Director",
            image: "/images/leaders/willard.png",
            description:
                "Business Development Director, MTC & Co., CPAs / Machica Group Consulting",
            expertise: [
                "Cash & Treasury",
                "Management Financial",
                "Finance Tax & Compliance",
                "Management Project",
                "Accounting Corporate",
                "M&A Advisory",
            ],
            linkedin: "#",
            email: "mailto:info@machicagroup.com",
        },
    };

    const openLeaderModal = (leaderId) => {
        setSelectedLeader(leaderProfiles[leaderId]);
    };

    const closeLeaderModal = () => {
        setSelectedLeader(null);
    };

    // Close modal when Escape is pressed
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeLeaderModal();
            }
        };

        if (selectedLeader) {
            document.addEventListener("keydown", handleEscape);
            document.body.classList.add("modal-open");
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.classList.remove("modal-open");
        };
    }, [selectedLeader]);

    return (
        <>

            {/* HERO */}
            <section className="parent-hero">
                <div className="parent-hero-content">
                    <h1>
                        Our <span>Leaders</span>
                    </h1>

                    <p>
                        Meet the people whose vision, experience, and commitment
                        continue to shape the future of Machica Group.
                    </p>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="leadership-intro">
                <div className="intro-label">
                    <span></span>
                    LEADERSHIP
                </div>

                <div className="intro-content">
                    <h2>
                        Strong leadership creates
                        <em> lasting impact.</em>
                    </h2>

                    <div className="intro-text">
                        <p>
                            At Machica Group, leadership is more than holding
                            a position. It is about creating direction,
                            building trust, and empowering people to achieve
                            meaningful results.
                        </p>

                        <p>
                            Our leaders bring together experience, strategic
                            thinking, and a commitment to excellence to help
                            our clients and organization move forward.
                        </p>
                    </div>
                </div>
            </section>

            {/* LEADERS */}
            <section className="leaders-section">
                <div className="section-heading">
                    <div>
                        <span className="section-label">
                            THE PEOPLE BEHIND THE VISION
                        </span>

                        <h2>
                            Meet Our <span>Leaders</span>
                        </h2>
                    </div>

                    <p>
                        Experienced professionals committed to excellence,
                        innovation, and sustainable growth.
                    </p>
                </div>

                <div className="leaders-grid">

                    {/* LEADER 01 */}
                    <article className="leader-card">
                        <div className="leader-image">
                            <img
                                src="/images/leaders/MAM.png"
                                alt="Dr. Michael A. Machica"
                            />

                            <div className="leader-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a
                                    href="mailto:info@machicagroup.com"
                                    aria-label="Email"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>

                        <div className="leader-info">
                            <h3>Dr. Michael A. Machica</h3>

                            <p>
                                Managing Partner & Chairman,
                                <span> MTC&Co.,CPAs</span>
                                <br />
                                Chief Consultant & Chairman,
                                <span style={{ color: "red" }}>
                                    {" "}Machica FIRM, Inc.
                                </span>
                            </p>

                            <button
                                type="button"
                                className="leader-link"
                                onClick={() => openLeaderModal("leader1")}
                            >
                                View Profile
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </article>

                    {/* LEADER 02 */}
                    <article className="leader-card">
                        <div className="leader-image">
                            <img
                                src="/images/leaders/JCM.png"
                                alt="Joan C. Machica"
                            />

                            <div className="leader-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a
                                    href="mailto:info@machicagroup.com"
                                    aria-label="Email"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>

                        <div className="leader-info">
                            <h3>Joan C. Machica</h3>

                            <p>
                                CEO,
                                <span style={{ color: "royalblue" }}>
                                    {" "}MAXIN INSURANCE AGENCY
                                </span>
                                {" / "}
                                <span style={{ color: "red" }}>
                                    Machica Group Consulting
                                </span>
                                {" / "}
                                <span style={{ color: "red" }}>
                                    Machica FIRM, Inc.
                                </span>
                            </p>

                            <button
                                type="button"
                                className="leader-link"
                                onClick={() => openLeaderModal("leader2")}
                            >
                                View Profile
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </article>

                    {/* LEADER 03 */}
                    <article className="leader-card">
                        <div className="leader-image">
                            <img
                                src="/images/leaders/GAM.png"
                                alt="Ma. Grace A. Machica"
                            />

                            <div className="leader-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a
                                    href="mailto:info@machicagroup.com"
                                    aria-label="Email"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>

                        <div className="leader-info">
                            <h3>Ma. Grace A. Machica</h3>

                            <p>
                                Partner, <span>MTC & Co., CPAs</span>
                            </p>

                            <button
                                type="button"
                                className="leader-link"
                                onClick={() => openLeaderModal("leader3")}
                            >
                                View Profile
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </article>

                    {/* LEADER 04 */}
                    <article className="leader-card">
                        <div className="leader-image">
                            <img
                                src="/images/leaders/willard.png"
                                alt="Willard Aswigui"
                            />

                            <div className="leader-social">
                                <a href="#" aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a
                                    href="mailto:info@machicagroup.com"
                                    aria-label="Email"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </div>

                        <div className="leader-info">
                            <h3>Willard Aswigui</h3>

                            <p>
                                Business Development Director,
                                <span> MTC & Co., CPAs</span>
                                {" / "}
                                <span style={{ color: "red" }}>
                                    Machica Group Consulting
                                </span>
                            </p>

                            <button
                                type="button"
                                className="leader-link"
                                onClick={() => openLeaderModal("leader4")}
                            >
                                View Profile
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </article>

                </div>
            </section>

            {/* OFFICERS SECTION */}
            <section className="officers-section">
                <div className="officers-heading">
                    <div>
                        <span className="section-kicker">
                            Key Executives
                        </span>

                        <h2>
                            Machica Group
                            <span> Officers</span>
                        </h2>
                    </div>

                    <p>
                        Meet the officers who help lead our teams,
                        coordinate our operations, and support the
                        continued growth of Machica Group.
                    </p>
                </div>

                <div className="officers-grid">

                    {/* OFFICER 01 */}
                    <article className="officer-card">
                        <div className="officer-photo">
                            <img
                                src="/images/leaders/rhealyn3.png"
                                alt="Rhealyn Mirante"
                            />
                        </div>

                        <div className="officer-info">
                            <h3>Rhealyn Mirante</h3>

                            <p className="officer-position">
                                Manager, MAXIN Insurance Agency
                            </p>

                            <div className="officer-divider"></div>

                            <p className="officer-description">
                                Provides leadership and support in
                                advancing the organization's goals
                                and operations.
                            </p>
                        </div>
                    </article>

                    {/* OFFICER 02 */}
                    <article className="officer-card">
                        <div className="officer-photo">
                            <img
                                src="/images/leaders/zaldy.png"
                                alt="Rizaldy Bustamante"
                            />
                        </div>

                        <div className="officer-info">
                            <h3>Rizaldy Bustamante</h3>

                            <p className="officer-position">
                                Associate Principal for Tax & Financial Reporting
                            </p>

                            <div className="officer-divider"></div>

                            <p className="officer-description">
                                Supports strategic initiatives and
                                contributes to effective organizational
                                management.
                            </p>
                        </div>
                    </article>

                    {/* OFFICER 03 */}
                    <article className="officer-card">
                        <div className="officer-photo">
                            <img
                                src="/images/leaders/fely.png"
                                alt="Fely Abdon"
                            />
                        </div>

                        <div className="officer-info">
                            <h3>Fely Abdon</h3>

                            <p className="officer-position">
                                Asst. Manager, Client Service Head
                            </p>

                            <div className="officer-divider"></div>

                            <p className="officer-description">
                                Coordinates key responsibilities and
                                helps ensure smooth and efficient
                                organizational operations.
                            </p>
                        </div>
                    </article>

                    {/* OFFICER 04 */}
                    <article className="officer-card">
                        <div className="officer-photo">
                            <img
                                src="/images/leaders/charina.png"
                                alt="Charina Barona"
                            />
                        </div>

                        <div className="officer-info">
                            <h3>Charina Barona</h3>

                            <p className="officer-position">
                                Supervisor, Finance Department
                            </p>

                            <div className="officer-divider"></div>

                            <p className="officer-description">
                                Contributes professional expertise and
                                supports the organization's strategic
                                direction.
                            </p>
                        </div>
                    </article>

                    {/* OFFICER 05 */}
                    <article className="officer-card">
                        <div className="officer-photo">
                            <img
                                src="/images/leaders/ariane.png"
                                alt="Ariane Joy Baclea-an"
                            />
                        </div>

                        <div className="officer-info">
                            <h3>Ariane Joy Baclea-an</h3>

                            <p className="officer-position">
                                Asst. Supervisor, Tax Department
                            </p>

                            <div className="officer-divider"></div>

                            <p className="officer-description">
                                Helps strengthen organizational
                                performance through collaboration,
                                leadership, and expertise.
                            </p>
                        </div>
                    </article>

                </div>
            </section>

            {/* LEADERSHIP VALUES */}
            <section className="leadership-values">
                <div className="values-heading">
                    <span className="section-label">
                        OUR APPROACH
                    </span>

                    <h2>
                        Leadership that
                        <span> moves forward.</span>
                    </h2>
                </div>

                <div className="values-grid">

                    <div className="value-item">
                        <div className="value-icon">
                            <i className="fa-solid fa-eye"></i>
                        </div>

                        <div>
                            <h3>Vision</h3>

                            <p>
                                We look beyond today's challenges to
                                create opportunities for tomorrow.
                            </p>
                        </div>
                    </div>

                    <div className="value-item">
                        <div className="value-icon">
                            <i className="fa-solid fa-handshake"></i>
                        </div>

                        <div>
                            <h3>Integrity</h3>

                            <p>
                                We build relationships through trust,
                                transparency, and accountability.
                            </p>
                        </div>
                    </div>

                    <div className="value-item">
                        <div className="value-icon">
                            <i className="fa-solid fa-lightbulb"></i>
                        </div>

                        <div>
                            <h3>Innovation</h3>

                            <p>
                                We continuously explore better ways to
                                solve problems and create value.
                            </p>
                        </div>
                    </div>

                    <div className="value-item">
                        <div className="value-icon">
                            <i className="fa-solid fa-users"></i>
                        </div>

                        <div>
                            <h3>People</h3>

                            <p>
                                We believe strong organizations are built
                                by empowering the people within them.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="leaders-cta">
                <div className="cta-content">
                    <span>WORK WITH MACHICA GROUP</span>

                    <h2>
                        Let's build something
                        <strong> great together.</strong>
                    </h2>

                    <p>
                        Discover how Machica Group can help your
                        organization move forward.
                    </p>

                    <Link to="/contact-us" className="cta-button">
                        Get Started
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            {/* LEADER PROFILE MODAL */}
            {selectedLeader && (
                <div className="leader-modal active">

                    <div
                        className="leader-modal-overlay"
                        onClick={closeLeaderModal}
                    ></div>

                    <div
                        className="leader-modal-container"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modalLeaderName"
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            className="leader-modal-close"
                            onClick={closeLeaderModal}
                            aria-label="Close profile"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="leader-modal-content">

                            {/* PROFILE IMAGE */}
                            <div className="leader-modal-image">
                                <img
                                    src={selectedLeader.image}
                                    alt={selectedLeader.name}
                                />

                                <div className="modal-image-accent"></div>
                            </div>

                            {/* PROFILE INFORMATION */}
                            <div className="leader-modal-info">

                                <span className="modal-position">
                                    {selectedLeader.position}
                                </span>

                                <h2 id="modalLeaderName">
                                    {selectedLeader.name}
                                </h2>

                                <div className="modal-line"></div>

                                <p className="modal-description">
                                    {selectedLeader.description}
                                </p>

                                {/* DETAILS */}
                                <div className="modal-details">
                                    <div className="modal-detail">

                                        <div className="modal-detail-icon">
                                            <i className="fa-solid fa-industry"></i>
                                        </div>

                                        <div>
                                            <span>EXPERTISE</span>

                                            <ul>
                                                {selectedLeader.expertise.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                {/* SOCIAL LINKS */}
                                <div className="modal-social">
                                    <a
                                        href={selectedLeader.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>

                                    <a
                                        href={selectedLeader.email}
                                        aria-label="Email"
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default Leader;
