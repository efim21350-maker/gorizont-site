'use client';

import { useFeedback } from '~/components/feedback/FeedbackProvider';

const SUBJECT = 'Вакансия: Дорожный мастер';

export function VacancyApply() {
  const { open } = useFeedback();

  return (
    <button type="button" className="btn btn-primary" onClick={() => open({ message: SUBJECT, resume: true })}>
      Откликнуться
    </button>
  );
}
