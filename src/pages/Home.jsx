import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: `"From 2006 to 2021, MTC & Co. CPAs had been one of our major providers of professional services. It has highly trusted and easy to work team. We are indeed happy and confident with their services, thus, the longevity in this client relationship."`,
    name: "Antonio P. Tuviera",
    role: "Former CEO, TAPE, Inc./Eat Bulaga",
    image: "/images/Testimonial/Antonio.png",
    alt: "Antonio P. Tuviera",
  },
  {
    text: `"Dr. Michael Machica and his team have collaborated with Dezan Shira and Associates (DSA) and the DSA Asian Alliance for over five years, providing exceptional business support, finance, payroll, and tax services. Their reliability and efficiency make them key to meeting our clients' needs in the Philippines. We enjoy working with them and look forward to continuing this close relationship."`,
    name: "Alberto Vettoretti",
    role: "Managing Partner, Dezan Shira & Associates",
    image: "/images/Testimonial/alberto.png",
    alt: "Alberto Vettoretti",
  },
  {
    text: `"We are glad to partner with the CPA Firm of MTC & Co. CPAs for our assurance and audit needs. Dr. Machica, the lead partner, is effectively responsive to our organization's needs and affords us with his sound advice. He is ably assisted by his equally competent and dedicated team members in the optimal service delivery."`,
    name: "Anacleta D. Aboyme",
    role: "Former CEO, Rural Bank of Hindang / Director, R.B.A.P",
    image: "/images/Testimonial/Anacleta.png",
    alt: "Anacleta D. Aboyme",
  },
  {
    text: `"We hold MAXIN Insurance Agency in the high regard as far as customer service goes. We are among the agency's early patrons who are happy with the level of service, not only in keeping with our insurance needs, but also in assisting us with claims settlements."`,
    name: "Leticia Y. Ruiz",
    role: "Treasurer, SL Ruiz Group",
    image: "/images/Testimonial/liticia.png",
    alt: "Leticia Y. Ruiz",
  },
  {
    text: `"The Machica Group's consulting segment is our major professional services provider in our Philippine subsidiary. From incorporating and obtaining corporate licenses, they are with us in providing accounting, tax, regulatory compliance support services, and corporate secretarial functions at very competitive prices."`,
    name: "Anthony Sewell",
    role: "Former E.D, Scott Chemicals Holdings Ltd.",
    image: "/images/Testimonial/Antonio Sewell.png",
    alt: "Anthony Sewell",
  },
  {
    text: `"As an ecosystem advocate, I admire Machica Group’s business consulting model which promotes and supports environmentally-sustainable client’s projects. Its founder, Dr Machica, is the leading figure of the Economy for the Common Good – Asia Pacific Chapter which advocates a more ethical economic model in which the well being of people and the environment become the ultimate goal of business."`,
    name: "Michael Clammer",
    role: "3D Artist / Ecosystem Advocate",
    image: "/images/Testimonial/michael.png",
    alt: "Michael Clammer",
  },
];

const services = [
  {
    icon: "fa-solid fa-calculator",
    title: "Accounting",
    description: "Professional bookkeeping and accounting solutions.",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Audit",
    description: "Independent audit and assurance services.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Tax",
    description: "Comprehensive taxation and compliance services.",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Consulting",
    description: "Business advisory and strategic consulting.",
  },
];

const reasons = [
  {
    icon: "fas fa-award",
    title: "Quality Service at Competitive Prices",
    description:
      "We provide professional accounting, audit, tax, and consulting services while ensuring excellent value for our clients.",
  },
  {
    icon: "fas fa-building",
    title: "Diverse Industry Experience",
    description:
      "Our team has extensive experience serving clients across various industries, from startups to large enterprises.",
  },
  {
    icon: "fas fa-globe",
    title: "Affiliated Across International Borders",
    description:
      "Through global affiliations and strategic partnerships, we provide services that meet international standards.",
  },
  {
    icon: "fas fa-users",
    title: "Multifaceted Business & Professional Skills",
    description:
      "Our professionals possess expertise in accounting, taxation, auditing, consulting, insurance, and business advisory.",
  },
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const extendedTestimonials = [...testimonials, testimonials[0]];

  useEffect(() => {
    if (paused) return undefined;

    const interval = window.setInterval(() => {
      setTransitionEnabled(true);
      setIndex((current) => current + 1);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    if (index !== testimonials.length) return undefined;

    const timeout = window.setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
    }, 650);

    return () => window.clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (!transitionEnabled && sliderRef.current) {
      // Force the browser to apply the transition reset before the next slide.
      sliderRef.current.getBoundingClientRect();
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const difference = touchStartX.current - event.changedTouches[0].clientX;

    if (difference > 50) {
      setTransitionEnabled(true);
      setIndex((current) => (current + 1) % testimonials.length);
    } else if (difference < -50) {
      setTransitionEnabled(true);
      setIndex((current) =>
        current === 0 ? testimonials.length - 1 : current - 1
      );
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="testimonial-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={sliderRef}
        className="testimonial-slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transitionEnabled ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {extendedTestimonials.map((testimonial, i) => (
          <article className="testimonial-card" key={`${testimonial.name}-${i}`}>
            <div className="quote-icon">
              <i className="fas fa-quote-right" aria-hidden="true" />
            </div>

            <p className="testimonial-text">{testimonial.text}</p>

            <div className="client-info">
              <img src={testimonial.image} alt={testimonial.alt} />

              <div className="client-details">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>

      <main>
        {/* HERO */}
        <section className="home-hero">
          <div className="hero-overlay" />
          <div className="hero-index">
            <h1>25 Years of Trusted Business Excellence Since 1999</h1>
            <p>
              Accounting • Audit • Tax • Regulatory Compliance • Business
              Consulting
            </p>

            <div className="hero-buttons">
              <a href="/about-us" className="btn-primary">
                Learn More
              </a>
              <a href="/contact-us" className="btn-secondary">
                Get Quote
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="home-about">
          <div className="container">
            <div className="about-image">
              <img src="/Assets/images/office.png" alt="Machica Group office" />
            </div>

            <div className="about-content">
              <h2>Our expertise, your solution</h2>
              <p>
                Machica Group's collective expertise and industry experience
                provide comprehensive business consulting services in the
                Philippines, delivering tailored solutions to every business,
                finance, and risk concern. This includes corporate structuring,
                tax compliance and advisory services, and regulatory consulting
                in the Philippines, as well as all-encompassing insurance,
                investment, and health solutions, supported by a highly
                responsive and specialized audit and assurance services team.
                By integrating these services, businesses can streamline
                operations, ensure full compliance with Philippine regulations,
                and protect their assets efficiently and effectively with a
                trusted corporate consulting firm in the Philippines.
              </p>
              <a href="/about-us" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-home">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <i className={service.icon} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">
          <h2>Why Choose Us?</h2>
          <p className="section-desc">
            Discover why businesses across the Philippines continue to trust{" "}
            <span style={{ fontWeight: "bold" }}>Machica Group</span> for
            accounting, tax, audit, and business consulting services.
          </p>

          <div className="why-grid">
            {reasons.map((reason) => (
              <div className="feature-card" key={reason.title}>
                <div className="feature-icon">
                  <i className={reason.icon} aria-hidden="true" />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRY EXPERIENCE */}
        <section className="industry">
          <div className="container">
            <h2 className="section-title">Industry Experience</h2>
            <div className="industry-content">
              <div className="industry-text">
                <p>
                  As a leading accounting firm, we bring a wealth of diverse
                  industry experience gained from serving clients across a wide
                  range of sectors including manufacturing, technology,
                  healthcare, hospitality, retail, finance, logistics,
                  construction, education, and many more.
                  <br />
                  <br />
                  Our professionals understand the unique challenges of every
                  industry, enabling us to deliver customized accounting,
                  taxation, audit, and business advisory solutions that help
                  organizations achieve sustainable growth.
                </p>
              </div>

              <div className="industry-image">
                <img
                  src="/Assets/images/Industry-Experience.jpg"
                  alt="Industry Experience"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL CLIENTS */}
        <section className="clients">
          <div className="container-client">
            <h2 className="section-title">
              Profile of International Clients</h2>
            <div className="clients-map">
              <img
                src="/Assets/images/INTERNATIONAL-CLIENTS.png"
                alt="International Clients"
              />
            </div>
          </div>
        </section>

        {/* INTERNATIONAL AFFILIATIONS */}
        <section className="international">
          <div className="container">
            <h2>International Affiliation</h2>

            <div className="affiliate-row reverse">
              <div className="affiliate-logo">
                <img src="/Assets/images/LEA-Global.png" alt="LEA Global" />
              </div>
              <div className="affiliate-text">
                <p>
                  Since 2009, Machica Group has been a proud member of LEA
                  Global, one of the largest international associations in the
                  world with more than 220 firms focusing on accounting,
                  financial and business advisory services. LEA Global firms
                  operate in more than 110 countries, giving clients access to
                  worldwide knowledge, skills, and experience while maintaining
                  the highest standards of professional service.
                </p>
              </div>
            </div>

            <div className="affiliate-row reverse">
              <div className="affiliate-logo">
                <img src="/Assets/images/Dezan-Shira.png" alt="Dezan Shira" />
              </div>
              <div className="affiliate-text">
                <p>
                  Machica Firm, Inc., through MG Consulting, is part of the
                  Dezan Shira Asian Alliance. The alliance has a strong presence
                  across Hong Kong, China, Singapore, India, Vietnam, Indonesia,
                  Thailand, Malaysia, and the Philippines, providing clients
                  with valuable regional expertise and cross-border business
                  support.
                </p>
              </div>

            </div><div className="affiliate-row reverse">
              <div className="affiliate-logo">
                <img src="/Assets/images/TPA.png" alt="TPA Global" />
              </div>
              <div className="affiliate-text">
                <p>
                  TPA Global is an international knowledge and solutions
                  network specializing in tax, transfer pricing, valuation, and
                  business advisory services. Through this strategic
                  partnership, Machica Group delivers globally aligned
                  solutions and strengthens its ability to support clients with
                  international standards and innovative business strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialSlider />

        {/* CALL TO ACTION */}
        <section className="cta-new">
          <h2>Let's Grow Your Business Together</h2>
          <p>Need professional accounting and business solutions?</p>
          <a href="/contact-us">Get Started</a>
        </section>
      </main>

    </>
  );
}
