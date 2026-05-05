'use client';
import Image from 'next/image';
import { IconArrow } from './icons';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';

export default function Services() {
    const t = useT();

    return (
        <section id="services" className="py-16 md:py-30 px-5 md:px-8 bg-(--bg-muted)">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-12 md:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                        <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                            {t.services.label}
                        </span>
                    </div>
                    <h2
                        className="font-bold tracking-[-0.03em] leading-[1.05] max-w-150"
                        style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
                    >
                        {t.services.title1}
                        <br />
                        {t.services.title2}
                    </h2>
                    <p className="text-base text-(--fg-muted) mt-5 max-w-140 leading-[1.7]">
                        {t.services.subtitle}
                    </p>
                </FadeIn>

                <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {t.services.items.map((s, i) => (
                        <FadeIn key={s.num} delay={i * 60}>
                            <div className="bg-white py-8 px-6 md:py-10 md:px-9 transition-transform duration-200 cursor-default hover:-translate-y-1 h-full">
                                <div className="w-full h-50 rounded-xl mb-7 overflow-hidden relative">
                                    <Image
                                        src={s.img}
                                        alt={s.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm rounded-lg py-1.5 px-3 text-[11px] text-white/90 tracking-[0.06em] uppercase font-semibold">
                                        {s.num}
                                    </div>
                                </div>

                                <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-sm text-(--fg-muted) leading-[1.65] mb-6">
                                    {s.desc}
                                </p>

                                <ul className="list-none">
                                    {s.specs.map((spec) => (
                                        <li
                                            key={spec}
                                            className="text-[13px] text-(--fg-muted) py-1.75 border-t border-(--border) flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-[#e8091d] shrink-0" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <a
                        href="#quote"
                        className="inline-flex items-center gap-2 bg-(--fg) text-white py-4 px-9 rounded-full text-[15px] font-semibold no-underline"
                    >
                        {t.services.cta}
                        <IconArrow width={14} height={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
