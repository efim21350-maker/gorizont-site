import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { company, mailFailureMessage } from '~/lib/company';

export const runtime = 'nodejs';

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

const asText = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const smtpReady = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO;
  return Boolean(host && user && pass && to);
};

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Не удалось прочитать заявку.' }, { status: 400 });
  }

  if (asText(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = asText(body.name, 120);
  const phone = asText(body.phone, 40);
  const email = asText(body.email, 160);
  const message = asText(body.message, 4000);

  if (name.length < 2 || phone.replace(/\D/g, '').length < 6 || !isEmail(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'Проверьте имя, телефон, почту и текст заявки.' }, { status: 400 });
  }

  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: 'Нужно согласие на обработку персональных данных.' }, { status: 400 });
  }

  if (!smtpReady()) {
    return NextResponse.json({ ok: false, error: mailFailureMessage }, { status: 503 });
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Заявка с сайта ${company.shortName}`,
      text: [`Имя: ${name}`, `Телефон: ${phone}`, `Почта: ${email}`, '', message].join('\n'),
    });
  } catch (error) {
    console.error('contact form delivery failed', error);
    return NextResponse.json(
      {
        ok: false,
        error: `Письмо не ушло. Напишите на ${company.emails[0]} или ${company.emails[1]} либо позвоните ${company.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
