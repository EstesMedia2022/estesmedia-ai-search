import { useState } from "react";

const faqs = [
  {
    q: "What exactly is AI Search Optimization and why does it matter now?",
    a: "AI Search Optimization (AEO/GEO) is the practice of making your company the answer that AI tools like ChatGPT, Perplexity, and Google AI Overview give when potential buyers ask questions related to your services. It matters because 60% of B2B buyers now start their research with AI, and if you're not showing up, your competitors are getting those leads."
  },
  {
    q: "How is this different from regular SEO?",
    a: "Traditional SEO focuses on ranking in Google's organic results. AI optimization focuses on being cited and recommended by AI models. The content structure, authority signals, and distribution strategies are fundamentally different. We do both, but AEO/GEO is what separates you from every other agency's approach."
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable improvements in AI visibility within 60–90 days. Full citation authority typically builds over 4–6 months. Unlike traditional SEO where you're told to wait 12 months, we show you exactly what's changing each month with AI share-of-voice tracking."
  },
  {
    q: "What's your guarantee?",
    a: "We don't lock you into long-term contracts. We offer a results guarantee — if we don't deliver measurable improvements in your AI visibility and lead pipeline within the agreed timeframe, you can walk. No questions asked."
  },
  {
    q: "Do you work with companies outside of roofing?",
    a: "Yes. While we specialize in commercial contractors — roofing, demolition, environmental services, general contracting — we also work with B2B companies in adjacent industries. The common thread is that our clients need to be found and recommended by AI in their specific niche."
  },
  {
    q: "How do we get started?",
    a: "Start with a free AI Visibility Audit. We'll show you exactly where your company stands across ChatGPT, Perplexity, Google AI, and Bing Copilot — and what it's costing you. From there, we'll build a custom roadmap. No commitment required."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-5 md:px-10 bg-foreground/[0.015]">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">FAQ</p>
        <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2] mb-12">
          Common <em className="italic text-primary">Questions</em>
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-foreground/[0.08]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full bg-transparent border-none text-foreground font-sans text-[15px] font-bold py-6 text-left cursor-pointer flex items-center justify-between gap-4 hover:text-primary transition-colors"
              >
                {faq.q}
                <span className={`text-xl text-primary transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${openIndex === i ? "max-h-[400px]" : "max-h-0"}`}
              >
                <div className="pb-5 text-[14px] text-foreground/65 leading-[1.8]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
