
import { Link } from "react-router-dom";

function EmployeeBenefits() {
  return (
    <>

      {/* HERO */}
      <section className="tax-hero">
        <div className="tax-hero-overlay"></div>

        <div className="tax-hero-content">
          <h1>
            Employee Benefits & Actuarial
            <span>Consulting Service</span>
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="tax-intro">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-number"></span>

            <div>
              <h2>Optimizing Employee Benefits</h2>

              <p>
                Comprehensive solutions for managing employee benefits and
                actuarial needs with precision and care.
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
              <span className="small-label">Employee Benefits</span>

              <h2>Benefits & Actuarial Services</h2>

              <p>
                Effective employee benefits management and actuarial
                consulting are crucial for organizational success and
                employee satisfaction in the Philippines. Employee benefits
                management ensures that companies offer competitive and
                compliant benefits packages, which attract and retain top
                talent while meeting legal requirements. By providing
                comprehensive and well-structured benefits, businesses
                enhance employee satisfaction and productivity, fostering a
                positive work environment.
              </p>

              <p>
                Actuarial consulting plays a key role in managing the
                financial stability of benefits programs, such as pensions
                and insurance. Accurate actuarial valuations and risk
                management help organizations anticipate future liabilities,
                plan for long-term costs, and ensure the sustainability of
                their benefits offerings. Together, these services not only
                support organizational goals and financial health but also
                contribute to a motivated and loyal workforce, driving
                overall business success.
              </p>
            </div>

            <div className="overview-image">
              <img
                src="/images/services/Employee-Benefits.png"
                alt="Employee Benefits"
              />

              <div className="image-badge">
                <i className="fa-solid fa-piggy-bank"></i>
                <span>Employee Benefits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE BENEFITS CONSULTING */}
      <section className="service-section">
        <div className="section-container">
          <div className="service-section-header">
            <span className="section-number"></span>

            <div>
              <span className="small-label">Consulting</span>

              <h2>Employee Benefits Consulting</h2>
            </div>
          </div>

          <div className="service-grid">
            {/* CARD 1 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-puzzle-piece"></i>
              </div>

              <span className="service-number"></span>

              <h3>Benefits Design and Strategy</h3>

              <p>
                Tailoring benefits packages to meet organizational goals
                and employee needs, including health insurance, retirement
                plans, and other perks.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-building-shield"></i>
              </div>

              <span className="service-number"></span>

              <h3>Compliance and Regulation</h3>

              <p>
                Ensuring that employee benefits programs adhere to local
                and international regulations, reducing legal and
                financial risks.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>

              <span className="service-number"></span>

              <h3>Benchmarking and Market Analysis</h3>

              <p>
                Comparing your benefits offerings with industry standards
                to ensure competitiveness and attractiveness.
              </p>
            </article>

            {/* CARD 4 */}
            <article className="service-card">
              <div className="service-icon">
                <i className="fa-solid fa-comments"></i>
              </div>

              <span className="service-number"></span>

              <h3>Communication and Administration</h3>

              <p>
                Enhancing the effectiveness of benefits communication
                and streamlining administration processes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ACTUARIAL CONSULTING SERVICES */}
      <section className="international-section">
        <div className="section-container">
          <div className="international-header">
            <span className="section-number"></span>

            <div>
              <span className="small-label">Actuarial</span>

              <h2>Actuarial Consulting Services</h2>
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

              <h3>Valuation and Analysis</h3>

              <p>
                Performing actuarial valuations for pensions, insurance
                liabilities, and other financial obligations to assess
                funding status and future costs.
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

              <h3>Risk Management</h3>

              <p>
                Analyzing and managing risks associated with employee
                benefits programs, including mortality, morbidity, and
                investment risks.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="international-card">
              <div className="international-top">
                <div className="service-icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
              </div>

              <h3>Financial Modeling and Projections</h3>

              <p>
                Developing financial models to forecast future liabilities
                and assess the impact of various scenarios on your benefits
                programs.
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
                Ensuring adherence to actuarial standards and regulations,
                including those related to pension schemes and insurance.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tax-cta">
        <div className="cta-content">
          <span className="small-label">TAX & CONSULTING</span>

          <h2>Let's Build a Better Tax Strategy</h2>

          <Link to="/contact-us" className="cta-button">
            Get in Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </>
  );
}

export default EmployeeBenefits;
