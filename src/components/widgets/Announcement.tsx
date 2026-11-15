import { announcementData } from '~/shared/data/global.data';

const Announcement = () => {
  const { title, callToAction } = announcementData;

  return (
    <div className="border-b border-black/10 bg-[#111] px-4 py-2 text-sm text-white">
      <span className="mr-2 text-xs tracking-[0.14em] text-[#C5001C] uppercase">{title}</span>
      {callToAction?.text && callToAction.href ? (
        <a href={callToAction.href} className="hover:underline">
          {callToAction.text}
        </a>
      ) : null}
    </div>
  );
};

export default Announcement;
