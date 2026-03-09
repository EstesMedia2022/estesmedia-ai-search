const stats = [
  { number: "60%", color: "text-primary", label: "of B2B buyers now use AI tools to research vendors before contacting anyone" },
  { number: "30%", color: "text-primary", label: "of US desktop searches now show AI overviews — up from 10% just 6 months ago" },
  { number: "20x", color: "text-secondary", label: "ROI delivered for Malone Roofing — a construction company now cited by AI across the Southeast" },
  { number: "$1M+", color: "text-secondary", label: "in additional revenue generated for Chaffee Roofing with our construction-first content strategy" },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">
          The AI Search Shift Is Already Here
        </p>
        <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2]">
          If You're Not in AI Search, You're <em className="italic text-primary">Invisible</em> to Half Your Market
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mt-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-foreground/[0.03] border border-foreground/[0.07] p-9 text-center relative overflow-hidden transition-all hover:bg-primary/[0.08] hover:border-primary/30 hover:-translate-y-1 group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent" />
              <div className={`font-serif text-[52px] leading-none mb-2 ${s.color}`}>{s.number}</div>
              <p className="text-[13px] text-foreground/60 leading-[1.5] font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
