
import React, { useState, useEffect } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0sZCqJ4lio7II0LWInZwq5ubNu7z-OHl4cFofMFt80huPGom2OQqR7UoobXUfNmxtsw/exec";

const jobs = [
    {
        id: 1,
        code: "AC",
        title: "Accounting Associate",
        category: "accounting",
        department: "ACCOUNTING",
        level: "Entry / Mid Level",
        description:
            "Assist in accounting operations, financial records, reporting, and client-related accounting requirements."
    },
    {
        id: 2,
        code: "SA",
        title: "Senior Accounting Associate",
        category: "accounting",
        department: "ACCOUNTING",
        level: "Mid / Senior Level",
        description:
            "Handle accounting engagements, financial reporting, client coordination, and review of accounting records."
    },
    {
        id: 3,
        code: "TX",
        title: "Tax Associate",
        category: "tax",
        department: "TAX",
        level: "Entry / Mid Level",
        description:
            "Assist in tax compliance, preparation of tax-related documents, government filings, and client requirements."
    },
    {
        id: 4,
        code: "AD",
        title: "Administrative Staff",
        category: "admin",
        department: "ADMIN",
        level: "Entry Level",
        description:
            "Support daily administrative operations, documentation, coordination, and office activities."
    },
    {
        id: 5,
        code: "IT",
        title: "IT / Technical Support",
        category: "it",
        department: "INFORMATION TECHNOLOGY",
        level: "Entry / Mid Level",
        description:
            "Provide technical assistance, maintain systems and devices, troubleshoot issues, and support internal users."
    },
    {
        id: 6,
        code: "CO",
        title: "Compliance Officer",
        category: "tax",
        department: "COMPLIANCE",
        level: "Mid Level",
        description:
            "Assist with regulatory compliance requirements, documentation, monitoring, and government transactions."
    }
];

const filters = [
    { label: "All Positions", value: "all" },
    { label: "Accounting", value: "accounting" },
    { label: "Tax & Compliance", value: "tax" },
    { label: "Administration", value: "admin" },
    { label: "IT", value: "it" }
];

export default function Career() {

    const [activeFilter, setActiveFilter] = useState("all");

    const [selectedPosition, setSelectedPosition] = useState("");

    const [applicationOpen, setApplicationOpen] = useState(false);

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null
    });

    // Filter jobs
    const filteredJobs = jobs.filter(job =>
        activeFilter === "all" ||
        job.category === activeFilter
    );

    // Handle input changes
    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));

    };

    // Open application modal
    const openApplication = (position) => {

        setSelectedPosition(position);

        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            resume: null
        });

        setApplicationOpen(true);

    };

    // Close application modal
    const closeApplication = () => {

        if (loading) return;

        setApplicationOpen(false);

    };

    // Close result modal
    const closeResult = () => {

        setResult(null);

    };

    // Convert uploaded CV to Base64
    const convertToBase64 = (file) => {

        return new Promise((resolve, reject) => {

            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {

                const base64 = reader.result.split(",")[1];

                resolve(base64);

            };

            reader.onerror = reject;

        });

    };

    // Submit application
    const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return;

  if (!form.resume) {
    setResult({ success: false, message: "Please select your CV before submitting." });
    return;
  }

  // file.type can be empty for some .doc/.docx files on Windows, so check the extension too
  const ext = form.resume.name.split(".").pop().toLowerCase();
  if (!["pdf", "doc", "docx"].includes(ext)) {
    setResult({ success: false, message: "Please upload your CV in PDF, DOC, or DOCX format." });
    return;
  }

  if (form.resume.size > 5 * 1024 * 1024) {
    setResult({ success: false, message: "Your CV is too large. The maximum file size is 5MB." });
    return;
  }

  setLoading(true);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);

  try {
    const base64 = await convertToBase64(form.resume);

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        position: selectedPosition,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        resumeName: form.resume.name,
        resumeType: form.resume.type || "application/octet-stream",
        resumeBase64: base64
      }),
      signal: controller.signal
    });

    const data = await res.json();

    if (data.success) {
      setApplicationOpen(false); // close only on confirmed success
      setResult({
        success: true,
        message: data.message || "Thank you for your interest in joining Machica Group. Your application has been received."
      });
    } else {
      // keep the application modal open so the user doesn't lose their input
      setResult({
        success: false,
        message: data.message || "Your application was not recorded. Please try again."
      });
    }
  } catch (err) {
    setResult({
      success: false,
      message:
        err.name === "AbortError"
          ? "The request timed out. Please check your connection and try again."
          : "There was a problem submitting your application. Please try again."
    });
  } finally {
    clearTimeout(timer);
    setLoading(false);
  }
};

    // Close modals with Escape
    useEffect(() => {

        const handleEscape = (e) => {

            if (e.key === "Escape" && !loading) {

                setApplicationOpen(false);

                setResult(null);

            }

        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };

    }, [loading]);

    // Lock background scrolling
    useEffect(() => {

        document.body.classList.toggle(
            "modal-open",
            applicationOpen || !!result
        );

        return () => {
            document.body.classList.remove("modal-open");
        };

    }, [applicationOpen, result]);

    return (

        <>

            {/* HERO */}

            <section className="parent-hero">

                <div className="career-container hero-content">

                    <div className="hero-text">

                        <span className="eyebrow">
                            OUR CAREERS
                        </span>

                        <h1>
                            Find Your Place.
                            <span>Build Your Future.</span>
                        </h1>

                        <p>
                            Join a growing team of professionals who are passionate
                            about excellence, innovation, and creating meaningful
                            solutions for businesses.
                        </p>

                        <div className="hero-actions">

                            <a href="#jobs" className="btn-red">
                                View Open Positions
                                <span>→</span>
                            </a>

                            <a href="#why-machica" className="btn-light">
                                Why Us?
                            </a>

                        </div>

                    </div>

                    <div className="hero-hiring-card">

                        <div className="hiring-badge">
                            <span className="pulse"></span>
                            WE'RE HIRING
                        </div>

                        <h3>
                            Your next opportunity
                            could be here.
                        </h3>

                        <p>
                            Explore our available positions and discover
                            where your skills can contribute to our team.
                        </p>

                        <div className="hiring-count">
                            <strong>{jobs.length.toString().padStart(2, "0")}</strong>
                            <span>Open Positions</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* INTRO */}

            <section className="career-intro">

                <div className="career-container intro-grid">

                    <div>

                        <span className="eyebrow">
                            YOUR CAREER JOURNEY
                        </span>

                        <h2>
                            More than a job.
                            <span>A place to grow.</span>
                        </h2>

                    </div>

                    <div>

                        <p>
                            At Machica Group, we believe that great organizations
                            are built by great people. We provide an environment
                            where professionals can learn, collaborate, develop
                            their expertise, and take on new challenges.
                        </p>

                    </div>

                </div>

            </section>

            {/* WHY MACHICA */}

            <section className="why-section" id="why-machica">

                <div className="career-container">

                    <div className="section-title">

                        <span className="eyebrow">
                            WHY JOIN US
                        </span>

                        <h2>
                            Grow with <span>Machica Group.</span>
                        </h2>

                    </div>

                    <div className="why-grid">

                        {[
                            {
                                number: "01",
                                icon: "↗",
                                title: "Career Growth",
                                description: "Develop your skills and gain valuable experience through meaningful projects and new challenges."
                            },
                            {
                                number: "02",
                                icon: "✦",
                                title: "Meaningful Work",
                                description: "Contribute to solutions that help businesses operate, grow, and achieve their goals."
                            },
                            {
                                number: "03",
                                icon: "◎",
                                title: "Team Culture",
                                description: "Work with professionals who value collaboration, accountability, and continuous improvement."
                            },
                            {
                                number: "04",
                                icon: "★",
                                title: "Professional Excellence",
                                description: "Be part of an organization committed to quality, integrity, and professional service."
                            }
                        ].map(item => (

                            <div
                                className={`why-card ${item.number === "02" ? "active" : ""}`}
                                key={item.number}
                            >

                                <div className="why-number">
                                    {item.number}
                                </div>

                                <div className="why-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* JOB OPENINGS */}

            <section className="jobs-section" id="jobs">

                <div className="career-container">

                    <div className="jobs-header">

                        <div>

                            <span className="eyebrow">
                                JOIN OUR TEAM
                            </span>

                            <h2>
                                We're <span>Hiring.</span>
                            </h2>

                            <p>
                                Explore our current opportunities and find
                                the position that matches your skills.
                            </p>

                        </div>

                        <div className="jobs-status">

                            <span className="status-dot"></span>

                            <span>Open for Applications</span>

                        </div>

                    </div>

                    {/* FILTERS */}

                    <div className="job-filters">

                        {filters.map(filter => (

                            <button
                                key={filter.value}
                                className={`filter ${activeFilter === filter.value ? "active" : ""}`}
                                onClick={() => setActiveFilter(filter.value)}
                                type="button"
                            >
                                {filter.label}
                            </button>

                        ))}

                    </div>

                    {/* JOB LIST */}

                    <div className="job-list">

                        {filteredJobs.map(job => (

                            <article className="job-card" data-category={job.category} key={job.id}>

                                <div className="job-icon">
                                    {job.code}
                                </div>

                                <div className="job-info">

                                    <div className="job-tags">

                                        <span className="tag red">
                                            FULL-TIME
                                        </span>

                                        <span className="tag">
                                            {job.department}
                                        </span>

                                    </div>

                                    <h3>{job.title}</h3>

                                    <p>{job.description}</p>

                                    <div className="job-meta">

                                        <span>📍 Makati City</span>

                                        <span>💼 {job.level}</span>

                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="apply-button"
                                    onClick={() => openApplication(job.title)}
                                >
                                    Apply Now
                                    <span>→</span>
                                </button>

                            </article>

                        ))}

                        {filteredJobs.length === 0 && (
                            <p>No available positions in this category.</p>
                        )}

                    </div>

                </div>

            </section>

            {/* WHAT WE LOOK FOR */}

            <section className="looking-section">

                <div className="career-container looking-grid">

                    <div>

                        <span className="eyebrow">
                            WHO WE'RE LOOKING FOR
                        </span>

                        <h2>
                            Bring Your Skills.
                            <span>Bring Your Ideas.</span>
                        </h2>

                        <p>
                            We're looking for people who are willing to learn,
                            collaborate, take initiative, and contribute to
                            a professional and dynamic working environment.
                        </p>

                    </div>

                    <div className="qualities">

                        {[
                            ["01", "Driven", "Motivated to learn and improve."],
                            ["02", "Collaborative", "Works well with people and teams."],
                            ["03", "Adaptable", "Ready to take on new challenges."],
                            ["04", "Professional", "Committed to quality and integrity."]
                        ].map(item => (

                            <div key={item[0]}>

                                <span>{item[0]}</span>

                                <strong>{item[1]}</strong>

                                <p>{item[2]}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="career-cta">

                <div className="career-container">

                    <span className="eyebrow">
                        DON'T SEE YOUR POSITION?
                    </span>

                    <h2>
                        We'd Still Love<br />
                        <span>to Hear From You.</span>
                    </h2>

                    <p>
                        Send us your resume and tell us how you can contribute
                        to Machica Group.
                    </p>

                    <a
                        href="mailto:careers@machicagroup.com"
                        className="cta-button"
                    >
                        Send Your Resume
                        <span>→</span>
                    </a>

                </div>

            </section>

            {/* APPLICATION MODAL */}

            {applicationOpen && (

                <div className="application-modal active">

                    <div
                        className="modal-backdrop"
                        onClick={closeApplication}
                    ></div>

                    <div className="application-box">

                        <button
                            type="button"
                            className="modal-close"
                            onClick={closeApplication}
                            disabled={loading}
                        >
                            ×
                        </button>

                        <span className="eyebrow">
                            JOB APPLICATION
                        </span>

                        <h2>
                            Apply for
                            <span> {selectedPosition}</span>
                        </h2>

                        <p>
                            Submit your information and resume to apply
                            for this position.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Juan Dela Cruz"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Contact Number</label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+63 9XX XXX XXXX"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Resume / CV</label>

                                    <input
                                        type="file"
                                        name="resume"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleChange}
                                        required
                                    />

                                    <small>PDF, DOC, DOCX — Maximum 5MB</small>

                                </div>

                            </div>

                            <div className="form-group">

                                <label>Message</label>

                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Tell us briefly about yourself..."
                                    value={form.message}
                                    onChange={handleChange}
                                />

                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={loading}
                            >

                                {loading ? "Submitting" : "Submit Application"}

                                <span>{loading ? "..." : "→"}</span>

                            </button>

                        </form>

                    </div>

                </div>

            )}

            {/* RESULT MODAL */}

            {result && (

                <div className="result-modal active">

                    <div
                        className="result-modal-backdrop"
                        onClick={closeResult}
                    ></div>

                    <div className="result-modal-box">

                        <button
                            type="button"
                            className="result-modal-close"
                            onClick={closeResult}
                        >
                            ×
                        </button>

                        <div className={`result-icon ${result.success ? "success" : "error"}`}>

                            {result.success ? "✓" : "×"}

                        </div>

                        <span className={`result-label ${result.success ? "success-text" : "error-text"}`}>

                            {result.success ? "THANK YOU" : "PLEASE TRY AGAIN"}

                        </span>

                        <h2>
                            Application{" "}
                            <span>
                                {result.success ? "Submitted!" : "Not Submitted"}
                            </span>
                        </h2>

                        <p>{result.message}</p>

                        <button
                            type="button"
                            className={`result-button ${result.success ? "success-button" : "error-button"}`}
                            onClick={closeResult}
                        >
                            {result.success ? "Done" : "Try Again"}
                            <span>{result.success ? "→" : "↻"}</span>
                        </button>

                    </div>

                </div>

            )}


        </>

    );

}
