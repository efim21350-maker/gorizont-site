import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { company, mailFailureMessage, mailTo } from '~/lib/company';

export const runtime = 'nodejs';

const MAX_RESUME_BYTES = 10 * 1024 * 1024;

const RESUME_TYPES = new Map<string, string[]>([
  ['pdf', ['application/pdf']],
  ['doc', ['application/msword', 'application/octet-stream']],
  ['docx', ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/octet-stream']],
  ['rtf', ['application/rtf', 'text/rtf', 'application/octet-stream']],
  ['jpg', ['image/jpeg']],
  ['jpeg', ['image/jpeg']],
  ['png', ['image/png']],
]);

const asText = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const recipient = () => process.env.MAIL_TO?.trim() || mailTo;

const smtpReady = () => Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const resumeError = (file: File) => {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  const allowed = RESUME_TYPES.get(extension);
  if (!allowed || (file.type && !allowed.includes(file.type))) {
    return 'Резюме можно приложить файлом pdf, doc, docx, rtf, jpg или png.';
  }
  if (file.size > MAX_RESUME_BYTES) {
    return 'Файл резюме больше 10 МБ.';
  }
  return '';
};

type Fields = {
  name: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
  website: string;
  resume: File | null;
};

const readJson = async (request: Request): Promise<Fields> => {
  const body = (await request.json()) as Record<string, unknown>;
  return {
    name: asText(body.name, 120),
    phone: asText(body.phone, 40),
    email: asText(body.email, 160),
    message: asText(body.message, 4000),
    consent: body.consent === true,
    website: asText(body.website, 200),
    resume: null,
  };
};

const readForm = async (request: Request): Promise<Fields> => {
  const form = await request.formData();
  const resume = form.get('resume');
  return {
    name: asText(form.get('name'), 120),
    phone: asText(form.get('phone'), 40),
    email: asText(form.get('email'), 160),
    message: asText(form.get('message'), 4000),
    consent: form.get('consent') === 'true',
    website: asText(form.get('website'), 200),
    resume: resume instanceof File && resume.size > 0 ? resume : null,
  };
};

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  let fields: Fields;

  try {
    fields = contentType.includes('multipart/form-data') ? await readForm(request) : await readJson(request);
  } catch {
    return NextResponse.json({ ok: false, error: 'Не удалось прочитать заявку.' }, { status: 400 });
  }

  if (fields.website) {
    return NextResponse.json({ ok: true });
  }

  if (
    fields.name.length < 2 ||
    fields.phone.replace(/\D/g, '').length < 6 ||
    !isEmail(fields.email) ||
    fields.message.length < 10
  ) {
    return NextResponse.json({ ok: false, error: 'Проверьте имя, телефон, почту и текст заявки.' }, { status: 400 });
  }

  if (!fields.consent) {
    return NextResponse.json({ ok: false, error: 'Нужно согласие на обработку персональных данных.' }, { status: 400 });
  }

  if (fields.resume) {
    const error = resumeError(fields.resume);
    if (error) return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  if (!smtpReady()) {
    console.error('почта не настроена');
    return NextResponse.json({ ok: false, error: mailFailureMessage }, { status: 503 });
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const subject = fields.message.startsWith('Вакансия:')
    ? fields.message.split('\n')[0]
    : `Заявка с сайта ${company.shortName}`;

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
      to: recipient(),
      replyTo: fields.email,
      subject,
      text: [`Имя: ${fields.name}`, `Телефон: ${fields.phone}`, `Почта: ${fields.email}`, '', fields.message].join(
        '\n',
      ),
      attachments: fields.resume
        ? [
            {
              filename: fields.resume.name,
              content: Buffer.from(await fields.resume.arrayBuffer()),
              contentType: fields.resume.type || undefined,
            },
          ]
        : undefined,
    });
  } catch (error) {
    console.error('contact form delivery failed', error);
    return NextResponse.json({ ok: false, error: `Письмо не ушло. Напишите на ${recipient()}.` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
