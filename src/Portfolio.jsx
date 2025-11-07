import React, { useState } from "react";

const AREAS = {
  modeling: {
    id: "modeling",
    label: "Modeling & Machine Learning",
    subtitle: "Prediction · Deep Learning · RL",
    blurb:
      "I aim to comprehensively understand data, define clear goals, select the most suitable model for each task, and carefully verify results using statistical evidence.",
    points: [
      "Deepened understanding of regression, classification, and neural networks through coursework and self-driven projects at IIT.",
      "Developed and validated predictive models with attention to diagnostics, interpretability, and generalization.",
      "Contributed to a reinforcement learning project in the IIT Machine Learning Club for an industry use case.",
    ],
  },
  analysis: {
    id: "analysis",
    label: "Data Analysis",
    subtitle: "Business Insight · Experimentation",
    blurb:
      "I turn raw data into clear, decision-ready insights for product and business stakeholders.",
    points: [
      "Analyzed product, operations, and customer data to identify trends, diagnose issues, and quantify opportunities.",
      "Designed and evaluated experiments (A/B tests) to measure the impact of product or process changes.",
      "Created clear summaries and visualizations tailored to non-technical audiences to drive alignment and action.",
    ],
  },
  engineering: {
    id: "engineering",
    label: "Data Engineering",
    subtitle: "Pipelines · Infrastructure · Reliability",
    blurb:
      "I work on getting data from source systems into reliable, well-structured tables so analysis and modeling are possible.",
    points: [
      "Handled 30+ ETL workflows and 120+ automated jobs to transform raw CSV, JSON, and Excel data into clean database records, reducing over 20 hours of manual processing per week.",
      "Built and maintained data pipelines for real-time and batch reporting from operational systems into analytics layers.",
      "Worked with SQL-based data warehouses to design tables, optimize queries, and support downstream dashboards and models.",
      "Monitored pipelines and collaborated with stakeholders to improve data quality and reliability.",
    ],
  },
};

const PROJECTS = [
  {
    title: "Amazon Review Analysis",
    category: "Machine Learning",
    desc:
      "Identified valuable reviews to optimize product page ordering and detect trustworthy feedback using logistic regression and A/B testing.",
    href: "https://github.com/CAWang16/Amazon-Review-Value-Ranking-and-Trust-Analysis",
    cta: "View on GitHub →",
    areas: ["analysis", "modeling"],
    skills: ["Python", "Scikit-learn", "A/B Testing", "Logistic Regression"],
  },
  {
    title: "Oxygen Purity Regression",
    category: "Modeling",
    desc:
      "Applied regression modeling, hypothesis testing, simulation, and statistical inference to predict oxygen purity and validate model accuracy.",
    href: "https://github.com/CAWang16/DS_Stats",
    cta: "View on GitHub →",
    areas: ["modeling"],
    skills: ["R", "Hypothesis Testing", "Simulation", "Linear Regression"],
  },
  {
    title: "Boba Shop Analysis",
    category: "Data Analysis",
    desc:
      "Delivered business insights for Li-Chi Boba Shop by analyzing sales and operational data from SQL and transforming findings into dashboards and presentation materials.",
    href: "https://github.com/CAWang16/Analysis_of_a_Boba_Shop",
    cta: "View on GitHub →",
    areas: ["analysis"],
    skills: ["SQL", "Google Sheets", "PowerPoint", "Data Visualization"],
  },
  {
    title: "Tableau Dashboards",
    category: "Data Visualization",
    desc:
      "Visualized sales and operational performance trends through interactive Tableau dashboards to communicate insights across teams.",
    href: "/tableau",
    cta: "View Dashboards →",
    internal: true,
    areas: ["analysis"],
    skills: ["Tableau", "Dashboard Design", "Business Insights"],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("engineering");
  const current = AREAS[active];
  const filteredProjects = PROJECTS.filter((proj) =>
    proj.areas.includes(active)
  );

  return (
    <div className="min-h-screen bg-[#0b141a] text-neutral-100">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between text-sm">
          <a href="/" className="text-blue-300 hover:text-blue-200 underline">
            ← Home
          </a>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-center flex-1">
            Experience & Portfolio
          </h1>
          <span className="w-20" />
        </div>

        {/* Experience */}
        <section className="space-y-5">
          <p className="text-sm md:text-base text-neutral-300">
            I’ve worked across the data lifecycle—from data engineering and
            monitoring, to analysis, to building models. Select an area below to
            view related experience and projects.
          </p>

          <div className="flex flex-wrap gap-3">
            {Object.values(AREAS).map((area) => (
              <button
                key={area.id}
                onClick={() => setActive(area.id)}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${
                  active === area.id
                    ? "bg-white/90 text-[#0b141a] border-white"
                    : "bg-white/5 text-neutral-200 border-white/10 hover:bg-white/10"
                }`}
              >
                {area.label}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] space-y-4">
            <div>
              <h2 className="text-xl font-semibold">{current.label}</h2>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400 mt-1">
                {current.subtitle}
              </p>
            </div>
            <p className="text-sm md:text-base text-neutral-200">
              {current.blurb}
            </p>
            <ul className="mt-2 space-y-2 text-sm text-neutral-100">
              {current.points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Selected Projects</h2>
          <p className="text-sm md:text-base text-neutral-300">
            Projects related to <span className="font-semibold">{current.label}</span>.
          </p>

          {filteredProjects.length === 0 ? (
            <p className="text-sm text-neutral-400">
              No projects listed yet for this area — more coming soon.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {filteredProjects.map((proj) => (
                <a
                  key={proj.title}
                  href={proj.href}
                  target={proj.internal ? undefined : "_blank"}
                  rel={proj.internal ? undefined : "noreferrer"}
                  className="block bg-[#111827] rounded-2xl border border-white/10 p-5 hover:bg-[#151c2a] transition transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                    {proj.category}
                  </p>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-50">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mb-3">{proj.desc}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-[0.7rem] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-blue-300 mt-3 text-sm">{proj.cta}</p>
                </a>
              ))}
            </div>
          )}
        </section>

        <p className="mt-8 text-xs text-neutral-500 text-center">
          © {new Date().getFullYear()} Cheng An Wang. Built with React + Tailwind.
        </p>
      </div>
    </div>
  );
}
