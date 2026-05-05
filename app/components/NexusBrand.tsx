'use client';
import { useT } from '../i18n/LangContext';

export default function NexusBrand() {
    const t = useT();

    return (
        <section className="py-20 md:py-28 px-5 md:px-8 bg-(--bg-muted) border-y border-(--border)">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                            <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                                NexusFab
                            </span>
                        </div>

                        <h2
                            className="font-bold tracking-[-0.03em] leading-[1.1] text-(--fg) mb-6"
                            style={{ fontSize: 'clamp(30px, 3.5vw, 52px)' }}
                        >
                            {t.nexusBrand.title}
                        </h2>

                        <p className="text-(--fg-muted) leading-[1.7] text-base md:text-lg max-w-xl mb-10">
                            {t.nexusBrand.desc}
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {t.nexusBrand.points.map((point) => (
                            <div
                                key={point.title}
                                className="bg-white border border-(--border) rounded-2xl p-7"
                            >
                                <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-(--fg-muted) mb-3">
                                    {point.tag}
                                </div>
                                <h3 className="font-bold text-(--fg) text-[17px] mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-(--fg-muted) text-sm leading-[1.7]">
                                    {point.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
