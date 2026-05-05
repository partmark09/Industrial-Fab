import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { LangProvider } from './i18n/LangContext';

const geist = Geist({
    variable: '--font-geist',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'NexusFab — Contract Metal Manufacturing',
    description: 'Contract manufacturing of metal parts and assemblies. Laser cutting, CNC machining, welding, coating. 210,000 m² production area, 125,000 t/year, 65 countries. ISO 9001/14001/45001/EN 1090.',
    keywords: [
        // EN — general
        'industrial manufacturing platform', 'contract manufacturing', 'contract metal manufacturing',
        'contract machining', 'custom metal fabrication', 'precision machining services',
        'full-cycle metal fabrication', 'metal parts and assemblies production',
        // EN — by process
        'CNC machining services', 'CNC machining Ukraine', 'CNC milling', 'CNC turning',
        'sheet metal fabrication', 'sheet metal fabrication company', 'custom sheet metal fabrication',
        'metal laser cutting', 'laser cutting metal parts', 'metal bending services',
        'welding services', 'robotic welding', 'surface treatment', 'powder coating',
        'painting', 'galvanizing', 'chrome plating', 'tube cutting and bending', 'tube fabrication',
        'metal assembly and integration', 'contract CNC milling',
        'precision metal fabrication', 'structural steel fabrication company',
        // EN — by industry
        'agricultural machinery fabrication', 'energy equipment fabrication',
        'industrial machinery components', 'infrastructure steel structures',
        'transportation and trailer parts', 'defense industry metal components',
        // EN — long-tail
        'custom metal fabrication services', 'precision CNC machining and milling services',
        'custom sheet metal fabrication company', 'contract metal parts manufacturing in Ukraine',
        'contract metal parts manufacturing in Europe', 'metal fabrication for machinery and equipment',
        'full-cycle fabrication cutting bending machining welding coating',
        'heavy duty metal assemblies manufacturing', 'CNC machining of stainless steel aluminum carbon steel',
        'industrial metal fabrication services for OEMs', 'laser cutting and bending of sheet metal',
        'contract CNC milling and turning',
        // UA — general
        'контрактне виробництво металевих виробів', 'металообробка на замовлення',
        'повний цикл металообробки', 'виготовлення металевих деталей та вузлів',
        'контрактне виробництво в Україні',
        // UA — by process
        'лазерна різка металу', 'плазмова різка металу', 'листозгинання', 'гнуття металу',
        'трубозгинання', 'гнуття труб', 'координатно-пробивні роботи', 'штампування',
        'фрезерні роботи ЧПК', 'токарні роботи ЧПК', 'механічна обробка металу',
        'зварювання металоконструкцій', 'роботизоване зварювання',
        'порошкове фарбування металу', 'рідке фарбування', 'цинкування', 'тверде хромування',
        'контрактне виробництво металевих конструкцій', 'виготовлення корпусів і рам',
        // UA — by industry
        'виготовлення деталей для машинобудування', 'металеві компоненти для агротехніки',
        'металоконструкції для енергетики', 'виробництво інфраструктурних конструкцій',
        'виготовлення кузовів і рам для транспорту', 'металеві вузли для оборонної промисловості',
        // UA — long-tail
        'замовити лазерну різку металу', 'послуги фрезерних робіт ЧПК в Україні',
        'виготовлення металевих конструкцій на замовлення',
        'контрактне виробництво металевих деталей оптом',
        'виготовлення зварних рам і каркасів', 'виробництво металевих деталей для техніки',
        'послуги металообробки повного циклу',
    ],
    openGraph: {
        title: 'NexusFab — Contract Metal Manufacturing',
        description: 'Full-cycle metal processing under one roof. ISO 9001/14001/45001. 30+ years on the market.',
        type: 'website',
        locale: 'uk_UA',
        alternateLocale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NexusFab — Contract Metal Manufacturing',
        description: 'Full-cycle metal processing: laser cutting, CNC, welding, coating. 65 countries.',
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={`${geist.variable} antialiased`}>
                <LangProvider>{children}</LangProvider>
            </body>
        </html>
    );
}
