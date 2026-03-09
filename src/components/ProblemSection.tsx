const pains = [
  { icon: "🔍", title: "You're Not Appearing in AI Search", desc: "ChatGPT, Perplexity, and Google AI Overview are how buyers research contractors now. If you're not there, your competitor is." },
  { icon: "⏳", title: "3–4 Months In With Nothing to Show", desc: "You've heard \"SEO takes time\" more times than you can count. Meanwhile leads are flat and the invoice keeps coming." },
  { icon: "📄", title: "Generic Content That Misses the Mark", desc: "Your last agency wrote blogs that could've been about any industry. Buyers could tell. So could Google. So can AI." },
  { icon: "📊", title: "Vanity Metrics, Not Pipeline", desc: "Impressions. Sessions. Engagements. Pretty reports that don't connect to bids, jobs, or revenue. That's not a strategy." },
  { icon: "🏗️", title: "No One Knows Your Commercial Work", desc: "You've done incredible projects. But the authoritative content that gets you cited by AI — the write-ups, case studies, credentials — doesn't exist yet." },
  { icon: "🔒", title: "Locked Into Long Contracts", desc: "12-month agreements with no guarantee. No milestones. No accountability. Just hope that something works eventually." },
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 max-w-[1200px] mx-auto">
      <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">The Problem</p>
      <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2] mb-4">
        Your Marketing Agency Doesn't Understand <em className="italic text-primary">Construction</em>
      </h2>
      <p className="text-[16px] text-foreground/60 leading-[1.7] max-w-[600px]">
        They're optimizing for Google 2019. Meanwhile, your buyers are asking ChatGPT who to call.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {pains.map((p, i) => (
          <div
            key={i}
            className="bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg p-7 transition-all hover:bg-accent/[0.06] hover:border-accent/30 hover:-translate-y-1"
          >
            <div className="text-[28px] mb-4">{p.icon}</div>
            <h3 className="text-[15px] font-extrabold tracking-[0.02em] mb-2.5">{p.title}</h3>
            <p className="text-[13px] text-foreground/60 leading-[1.7]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
