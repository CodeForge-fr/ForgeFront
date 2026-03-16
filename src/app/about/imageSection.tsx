"use client";

import Image from "next/image";

export default function ExpertsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .experts-section {
          background: #eeede9;
          padding: 48px 0 72px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Dashed top rule */
        .experts-dashed {
          width: 70%;
          margin: 80px auto 20px auto;
          border: none;
          border-top: 4px dashed #2a2a2a;
        }

        /* Short center underline */
        .experts-rule {
          width: 120px;
          margin: 0 auto 20px;
          border: none;
          border-top: 2px solid #2a2a2a;
        }
        .experts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
          grid-template-rows: 240px 240px;
          column-gap: 10px;
          row-gap: 10px;
          justify-content: center;
          /* let side cards bleed */
          overflow: visible;
        }

        .expert-card {
          width: 196px;
          height: 240px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 6px 24px rgba(0,0,0,0.10);
          background: #ccc;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .expert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.16);
        }

        /* ── Col 1 — side-left bleed ── */
        .card-c1 {
          grid-column: 1;
          grid-row: 1 / 3;
          align-self: center;
          justify-self: center;
          transform: translateX(-20px);
        }

        /* ── Col 2 — two stacked ── */
        .card-c2-top {
          grid-column: 2;
          grid-row: 1;
          align-self: end;  
        }
        .card-c2-bot {
          grid-column: 2;
          grid-row: 2;
          align-self: start;  /* hugs the gap */
        }

        .card-c8-top {
          grid-column: 8;
          grid-row: 1;
          align-self: end;
        }
        .card-c8-bot {
          grid-column: 8;
          grid-row: 2;
          align-self: start;
        }

        .card-c9 {
          grid-column: 9;
          grid-row: 1 / 3;
          align-self: center;
          justify-self: center;
          transform: translateX(20px);
        }

        /* ── Text cell — cols 4–6, row 1 only (top half) ── */
        // .experts-text-cell {
        //   grid-column: 4 / 7;
        //   grid-row: 1 / 2;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   text-align: center;
        //   padding: 0 16px;
        //   pointer-events: none;
        // }

        .experts-text-cell p {
          font-size: 1rem;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.7;
          margin: 0;
          max-width: 340px;
        }

        .experts-sec {
         margin: 0 auto;
        }

        .experts-heading {
        text-align: center;
        font-size: 15px;
        line-height: 1.65;
        color: #111;
        font-weight: 400;
        }

        /* 3-column grid: equal columns */
        .ex-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr 1fr;
        gap: 16px;
        align-items: center;       /* vertically center the two shorter cards */
        }

        /* Shared card base */
        .expert-card {
        border-radius: 16px;
        overflow: hidden;
        }

       .card-c3 {
          grid-column: 3;
          grid-row: 1 / 3;
          align-self: center;
          justify-self: center;
          height: 240px;
        }

/* Center card — slightly wider and taller */
.card-c5 {
  height: 240px;
  border-radius: 20px;
  align-self: end;
   grid-column: 5;
    grid-row: 1 / 3;
    justify-self: center;
    width: 196px;
    border-radius: 20px;
}
  
  .card-c7 {
          grid-column: 7;
          grid-row: 1 / 3;
          height: 240px;
          align-self: center;
          justify-self: center;
        }


        /* ── Responsive ── */
        @media (max-width: 1140px) {
          .experts-grid {
            grid-template-columns: repeat(5, 160px);
            grid-template-rows: 200px 200px;
          }
          .card-c1, .card-c9 { display: none; }
          .card-c2-top  { grid-column: 1; grid-row: 1; width: 160px; height: 190px; }
          .card-c2-bot  { grid-column: 1; grid-row: 2; width: 160px; height: 190px; }
          .card-c3      { grid-column: 2; grid-row: 1 / 3; width: 160px; height: 240px; }
          .card-c5      { grid-column: 3; grid-row: 1 / 3; width: 160px; height: 280px; }
          .card-c7      { grid-column: 4; grid-row: 1 / 3; width: 160px; height: 240px; }
          .card-c8-top  { grid-column: 5; grid-row: 1; width: 160px; height: 190px; }
          .card-c8-bot  { grid-column: 5; grid-row: 2; width: 160px; height: 190px; }
          .experts-text-cell { display: none; }
          .experts-section { padding-top: 32px; }
        }

        @media (max-width: 700px) {
          .experts-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            row-gap: 10px;
          }
          .expert-card,
          .card-c3,
          .card-c5,
          .card-c7 {
            width: 100% !important;
            height: 200px !important;
            grid-column: auto !important;
            grid-row: auto !important;
            align-self: auto !important;
            justify-self: auto !important;
            transform: none !important;
          }
          .experts-text-cell { display: none; }
        }
      }
      `}</style>

      <section className="experts-section">
        <hr className="experts-dashed" />
        <hr className="experts-rule" />

        <div className="experts-grid">
          {/* Text — cols 4–6, overlaid between the photo groups */}

          {/* Col 1 — side-left bleed */}
          <div className="expert-card card-c1">
            <Image
              src="/images/expert-side-left.jpg"
              alt="Expert"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Col 2 top */}
          <div className="expert-card card-c2-top">
            <Image
              src="/images/expert-1.jpg"
              alt="Expert 1"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Col 2 bottom */}
          <div className="expert-card card-c2-bot">
            <Image
              src="/images/expert-2.jpg"
              alt="Expert 2"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          <div className="experts-sec">
            <p className="experts-heading">
              Our Experts Combine Cutting-Edge Technology With Creative
              Problem-Solving To Deliver Intelligent Networking Solutions.
            </p>

            <div className="ex-grid">
              {/* Left card */}
              <div className="expert-card card-c3">
                <Image
                  src="/images/expert-3.jpg"
                  alt="Expert 3"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Center card — tallest */}
              <div className="expert-card card-c5">
                <Image
                  src="/images/expert-4.jpg"
                  alt="Expert 4"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Right card */}
              <div className="expert-card card-c7">
                <Image
                  src="/images/expert-5.jpg"
                  alt="Expert 5"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
          </div>

          {/* Col 8 top */}
          <div className="expert-card card-c8-top">
            <Image
              src="/images/expert-6.jpg"
              alt="Expert 6"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Col 8 bottom */}
          <div className="expert-card card-c8-bot">
            <Image
              src="/images/expert-7.jpg"
              alt="Expert 7"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Col 9 — side-right bleed */}
          <div className="expert-card card-c9">
            <Image
              src="/images/expert-side-right.jpg"
              alt="Expert"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
