'use client';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';

export default function Quality() {
    const t = useT();

    return (
        <section id="quality" className="py-16 md:py-30 px-5 md:px-8 bg-(--bg-muted)">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-12 md:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                        <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                            {t.quality.label}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 items-end">
                        <h2
                            className="font-bold tracking-[-0.03em] leading-[1.05]"
                            style={{ fontSize: 'clamp(32px, 4.5vw, 64px)' }}
                        >
                            {t.quality.title1}
                            <br />
                            {t.quality.title2}
                        </h2>
                        <div>
                            <div className="h-40 rounded-2xl overflow-hidden mb-5 relative">
                                <Image
                                    src="/images/quality/laboratory.jpg"
                                    alt={t.quality.labAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <p className="text-base text-(--fg-muted) leading-[1.7]">
                                {t.quality.subtitle}
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid gap-0.5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {t.quality.items.map((item, i) => (
                        <FadeIn key={item.title} delay={i * 60}>
                            <div className="bg-white py-8 px-6 md:py-10 md:px-9 relative overflow-hidden h-full">
                                <div className="absolute top-6 right-7 text-[60px] font-extrabold text-black/4 tracking-[-0.04em] leading-none tabular-nums select-none">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-xl font-bold tracking-[-0.02em] mb-4 max-w-70">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-(--fg-muted) leading-[1.65]">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
