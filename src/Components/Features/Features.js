// Imports
import { ReactNode } from "react";
import React from "react";


export default function Features() {
  return (
    <>
      <section className="features section">
        <div className="container">
          <div className="features-inner section-inner has-bottom-divider">
            <h2 className="section-title mt-0">Bold features</h2>
            <div className="features-wrap">
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-1-a"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity=".16"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-1-b"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-1-a)"
                        />
                        <path
                          d="M40 64H16V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-1-b)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="68"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-2-a"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity=".16"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-2-b"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M9.941 63.941v-24c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24h-24z"
                          fill="url(#feature-2-a)"
                          transform="rotate(45 33.941 39.941)"
                        />
                        <path
                          d="M16 0v24c0 13.255 10.745 24 24 24h24V24C64 10.745 53.255 0 40 0H16z"
                          fill="url(#feature-2-b)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="43.901%"
                          id="feature-3-a"
                        >
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="0%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="58.893%"
                          y1="100%"
                          x2="58.893%"
                          y2="18.531%"
                          id="feature-3-b"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-3-c"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="url(#feature-3-a)"
                          opacity=".32"
                          d="M0 24h64v40H0z"
                        />
                        <path fill="url(#feature-3-b)" d="M40 24H24L0 64h64z" />
                        <path
                          d="M10 10v22c0 12.15 9.85 22 22 22h22V32c0-12.15-9.85-22-22-22H10z"
                          fill="url(#feature-3-c)"
                          transform="rotate(45 32 32)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-4-a"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity=".16"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-4-b"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M24 64H0V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-4-a)"
                          transform="matrix(-1 0 0 1 48 0)"
                        />
                        <path
                          d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-4-b)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="0%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-5-a"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity=".16"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-5-b"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M24 63H0V39c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-5-a)"
                          transform="matrix(-1 0 0 1 48 0)"
                        />
                        <path
                          d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24"
                          fillOpacity=".24"
                          fill="url(#feature-5-a)"
                          transform="matrix(-1 0 0 1 80 0)"
                        />
                        <path
                          d="M10.113 10.113v22c0 12.15 9.85 22 22 22h22v-22c0-12.15-9.85-22-22-22h-22z"
                          fill="url(#feature-5-b)"
                          transform="rotate(45 32.113 32.113)"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
              <div className="feature is-revealing">
                <div className="feature-inner">
                  <div className="feature-icon">
                    <svg
                      width="64"
                      height="64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          x1="50%"
                          y1="100%"
                          x2="50%"
                          y2="0%"
                          id="feature-6-a"
                        >
                          <stop stopColor="#FDFFDA" offset="0%" />
                          <stop
                            stopColor="#F97059"
                            stopOpacity=".798"
                            offset="49.935%"
                          />
                          <stop
                            stopColor="#F9425F"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                        <linearGradient
                          x1="58.893%"
                          y1="100%"
                          x2="58.893%"
                          y2="18.531%"
                          id="feature-6-b"
                        >
                          <stop
                            stopColor="#F9425F"
                            stopOpacity=".8"
                            offset="0%"
                          />
                          <stop
                            stopColor="#47A1F9"
                            stopOpacity="0"
                            offset="100%"
                          />
                        </linearGradient>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24"
                          fill="url(#feature-6-a)"
                        />
                        <path
                          fillOpacity=".64"
                          fill="url(#feature-6-b)"
                          d="M24 29.229h40V64H0z"
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="feature-title mt-24">Discover</h3>
                  <p className="text-sm mb-0">
                    A pseudo-Latin text used in web design, layout, and printing
                    in place of things to emphasise design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
