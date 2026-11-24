
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  const [activeSlide, setActiveSlide] = useState(0);
  const accreditationTrackRef = useRef(null);

  const accreditations = [
    { image: "BSP.png", alt: "BSP Accreditation" },
    { image: "BIR.png", alt: "BIR Accreditation" },
    { image: "BOA.png", alt: "BOA Accreditation" },
    { image: "NEA.png", alt: "NEA Accreditation" },
    { image: "CDA.png", alt: "CDA Accreditation" },
    { image: "SEC.png", alt: "SEC Accreditation" },
  ];

  // ACCREDITATION SLIDER
  useEffect(() => {
    const updateSlider = () => {
      const track = accreditationTrackRef.current;

      if (!track || !track.children.length) return;

      const firstSlide = track.children[0];
      const slideWidth = firstSlide.getBoundingClientRect().width;

      const trackStyle = window.getComputedStyle(track);
      const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;

      track.style.transform = `translateX(-${activeSlide * (slideWidth + gap)}px)`;
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [activeSlide]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % accreditations.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + accreditations.length) % accreditations.length
    );
  };

  return (
    <>

      {/* RED LINE */}
      <div className="red-line"></div>

      {/* HERO */}
      <section className="parent-hero">
        <div className="parent-hero-content">
          <h1>
            About <span>Us</span>
          </h1>

          <p>Our expertise, your solution</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="intro-container">
          <div className="intro-left">
            <span className="section-label">WHO WE ARE</span>

            <img
             src="/Assets/images/logo/STAMP Since 1999.png"
             alt="Machica Group Since 1999"
           />
          </div>

          <div className="intro-right">
            <p className="intro-lead">
              Since 1999, Machica Group has been committed to delivering
              reliable, innovative, and professional solutions to businesses
              across the Philippines.
            </p>

            <p>
              We provide comprehensive accounting, tax, regulatory compliance,
              insurance, and investment services designed to help organizations
              navigate complex business environments with confidence.
            </p>

            <p>
              Over the past quarter-century, our dedication to excellence and
              client-focused service has allowed us to build lasting
              relationships and establish ourselves as a trusted partner for
              businesses seeking sustainable growth.
            </p>

            <div className="intro-signature">
              <div className="signature-line"></div>
              <span>MACHICA GROUP</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="company-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-regular fa-calendar-check"></i>
            </div>

            <div className="stat-number">
              25<span>+</span>
            </div>

            <div className="stat-label">Years of Excellence</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-building"></i>
            </div>

            <div className="stat-number">6</div>

            <div className="stat-label">Major Milestones</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>

            <div className="stat-number">
              25<span>+</span>
            </div>

            <div className="stat-label">Years of Client Trust</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>

            <div className="stat-number">∞</div>

            <div className="stat-label">Opportunities Ahead</div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="journey-section">
        <div className="journey-heading">
          <div>
            <span className="section-label">OUR STORY</span>

            <h2>
              From Aspiration
              <br />
              <span>to Achievements</span>
            </h2>
          </div>

          <p>
            A journey built on trust, dedication, innovation, and an unwavering
            commitment to our clients.
          </p>
        </div>

        <div className="video-card">
          <div className="video-header">
            <div className="video-title">
              <i className="fa-solid fa-play"></i>

              <div>
                <span>25th Year Retrospective</span>
                <strong>Looking Back, Moving Forward</strong>
              </div>
            </div>
          </div>

          <div className="video-wrapper">
    <iframe
        src="https://drive.google.com/file/d/18c54nidAeqyr3ecwmdzYNebodTXUzeWp/preview"
        width="100%"
        height="100%"
        allow="autoplay"
        allowFullScreen
        title="Machica Group Anniversary Video"
    ></iframe>
</div>
        </div>
      </section>

      {/* CORPORATE MILESTONES */}
      <section className="milestone-section">
        <div className="milestone-heading">
          <span className="section-label">OUR HISTORY</span>

          <h2>
            Milestones That
            <span> Define Us</span>
          </h2>

          <p>
            From our humble beginnings in 1999 to our continued expansion
            today, every milestone reflects our growth, resilience, and
            commitment to excellence.
          </p>
        </div>

        <div className="milestone-grid">
          {/* 1999 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/1999.png"
                alt="Machica Group 1999"
              />

              <div className="milestone-year">1999</div>
            </div>

            <div className="milestone-content">
              <span>THE BEGINNING</span>

              <h3>Where It All Started</h3>

              <p>
                Established our first office in Tacloban City, laying the
                foundation for the Machica Group journey.
              </p>
            </div>
          </article>

          {/* 2003 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/2003.png"
                alt="Machica Group 2003"
              />

              <div className="milestone-year">2003</div>
            </div>

            <div className="milestone-content">
              <span>EXPANSION</span>

              <h3>A New Chapter</h3>

              <p>
                Expanded into a larger office and launched Machica Firm, Inc.,
                marking an important step in our evolution.
              </p>
            </div>
          </article>

          {/* 2014 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/2014.png"
                alt="Machica Group 2014"
              />

              <div className="milestone-year">2014</div>
            </div>

            <div className="milestone-content">
              <span>NEW HORIZONS</span>

              <h3>Makati Business Office</h3>

              <p>
                Opened our Makati Business Office, strengthening our presence
                in one of the country's leading business districts.
              </p>
            </div>
          </article>

          {/* 2018 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/2018.png"
                alt="Machica Group 2018"
              />

              <div className="milestone-year">2018</div>
            </div>

            <div className="milestone-content">
              <span>INNOVATION</span>

              <h3>Machica Group Center</h3>

              <p>
                Celebrated the inauguration of the Machica Group Center,
                representing our commitment to innovation and excellence.
              </p>
            </div>
          </article>

          {/* 2024 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/2024.jpg"
                alt="Machica Group 2024"
              />

              <div className="milestone-year">2024</div>
            </div>

            <div className="milestone-content">
              <span>25 YEARS</span>

              <h3>A Milestone Year</h3>

              <p>
                Inaugurated Machica Group's new headquarters, marking our
                growth, innovation, and 25th anniversary.
              </p>
            </div>
          </article>

          {/* 2026 */}
          <article className="milestone-card">
            <div className="milestone-image">
              <img
                src="/Assets/images/milestone/2026.jpg"
                alt="Machica Group 2026"
              />

              <div className="milestone-year">2026</div>
            </div>

            <div className="milestone-content">
              <span>THE NEXT CHAPTER</span>

              <h3>Bigger. Better. Forward.</h3>

              <p>
                Machica Group Manila officially moved to a bigger office,
                reflecting our continued growth and commitment to better
                serving our clients.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="about-cta">
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <span>LOOKING AHEAD</span>

          <h2>
            Building the Future
            <br />
            <strong>Together.</strong>
          </h2>

          <p>
            Our journey continues with the same commitment to excellence that
            has defined Machica Group for more than two decades.
          </p>

          <Link to="/contact-us" className="cta-button">
            Get in Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="vision-mission-section">
        <div className="vm-container">
          {/* LEFT CONTENT */}
          <div className="vm-content">
            <div className="vm-heading">
              <h2>
                Vision <strong>and</strong> Mission
              </h2>
            </div>

            {/* VISION */}
            <div className="vm-block">
              <div className="vm-title">
                <h3>VISION</h3>
              </div>

              <p>
                To be an{" "}
                <strong>
                  internationally-recognized service group of 
                  socially inspiring leaders and professionals
                </strong>{" "}
                passionately driven by best practices and innovations 
                in delivering optimum value to all domestic and
                overseas stakeholders.
              </p>
            </div>

            {/* MISSION */}
            <div className="vm-block mission-block">
              <div className="vm-title">
                <h3>MISSION</h3>
              </div>

              <div className="mission-list">
                <p>
                  We shall forge <strong>ideal business relationship</strong>{" "}
                  with business partners and clients.
                </p>

                <p>
                  We shall develop{" "}
                  <strong>
                    highly motivated, values-driven, and accomplished leaders
                    and professionals.
                  </strong>
                </p>

                <p>
                  We shall endeavor{" "}
                  <strong>
                    consistent leading-edge innovations and organizational
                    excellence.
                  </strong>
                </p>

                <p>
                  We shall afford{" "}
                  <strong>best value to our stakeholders.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="vm-image">
            <div className="vm-image-frame">
              <img
                src="/Assets/images/about/vision-mission.png"
                alt="Machica Group Vision Mission and Core Values"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="core-values-section">
        <div className="core-values-container">
          {/* HEADER */}
          <div className="core-values-header">
            <h2>
              Core <strong>Values</strong>
            </h2>

          </div>

          {/* FEATURE IMAGE */}
          <div className="core-values-feature">
            <div className="core-values-image">
              <img
                src="/Assets/images/about/core-values.png"
                alt="Machica Group Core Values"
              />
            </div>

            <div className="core-values-caption">
              <span>OUR COMMITMENT</span>

              <h3>
                Driven by values. 
                <strong> Defined by excellence.</strong>
              </h3>
            </div>
          </div>

          {/* VALUES LIST */}
          <div className="values-list">
            {/* SERVICE */}
            <div className="value-card">
              <div className="value-number">•</div>

              <div className="value-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>

              <div className="value-content">
                <h3>Service &amp; Solutions</h3>

                <p>
                  We are to serve clients effectively and efficiently by providing
                  professional, tailored-fit solution, quality service at competitive prices. We are to deliver
                  services with ingenuity and initiative, boldness in innovation, and openness to new ideas and
                  methods.
                </p>
              </div>

              <div className="value-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>

            {/* INTEGRITY */}
            <div className="value-card">
              <div className="value-number">•</div>

              <div className="value-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>

              <div className="value-content">
                <h3>Integrity</h3>

                <p>
                  We conduct our business in the highest ethical and professional manner. We deliver
                  professional services in accordance with the Firm’s policies and relevant technical, regulatory,
                  professional standards. In competing enthusiastically, we confine our practices to what is legal
                  and ethical.
                </p>
              </div>

              <div className="value-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>

            {/* EXCELLENCE */}
            <div className="value-card">
              <div className="value-number">•</div>

              <div className="value-icon">
                <i className="fa-solid fa-trophy"></i>
              </div>

              <div className="value-content">
                <h3>Excellence</h3>

                <p>
                  We are inspired to excel at all times. We shall achieve excellence by delivering what
                  we promise and by adding value beyond what is expected. In our pursuit for excellence, we
                  shall endeavor for better ways, continuously develop our competencies and innovate.
                </p>
              </div>

              <div className="value-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>

            {/* Quality */}
            <div className="value-card">
              <div className="value-number">•</div>

              <div className="value-icon">
                <i className="fa-solid fa-award"></i>
              </div>

              <div className="value-content">
                <h3>Quality</h3>

                <p>
                  We consistently promote quality practice (based on prescribed quality management
                  standards, including ISQM 1 &amp; 2), quality service, quality output, and quality people. We
                  recognize that clients expect value for money and demand quality services. Quality services
                  attract and retain quality clients and quality people. Improved quality services would mean
                  better control of business risks. Quality differentiates us in the market place.
                </p>
              </div>

              <div className="value-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>

            {/* Teamwork */}
            <div className="value-card">
              <div className="value-number">•</div>

              <div className="value-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <div className="value-content">
                <h3>Teamwork</h3>

                <p>
                  We believe in effective team effort and synergy. Espousing teamwork spirit with
                  peers, colleagues, and clients will allow us to reach best solutions.
                </p>
              </div>

              <div className="value-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="accreditation-section">
        <div className="accreditation-container">
          {/* LEFT */}
          <div className="accreditation-intro">
            <span>TRUST &amp; CREDIBILITY</span>

            <h2>
              Our <strong>Accreditations</strong>
            </h2>

            <p>
              Machica Group and its partners are duly accredited with various
              government and regulatory offices for tax, accounting, audit, and
              professional practice.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="accreditation-slider">
            <button
              type="button"
              className="accreditation-arrow accreditation-prev"
              aria-label="Previous accreditation"
              onClick={prevSlide}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="accreditation-window">
              <div
                className="accreditation-track"
                ref={accreditationTrackRef}
              >
                {accreditations.map((item, index) => (
                  <div className="accreditation-slide" key={item.image}>
                    <img
                      src={`/Assets/images/about/accreditations/${item.image}`}
                      alt={item.alt}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="accreditation-arrow accreditation-next"
              aria-label="Next accreditation"
              onClick={nextSlide}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* DOTS */}
            <div className="accreditation-dots">
              {accreditations.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  className={activeSlide === index ? "active" : ""}
                  aria-label={`Go to accreditation ${index + 1}`}
                  aria-current={activeSlide === index ? "true" : undefined}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default AboutUs;
