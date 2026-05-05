'use client';
import { useState, useRef, useEffect } from 'react';
import { useT, useLang } from '../i18n/LangContext';
import type { Lang } from '../i18n/translations';

function FlagUA() {
    return (
        <span className="inline-block w-5 h-3.5 rounded-[2px] overflow-hidden shrink-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 800"
                width="20"
                height="14"
            >
                <path fill="#005BBB" d="M0 0h1200v800H0z" />
                <path fill="#FFD500" d="M0 400h1200v400H0z" />
            </svg>
        </span>
    );
}

function FlagGB() {
    return (
        <span className="inline-block w-5 h-3.5 rounded-[2px] overflow-hidden shrink-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="20"
                height="14"
            >
                <clipPath id="gb-a">
                    <path d="M0 0v30h60V0z" />
                </clipPath>
                <clipPath id="gb-b">
                    <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
                </clipPath>
                <g clipPath="url(#gb-a)">
                    <path d="M0 0v30h60V0z" fill="#012169" />
                    <path
                        d="m0 0 60 30m0-30L0 30"
                        stroke="#fff"
                        strokeWidth="6"
                    />
                    <path
                        d="m0 0 60 30m0-30L0 30"
                        clipPath="url(#gb-b)"
                        stroke="#C8102E"
                        strokeWidth="4"
                    />
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                    <path
                        d="M30 0v30M0 15h60"
                        stroke="#C8102E"
                        strokeWidth="6"
                    />
                </g>
            </svg>
        </span>
    );
}

const langOptions: {
    value: Lang;
    Flag: () => React.JSX.Element;
    label: string;
}[] = [
    { value: 'uk', Flag: FlagUA, label: 'Українська' },
    { value: 'en', Flag: FlagGB, label: 'English' },
];

function LangDropdown() {
    const { lang, setLang } = useLang();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const current = langOptions.find((o) => o.value === lang)!;

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node))
                setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-sm font-medium text-(--fg-muted) bg-(--bg-muted) border border-(--border) py-1.5 px-3 rounded-full transition-colors duration-200 hover:text-(--fg) hover:border-(--fg) cursor-pointer"
            >
                <current.Flag />
                <span className="hidden md:block">{current.label}</span>
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'none' }}
                >
                    <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {open && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-(--border) rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] overflow-hidden min-w-40 z-50">
                    {langOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                setLang(opt.value);
                                setOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-left cursor-pointer border-0 transition-colors duration-150 ${
                                lang === opt.value
                                    ? 'bg-(--bg-muted) text-(--fg)'
                                    : 'bg-white text-(--fg-muted) hover:bg-(--bg-muted) hover:text-(--fg)'
                            }`}
                        >
                            <opt.Flag />
                            <span>{opt.label}</span>
                            {lang === opt.value && (
                                <svg
                                    className="ml-auto"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path
                                        d="M2 6l3 3 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const t = useT();

    const links = [
        { label: t.nav.services, href: '#services' },
        { label: t.nav.industries, href: '#industries' },
        { label: t.nav.cases, href: '#cases' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.quality, href: '#quality' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/[0.92] backdrop-blur-[12px] border-b border-(--border)">
            <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
                <a
                    href="#"
                    className="font-bold tracking-[-0.03em] text-(--fg) no-underline"
                >
                    <img
                        className="h-7 md:h-9 py-1 "
                        src="logos/logo.png"
                        alt="Logo"
                    />
                </a>

                <nav className="hidden md:flex gap-8 items-center">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-medium text-(--fg-muted) no-underline transition-colors duration-200 hover:text-(--fg)"
                        >
                            {l.label}
                        </a>
                    ))}
                    <LangDropdown />
                    <a
                        href="#quote"
                        className="bg-(--fg) text-white py-2.5 px-5.5 rounded-full text-sm font-semibold no-underline transition-opacity duration-200 hover:opacity-80"
                    >
                        {t.nav.cta}
                    </a>
                </nav>

                <div className="flex md:hidden items-center gap-3">
                    <LangDropdown />
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex flex-col gap-1.25 p-1 bg-transparent border-0 cursor-pointer"
                        aria-label="Меню"
                    >
                        <span
                            className="block w-5.5 h-0.5 bg-(--fg) rounded-[1px] transition-transform duration-200"
                            style={{
                                transform: open
                                    ? 'rotate(45deg) translate(5px,5px)'
                                    : 'none',
                            }}
                        />
                        <span
                            className="block w-5.5 h-0.5 bg-(--fg) rounded-[1px] transition-opacity duration-200"
                            style={{ opacity: open ? 0 : 1 }}
                        />
                        <span
                            className="block w-5.5 h-0.5 bg-(--fg) rounded-[1px] transition-transform duration-200"
                            style={{
                                transform: open
                                    ? 'rotate(-45deg) translate(5px,-5px)'
                                    : 'none',
                            }}
                        />
                    </button>
                </div>
            </div>

            {open && (
                <div className="bg-white border-t border-(--border) px-5 pt-6 pb-8 flex flex-col gap-5">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-[18px] font-medium text-(--fg) no-underline"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#quote"
                        onClick={() => setOpen(false)}
                        className="bg-(--fg) text-white py-3.5 px-7 rounded-full text-[15px] font-semibold no-underline text-center"
                    >
                        {t.nav.cta}
                    </a>
                </div>
            )}
        </header>
    );
}
