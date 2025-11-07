import React from 'react';

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-gray-200 p-6">
      <div className="bg-[#1e293b] rounded-2xl shadow-xl p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          My Projects
        </h1>
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 border border-blue-400/30 rounded-full px-4 py-1 transition"
          >
            🏠 Home
          </a>
        </div>

        {/* MACHINE LEARNING SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Machine Learning</h2>
          <div className="space-y-6">
            <a
              href="https://github.com/CAWang16/Amazon-Review-Value-Ranking-and-Trust-Analysis"
              target="_blank"
              className="block bg-[#0f172a] p-5 rounded-xl hover:bg-[#16213e] transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white">Amazon Review Analysis</h2>
              <p className="text-gray-400 mt-2">
                Identified valuable reviews to optimize product page ordering and detect trustworthy feedback using logistic regression and A/B testing.
              </p>
              <p className="text-blue-400 mt-3">View on GitHub →</p>
            </a>

            <a
              href="https://github.com/CAWang16/DS_Stats"
              target="_blank"
              className="block bg-[#0f172a] p-5 rounded-xl hover:bg-[#16213e] transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white">Oxygen Purity Regression</h2>
              <p className="text-gray-400 mt-2">
                Applied regression modeling, hypothesis testing, simulation, and statistical inference to predict oxygen purity and validate the model’s accuracy.
              </p>
              <p className="text-blue-400 mt-3">View on GitHub →</p>
            </a>
          </div>
        </section>

        {/* DATA ANALYSIS SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-400">Data Analysis</h2>
          <div className="space-y-6">
            <a
              href="https://github.com/CAWang16/Analysis_of_a_Boba_Shop"
              target="_blank"
              className="block bg-[#0f172a] p-5 rounded-xl hover:bg-[#16213e] transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white">Boba Shop Analysis</h2>
              <p className="text-gray-400 mt-2">
                Delivered business insights for Li-Chi Boba Shop by analyzing sales and operational data from SQL, transforming findings into actionable dashboards and presentation materials for company-wide understanding.
              </p>
              <p className="text-blue-400 mt-3">View on GitHub →</p>
            </a>
          </div>
        </section>

        {/* DATA VISUALIZATION SECTION */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Data Visualization</h2>
          <div className="space-y-6">
            <a
              href="/tableau"
              className="block bg-[#0f172a] p-5 rounded-xl hover:bg-[#16213e] transition transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-white">Tableau Dashboards</h2>
              <p className="text-gray-400 mt-2">
                Visualized sales and operational performance trends through interactive Tableau dashboards to communicate insights effectively across teams.
              </p>
              <p className="text-blue-400 mt-3">View Dashboards →</p>
            </a>
          </div>
        </section>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Cheng An Wang. Built with React + Tailwind.
      </p>
    </div>
  );
}
