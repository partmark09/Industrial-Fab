'use client';
import { useState } from 'react';
import { IconUpload, IconCheckSuccess } from './icons';
import { useT } from '../i18n/LangContext';

export default function QuoteForm() {
    const t = useT();
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        material: '',
        quantity: '',
        deadline: '',
        nda: false,
        message: '',
    });
    const [files, setFiles] = useState<File[]>([]);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const attachments = await Promise.all(
                files.map(
                    (file) =>
                        new Promise<{ name: string; content: string }>((resolve) => {
                            const reader = new FileReader();
                            reader.onload = () =>
                                resolve({
                                    name: file.name,
                                    content: (reader.result as string).split(',')[1],
                                });
                            reader.readAsDataURL(file);
                        }),
                ),
            );
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, attachments }),
            });
        } finally {
            setLoading(false);
            setSent(true);
        }
    };

    const inputCls = 'w-full py-3.5 px-4.5 rounded-xl border-[1.5px] border-(--border) text-[15px] bg-white text-(--fg) outline-none transition-colors duration-200 focus:border-(--fg)';
    const labelCls = 'text-[13px] font-semibold text-(--fg-muted) mb-1.5 block tracking-[0.03em]';

    return (
        <section id="quote" className="py-16 md:py-30 px-5 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-10 md:gap-20 items-start">
                    <div className="max-[900px]:hidden">
                        <div className="gradient-blob rounded-[28px] overflow-hidden aspect-4/5 mb-10" />
                    </div>

                    <div>
                        <div className="inline-flex items-center py-1.5 px-3.5 rounded-full border border-(--border) text-xs font-semibold tracking-[0.06em] uppercase text-(--fg-muted) mb-7">
                            {t.quote.badge}
                        </div>

                        <h2
                            className="font-bold tracking-[-0.03em] leading-[1.15] mb-3"
                            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                        >
                            {t.quote.title}
                        </h2>

                        <p className="text-sm text-(--fg-muted) leading-[1.65] mb-10">
                            {t.quote.desc}
                            <br /><br />
                            <strong className="text-(--fg)">{t.quote.formats}</strong>{' '}
                            STEP · CAD · PDF · DWG · DXF · STP · ZIP
                        </p>

                        {sent ? (
                            <div className="py-10 px-8 bg-(--bg-muted) rounded-[20px] text-center">
                                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-5">
                                    <IconCheckSuccess />
                                </div>
                                <h3 className="text-[22px] font-bold mb-3">{t.quote.successTitle}</h3>
                                <p className="text-[15px] text-(--fg-muted) leading-[1.6]">{t.quote.successDesc}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
                                    <div>
                                        <label className={labelCls}>{t.quote.labelName}</label>
                                        <input required name="name" value={form.name} onChange={handleChange} placeholder={t.quote.placeholderName} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>{t.quote.labelCompany}</label>
                                        <input required name="company" value={form.company} onChange={handleChange} placeholder={t.quote.placeholderCompany} className={inputCls} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
                                    <div>
                                        <label className={labelCls}>{t.quote.labelEmail}</label>
                                        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@company.com" className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>{t.quote.labelPhone}</label>
                                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+38 (___) ___-__-__" className={inputCls} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
                                    <div>
                                        <label className={labelCls}>{t.quote.labelMaterial}</label>
                                        <input name="material" value={form.material} onChange={handleChange} placeholder={t.quote.placeholderMaterial} className={inputCls} />
                                    </div>
                                    <div>
                                        <label className={labelCls}>{t.quote.labelQuantity}</label>
                                        <input name="quantity" value={form.quantity} onChange={handleChange} placeholder={t.quote.placeholderQuantity} className={inputCls} />
                                    </div>
                                </div>

                                <div>
                                    <label className={labelCls}>{t.quote.labelDeadline}</label>
                                    <input type="date" name="deadline" value={form.deadline} onChange={handleChange} className={inputCls} />
                                </div>

                                <div>
                                    <label className={labelCls}>{t.quote.labelMessage}</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder={t.quote.placeholderMessage} className={`${inputCls} resize-y min-h-20`} />
                                </div>

                                <div>
                                    <label className={labelCls}>{t.quote.labelFiles}</label>
                                    <label className="flex items-center gap-3 py-3.5 px-4.5 rounded-xl border-[1.5px] border-dashed border-(--border) cursor-pointer transition-colors duration-200 bg-(--bg-muted) hover:border-(--fg)">
                                        <IconUpload />
                                        <span className="text-sm text-(--fg-muted)">
                                            {files.length > 0 ? files.map((f) => f.name).join(', ') : t.quote.filesHint}
                                        </span>
                                        <input type="file" multiple accept=".step,.stp,.dxf,.dwg,.pdf,.zip,.stl" onChange={handleFile} className="hidden" />
                                    </label>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer text-[13px] text-(--fg-muted) leading-normal">
                                    <input type="checkbox" name="nda" checked={form.nda} onChange={handleChange} className="mt-0.5 w-4 h-4 shrink-0" />
                                    {t.quote.nda}
                                </label>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-(--fg) text-white py-4.5 px-10 rounded-full text-base font-semibold border-0 cursor-pointer w-full transition-opacity duration-200 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? t.quote.sending : t.quote.submit}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
