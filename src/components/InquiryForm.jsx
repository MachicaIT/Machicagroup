import { useState, useEffect, useRef } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Briefcase,
  Clock,
  Calendar,
  MessageSquare,
  Lock,
  ArrowRight,
  LoaderCircle
} from "lucide-react";

import "../Styles/inquiries.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyJk-gO7HN4i59_lc6HUZtkwhukHB0uRDbRK_JpVY9K7Nh75QRL793IVUj1cryC4PmXwQ/exec";

// ========================================
// REUSABLE COMPONENTS
// ========================================

const Field = ({ label, icon: Icon, children, full = false }) => (
  <div className={`field ${full ? "full" : ""}`}>
    <label>{label}</label>
    <div className="input-wrapper">
      <Icon size={18} />
      {children}
    </div>
  </div>
);

const Section = ({ title, description, children }) => (
  <div className="form-section">
    <div className="section-heading">
      <div className="title">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>

    <div className="form-grid two">{children}</div>
  </div>
);

// ========================================
// FORM OPTIONS
// ========================================

const businessTypes = [
  "Bank and Financial",
  "Energy and Electric Cooperative",
  "Manufacturing and Trading",
  "Entertainment and Media",
  "Holding Companies",
  "Agri-ventures",
  "Hotels & Restaurant",
  "Hospitals and Medical Services",
  "Other"
];

const services = [
  "BUSINESS & CORPORATE ADVISORY",
  "REGULATORY, FINANCE, AND TAX COMPLIANCE SERVICES",
  "HR & EMPLOYEE BENEFITS AND ACTUARIAL CONSULTING",
  "TRANSFER PRICING ADVISORY",
  "INSURANCE SERVICES",
  "INVESTMENT SERVICES",
  "Other"
];

// ========================================
// MAIN INQUIRY FORM
// ========================================

export default function InquiryForm() {
  const formRef = useRef(null);

  // FORM STATES
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { success: boolean, message: string }

  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const closeResult = () => setResult(null);

  // ========================================
  // FORM SUBMISSION
  // ========================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    if (!form || !form.reportValidity()) return;

    setLoading(true);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams(new FormData(form)), // simple request, no preflight
        signal: controller.signal
      });

      const data = await res.json();

      if (data.success) {
        setResult({
          success: true,
          message:
            "Thank you for contacting Machica Group. Your inquiry has been received. Our team will get back to you soon."
        });

        form.reset();
        setMessage("");
        setMessageLength(0);
      } else {
        setResult({
          success: false,
          message: data.message || "Your inquiry was not recorded. Please try again."
        });
      }
    } catch (err) {
      setResult({
        success: false,
        message:
          err.name === "AbortError"
            ? "The request timed out. Please check your connection and try again."
            : "There was a problem submitting your inquiry. Please try again."
      });
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

  // ========================================
  // ESCAPE KEY + SCROLL LOCK
  // ========================================

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setResult(null);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", !!result);
    return () => document.body.classList.remove("modal-open");
  }, [result]);

  // MINIMUM APPOINTMENT DATE

  const today = new Date();

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  // ========================================
  // RENDER
  // ========================================

  return (
    <div className="inquiry-page">
      {/* LEFT INFORMATION PANEL */}

      <section className="intro-panel">
        <div className="intro-content">
          <div className="brand">
            <div className="brand-logo">
              <img src="/Assets/images/logo/MG.png" alt="Machica Group" />
            </div>

            <div>
              <strong>Machica Group</strong>
            </div>
          </div>

          <div className="intro-main">
            <h1>
              Let's build your
              <strong>business future.</strong>
            </h1>

            <span>
              Tell us about your business and what you need. Our team will
              review your inquiry and get in touch with you to discuss the next
              steps.
            </span>

            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">
                  <Building2 />
                </div>

                <div>
                  <strong>Business Solutions</strong>
                  <span>Professional corporate and business services.</span>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  <User />
                </div>

                <div>
                  <strong>Expert Consultation</strong>
                  <span>Discuss your requirements with our team.</span>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  <Calendar />
                </div>

                <div>
                  <strong>Convenient Scheduling</strong>
                  <span>Choose your preferred consultation date.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM PANEL */}

      <section className="form-panel">
        <div className="form-container">
          <div className="mobile-brand">
            <div className="brand-logo">MG</div>

            <div>
              <strong>Machica</strong>
              <span>GROUP</span>
            </div>
          </div>

          <div className="form-heading">
            <h2>Inquire Now!</h2>

            <p>
              Please provide your information below. Fields marked with{" "}
              <b>*</b> are required.
            </p>
          </div>

          <form ref={formRef} id="inquiryForm" onSubmit={handleSubmit}>
            {/* PERSONAL INFORMATION */}

            <Section
              title="Personal Information"
              description="Tell us who we will be communicating with."
            >
              <Field label={<>First Name <span>*</span></>} icon={User}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter first name"
                  required
                />
              </Field>

              <Field label={<>Last Name <span>*</span></>} icon={User}>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  required
                />
              </Field>

              <Field label={<>Email Address <span>*</span></>} icon={Mail}>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                />
              </Field>

              <Field label={<>Contact Number <span>*</span></>} icon={Phone}>
                <input
                  type="tel"
                  name="contact"
                  placeholder="09XXXXXXXXX"
                  pattern="[0-9+\-\s()]{7,20}"
                  required
                />
              </Field>
            </Section>

            {/* BUSINESS INFORMATION */}

            <Section
              title="Business Information"
              description="Help us understand your business."
            >
              <Field label="Business Type" icon={Building2}>
                <select name="business_type" defaultValue="">
                  <option value="">Select business type</option>

                  {businessTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Business Name" icon={Building2}>
                <input
                  type="text"
                  name="business_name"
                  placeholder="Enter business name"
                />
              </Field>

              <Field label="Business Address" icon={MapPin} full>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter business address"
                />
              </Field>
            </Section>

            {/* SERVICE AND APPOINTMENT */}

            <Section
              title="Service & Appointment"
              description="Tell us what service you are interested in."
            >
              <Field label={<>Service <span>*</span></>} icon={Briefcase} full>
                <select name="service" defaultValue="" required>
                  <option value="">Select a service</option>

                  {services.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred Appointment" icon={Clock}>
                <select name="appointment" defaultValue="">
                  <option value="">Select preferred appointment</option>
                  <option value="Zoom Meeting">Zoom Meeting</option>
                  <option value="Walk-in">Walk-in</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </Field>

              <Field label="Preferred Date" icon={Calendar}>
                <input type="date" name="date" min={minDate} />
              </Field>
            </Section>

            {/* YOUR MESSAGE */}

            <Section
              title="Your Message"
              description="Give us a brief description of your inquiry."
            >
              <Field label={<>Message <span>*</span></>} icon={MessageSquare} full>
                <textarea
                  name="message"
                  rows="6"
                  maxLength={500}
                  placeholder="Tell us how we can assist you..."
                  required
                  value={message}
                  onChange={(e) => {
                    const value = e.target.value;
                    setMessage(value);
                    setMessageLength(value.length);
                  }}
                />
              </Field>

              <div className="character-count">{messageLength} / 500 characters</div>
            </Section>

            {/* SUBMIT BUTTON */}

            <div className="form-submit">
              <div className="privacy-note">
                <Lock size={16} />
                <span>Your information will be handled confidentially.</span>
              </div>

              <button
                type="submit"
                className={`submit-button ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                <span>{loading ? "Submitting..." : "Submit Inquiry"}</span>

                {loading ? <LoaderCircle className="spin" /> : <ArrowRight />}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* RESULT MODAL */}

      {result && (
        <div className="result-modal active">
          <div className="result-modal-backdrop" onClick={closeResult}></div>

          <div className="result-modal-box">
            <button
              type="button"
              className="result-modal-close"
              onClick={closeResult}
              aria-label="Close"
            >
              ×
            </button>

            <div className={`result-icon ${result.success ? "success" : "error"}`}>
              {result.success ? "✓" : "×"}
            </div>

            <span
              className={`result-label ${
                result.success ? "success-text" : "error-text"
              }`}
            >
              {result.success ? "THANK YOU" : "PLEASE TRY AGAIN"}
            </span>

            <h2>
              Inquiry{" "}
              <span>{result.success ? "Submitted!" : "Not Submitted"}</span>
            </h2>

            <p>{result.message}</p>

            <button
              type="button"
              className={`result-button ${
                result.success ? "success-button" : "error-button"
              }`}
              onClick={closeResult}
            >
              {result.success ? "Done" : "Try Again"}
              <span>{result.success ? "→" : "↻"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
