// Imports
import { ReactNode } from "react";
import React from "react";

export default function Media() {
  return (
    <>
      <section className="media section">
        <div className="container-sm">
          <div className="media-inner section-inner">
            <div className="media-header text-center">
              <h2 className="section-title mt-0">Meet Laurel</h2>
              <p className="section-paragraph mb-0">
                Lorem ipsum is common placeholder text used to demonstrate the
                graphic elements of a document or visual presentation.
              </p>
            </div>
            <div className="media-canvas">
              <svg
                width="800"
                height="450"
                viewBox="0 0 800 450"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    id="media-canvas"
                  >
                    <stop stopColor="#06101F" offset="0%" />
                    <stop stopColor="#1D304B" offset="100%" />
                  </linearGradient>
                </defs>
                <rect
                  width="800"
                  height="450"
                  rx="8"
                  fill="url(#media-canvas)"
                  fillRule="evenodd"
                />
              </svg>
              <div className="media-control">
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="87.565%"
                      y1="15.873%"
                      x2="17.086%"
                      y2="80.538%"
                      id="media-control"
                    >
                      <stop stopColor="#FFF" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#FFF" offset="100%" />
                    </linearGradient>
                    <filter
                      x="-500%"
                      y="-500%"
                      width="1000%"
                      height="1000%"
                      filterUnits="objectBoundingBox"
                      id="media-shadow"
                    >
                      <feOffset
                        dy="16"
                        in="SourceAlpha"
                        result="shadowOffsetOuter"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="24"
                        in="shadowOffsetOuter"
                        result="shadowBlurOuter"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0.024 0 0 0 0 0.064 0 0 0 0 0.12 0 0 0 0.24 0"
                        in="shadowBlurOuter"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fill="#FFF"
                      cx="48"
                      cy="48"
                      r="48"
                      // style={{ mixBlendMode: 'multiply', filter: url('#media-shadow') }}
                    />
                    <circle fill="url(#media-control)" cx="48" cy="48" r="48" />
                    <path
                      d="M44.6 39.2a1.001 1.001 0 0 0-1.6.8v18a1.001 1.001 0 0 0 1.6.8l12-9a.998.998 0 0 0 0-1.6l-12-9z"
                      fill="#1D304B"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
