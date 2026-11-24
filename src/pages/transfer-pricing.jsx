
import { Link } from "react-router-dom";

function TransferPricing() {
  return (
    <>

      {/* HERO */}
      <section className="tax-hero">
        <div className="tax-hero-overlay"></div>

        <div className="tax-hero-content">
          <h1>
            Transfer Pricing &amp; Valuations
            <span>Advisory Services</span>
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="tax-intro">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-number"></span>

            <div>
              <h2>Expert Transfer Pricing and Valuation Solutions</h2>

              <p>
                Navigating complex transfer pricing regulations and providing
                precise valuations to support your business goals.
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
              <span className="small-label">Services</span>

              <h2>How Confident Are Your Business Valuations?</h2>

              <p>
                In a global economy, transfer pricing and valuation services
                are crucial for businesses to manage complex financial and
                regulatory and tax landscapes effectively across the group
                of companies. Transfer pricing involves setting the prices
                for transactions between related parties in different tax
                jurisdictions. Proper management ensures compliance with
                international tax laws, transfer pricing regulations, minimizes
                tax liabilities, and avoids costly audits or disputes with tax
                authorities.
              </p>

              <p>
                Valuation services provide accurate assessments of a company’s
                worth, assets, and financial performance, which are essential
                for strategic decisions such as mergers, acquisitions, and
                financial reporting. Accurate valuations support effective
                investment strategies, facilitate negotiations, and ensure
                compliance with accounting standards. Together, these services
                help businesses optimize their financial performance, navigate
                global tax regulations, and make informed, strategic decisions
                in an increasingly interconnected market.
              </p>
            </div>

            <div className="overview-image">
              <img
                src="/images/services/transfer.png"
                alt="Transfer Pricing and Valuation Services"
              />

              <div className="image-badge">
                <i className="fa-solid fa-scale-balanced"></i>
                <span>Expert Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFER PRICING SERVICES */}
      <section className="service-section">
        <div className="section-container">
          <div className="service-section-header">
            <span className="section-number"></span>

            <div>
              <h2>Transfer Pricing Services</h2>
            </div>
          </div>

          <div className="service-grid">
            {/* CARD 1 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-puzzle-piece"></i>
              </div>

              <span className="service-number"></span>

              <h3>Compliance and Documentation</h3>

              <p>
                Assistance with preparing and maintaining transfer pricing
                documentation that complies with local and international
                regulations, such as OECD guidelines.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-building-shield"></i>
              </div>

              <span className="service-number"></span>

              <h3>Transfer Pricing Planning</h3>

              <p>
                Developing strategies to optimize transfer pricing structures
                and minimize tax liabilities across different jurisdictions.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>

              <span className="service-number"></span>

              <h3>Risk Assessment and Mitigation</h3>

              <p>
                Identifying and addressing potential risks related to transfer
                pricing audits and disputes.
              </p>
            </article>

            {/* CARD 4 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-comments"></i>
              </div>

              <span className="service-number"></span>

              <h3>Benchmarking Studies</h3>

              <p>
                Conducting benchmarking studies to determine arm’s length
                pricing and support pricing decisions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALUATIONS ADVISORY SERVICES */}
      <section className="international-section">
        <div className="section-container">
          <div className="international-header">
            <span className="section-number"></span>

            <div>
              <h2>Valuations Advisory Services</h2>
            </div>
          </div>

          <div className="international-grid">
            {/* CARD 1 */}
            <article className="international-card">
              <div className="international-top">
                <div className="service-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>

              <h3>Business Valuation</h3>

              <p>
                Providing accurate valuations for various purposes, including
                mergers and acquisitions, investment analysis, and financial
                reporting.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="international-card">
              <div className="international-top">
                <div className="service-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <span></span>
              </div>

              <h3>Asset Valuation</h3>

              <p>
                Assessing the value of tangible and intangible assets, such as
                intellectual property and real estate, for financial and
                strategic purposes.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="international-card">
              <div className="international-top">
                <div className="service-icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
              </div>

              <h3>Financial Modeling and Analysis</h3>

              <p>
                Creating detailed financial models to support valuation
                assessments and strategic planning.
              </p>
            </article>

            {/* CARD 4 */}
            <article className="international-card">
              <div className="international-top">
                <div className="service-icon">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
              </div>

              <h3>Regulatory Compliance</h3>

              <p>
                Ensuring valuations adhere to relevant standards and
                regulations, such as PFRS or GAAP.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="tax-cta">
        <div className="cta-content">
          <span className="small-label">
            Transfer Pricing and Valuation Solutions
          </span>

          <h2>Let’s Strengthen Your Value and Pricing Strategy</h2>

          <Link to="/contact-us" className="cta-button">
            Get in Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </>
  );
}

export default TransferPricing;
