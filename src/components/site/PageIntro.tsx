export default function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <p className="text-xs tracking-[0.2em] text-[#C5001C] uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] font-semibold tracking-[-0.03em] text-[#111] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#3a3a3a]">{lede}</p>
      </div>
    </header>
  );
}
