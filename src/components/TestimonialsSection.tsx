const testimonials = [
  {
    text: "Far from the cookie-cutter approach other agencies took — they understood our industry from day one. The results speak for themselves: over $1 million in additional revenue we can directly attribute to Estes Media's work.",
    name: "Peter Chaffee",
    title: "Owner, Chaffee Roofing — Providence, RI (Est. 1909)",
    platform: "Google",
  },
  {
    text: "Estes Media was essential to AnchoRock's go-to-market success and eventual acquisition. They understood what it meant to build authority in a niche B2B market fast — and they delivered exactly that.",
    name: "Taylor Thorn",
    title: "Founder, AnchoRock (Acquired by KPA)",
    platform: "SEMrush",
  },
  {
    text: "They have leveled us up from a D to an A. The content strategy, the positioning, the AI-forward thinking — PeopleJoy is showing up in conversations it never would have before.",
    name: "Leadership Team",
    title: "PeopleJoy — Financial Wellness B2B SaaS",
    platform: "Google",
  },
];

const GoogleG = () => (
  <span className="text-[13px] font-extrabold">
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 max-w-[1200px] mx-auto">
      <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Client Testimonials</p>
      <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2]">
        Don't Take Our Word for <em className="italic text-primary">It</em>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg p-7 relative">
            <span className="font-serif text-[80px] text-primary/15 absolute -top-2.5 left-5 leading-none">"</span>
            <div className="text-[#FFB800] text-sm tracking-[2px] mb-4">★★★★★</div>
            <p className="text-[13px] text-foreground/75 leading-[1.8] italic mb-5">{t.text}</p>
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] font-extrabold">{t.name}</span>
              <span className="text-[11px] text-foreground/40 tracking-[0.05em]">{t.title}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-foreground/[0.07]">
              <span className="text-[10px] text-foreground/35 uppercase tracking-[0.1em]">Verified Review on</span>
              {t.platform === "Google" ? <GoogleG /> : <span className="text-[11px] font-bold text-foreground/50">SEMrush</span>}
              <span className="text-[#FFB800] text-xs ml-1">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
