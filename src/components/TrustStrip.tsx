import award1 from "@/assets/award-1.webp";
import award2 from "@/assets/award-2.webp";
import award3 from "@/assets/award-3.svg";
import award4 from "@/assets/award-4.svg";

const badges = [
  { src: award1, alt: "B2B Excellence Award", width: 120, height: 120 },
  { src: award2, alt: "Top Marketing Agency Badge", width: 120, height: 120 },
  { src: award3, alt: "UpCity Excellence Badge", width: 666, height: 832 },
  { src: award4, alt: "SEMrush Certified Partner", width: 100, height: 100 },
];

const TrustStrip = () => {
  return (
    <section className="bg-foreground/[0.03] border-t border-b border-foreground/[0.07] py-7 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 flex-wrap">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/35">Recognized By</span>
        <div className="flex items-center gap-6 flex-wrap">
          {badges.map((badge) => (
            <img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              loading="lazy"
              decoding="async"
              className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#FFB800] text-lg tracking-[2px]" aria-hidden="true">
            ★★★★★
          </span>
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/50">
            5 Stars on Google Reviews
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#FFB800] text-lg tracking-[2px]" aria-hidden="true">
            ★★★★★
          </span>
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/50">
            5 Stars on SEMrush Reviews
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
