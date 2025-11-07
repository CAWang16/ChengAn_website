import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function LinkHub() {
  const [copied, setCopied] = useState(false);

  const PROFILE = {
    name: "Cheng An Wang",
    nameNative: "王承安",
    location: "Chicago, IL",
    avatar: "/avatar.jpg",
    title: "Data Scientist · Analyst",
    email: "chengan016@gmail.com",
  };

  const PROFESSIONAL_LINKS = [
    {
      label: "GitHub",
      href: "https://github.com/CAWang16",
      icon: <FaGithub />,
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anderswang55414/",
      icon: <FaLinkedin />,
      external: true,
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <span className="text-lg">💼</span>,
      external: false,
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      icon: <FaFileAlt />,
      external: true,
    },
    
  ];

  const SOCIAL_LINKS = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/an_08.02/",
      icon: <FaInstagram />,
      external: true,
    },
  ];

  const CONTACT_LINKS = [
    {
      label: "Email",
      href: `mailto:${PROFILE.email}`,
      icon: <FaEnvelope />,
      external: false,
    },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  const linkClasses =
    "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] px-4 py-2 transition shadow-sm";

  return (
    <div className="min-h-screen bg-[#0b141a] text-neutral-100 selection:bg-white/20 selection:text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-28 grid place-items-center">
        <section className="w-full rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-1 ring-white/20 bg-white/5">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
                {PROFILE.name}
                {PROFILE.title && (
                  <span className="text-neutral-400 text-base md:text-lg">
                    / {PROFILE.title}
                  </span>
                )}
              </h1>
              {PROFILE.nameNative && (
                <p className="text-neutral-400 text-sm md:text-base leading-tight">
                  {PROFILE.nameNative}
                </p>
              )}
              <p className="text-neutral-300 text-sm md:text-base mt-1">
                📍 {PROFILE.location}
              </p>
            </div>
          </div>

          {/* Categorized links */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Professional */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Professional
              </h2>
              <div className="flex flex-col gap-3">
                {PROFESSIONAL_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className={linkClasses}
                  >
                    <span className="opacity-80 group-hover:opacity-100">
                      {l.icon}
                    </span>
                    <span className="font-medium tracking-wide">
                      {l.label}
                    </span>
                    <span className="ml-auto text-neutral-400 group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Social Media
              </h2>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className={linkClasses}
                  >
                    <span className="opacity-80 group-hover:opacity-100">
                      {l.icon}
                    </span>
                    <span className="font-medium tracking-wide">
                      {l.label}
                    </span>
                    <span className="ml-auto text-neutral-400 group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Contact
              </h2>
              <div className="flex flex-col gap-3">
                {CONTACT_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className={linkClasses}
                  >
                    <span className="opacity-80 group-hover:opacity-100">
                      {l.icon}
                    </span>
                    <span className="font-medium tracking-wide">
                      {l.label}
                    </span>
                    <span className="ml-auto text-neutral-400 group-hover:translate-x-0.5 transition">
                      →
                    </span>
                  </a>
                ))}

                {/* Copy Email button */}
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20 px-4 py-2 transition"
                >
                  <FaEnvelope /> {copied ? "Copied" : "Copy Email"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
        </footer>
      </div>
    </div>
  );
}
