'use client';

import { FormEvent, useId, useState } from 'react';
import Link from 'next/link';

type Status = 'idle' | 'sending' | 'success' | 'error';

const ACCEPT = '.pdf,.doc,.docx,.rtf,.jpg,.jpeg,.png';
const MAX_RESUME_BYTES = 10 * 1024 * 1024;
const RESUME_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'rtf', 'jpg', 'jpeg', 'png']);

const initial = { name: '', phone: '', email: '', message: '', consent: false, website: '' };

const resumeProblem = (file: File) => {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  if (!RESUME_EXTENSIONS.has(extension)) {
    return 'Резюме можно приложить файлом pdf, doc, docx, rtf, jpg или png.';
  }
  if (file.size > MAX_RESUME_BYTES) return 'Файл резюме больше 10 МБ.';
  return '';
};

export default function ContactRequestForm({
  idPrefix,
  initialMessage = '',
  resume = false,
}: {
  idPrefix?: string;
  initialMessage?: string;
  resume?: boolean;
}) {
  const reactId = useId();
  const id = idPrefix ?? reactId;
  const [values, setValues] = useState({ ...initial, message: initialMessage });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const jsonRequest = () => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      consent: values.consent,
      website: values.website,
    }),
  });

  const formRequest = () => {
    const body = new FormData();
    body.set('name', values.name.trim());
    body.set('phone', values.phone.trim());
    body.set('email', values.email.trim());
    body.set('message', values.message.trim());
    body.set('consent', String(values.consent));
    body.set('website', values.website);
    if (file) body.set('resume', file);
    return { method: 'POST', body };
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (values.name.trim().length < 2) {
      setStatus('error');
      setError('Укажите имя.');
      return;
    }
    if (values.phone.replace(/\D/g, '').length < 6) {
      setStatus('error');
      setError('Укажите телефон.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setStatus('error');
      setError('Укажите электронную почту.');
      return;
    }
    if (values.message.trim().length < 10) {
      setStatus('error');
      setError('Опишите задачу чуть подробнее — хотя бы в одном предложении.');
      return;
    }
    if (!values.consent) {
      setStatus('error');
      setError('Нужно согласие на обработку персональных данных, чтобы мы могли ответить.');
      return;
    }
    if (file) {
      const problem = resumeProblem(file);
      if (problem) {
        setStatus('error');
        setError(problem);
        return;
      }
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', resume || file ? formRequest() : jsonRequest());
      const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok || !payload?.ok) {
        setStatus('error');
        setError(payload?.error || 'Не удалось отправить заявку. Письмо не отправлено. Напишите на почту компании.');
        return;
      }

      setStatus('success');
      setValues({ ...initial, message: initialMessage });
      setFile(null);
    } catch {
      setStatus('error');
      setError('Нет связи с сервером. Письмо не отправлено. Напишите на почту компании.');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-[#111] bg-white p-6 md:p-8" role="status">
        <p className="font-display text-2xl tracking-tight text-[#111]">Заявка отправлена</p>
        <p className="mt-3 text-base leading-relaxed text-[#3a3a3a]">
          Мы получили сообщение и ответим на указанные контакты.
        </p>
        <button
          type="button"
          className="mt-6 btn btn-primary"
          onClick={() => {
            setStatus('idle');
          }}
        >
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm" htmlFor={`${id}-name`}>
          <span className="mb-1.5 block text-xs tracking-[0.14em] text-[#5c5c5c] uppercase">Имя</span>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full border border-black/15 bg-white px-3 py-3 text-base text-[#111] outline-none focus:border-[#C5001C]"
          />
        </label>
        <label className="block text-sm" htmlFor={`${id}-phone`}>
          <span className="mb-1.5 block text-xs tracking-[0.14em] text-[#5c5c5c] uppercase">Телефон</span>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full border border-black/15 bg-white px-3 py-3 text-base text-[#111] outline-none focus:border-[#C5001C]"
          />
        </label>
      </div>
      <label className="block text-sm" htmlFor={`${id}-email`}>
        <span className="mb-1.5 block text-xs tracking-[0.14em] text-[#5c5c5c] uppercase">Электронная почта</span>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full border border-black/15 bg-white px-3 py-3 text-base text-[#111] outline-none focus:border-[#C5001C]"
        />
      </label>
      <label className="block text-sm" htmlFor={`${id}-message`}>
        <span className="mb-1.5 block text-xs tracking-[0.14em] text-[#5c5c5c] uppercase">Сообщение</span>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Объект, вид работ, есть ли проект"
          className="w-full border border-black/15 bg-white px-3 py-3 text-base text-[#111] outline-none focus:border-[#C5001C]"
        />
      </label>
      {resume ? (
        <label className="block text-sm" htmlFor={`${id}-resume`}>
          <span className="mb-1.5 block text-xs tracking-[0.14em] text-[#5c5c5c] uppercase">Резюме</span>
          <input
            id={`${id}-resume`}
            name="resume"
            type="file"
            accept={ACCEPT}
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="w-full border border-black/15 bg-white px-3 py-3 text-base text-[#111]"
          />
          <span className="mt-1 block text-xs text-[#6b6b6b]">
            Один файл: pdf, doc, docx, rtf, jpg или png, до 10 МБ.
          </span>
        </label>
      ) : null}
      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#3a3a3a]">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={(event) => setValues((prev) => ({ ...prev, consent: event.target.checked }))}
          className="mt-1 h-4 w-4 accent-[#C5001C]"
        />
        <span>
          Согласен на обработку персональных данных для ответа на заявку. Подробности — в{' '}
          <Link href="/privacy" className="underline decoration-[#C5001C] underline-offset-2">
            политике конфиденциальности
          </Link>
          .
        </span>
      </label>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Сайт
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
          />
        </label>
      </div>
      {status === 'error' && error ? (
        <p className="text-sm leading-relaxed text-[#9E0016]" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn w-full btn-primary sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
      </button>
    </form>
  );
}
