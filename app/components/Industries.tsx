"use client";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';

export default function Industries() {
  const t = useT();

  return (
    <section id="industries" className="py-16 md:py-30 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-12 md:mb-20">
          <h2
            className="font-bold tracking-[-0.03em] leading-[1.05] mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            {t.industries.title}
          </h2>
          <p className="text-base text-(--fg-muted) max-w-145 mx-auto leading-[1.65]">
            {t.industries.subtitle}
          </p>
        </FadeIn>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {t.industries.items.map((ind, i) => {
            const card = (
              <div
                className={`h-full flex flex-col items-center text-center py-9 px-6 rounded-[20px] bg-(--bg-muted) transition-all duration-250 ${ind.link ? 'cursor-pointer group' : 'cursor-default'} hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]`}
              >
                <div className="w-40 h-40 rounded-full mb-7 relative overflow-hidden bg-(--bg-muted)">
                  <Image
                    src={ind.img}
                    alt={ind.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.02em] mb-2.5">
                  {ind.title}
                </h3>
                <p className="text-sm text-(--fg-muted) leading-[1.65] mb-4">
                  {ind.desc}
                </p>
                <p className="text-xs text-[#9a9a9a] italic leading-normal">
                  {ind.detail}
                </p>
              </div>
            );

            return (
              <FadeIn key={ind.title} delay={i * 60} className="h-full">
                {ind.link ? (
                  <Link href={ind.link} className="block no-underline h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
