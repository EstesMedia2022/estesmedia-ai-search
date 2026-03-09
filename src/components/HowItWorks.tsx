const steps = [
  { num: "01", icon: "🔬", title: "AI Visibility Audit", desc: "We audit exactly how (or if) your company appears across ChatGPT, Perplexity, Google AI, and Bing Copilot. You see the gaps before we spend a dollar." },
  { num: "02", icon: "🏛️", title: "Authority Foundation", desc: "We build the technical and content foundation that AI needs to recognize and trust your company — structured data, entity signals, and industry authority markers." },
  { num: "03", icon: "✍️", title: "AI-Optimized Content", desc: "We write content structured specifically for AI extraction — FAQ schemas, entity reinforcement, answer-first formatting that makes you the source AI cites." },
  { num: "04", icon: "🔗", title: "Citation Network", desc: "We get your expertise quoted, referenced, and cited across the publications and directories that AI models actually train on and source from." },
  { num: "05", icon: "📈", title: "Track AI Share of Voice", desc: "We monitor your AI mention rate across platforms monthly, so you can see your visibility growing — not just guess at it." },
  { num: "06", icon: "🚀", title: "Compound Monthly", desc: "Every piece of content, every citation, every case study compounds. Unlike ads that stop working when you stop paying, AI authority builds permanently." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-foreground/[0.015] bg-grid bg-radial-glow">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">The System</p>
        <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2]">
          How We Make AI <em className="italic text-primary">Recommend</em> Your Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((s) => (
            <div key={s.num} className="relative p-8 bg-foreground/[0.03] border border-foreground/[0.07] rounded-lg">
              <span className="font-serif text-[56px] text-primary/15 absolute top-4 right-5 leading-none">{s.num}</span>
              <div className="text-2xl mb-4">{s.icon}</div>
              <h3 className="text-[15px] font-extrabold mb-2.5 text-primary">{s.title}</h3>
              <p className="text-[13px] text-foreground/65 leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;