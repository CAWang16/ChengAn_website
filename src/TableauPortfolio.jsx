// src/TableauPortfolio.jsx
import React, { useState } from "react";

const SLIDES = [
  {
    src: "/5data_growthrate.png",
    title: "Multi-API Infrastructure & Cost Analytics",
    description:
      "Developed an automated Python ETL pipeline on AWS Glue to consolidate usage data from 5 distinct APIs into AWS Redshift. Engineered a dynamic dashboard to monitor real-time integration costs, enabling data-driven decisions on cloud infrastructure spend.",
  },
  {
    src: "/Cost_distribution_error.png",
    title: "Operational Health: Global Delivery & Error Analytics",
    description:
      "Developed a diagnostic dashboard to monitor third-party service delivery performance and cost distribution across global markets. Engineered automated tracking for error rate spikes, enabling rapid root-cause investigation and optimization of logistics partner efficiency.",
  },
  {
    src: "/Distribution_successrate.png",
    title: "Delivery Success Rate by Segment",
    description:
      "Compares delivery success rates across customer segments and regions to identify operational bottlenecks.",
  },
  {
    src: "/webpage_filter_aggregation.png",
    title: "Interactive KPI Overview",
    description:
      "Provides a filterable view of key KPIs so stakeholders can slice performance by country, product, or time period.",
  },
];

export default function TableauPortfolio() {
  const [index, setIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const slide = SLIDES[index];

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 px-4 py-10 flex flex-col items-center">
      {/* Top bar */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-6">
        <a
          href="/portfolio"
          className="text-sm text-blue-300 hover:text-blue-200 underline"
        >
          ← Back to Portfolio
        </a>
        <h1 className="text-2xl md:text-3xl font-bold text-center flex-1">
          Tableau Dashboards
        </h1>
        <span className="w-24" />
      </div>

      {/* Slider */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        <div className="relative w-full bg-[#0b1725] rounded-2xl overflow-hidden shadow-xl h-[65vh]">
          {/* Images stacked and faded */}
          {SLIDES.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.title}
              onClick={() => setZoomOpen(true)}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 cursor-zoom-in ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Left / Right buttons */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-3 py-2 text-sm md:text-base"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-3 py-2 text-sm md:text-base"
          >
            →
          </button>

          {/* Small hint */}
          <span className="absolute bottom-3 right-4 text-xs text-gray-300 bg-black/40 px-2 py-1 rounded-full">
            Click to zoom 🔍
          </span>
        </div>

        {/* Text panel */}
        <div className="w-full max-w-3xl bg-[#111827] rounded-xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg md:text-xl font-semibold">{slide.title}</h2>
            <span className="text-xs text-gray-400">
              {index + 1} / {SLIDES.length}
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-300">
            {slide.description}
          </p>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-2 mt-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-blue-400" : "bg-gray-500/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setZoomOpen(false)}
        >
          {/* ESC key handler */}
          {(() => {
            const handleKeyDown = (e) => {
              if (e.key === "Escape") setZoomOpen(false);
            };
            // Attach listener on mount
            window.addEventListener("keydown", handleKeyDown);
            // Clean up on unmount
            return () => window.removeEventListener("keydown", handleKeyDown);
          })()}

          {/* scrollable container */}
          <div
            className="relative max-w-[95vw] max-h-[90vh] bg-black/60 rounded-lg overflow-auto cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="block max-w-none"
            />

            <button
              onClick={() => setZoomOpen(false)}
              className="absolute -top-3 -right-3 bg-black/80 text-xs px-2 py-1 rounded-full hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}



      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Cheng An Wang. Built with React + Tailwind.
      </p>
    </div>
  );
}
