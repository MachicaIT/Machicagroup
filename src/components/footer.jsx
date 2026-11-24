
import "../Styles/style.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-brand">

          <a href="/" className="footer-logo-link">
            <img
              src="/Assets/images/logo/MACHICA-GROUP_LOGO.png"
              className="footer-logo"
              alt="Machica Group"
            />
          </a>

          <p className="footer-description">
            Your trusted partner in accounting, auditing, taxation,
            and business consulting. Empowering businesses through
            expertise, integrity, and professional excellence.
          </p>

          {/* Company Publications */}
          <div className="footer-publications">

            <a
              href="/Assets/images/company-brochure/company_brochure.pdf"
              download
              className="publication-card"
            >
              <img
                src="/Assets/images/company-brochure/front.jpg"
                alt="Company Brochure"
              />
              <span>Company Brochure</span>
              <i className="fas fa-download"></i>
            </a>

            <a
              href="/Assets/images/company-brochure/MG_Company _Profile.pdf"
              download
              className="publication-card"
            >
              <img
                src="/Assets/images/company-brochure/front_page.png"
                alt="Company Profile"
              />
              <span>Company Profile</span>
              <i className="fas fa-download"></i>
            </a>

          </div>

          {/* Social Media */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/MachicaGroup" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://www.linkedin.com/in/machica-group-354629387/" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://www.instagram.com/consultingmachicagroup" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@machicagroupconsulting" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/career">Careers</a></li>
            <li><a href="/corporate-event">News & Events</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li><a href="/Comprehensive-Tax-Solutions">Comprehensive Tax Solution</a></li>
            <li><a href="/corporate-formation">Corporate Formation and Structuring</a></li>
            <li><a href="/employee-benefits">Employee Benefits and Actuarial Consulting</a></li>
            <li><a href="/financial-reporting">Financial Reporting, Budgeting and Analysis</a></li>
            <li><a href="/regulatory-compliance">Regulatory Compliance & Business Support</a></li>
            <li><a href="transfer-pricing">Transfer Pricing and Valuation Advisory</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h3>Get in Touch</h3>

          <div className="footer-contact-item">
            <i className="fas fa-location-dot"></i>
            <p>
              <strong>Our Office</strong>
              Tacloban City, Leyte, Philippines
            </p>
          </div>

          <div className="footer-contact-item">
            <i className="fas fa-phone"></i>
            <p>
              <strong>Phone</strong>
              +63 926 717 5477
               or +63 (53) 523 0014
            </p>
          </div>

          <div className="footer-contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              <strong>Email Address</strong>
              <a href="mailto:biz.machicagroup@gmail.com">
                biz.machicagroup@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-contact-item">
            <i className="fas fa-clock"></i>
            <p>
              <strong>Office Hours</strong>
              Monday - Friday: 8:30 AM - 5:30 PM<br />
              Saturday: 8:30 AM - 3:30 PM
            </p>
          </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} Machica Group.
            All Rights Reserved.
          </p>

          
        </div>
      </div>

    </footer>
  );
}

export default Footer;
