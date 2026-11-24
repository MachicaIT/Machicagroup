
import { Link } from "react-router-dom";


function FinancialReporting() {
    return (
        <>

            {/* HERO */}
            <section className="tax-hero">
                <div className="tax-hero-overlay"></div>

                <div className="tax-hero-content">
                    <h1>
                        Financial Reporting, Budgeting
                        <span> & Analysis Services</span>
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
                                Empower Your Business with Clear Financial Insights
                            </h2>

                            <p>
                                Accurate reporting, strategic budgeting, and
                                in-depth analysis to fuel your business growth.
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

                            <h2>Financial Services</h2>

                            <p>
                                Accurate financial reporting, strategic budgeting,
                                and insightful analysis are vital for businesses of
                                all sizes in the Philippines to maintain financial
                                stability, drive growth, and stay competitive.
                            </p>

                            <p>
                                Accurate financial reporting provides a clear picture
                                of a company’s financial health, ensuring compliance
                                with local regulations and fostering trust among
                                stakeholders, investors, and regulators.
                            </p>

                            <p>
                                Strategic budgeting helps businesses allocate resources
                                efficiently, manage cash flow, and plan for future growth,
                                while also preparing for potential economic uncertainties.
                            </p>

                            <p>
                                Insightful financial analysis enables companies to make
                                data-driven decisions, identify cost-saving opportunities,
                                improve profitability, and evaluate the feasibility of new
                                projects or expansions. Together, these financial services
                                provide a solid foundation for informed decision-making and
                                sustainable success.
                            </p>
                        </div>

                        <div className="overview-image">
                            <img
                                src="/images/services/financial.png"
                                alt="Financial Reporting Services"
                            />

                            <div className="image-badge">
                                <i className="fa-solid fa-piggy-bank"></i>
                                <span>Financial Reporting Services</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FINANCIAL REPORTING SERVICES */}
            <section className="service-section">
                <div className="section-container">

                    <div className="service-section-header">
                        <span className="section-number"></span>

                        <div>
                            <span className="small-label">
                                Services
                            </span>

                            <h2>Employee Benefits Consulting</h2>
                        </div>
                    </div>

                    <div className="service-grid">

                        {/* CARD 1 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-bar-chart"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>
                                Monthly, Quarterly, and Annual Reports
                            </h3>

                            <p>
                                Accurate and timely reporting is essential for
                                informed decision-making and regulatory compliance.
                                We prepare and submit comprehensive monthly, quarterly,
                                and annual reports, including financial statements, tax
                                returns, and other necessary documents. Our expert team
                                ensures that your business's financial health is
                                transparently documented and in line with government
                                requirements, allowing you to stay focused on your strategic goals.
                            </p>
                        </article>

                        {/* CARD 2 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-users-cog"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Management Reporting</h3>

                            <p>
                                Empower your leadership team with insightful
                                and customized management reports that provide
                                a clear view of your business’s performance.
                                We offer detailed reports that cover key financial
                                metrics, operational analysis, and variance reports
                                to help you make data-driven decisions. Our goal
                                is to deliver timely and accurate information that
                                supports strategic planning, performance management,
                                and operational efficiency.
                            </p>
                        </article>

                        {/* CARD 3 */}
                        <article className="service-card">
                            <div className="service-icon">
                                <i className="fa fa-gavel"></i>
                            </div>

                            <span className="service-number"></span>

                            <h3>Regulatory Compliance</h3>

                            <p>
                                Navigating the complex landscape of regulatory
                                requirements can be challenging. Our Regulatory
                                Compliance services ensure that your business adheres
                                to all local laws, regulations, and industry standards.
                                From registering with the appropriate government
                                agencies to maintaining ongoing compliance with tax,
                                labor, and corporate regulations, we provide end-to-end
                                support to protect your business from potential risks
                                and penalties.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* FINANCIAL ANALYSIS AND ADVISORY */}
            <section className="international-section">
                <div className="section-container">

                    <div className="international-header">
                        <span className="section-number"></span>

                        <div>
                            <span className="small-label">
                                Services
                            </span>

                            <h2>Financial Analysis and Advisory</h2>
                        </div>
                    </div>

                    <div className="international-grid">

                        {/* 01 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-dollar-sign"></i>
                                </div>
                            </div>

                            <h3>Financial Performance Analysis</h3>

                            <p>
                                Unlock the full potential of your business
                                with our in-depth Financial Performance Analysis
                                services. We provide comprehensive assessments of
                                your financial data to identify trends, strengths,
                                and areas for improvement. Our expert analysis
                                covers profitability, liquidity, efficiency, and
                                solvency metrics, helping you make strategic decisions,
                                optimize operations, and drive sustainable growth.
                            </p>
                        </article>

                        {/* 02 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-exchange-alt"></i>
                                </div>

                                <span></span>
                            </div>

                            <h3>Variance Analysis</h3>

                            <p>
                                Gain a deeper understanding of your business’s
                                financial health with our Variance Analysis
                                services. We analyze the differences between
                                actual performance and budgeted figures, helping
                                you identify the root causes of variances. Our
                                detailed insights enable you to adjust strategies,
                                control costs, and enhance decision-making processes
                                to ensure your business stays on track toward its financial goals.
                            </p>
                        </article>

                        {/* 03 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-balance-scale"></i>
                                </div>
                            </div>

                            <h3>Cost-Benefit Analysis</h3>

                            <p>
                                Make informed decisions with our Cost-Benefit
                                Analysis services, designed to evaluate the
                                financial impact of your business initiatives.
                                We assess the potential costs and benefits of
                                various projects, investments, or strategic changes,
                                providing you with clear, data-driven insights.
                                Our analysis helps you prioritize opportunities,
                                minimize risks, and maximize returns, ensuring your
                                resources are allocated effectively.
                            </p>
                        </article>

                        {/* 04 */}
                        <article className="international-card">
                            <div className="international-top">
                                <div className="service-icon">
                                    <i className="fa fa-chess"></i>
                                </div>
                            </div>

                            <h3>Strategic Financial Planning</h3>

                            <p>
                                Build a robust financial foundation for your
                                business with our Strategic Financial
                                Planning services. We work with you to
                                develop comprehensive financial plans that
                                align with your business goals, from cash flow
                                management and budgeting to long-term growth
                                strategies. Our proactive approach ensures that
                                your business is well-positioned to navigate
                                challenges, seize opportunities, and achieve
                                sustainable success.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="tax-cta">
                <div className="cta-content">

                    <span className="small-label">
                        Financial Reporting, Budgeting & Analysis
                    </span>

                    <h2>Strengthen Your Financial Strategy</h2>

                    <Link to="/contact-us" className="cta-button">
                        Get in Touch
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>
            </section>

        </>
    );
}

export default FinancialReporting;
