import maloneImg from "@/assets/malone-roofing.webp";
import totalImg from "@/assets/total-wrecking.webp";

const results = [
  {
    img: maloneImg,
    tag: "Commercial Roofing · Southeast",
    title: "Malone Roofing",
    desc: "50-year commercial roofing company operating across Mississippi, Alabama, Louisiana, Tennessee & Florida's Panhandle. We built their full digital presence and AI authority from the ground up.",
    metrics: [
      { num: "20x", label: "AI ROI" },
      { num: "↑↑↑", label: "Qualified Leads" },
      { num: "✓", label: "Cited in Search" },
    ],
  },
  {
    img: totalImg,
    tag: "Industrial Demolition · National",
    title: "Total Wrecking & Environmental",
    desc: "America's leading industrial demolition company. We rebuilt their digital presence with industry-specific content that now ranks and surfaces in AI responses nationally.",
    metrics: [
      { num: "25%", label: "Organic Traffic ↑" },
      { num: "200%", label: "Website Traffic ↑" },
      { num: "10x", label: "Inbound Calls" },
    ],
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 px-5 md:px-10 max-w-[1200px] mx-auto">
      <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Proof It Works</p>
      <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2]">
        Real Results for <em className="italic text-primary">Real Contractors</em>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12">
        {results.map((r, i) => (
          <div
            key={i}
            className="bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <img src={r.img} alt={r.title} className="w-full h-[220px] object-cover object-top" />
            <div className="p-6">
              <span className="inline-block bg-primary/15 text-primary text-[10px] font-extrabold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full mb-3">
                {r.tag}
              </span>
              <h3 className="text-lg font-extrabold mb-2">{r.title}</h3>
              <p className="text-[13px] text-foreground/65 leading-[1.7] mb-4">{r.desc}</p>
              <div className="flex gap-5 flex-wrap">
                {r.metrics.map((m, j) => (
                  <div key={j} className="text-center">
                    <span className="font-serif text-[28px] text-secondary block">{m.num}</span>
                    <span className="text-[10px] text-foreground/50 uppercase tracking-[0.08em]">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
