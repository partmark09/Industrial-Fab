'use client';
import { useT } from '../i18n/LangContext';

export default function Footer() {
    const t = useT();
    const year = new Date().getFullYear();

    const navLinks = [
        { label: t.nav.services, href: '#services' },
        { label: t.nav.industries, href: '#industries' },
        { label: t.nav.cases, href: '#cases' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.quality, href: '#quality' },
    ];

    return (
        <footer className="bg-(--fg) text-white pt-12 md:pt-20 px-5 md:px-8 pb-8 md:pb-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10 md:pb-16 border-b border-white/10">
                    <div className="max-w-72">
                        <div className="font-bold text-2xl tracking-[-0.03em] mb-4">
                            <img
                                className="h-7 md:h-9 py-1 invert "
                                src="logos/logo.png"
                                alt="Logo"
                            />
                        </div>
                        <p className="text-sm text-white/50 leading-[1.7] mb-7">
                            {t.footer.desc}
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:filts@variant-irrigation.com.ua"
                                className="text-sm text-white/60 no-underline hover:text-white transition-colors duration-200"
                            >
                                filts@variant-irrigation.com.ua
                            </a>
                            <a
                                href="tel:+380680681751"
                                className="text-sm text-white/60 no-underline hover:text-white transition-colors duration-200"
                            >
                                +38 068 068 17 51
                            </a>
                        </div>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-10">
                        {navLinks.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm font-medium text-white/60 no-underline hover:text-white transition-colors duration-200"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="pt-8">
                    <p className="text-[13px] text-white/35">
                        © {year} IndustrialFab. {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
