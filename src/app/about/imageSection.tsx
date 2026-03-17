"use client";

import Image from "next/image";

export default function ExpertsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .experts-section {
          background: #eeede9;
          padding: 60px 0 100px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden; /* Clips the bleeding side images */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .experts-dashed {
          width: 60%;
          border: none;
          border-top: 5px dashed #2a2a2a;
          margin-bottom: 20px;
        }

        .experts-rule {
          width: 120px;
          border: none;
          border-top: 2px solid #2a2a2a;
          margin-bottom: 40px;
        }

        .experts-heading {
          max-width: 629px;
          text-align: center;
          font-size: 1.25rem;
          color: #5E6C6A;
          margin-bottom: -20px;
          line-height: 1.6;
          font-weight: 400;
        }

        /* The Container for all images */
        .experts-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }

        /* Base card style */
        .expert-card {
          position: relative;
          width: 196px;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          background: #ccc;
          flex-shrink: 0;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        /* 1. Bleed Left */
        .card-bleed-left {
          margin-left: -80px; /* Pulls it off screen */
          opacity: 0.8;
        }

        /* 2. Stacked Pair (Left) */
        .stacked-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* 3. Center Trio Styles */
        .card-center-low { align-self: center; transform: translateY(20px); }
        .card-center-high { align-self: flex-end; transform: translateY(-20px); }

        /* 4. Bleed Right */
        .card-bleed-right {
          margin-right: -80px;
          opacity: 0.8;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .card-bleed-left, .card-bleed-right { display: none; }
        }

        @media (max-width: 768px) {
          .experts-container {
            flex-wrap: wrap;
            padding: 20px;
          }
          .expert-card { width: 140px; height: 180px; transform: none !important; }
          .stacked-container { flex-direction: row; }
        }
      `}</style>

      <section className="experts-section">
        <hr className="experts-dashed" />
        <hr className="experts-rule" />
        
        <p className="experts-heading">
          Our Experts Combine Cutting-Edge Technology With Creative
          Problem-Solving To Deliver Intelligent Networking Solutions.
        </p>

        <div className="experts-container">
          {/* Left Bleed */}
          <div className="expert-card card-bleed-left">
            <Image src="/images/expert-side-left.jpg" alt="Expert" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Stacked Left */}
          <div className="stacked-container">
            <div className="expert-card"><Image src="/images/expert-1.jpg" alt="Expert 1" fill style={{ objectFit: "cover" }} /></div>
            <div className="expert-card"><Image src="/images/expert-2.jpg" alt="Expert 2" fill style={{ objectFit: "cover" }} /></div>
          </div>

          {/* Center Three (The staggered "wave") */}
          <div className="expert-card card-center-low">
            <Image src="/images/expert-3.jpg" alt="Expert 3" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="expert-card card-center-high">
            <Image src="/images/expert-4.jpg" alt="Expert 4" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="expert-card card-center-low">
            <Image src="/images/expert-5.jpg" alt="Expert 5" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Stacked Right */}
          <div className="stacked-container">
            <div className="expert-card"><Image src="/images/expert-6.jpg" alt="Expert 6" fill style={{ objectFit: "cover" }} /></div>
            <div className="expert-card"><Image src="/images/expert-7.jpg" alt="Expert 7" fill style={{ objectFit: "cover" }} /></div>
          </div>

          {/* Right Bleed */}
          <div className="expert-card card-bleed-right">
            <Image src="/images/expert-side-right.jpg" alt="Expert" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>
    </>
  );
}