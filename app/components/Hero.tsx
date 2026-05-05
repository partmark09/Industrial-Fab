'use client';
import Image from 'next/image';
import { IconArrow } from './icons';
import { useT } from '../i18n/LangContext';

export default function Hero() {
    const t = useT();

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-8 pt-24 md:pt-30 pb-28 md:pb-20 bg-white relative overflow-hidden">
            <Image
                src="/images/hero/factory.jpg"
                alt="Завод NexusFab"
                fill
                priority
                className="object-cover opacity-[0.06]"
                sizes="100vw"
            />
            <div
                className="absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative max-w-225">
                <div className="animate-fadeUp inline-flex items-center gap-2 mb-8 py-1.5 px-4 rounded-full border border-(--border) text-xs font-semibold tracking-widest uppercase text-(--fg-muted)">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    {t.hero.badge}
                </div>

                <h1
                    className="animate-fadeUp font-bold tracking-[-0.04em] leading-none text-(--fg) mb-7"
                    style={{ fontSize: 'clamp(52px, 8vw, 108px)', animationDelay: '100ms' }}
                >
                    {t.hero.title1}
                    <br />
                    {t.hero.title2}
                </h1>

                <p
                    className="animate-fadeUp text-(--fg-muted) max-w-150 mx-auto mb-12 leading-[1.6]"
                    style={{ fontSize: 'clamp(16px, 2.2vw, 22px)', animationDelay: '200ms' }}
                >
                    {t.hero.desc}
                </p>

                <div className="animate-fadeUp flex gap-4 justify-center flex-wrap" style={{ animationDelay: '300ms' }}>
                    <a
                        href="#quote"
                        className="bg-(--fg) text-white py-4.5 px-10 rounded-full text-base font-semibold no-underline inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
                    >
                        {t.hero.cta1}
                        <IconArrow />
                    </a>
                    <a
                        href="#services"
                        className="bg-transparent text-(--fg) py-4.5 px-10 rounded-full text-base font-semibold no-underline border-[1.5px] border-(--border) transition-colors duration-200"
                    >
                        {t.hero.cta2}
                    </a>
                </div>

                <div className="animate-fadeUp grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:gap-12 justify-center mt-14 md:mt-20" style={{ animationDelay: '400ms' }}>
                    {t.hero.stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <div
                                className="font-bold tracking-[-0.03em] text-(--fg)"
                                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                            >
                                {s.value}
                            </div>
                            <div className="text-[13px] text-(--fg-muted) mt-1 uppercase tracking-[0.06em]">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
