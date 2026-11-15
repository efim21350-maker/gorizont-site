import { services } from '~/lib/company';

export default function ServiceIndex() {
  return (
    <ol className="grid gap-px bg-black/10 md:grid-cols-2">
      {services.map((service) => (
        <li key={service.num} className="bg-white p-7 md:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-display text-sm tracking-[0.18em] text-[#C5001C]">{service.num}</span>
            <span className="text-xs tracking-[0.14em] text-[#8a8a8a] uppercase">{service.lead}</span>
          </div>
          <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight text-[#111] md:text-4xl">
            {service.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3a3a3a]">{service.text}</p>
        </li>
      ))}
    </ol>
  );
}
