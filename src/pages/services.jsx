
import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>

            <div className="red-line"></div>

            {/* =====================================================
                SERVICES HERO
            ====================================================== */}

            <section className="parent-hero">

                <div className="parent-hero-content">

                    <span className="services-label">
                        Our expertise, your solution
                    </span>

                    <h1>
                        Solutions Built Around
                        <span>Your Success.</span>
                    </h1>

                    <p>
                        At Machica Group, we provide integrated business,
                        financial, tax, audit, insurance, and consulting
                        solutions designed to help businesses grow with
                        confidence.
                    </p>

                </div>

            </section>


            {/* =====================================================
                INTRODUCTION
            ====================================================== */}

            <section className="services-intro">

                <div className="services-intro-container">

                    <div className="intro-label">
                        OUR EXPERTISE
                    </div>

                    <h2>
                        Comprehensive Services.
                        <span>Practical Solutions.</span>
                    </h2>

                    <p>
                        We bring together professional expertise across
                        accounting, taxation, audit, compliance, insurance,
                        investment, and business consulting to provide
                        solutions that address the changing needs of our
                        clients.
                    </p>

                </div>

            </section>


            {/* =====================================================
                SERVICES GRID
            ====================================================== */}

            <section className="services-section">

                <div className="services-container">

                    {/* TAX */}
                    <div className="service-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-calculator"></i>
                        </div>

                        <span className="service-number">01</span>

                        <div className="service-content">

                            <span className="service-category">
                                TAX SERVICES
                            </span>

                            <h3>Tax Department</h3>

                            <p>
                                Professional tax solutions designed to
                                help businesses manage their tax
                                obligations efficiently while maintaining
                                compliance with applicable regulations.
                            </p>

                            <Link to="/comprehensive-tax-solutions" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>


                    {/* AUDIT */}
                    <div className="service-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-file-invoice-dollar"></i>
                        </div>

                        <span className="service-number">02</span>

                        <div className="service-content">

                            <span className="service-category">
                                AUDIT &amp; ASSURANCE
                            </span>

                            <h3>Audit Department</h3>

                            <p>
                                Reliable audit and assurance services
                                that provide valuable insights into
                                financial information, controls, and
                                business operations.
                            </p>

                            <Link to="/services" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>


                    {/* COMPLIANCE */}
                    <div className="service-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-scale-balanced"></i>
                        </div>

                        <span className="service-number">03</span>

                        <div className="service-content">

                            <span className="service-category">
                                REGULATORY SERVICES
                            </span>

                            <h3>Compliance Section</h3>

                            <p>
                                Helping organizations meet regulatory
                                requirements through structured compliance
                                processes and professional guidance.
                            </p>

                            <Link to="/regulatory-compliance" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>


                    {/* MAXIN AXA */}
                    <div className="service-card featured-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>

                        <span className="service-number">04</span>

                        <div className="service-content">

                            <span className="service-category">
                                MAXIN – AXA
                            </span>

                            <h3>Insurance &amp; Financial Planning</h3>

                            <p>
                                Insurance and financial solutions designed
                                to help individuals, families, and businesses
                                protect what matters most while preparing
                                for the future.
                            </p>

                            <Link to="/employee-benefits" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>


                    {/* MAXIN GI */}
                    <div className="service-card featured-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-umbrella"></i>
                        </div>

                        <span className="service-number">05</span>

                        <div className="service-content">

                            <span className="service-category">
                                MAXIN – GI
                            </span>

                            <h3>General Insurance</h3>

                            <p>
                                General insurance solutions that provide
                                protection against a wide range of risks,
                                helping individuals and businesses safeguard
                                their assets and operations.
                            </p>

                            <Link to="/employee-benefits" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>


                    {/* CONSULTING */}
                    <div className="service-card">

                        <div className="service-icon">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>

                        <span className="service-number">06</span>

                        <div className="service-content">

                            <span className="service-category">
                                BUSINESS CONSULTING
                            </span>

                            <h3>Business Consulting</h3>

                            <p>
                                Strategic business solutions and advisory
                                services that help organizations improve
                                performance, manage challenges, and pursue
                                sustainable growth.
                            </p>

                            <Link to="/transfer-pricing" className="service-link">
                                Explore Service
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                DETAILED SERVICES
            ====================================================== */}

            <section className="detailed-services">

                <div className="detailed-services-header">

                    <span className="services-label">
                        Precision in Every Detail, Excellence in Every Solution.
                    </span>

                    <h2>
                        Expertise That Supports
                        <span>Your Business.</span>
                    </h2>

                    <p>
                        MTC stands out as the premier choice in Region 8 for Audit
                        &amp; Assurance and Tax &amp; Consulting services. Our commitment to
                        excellence ensures that your financial operations are not only
                        compliant but optimized for success. We provide meticulous audit
                        and assurance services to safeguard your business's integrity,
                        alongside expert tax and consulting solutions designed to enhance
                        your financial strategy and operational efficiency. With MTC, you
                        gain a trusted partner dedicated to delivering top-tier service and
                        insightful advice, tailored to meet the unique needs of your business.
                    </p>

                </div>


                {/* AUDIT & ASSURANCE */}

                <div className="service-detail-section">

                    <div className="detail-heading">

                        <div className="detail-icon">
                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                        </div>

                        <div>
                            <span>AUDIT SERVICES</span>
                            <h2>Audit &amp; Assurance</h2>
                        </div>

                    </div>


                    <div className="detail-grid">

                        {/* 01 */}
                        <div className="detail-card">

                            <span className="detail-number">01</span>

                            <h3>
                                Financial Statements
                                Audit or Review
                            </h3>

                            <p>
                                Ensure accuracy and transparency with our
                                thorough financial statements audit services.
                                We provide a detailed examination of your
                                financial records to verify compliance,
                                identify discrepancies, and enhance credibility.
                                Trust us to deliver reliable insights and ensure
                                the integrity of your financial reporting.
                            </p>

                        </div>


                        {/* 02 */}
                        <div className="detail-card">

                            <span className="detail-number">02</span>

                            <h3>
                                Financial Reporting
                                Analysis
                            </h3>

                            <p>
                                Gain deeper insights into your financial
                                performance with our expert reporting analysis.
                                We provide detailed evaluations of your financial
                                statements to highlight trends, uncover
                                opportunities, and guide strategic decisions.
                                Let us help you make sense of the numbers and
                                drive your business forward.
                            </p>

                        </div>


                        {/* 03 */}
                        <div className="detail-card">

                            <span className="detail-number">03</span>

                            <h3>Transaction Advisory</h3>

                            <p>
                                Navigate complex transactions with confidence
                                using our expert advisory services. We provide
                                strategic guidance and thorough analysis to
                                support mergers, acquisitions, and other
                                significant deals. Ensure your transactions are
                                well-planned, compliant, and positioned for
                                success with our trusted advice.
                            </p>

                        </div>


                        {/* 04 */}
                        <div className="detail-card">

                            <span className="detail-number">04</span>

                            <h3>Due Diligence</h3>

                            <p>
                                Make informed decisions with our comprehensive
                                due diligence services. We meticulously review
                                and assess all aspects of your business
                                transactions to uncover potential risks and
                                opportunities. Ensure thoroughness and confidence
                                in your investments with our expert analysis
                                and insights.
                            </p>

                        </div>


                        {/* 05 */}
                        <div className="detail-card">

                            <span className="detail-number">05</span>

                            <h3>
                                Internal and
                                Compliance Audit
                            </h3>

                            <p>
                                Strengthen your operations with our internal and
                                compliance audit services. We conduct thorough
                                audits to ensure adherence to regulations,
                                identify process inefficiencies, and enhance
                                internal controls. Protect your organization and
                                optimize performance with our expert audit
                                solutions.
                            </p>

                        </div>


                        {/* 06 */}
                        <div className="detail-card">

                            <span className="detail-number">06</span>

                            <h3>Forensic Audit</h3>

                            <p>
                                Uncover the truth with our forensic audit
                                services. We specialize in investigating
                                financial discrepancies, fraud, and misconduct
                                with meticulous attention to detail. Our expert
                                analysis provides clarity and evidence,
                                supporting legal and regulatory actions to
                                safeguard your organization.
                            </p>

                        </div>

                    </div>

                </div>


                {/* TAX & CONSULTING */}

                <div className="service-detail-section tax-detail">

                    <div className="detail-heading">

                        <div className="detail-icon">
                            <i className="fa-solid fa-file-invoice-dollar"></i>
                        </div>

                        <div>
                            <span>TAX &amp; ADVISORY</span>
                            <h2>Tax &amp; Consulting</h2>
                        </div>

                    </div>


                    <div className="detail-grid tax-grid">

                        {/* 01 */}
                        <div className="detail-card">

                            <span className="detail-number">01</span>

                            <h3>
                                Domestic &amp; International
                                Tax Advisory
                            </h3>

                            <p>
                                Optimize your tax strategy with our expert
                                planning and advisory services. We provide
                                tailored solutions to minimize liabilities,
                                maximize savings, and ensure compliance with
                                tax regulations. Navigate the complexities of
                                taxation with confidence and clarity.
                            </p>

                        </div>


                        {/* 02 */}
                        <div className="detail-card">

                            <span className="detail-number">02</span>

                            <h3>
                                Business &amp; Management
                                Consulting
                            </h3>

                            <p>
                                Transform your business with our expert
                                management and consulting services. We offer
                                strategic insights and hands-on support to
                                streamline operations, enhance performance,
                                and achieve your objectives. Partner with us
                                to drive growth and efficiency across your
                                organization.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY MACHICA
            ====================================================== */}

            <section className="services-why">

                <div className="why-container">

                    <div className="why-left">

                        <span className="services-label">
                            WHY MACHICA GROUP
                        </span>

                        <h2>
                            One Partner.
                            <span>Multiple Solutions.</span>
                        </h2>

                    </div>


                    <div className="why-right">

                        <p>
                            From taxation and audit to insurance and
                            business consulting, Machica Group brings
                            different areas of expertise together under
                            one organization.
                        </p>

                        <p>
                            Our goal is simple: to provide practical,
                            professional, and reliable solutions that
                            allow our clients to focus on what they do
                            best — growing their business.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="services-cta">

                <div className="cta-content">

                    <span>
                        LET'S WORK TOGETHER
                    </span>

                    <h2>
                        Ready to find the right
                        solution for your business?
                    </h2>

                    <p>
                        Talk to our team and discover how we
                        can help you achieve your goals.
                    </p>

                    <Link to="/contact-us" className="cta-button">
                        Get in Touch
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>

            </section>

        </>
    );
};

export default Services;
