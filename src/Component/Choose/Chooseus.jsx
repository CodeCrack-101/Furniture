import React from 'react';
import './chooseus.css'

// Reusable Icon components for clarity
const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 1.79 1.11L15 5.88Z" />
  </svg>
);

const PersonnelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const InnovationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="m11 10.27 1 1.73" />
    <path d="m7 3.34 1 1.73" />
    <path d="m13 13.73-1-1.73" />
    <path d="m17 3.34-1 1.73" />
    <path d="m11 13.73 1 1.73" />
    <path d="m7 20.66 1-1.73" />
    <path d="m13 10.27-1-1.73" />
  </svg>
);

const CommitmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);


const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-section">
        <h2 className="section-title">WHY CHOOSE US</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="icon-container">
              <QualityIcon />
            </div>
            <h3>Quality</h3>
            <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <PersonnelIcon />
            </div>
            <h3>Personnel</h3>
            <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <InnovationIcon />
            </div>
            <h3>Innovation</h3>
            <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <CommitmentIcon />
            </div>
            <h3>Commitment</h3>
            <p>This slide is 100% editable. Adapt it to your needs and capture your audience's attention.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;