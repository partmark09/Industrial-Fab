'use client';
import {
    IconArrow,
    IconCheckmark,
    IconCertificate,
    IconUser,
    IconChart,
    IconClock,
    IconStar,
} from './icons';
import { useT } from '../i18n/LangContext';

const icons = [IconCheckmark, IconCertificate, IconUser, IconChart, IconClock, IconStar];

export default function Advantages() {
    const t = useT();

    return (
        <section className="py-16 md:py-30 px-5 md:px-8 bg-(--fg) text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-10 md:gap-20 items-start">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                            <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-white/50">
                                {t.advantages.label}
                            </span>
                        </div>
                        <h2
                            className="font-bold tracking-[-0.03em] leading-[1.1] mb-6 text-white"
                            style={{ fontSize: 'clamp(32px, 4vw, 60px)' }}
                        >
                            {t.advantages.title}
                        </h2>
                        <p className="text-base text-white/[0.55] leading-[1.7] max-w-110 mb-10">
                            {t.advantages.subtitle}
                        </p>
                        <a
                            href="#quote"
                            className="inline-flex items-center gap-2 bg-white text-(--fg) py-4 px-8 rounded-full text-[15px] font-semibold no-underline"
                        >
                            {t.advantages.cta}
                            <IconArrow width={14} height={14} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {t.advantages.items.map((a, i) => {
                            const Icon = icons[i];
                            return (
                                <div
                                    key={a.title}
                                    className="bg-white/6 rounded-2xl py-7 px-6 border border-white/8 transition-colors duration-200 cursor-default hover:bg-white/10"
                                >
                                    <div className="text-white/50 mb-4">
                                        <Icon />
                                    </div>
                                    <h3 className="text-[15px] font-bold text-white mb-2 tracking-[-0.01em]">
                                        {a.title}
                                    </h3>
                                    <p className="text-[13px] text-white/50 leading-[1.6]">
                                        {a.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
