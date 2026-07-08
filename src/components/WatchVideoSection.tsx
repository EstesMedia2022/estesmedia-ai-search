const WatchVideoSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-background via-[#0a1520]/50 to-background">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">
          2-Minute Briefing
        </p>
        <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.2] mb-4">
          Watch This Before Booking a Call
        </h2>
        <p className="text-[15px] text-foreground/60 leading-[1.7] max-w-[560px] mx-auto mb-10">
          See exactly how Estes Media makes commercial contractors the answer AI search gives — and why your competitors are already ahead.
        </p>

        <div className="relative max-w-[900px] mx-auto rounded-[12px] overflow-hidden border border-foreground/[0.08] bg-[#0d1117] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="relative aspect-video overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/WOMgzotbYII?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1"
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Top overlay to hide YouTube title bar */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-[60px] bg-[#0d1117]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchVideoSection;
