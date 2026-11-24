
import React from "react";
import { Link } from "react-router-dom";

function Regulatorycompliance() {
    return (
        <>

            {/* HERO */}
            <section className="tax-hero">
                <div className="tax-hero-overlay"></div>

                <div className="tax-hero-content">
                    <h1>
                        Regulatory Compliance &
                        <span>Business Support Services</span>
                    </h1>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="tax-intro">
                <div className="section-container">
                    <div className="section-heading">
                        <span className="section-number"></span>

                        <div>
                            <h2>
                                Supporting your success through clear regulatory guidance.
                            </h2>

                            <p>
                                Comprehensive solutions to ensure compliance
                                and provide robust support for your business operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="tax-overview">
                <div className="section-container">
                    <div className="overview-grid">

                        <div className="overview-content">
                            <span className="small-label">
                                Services
                            </span>

                            <h2>Benefits & Actuarial</h2>

                            <p>
                                In today’s dynamic business environment, regulatory
                                compliance and business support are crucial for ensuring
                                operational stability and sustaining growth. Regulatory
                                compliance involves adhering to ever-evolving laws and
                                regulations, which helps businesses avoid legal issues,
                                penalties, and reputational damage. Staying compliant not
                                only mitigates risks but also fosters trust with
                                stakeholders and enhances operational credibility.
                            </p>

                            <p>
                                Business support encompasses a range of services designed
                                to optimize operations, enhance efficiency, and provide
                                strategic guidance. Effective business support ensures that
                                companies can navigate complex regulatory landscapes,
                                streamline processes, and adapt to changing market conditions.
                                Together, these elements are essential for maintaining a
                                competitive edge, achieving long-term success, and responding
                                proactively to challenges and opportunities in the global marketplace.
                            </p>
                        </div>

                        <div className="overview-image">
                            <img
                                src="/images/services/regulatory.png"
                                alt="Regulatory Compliance Services"
                            />

                            <div className="image-badge">
                                <i className="fa-solid fa-calculator"></i>
                                <span>Benefits & Actuarial</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* COMPLIANCE SECTION */}
            <section className="compliance-section">
                <div className="compliance-container">

                    {/* LEFT CONTENT */}
                    <div className="compliance-services">

                        <div className="section-intro">
                            <span className="section-label">
                                REGULATORY COMPLIANCE
                            </span>

                            <h2>
                                Compliance Made <span>Simple.</span>
                            </h2>

                            <p>
                                Navigating the complexities of regulatory compliance
                                can be daunting for businesses. From securing business
                                permits to managing SSS, PhilHealth, and Pag-IBIG
                                transactions, our team of experts is here to provide
                                comprehensive support tailored to the unique needs of local businesses.
                            </p>
                        </div>

                        {/* SERVICE CARD 01 */}
                        <div className="compliance-card">
                            <div className="service-icon">
                                <img
                                    src="/images/compliance/business.png"
                                    alt="Business Permits"
                                />
                            </div>

                            <div className="service-content">
                                <span className="service-number">01</span>

                                <h3>Business Permits & Licensing</h3>

                                <p>
                                    Getting the right permits and licenses is crucial to
                                    legally operate a business. We assist with barangay
                                    clearances, mayor's permits, DTI or SEC registration,
                                    and other government requirements.
                                </p>

                                <div className="benefit">
                                    <i>✓</i>
                                    Avoid administrative delays and unnecessary penalties.
                                </div>

                                <Link to="/contact-us" className="service-link">
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* SERVICE CARD 02 */}
                        <div className="compliance-card">
                            <div className="service-icon sss-icon">
                                <img
                                    src="/images/compliance/SSS.png"
                                    alt="SSS Transactions"
                                />
                            </div>

                            <div className="service-content">
                                <span className="service-number">02</span>

                                <h3>SSS Transactions</h3>

                                <p>
                                    Ensure your business remains compliant with SSS
                                    requirements, including registration, contribution
                                    payments, loans, and benefits processing for your employees.
                                </p>

                                <div className="benefit">
                                    <i>✓</i>
                                    Timely and accurate processing to avoid fines and ensure peace of mind.
                                </div>

                                <Link to="/contact-us" className="service-link">
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* SERVICE CARD 03 */}
                        <div className="compliance-card">
                            <div className="service-icon">
                                <img
                                    src="/images/compliance/Ph.png"
                                    alt="PhilHealth Transactions"
                                />
                            </div>

                            <div className="service-content">
                                <span className="service-number">03</span>

                                <h3>PhilHealth Transactions</h3>

                                <p>
                                    We provide support for PhilHealth registration,
                                    premium payments, benefit claims, and records management,
                                    making it easier for businesses to comply with healthcare requirements.
                                </p>

                                <div className="benefit">
                                    <i>✓</i>
                                    Avoid penalties and streamline your PhilHealth transactions.
                                </div>

                                <Link to="/contact-us" className="service-link">
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* SERVICE CARD 04 */}
                        <div className="compliance-card">
                            <div className="service-icon">
                                <img
                                    src="/images/compliance/pagibig.jpg"
                                    alt="Pag-IBIG Transactions"
                                />
                            </div>

                            <div className="service-content">
                                <span className="service-number">04</span>

                                <h3>Pag-IBIG (HDMF) Transactions</h3>

                                <p>
                                    Our team handles all aspects of Pag-IBIG
                                    transactions, including registration, contribution
                                    management, loan applications, and benefit claims
                                    processing, ensuring compliance with HDMF regulations.
                                </p>

                                <div className="benefit">
                                    <i>✓</i>
                                    Efficient management of all HDMF-related needs for businesses.
                                </div>

                                <Link to="/contact-us" className="service-link">
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* SERVICE CARD 05 */}
                        <div className="compliance-card">
                            <div className="service-icon">
                                <img
                                    src="/images/compliance/laiaison.png"
                                    alt="Liaison Services"
                                />
                            </div>

                            <div className="service-content">
                                <span className="service-number">05</span>

                                <h3>Liaison Services</h3>

                                <p>
                                    Navigating government agencies can be
                                    time-consuming and complex. Our liaison
                                    services provide the essential link between
                                    your business and local government offices,
                                    ensuring smooth communication and efficient
                                    processing of documents and requirements.
                                </p>

                                <div className="benefit">
                                    <i>✓</i>
                                    Save time and avoid confusion with our experienced
                                    team handling all interactions with government offices on your behalf.
                                </div>

                                <Link to="/contact-us" className="service-link">
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDEBAR */}
                    <aside className="compliance-sidebar">
                        <div className="sidebar-inner">

                            <span className="sidebar-label">
                                WHY US?
                            </span>

                            <h2>
                                Stay Compliant.
                                <br />
                                <span>Stay Ahead.</span>
                            </h2>

                            <p>
                                With our Regulatory Compliance and Business
                                Support Services, your businesses can avoid
                                the stress and risks associated with non-compliance,
                                streamline their operations for greater efficiency,
                                and leverage compliance as a strategic advantage.
                            </p>

                            <div className="sidebar-divider"></div>

                            <h4>
                                Avoid Legal Pitfalls with Expert Guidance
                            </h4>

                            <div className="benefit-item">
                                <div className="benefit-icon">✓</div>

                                <div>
                                    <strong>Stay Ahead of Requirements</strong>

                                    <p>
                                        Keep up with changing government regulations
                                        and compliance obligations.
                                    </p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">✓</div>

                                <div>
                                    <strong>Reduce Compliance Risks</strong>

                                    <p>
                                        Minimize the possibility of delays, penalties,
                                        and administrative issues.
                                    </p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div className="benefit-icon">✓</div>

                                <div>
                                    <strong>Focus on Your Business</strong>

                                    <p>
                                        Let our professionals handle time-consuming
                                        compliance requirements.
                                    </p>
                                </div>
                            </div>

                            <Link to="/contact-us" className="sidebar-button">
                                Talk to Our Experts
                                <span>→</span>
                            </Link>

                        </div>
                    </aside>

                </div>
            </section>

            {/* REGULATORY COMPLIANCE SERVICES */}
            <section className="service-section">
                <div className="section-container">

                    <div className="service-section-header">
                        <span className="section-number"></span>

                        <div>
                            <span className="small-label">
                                Services
                            </span>

                            <h2>Regulatory Compliance Services</h2>
                        </div>
                    </div>

                    <div className="service-grid">

                        {/* CARD 1 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-binoculars"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Regulatory Monitoring and Updates</h3>

                            <p>
                                Keeping businesses informed about changes
                                in local and international regulations affecting their operations.
                            </p>
                        </article>

                        {/* CARD 2 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-clipboard-check"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Compliance Audits</h3>

                            <p>
                                Conducting thorough audits to assess adherence
                                to regulatory requirements and identify areas for improvement.
                            </p>
                        </article>

                        {/* CARD 3 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-shield-alt"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Risk Management</h3>

                            <p>
                                Identifying and mitigating compliance
                                risks to prevent legal issues and financial penalties.
                            </p>
                        </article>

                        {/* CARD 4 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-pen-nib"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Policy Development and Implementation</h3>

                            <p>
                                Assisting in the creation and enforcement
                                of policies and procedures that ensure regulatory compliance.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* BUSINESS SUPPORT SERVICES */}
            <section className="international-section">
                <div className="section-container">

                    <div className="international-header">
                        <span className="section-number"></span>

                        <div>
                            <span className="small-label">
                                Services
                            </span>

                            <h2>Business Support Services</h2>
                        </div>
                    </div>

                    <div className="international-grid">

                        {/* CARD 01 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-gears"></i>
                                </div>
                            </div>

                            <h3>Operational Efficiency</h3>

                            <p>
                                Providing support to optimize business processes
                                and enhance operational efficiency, including
                                workflow improvements and technology integration.
                            </p>
                        </article>

                        {/* CARD 02 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>

                                <span></span>
                            </div>

                            <h3>Employee Training and Development</h3>

                            <p>
                                Offering training programs to ensure staff
                                are knowledgeable about compliance requirements and best practices.
                            </p>
                        </article>

                        {/* CARD 03 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-folder-open"></i>
                                </div>
                            </div>

                            <h3>Document Management</h3>

                            <p>
                                Assisting with the organization and
                                management of critical business
                                documents to ensure accessibility and compliance.
                            </p>
                        </article>

                        {/* CARD 04 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-compass"></i>
                                </div>
                            </div>

                            <h3>Strategic Advisory</h3>

                            <p>
                                Providing strategic advice on navigating
                                regulatory challenges, implementing compliance
                                strategies, and aligning operations with business goals.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="tax-cta">
                <div className="cta-content">

                    <span className="small-label">
                        Regulatory Compliance & Business Support Services
                    </span>

                    <h2>
                        Let’s Keep Your Business Compliant and Ready for Growth
                    </h2>

                    <Link to="/contact-us" className="cta-button">
                        Get in Touch
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>
            </section>

        </>
    );
}

export default Regulatorycompliance;
