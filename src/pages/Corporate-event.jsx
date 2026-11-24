
import React, { useState } from "react";

function Corporateevent() {
  const [showEventModal, setShowEventModal] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openGallery = (image) => {
    setLightboxImage(image);
  };

  const closeGallery = () => {
    setLightboxImage(null);
  };

  const closeEventModal = () => {
    setShowEventModal(false);
  };

  return (
    <>

      {/* HERO */}
      <section className="parent-hero">
        <div className="parent-hero-content">
          <h1>
            Corporate <span>Events</span>
          </h1>

          <p>
            Snapshots of collaboration, innovation, and celebration.
          </p>

          <a href="#events" className="hero-button">
            Explore Events
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events" id="events">
        <div className="container">
          <div className="events-header">
            <div>
              <div className="section-label">CORPORATE LIFE</div>

              <h2 className="section-title">
                Moments Worth 
                <span> Remembering</span>
              </h2>
            </div>

            <p>
              A collection of milestones, celebrations, and experiences
              that define the Machica Group journey.
            </p>
          </div>

          {/* FEATURED EVENT */}
          <article className="featured">
            <div className="featured-image">
              <img
                src="/images/corporate event/MTC/1.jpg"
                alt="PMI Tower"
              />

              <div className="featured-badge">Featured Event</div>
            </div>

            <div className="featured-content">
              <h3>
                Machica Group
                Marks a New Chapter
              </h3>

              <p className="lead">
                A new beginning in a larger, modern workplace designed for
                collaboration and continued growth.
              </p>

              <p className="description">
                On January 28, 2026, Machica Group officially moved to a
                larger office at the 11th Floor of PMI Tower, located at
                the corner of P. Ocampo Sr. and Onyx Streets in La Paz,
                Makati City.

                The relocation marks an important milestone in the
                company's continued growth, reflecting its expanding team,
                increasing client base, and commitment to delivering
                enhanced professional services.
              </p>

              <button
                className="outline-button"
                onClick={() => setShowEventModal(true)}
              >
                View Event
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </article>

          {/* EVENT CARDS */}
          <div className="event-grid">
            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/visiting/4.png"
                  alt="Company visit to Tacloban City Jail Female Dormitory"
                />

                <span className="card-tag">
                  Spreading Joy and Compassion
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">December 16, 2025</div>

                <h3>
                  Company Visits Tacloban City Jail Female Dormitory
                </h3>

                <p>
                  The company organized a meaningful outreach program by
                  visiting the inmates at the Bureau of Jail Management
                  and Penology, Jail Female Dormitory, in Tacloban City
                  bringing gifts and spreading goodwill. The activity
                  encouraged compassion, forgiveness, and small acts of
                  kindness, fostering a sense of community and humanity.
                  By offering spiritual comfort and inner peace, Christmas
                  provides an opportunity for individuals to reflect on
                  their lives and to seek renewal. Through cherished
                  traditions, thoughtful reflection, and meaningful
                  connections, it brings light and purpose even in the
                  darkest of places.
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery("/images/corporate event/visiting/4.png")
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>

            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/christmas/1.png"
                  alt="Machica Group Team"
                />

                <span className="card-tag">
                  Celebrating Unity and Success
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">December 12, 2025</div>

                <h3>Machica Group Annual Christmas Gathering</h3>

                <p>
                  The company held its Annual Christmas Party at Basic
                  Rooms Budget Hotel in Tacloban City, bringing employees
                  together in a year-end gathering that emphasized
                  appreciation, unity, and reflection on the organization’s
                  achievements throughout the year. The event served as an
                  avenue to acknowledge the dedication of the workforce,
                  strengthen workplace relationships, and reinforce a
                  culture of collaboration and shared purpose, reaffirming
                  the company’s commitment to employee engagement and
                  organizational excellence moving forward. The event was
                  capped by employees recognition, exchanging of gifts,
                  and fun activities.
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery("/images/corporate event/christmas/1.png")
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>

            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/CKCC Educ Tour/1.png"
                  alt="CKCC Educational Tour"
                />

                <span className="card-tag">
                  Empowering Future Professionals
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">December 03, 2025</div>

                <h3>CKCC Educational Tour at Machica Group</h3>

                <p>
                  Machica Group welcomes the students of Christ the King
                  College of Calbayog for their educational tour in Tacloban
                  City. The visit highlights the value of learning beyond
                  the classroom, offering students firsthand exposure to
                  real-world business operations and practical applications
                  of their academic lessons. Throughout the tour, students
                  gain meaningful insights from industry practices, while
                  also developing confidence, and early awareness of
                  potential career paths. Machica Group expresses its pride
                  in supporting the students’ academic growth and personal
                  development through this enriching educational experience.
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery(
                      "/images/corporate event/CKCC Educ Tour/2.png"
                    )
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>

            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/strategic planning/2.jpg"
                  alt="Machica Group Team"
                />

                <span className="card-tag">
                  Building Tomorrow Together
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">August 5, 2025</div>

                <h3>
                  Annual Strategic Planning Workshop & Employees Recognition
                </h3>

                <p>
                  Opportunity to reflect on our organization’s performance,
                  recognize our strengths and areas for improvement, and
                  align our goals with our shared vision and mission. It
                  helps us set clear objectives, prioritize key initiatives,
                  allocate our resources effectively, and develop actionable
                  plans with defined timelines and responsibilities. Through
                  open collaboration and discussion, we improve communication
                  across our teams, anticipate potential risks, and ensure
                  that our efforts are strategically focused. The workshop
                  equips us with a unified direction and a strong foundation
                  to achieve long-term success together. The activity was
                  participated by all head office, personnel, held at Hotel
                  Estrella.
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery(
                      "/images/corporate event/strategic planning/1.jpg"
                    )
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>

            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/ECH/2.jpg"
                  alt="Effective Client Handling Seminar"
                />

                <span className="card-tag">
                  Developing strong interpersonal and communication skills
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">November 5, 2025</div>

                <h3>
                  Seminar on Effective Client Handling, Responding with
                  Confidence and Courtesy
                </h3>

                <p>
                  The seminar on Effective Client Handling, Responding with
                  Confidence and Courtesy is essential for developing strong
                  interpersonal and communication skills that directly
                  enhance client satisfaction and business success. It
                  provided practical techniques to manage inquiries, address
                  concerns, and handle challenging situations professionally,
                  ensuring clients feel valued and understood. By fostering
                  confidence, courtesy, and active listening, the seminar
                  helps build trust and long-lasting relationships,
                  ultimately strengthening the company’s reputation and
                  promoting a culture of excellence in client service.
                  Expertly facilitated by Ms. Kiera Mae Lastrilla, the
                  seminar was conducted at Coffee Matters, 125 P. Burgos St.,
                  Brgy. 33, Tacloban City, equipping attendees with valuable
                  insights and practical skills in effective client handling.
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery("/images/corporate event/ECH/2.jpg")
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>

            <article className="event-card">
              <div className="card-image">
                <img
                  src="/images/corporate event/HEP/2.jpg"
                  alt="Machica Group Team"
                />

                <span className="card-tag">
                  Developing character and mindset before skills
                </span>
              </div>

              <div className="card-content">
                <div className="card-date">June 27, 2025</div>

                <h3>
                  "7 Habbits of Highly Effective People" Seminar
                </h3>

                <p>
                  A powerful guide for personal and professional growth,
                  centered on timeless principles of integrity,
                  responsibility, and meaningful relationships. Encouraging
                  individuals to shift from dependence to independence and
                  ultimately to interdependence. Its practical habits, such
                  as being proactive, setting clear goals, prioritizing what
                  matters most, and fostering mutual respect, can be applied
                  in daily life through intentional actions, better time
                  management, effective communication, and continuous
                  self-improvement. The seminar was facilitated by Mr. Santi
                  Getalado, held at Hotel de Fidez,
                </p>

                <button
                  className="card-button"
                  onClick={() =>
                    openGallery("/images/corporate event/HEP/1.jpg")
                  }
                >
                  View Photo
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <div className="container">
          <div className="gallery-heading">
            <h2 className="section-title">
              Behind The Moments
              <span></span>
            </h2>

            <p>
              A glimpse into the people, places, and moments that make
              Machica Group's journey meaningful.
            </p>
          </div>

          <div className="gallery-grid">
            {[
              {
                image: "/images/corporate event/MTC/3.jpg",
                alt: "Machica Group Event",
              },
              {
                image: "/images/corporate event/MTC/6.jpg",
                alt: "PMI Tower",
              },
              {
                image: "/images/corporate event/MTC/4.png",
                alt: "Machica Group Team",
              },
              {
                image: "/images/corporate event/christmas/1.png",
                alt: "Machica Group Team Building",
              },
              {
                image: "/images/corporate event/MTC/5.jpg",
                alt: "Corporate Celebration",
              },
            ].map((item, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => openGallery(item.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openGallery(item.image);
                  }
                }}
              >
                <img src={item.image} alt={item.alt} />

                <div className="gallery-icon">
                  <i className="fa-solid fa-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT MODAL */}
      {showEventModal && (
        <div
          className="modal"
          id="eventModal"
          onClick={closeEventModal}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeEventModal}
              aria-label="Close event modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-image">
              <img
                src="/images/corporate event/MTC/2.png"
                alt="Machica Group New Office"
              />
            </div>

            <div className="modal-body">
              <h2>
                Machica Group Marks
                a New Chapter
              </h2>

              <p>
                On January 28, 2026, Machica Group officially moved to a
                larger office at the 11th Floor of PMI Tower, located at
                the corner of P. Ocampo Sr. and Onyx Streets in La Paz,
                Makati City.

                The relocation marks an important milestone in the
                company's continued growth, reflecting its expanding team,
                increasing client base, and commitment to delivering
                enhanced professional services.

                The new office provides a more spacious and modern
                workplace designed to support collaboration, operational
                efficiency, and an improved client experience.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="lightbox"
          id="lightbox"
          onClick={closeGallery}
        >
          <button
            className="lightbox-close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <img
            src={lightboxImage}
            alt="Corporate Event"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </>
  );
}

export default Corporateevent;
