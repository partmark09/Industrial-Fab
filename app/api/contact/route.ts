import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, company, email, phone, material, quantity, deadline, message, nda, attachments } = body;

    console.log('[contact] incoming request:', { name, company, email, phone });

    const { data, error } = await resend.emails.send({
        from: 'IndustrialFab <onboarding@resend.dev>',
        to: 'filts@variant-irrigation.com.ua',
        replyTo: email,
        subject: `Нова заявка від ${name} (${company})`,
        attachments: attachments?.map((a: { name: string; content: string }) => ({
            filename: a.name,
            content: a.content,
        })),
        html: `
            <h2 style="font-family:sans-serif;margin-bottom:16px">Нова заявка з сайту IndustrialFab</h2>
            <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
                <tr style="background:#f5f5f5"><td style="padding:10px 14px;font-weight:600;white-space:nowrap">Ім'я</td><td style="padding:10px 14px">${name}</td></tr>
                <tr><td style="padding:10px 14px;font-weight:600">Компанія</td><td style="padding:10px 14px">${company}</td></tr>
                <tr style="background:#f5f5f5"><td style="padding:10px 14px;font-weight:600">Email</td><td style="padding:10px 14px"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:10px 14px;font-weight:600">Телефон</td><td style="padding:10px 14px">${phone || '—'}</td></tr>
                <tr style="background:#f5f5f5"><td style="padding:10px 14px;font-weight:600">Матеріал</td><td style="padding:10px 14px">${material || '—'}</td></tr>
                <tr><td style="padding:10px 14px;font-weight:600">Кількість</td><td style="padding:10px 14px">${quantity || '—'}</td></tr>
                <tr style="background:#f5f5f5"><td style="padding:10px 14px;font-weight:600">Дедлайн</td><td style="padding:10px 14px">${deadline || '—'}</td></tr>
                <tr><td style="padding:10px 14px;font-weight:600">NDA</td><td style="padding:10px 14px">${nda ? 'Так' : 'Ні'}</td></tr>
                <tr style="background:#f5f5f5"><td style="padding:10px 14px;font-weight:600;vertical-align:top">Повідомлення</td><td style="padding:10px 14px">${message || '—'}</td></tr>
            </table>
        `,
    });

    if (error) {
        console.error('[contact] Resend error:', error);
        return NextResponse.json({ error }, { status: 500 });
    }

    console.log('[contact] email sent successfully, id:', data?.id);
    return NextResponse.json({ ok: true, id: data?.id });
}
