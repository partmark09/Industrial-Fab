'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';
import { useT } from '../i18n/LangContext';
import ProductModal from './ProductModal';

export default function DefenceProducts() {
    const t = useT();
    
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedProduct = selectedIndex !== null ? t.defence.items[selectedIndex] : null;

    return (
        <section id="defence" className="py-16 md:py-30 px-5 md:px-8 bg-(--bg-muted)">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="mb-12 md:mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-0.5 bg-[linear-gradient(90deg,#e8091d,#ff8c00,#ffd700)]" />
                        <span className="text-[11px] tracking-[0.12em] uppercase font-semibold text-(--fg-muted)">
                            {t.defence.badge}
                        </span>
                    </div>
                    <h2
                        className="font-bold tracking-[-0.03em] leading-[1.05] max-w-150"
                        style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
                    >
                        {t.defence.title}
                    </h2>
                    <p className="text-base text-(--fg-muted) mt-5 max-w-140 leading-[1.7]">
                        {t.defence.subtitle}
                    </p>
                </FadeIn>

                <div className="columns-1 sm:columns-2 xl:columns-3 gap-2 *:mb-2">
                    {t.defence.items.map((item, i) => (
                        <FadeIn key={item.title} delay={i * 60}>
                            <div 
                                onClick={() => setSelectedIndex(i)}
                                className="bg-white py-8 px-6 md:py-10 md:px-9 transition-transform duration-200 cursor-pointer hover:-translate-y-1 rounded-2xl shadow-sm break-inside-avoid inline-block w-full group"
                            >
                                <div className="w-full rounded-xl mb-7 overflow-hidden relative bg-(--bg-muted)">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto block object-cover"
                                    />
                                </div>

                                <h3 className="text-[22px] font-bold tracking-[-0.02em] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-(--fg-muted) leading-[1.65] line-clamp-3">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <ProductModal 
                product={selectedProduct} 
                onClose={() => setSelectedIndex(null)} 
            />
        </section>
    );
}
