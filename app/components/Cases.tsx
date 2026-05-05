'use client';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';

const photos = [
    '/images/cases/irrigation-system.jpg',
    '/images/services/laser-cutting.jpg',
    '/images/cases/heavy-machine.jpg',
    '/images/about/factory.jpg',
    '/images/services/welding.jpg',
    '/images/cases/agro-frame.jpg',
    '/images/industries/machine-building.jpg',
    '/images/services/cnc-machining.jpg',
    '/images/cases/transformer-enclosure.jpg',
    '/images/about/workers.jpg',
    '/images/services/painting.jpg',
    '/images/cases/solar-infrastructure.jpg',
    '/images/industries/agriculture.jpg',
    '/images/services/tube-processing.jpg',
    '/images/cases/chassis-part.jpg',
    '/images/about/warehouse.jpg',
    '/images/industries/energy.jpg',
    '/images/services/contract-manufacturing.jpg',
    '/images/industries/defense.jpg',
    '/images/quality/laboratory.jpg',
    '/images/industries/transport.jpg',
];

export default function Cases() {
    const t = useT();

    return (
        <section id="cases" className="py-16 md:py-30 px-5 md:px-8 bg-(--bg-muted)">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-10 md:mb-14">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                        <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                            {t.cases.label}
                        </span>
                    </div>
                    <h2
                        className="font-bold tracking-[-0.03em] leading-[1.05]"
                        style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
                    >
                        {t.cases.title}
                    </h2>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 *:mb-2">
                        {photos.map((src, i) => (
                            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl">
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full block object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
