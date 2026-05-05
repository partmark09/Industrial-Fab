'use client';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';

export default function About() {
    const t = useT();

    return (
        <section id="about" className="py-16 md:py-30 px-5 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-10 md:gap-20 items-start">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                            <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                                {t.about.label}
                            </span>
                        </div>

                        <h2
                            className="font-bold tracking-[-0.03em] leading-[1.1] mb-6"
                            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                        >
                            {t.about.title}
                        </h2>

                        <p
                            className="font-bold tracking-[-0.02em] leading-[1.4] mb-8"
                            style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
                        >
                            {t.about.lead}
                        </p>

                        <p className="text-[15px] text-(--fg-muted) leading-[1.7] mb-6">
                            {t.about.p1}
                        </p>

                        <p className="text-[15px] text-(--fg-muted) leading-[1.7] mb-10">
                            {t.about.p2}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'EN 1090', 'ISO 3834', 'WPS/WPQR', 'IWE'].map((cert) => (
                                <span
                                    key={cert}
                                    className="text-xs font-semibold tracking-[0.04em] text-(--fg) bg-(--bg-muted) py-1.5 px-3.5 rounded-full border border-(--border)"
                                >
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={150} className="flex flex-col gap-4">
                        {t.about.cards.map((card) => (
                            <div key={card.label} className="rounded-[20px] overflow-hidden relative">
                                <div className="h-45 relative overflow-hidden">
                                    <Image
                                        src={card.img}
                                        alt={card.label}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 900px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="pt-4 pb-4 px-4">
                                    <p className="text-sm font-semibold leading-[1.4] text-(--fg) mb-1">
                                        {card.label}
                                    </p>
                                    <p className="text-xs text-(--fg-muted)">
                                        {card.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
