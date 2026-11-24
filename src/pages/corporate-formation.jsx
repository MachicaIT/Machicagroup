
import { Link } from "react-router-dom";

function Corporateformation() {
  return (
    <>

      {/* HERO */}
      <section className="tax-hero">
        <div className="tax-hero-overlay"></div>

        <div className="tax-hero-content">
          <h1>
            Corporate Formation and
            <span>Structuring Services</span>
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
                Establish or Structure Your Business Entity with Confidence
              </h2>

              <p>
                From company registration to strategic structuring, we guide
                you through every step.
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

              <h2>Corporate Formation and Structuring</h2>

              <p>
                Corporate formation and structuring in the Philippines
                involve the legal processes and strategic decisions required
                to establish a business entity in accordance with local laws
                and regulations. This starts with choosing the appropriate
                business structure—such as a sole proprietorship,
                partnership, corporation, or one-person corporation
                (OPC)—each with different implications for liability,
                taxation, and governance. For foreign entities, this may be
                in a branch, a subsidiary, or a representative office in the
                Philippines.
              </p>

              <p>
                The process includes registering with the Securities and
                Exchange Commission (SEC) for corporations, the Department
                of Trade and Industry (DTI) for sole proprietorships, and
                obtaining necessary permits from local government units
                (LGUs) and the Bureau of Internal Revenue (BIR). Structuring
                involves setting up the company’s internal governance,
                defining shareholder roles, and drafting essential documents
                like bylaws and articles of incorporation. Proper formation
                and structuring ensure compliance, mitigate risks, and
                optimize operational efficiency for businesses in the
                Philippines.
              </p>
            </div>

            <div className="overview-image">
              <img
                src="/images/services/corporate.png"
                alt="Corporate Formation Services"
              />

              <div className="image-badge">
                <i className="fa-solid fa-piggy-bank"></i>
                <span>Corporate Formation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="corporate-services">
        <div className="corporate-container">
          <div className="services-heading">
            <span className="section-label">OUR EXPERTISE</span>

            <h2>
              Corporate Formation
              <span>Services</span>
            </h2>

            <p>
              Comprehensive solutions designed to help businesses establish
              the right structure and operate with confidence.
            </p>
          </div>

          <div className="service-grid">
            {/* SERVICE 01 */}
            <div className="service-card">
              <div className="service-number">01</div>

              <div className="service-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>

              <h3>Business Registration</h3>

              <p>
                We assist in securing and registering your business name
                with the appropriate government agencies, ensuring compliance
                with applicable registration requirements from the outset.
              </p>
            </div>

            {/* SERVICE 02 */}
            <div className="service-card">
              <div className="service-number">02</div>

              <div className="service-icon">
                <i className="fa-solid fa-sitemap"></i>
              </div>

              <h3>Business Entity Formation</h3>

              <p>
                We provide assistance in establishing sole proprietorships,
                partnerships, and corporations, including the preparation
                and processing of the necessary registration documents. Our
                services may also extend to domestic entities and foreign
                entities doing business in the Philippines.
              </p>
            </div>

            {/* SERVICE 03 */}
            <div className="service-card">
              <div className="service-number">03</div>

              <div className="service-icon">
                <i className="fa-solid fa-file-signature"></i>
              </div>

              <h3>Licensing & Permits</h3>

              <p>
                We facilitate the acquisition of essential business
                licenses and permits, including Barangay Clearance,
                Mayor’s Permit, and other applicable local and national
                requirements, helping ensure your business is authorized
                to operate.
              </p>
            </div>

            {/* SERVICE 04 */}
            <div className="service-card">
              <div className="service-number">04</div>

              <div className="service-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>

              <h3>Government Registration</h3>

              <p>
                We assist with registrations and related requirements with
                government agencies, including the Bureau of Internal
                Revenue (BIR) and other relevant regulatory authorities,
                to establish your business properly and efficiently.
              </p>
            </div>

            {/* SERVICE 05 */}
            <div className="service-card">
              <div className="service-number">05</div>

              <div className="service-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <h3>Regulatory Compliance</h3>

              <p>
                We help businesses maintain compliance with continuing
                regulatory obligations, including annual report filings,
                business permit renewals, and other required government
                submissions, helping minimize compliance risks and
                potential penalties.
              </p>
            </div>

            {/* SERVICE 06 */}
            <div className="service-card">
              <div className="service-number">06</div>

              <div className="service-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>

              <h3>Compliance Advisory</h3>

              <p>
                We provide ongoing guidance on regulatory requirements
                and changes in applicable laws and government regulations.
                Our team helps you stay compliant while allowing you to
                focus on managing and growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="corporate-why">
        <div className="corporate-container">
          <div className="why-content">
            <span className="section-label">WHY MACHICA GROUP</span>

            <h2>
              A Strong Foundation
              <span>for Sustainable Growth</span>
            </h2>

            <p>
              We combine corporate, tax, financial, and business expertise
              to provide solutions that consider the bigger picture of your
              organization.
            </p>
          </div>

          <div className="why-list">
            <div className="why-item">
              <i className="fa-solid fa-circle-check"></i>

              <div>
                <h3>Strategic Approach</h3>

                <p>
                  Solutions aligned with your business goals and long-term
                  direction.
                </p>
              </div>
            </div>

            <div className="why-item">
              <i className="fa-solid fa-circle-check"></i>

              <div>
                <h3>Practical Solutions</h3>

                <p>
                  Clear and practical guidance designed to simplify complex
                  corporate requirements.
                </p>
              </div>
            </div>

            <div className="why-item">
              <i className="fa-solid fa-circle-check"></i>

              <div>
                <h3>Business-Focused</h3>

                <p>
                  We consider your organization's current needs and future
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="corporate-cta">
        <div className="cta-content">
          <span className="section-label">
            LET'S BUILD YOUR BUSINESS
          </span>

          <h2>
            Ready to Structure
            <span>Your Business?</span>
          </h2>

          <p>
            Talk to our team and discover the right corporate formation
            and structuring solution for your business.
          </p>

          <Link to="/contact-us" className="cta-button">
            Get in Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </>
  );
}

export default Corporateformation;
