"use client";
import { useT } from '../i18n/LangContext';

const clients = [
  { name: "Mercedes-Benz", logo: "/logos/mercedes.svg" },
  { name: "BMW", logo: "/logos/bmw.png" },
  { name: "Porsche", logo: "/logos/porsche.png" },
  { name: "Leroy Merlin", logo: "/logos/leroymerlin.png" },
  { name: "Caterpillar", logo: "/logos/caterpillar.png" },
  { name: "John Deere", logo: "/logos/johndeere.png" },
  { name: "Siemens", logo: "/logos/siemens.png" },
];

export default function Clients() {
  const t = useT();

  return (
    <section className="py-14 md:py-24 px-5 md:px-8 bg-(--bg-muted) overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 md:gap-5 mb-10 md:mb-14">
          <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)] shrink-0" />
          <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted) shrink-0">
            {t.clients.label}
          </span>
          <div className="flex-1 h-px bg-(--border)" />
          <h2
            className="font-bold tracking-[-0.02em] shrink-0"
            style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
          >
            {t.clients.title}
          </h2>
        </div>

        <div className="grid gap-0.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {clients.map(({ name, logo }) => (
            <div
              key={name}
              className="bg-white rounded-2xl py-8 px-5 flex flex-col items-center gap-4 transition-all duration-200 cursor-default hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="w-20 h-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt={name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-[13px] font-semibold text-(--fg) text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
