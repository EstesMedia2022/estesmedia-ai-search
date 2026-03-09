import award1 from "@/assets/award-1.png";
import award2 from "@/assets/award-2.png";
import award3 from "@/assets/award-3.svg";
import award4 from "@/assets/award-4.svg";

const TrustStrip = () => {
  return (
    <section className="bg-foreground/[0.03] border-t border-b border-foreground/[0.07] py-7 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 flex-wrap">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-foreground/35">
          Recognized By
        </span>
        <div className="flex items-center gap-6 flex-wrap">
          <img src={award1} alt="Award badge" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
          <img src={award2} alt="Award badge" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
          <img src={award3} alt="Award badge" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
          <img src={award4} alt="Award badge" className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#FFB800] text-lg tracking-[2px]">★★★★★</span>
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/50">Google Reviews</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[#FFB800] text-lg tracking-[2px]">★★★★★</span>
          <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/50">SEMrush Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
