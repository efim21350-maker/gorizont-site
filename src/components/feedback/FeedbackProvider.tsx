'use client';

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from 'react';

import ContactRequestForm from '~/components/feedback/ContactRequestForm';

type FeedbackContextValue = {
  open: () => void;
  close: () => void;
};

const FeedbackContext = createContext<FeedbackContextValue | null>(null);

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  return context ?? { open: () => undefined, close: () => undefined };
};

export function FeedbackButton({
  className,
  children = 'Обратная связь',
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useFeedback();

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

export function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => {
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    dialogRef.current?.querySelector<HTMLElement>('input, textarea, button')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, close]);

  return (
    <FeedbackContext.Provider value={{ open, close }}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
          <button type="button" aria-label="Закрыть форму" className="absolute inset-0 bg-[#111]/70" onClick={close} />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[92vh] w-full overflow-y-auto bg-[#f6f4f1] p-5 shadow-2xl sm:max-w-xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.18em] text-[#C5001C] uppercase">Обратная связь</p>
                <h2 id={titleId} className="mt-2 font-display text-3xl tracking-tight text-[#111]">
                  Расскажите об объекте
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="border border-black/15 px-3 py-2 text-sm text-[#111] hover:border-[#111]"
              >
                Закрыть
              </button>
            </div>
            <ContactRequestForm />
          </div>
        </div>
      ) : null}
    </FeedbackContext.Provider>
  );
}
