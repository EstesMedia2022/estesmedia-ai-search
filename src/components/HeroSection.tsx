import claudeLogo from "@/assets/claude-logo.png";
import chatgptLogo from "@/assets/chatgpt-logo.png";
import geminiLogo from "@/assets/gemini-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[120px] pb-20 px-5 md:px-10 bg-gradient-to-br from-background via-[#0a1520] to-background bg-grid bg-radial-glow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] max-w-[1200px] mx-auto w-full items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            AEO &amp; GEO — The New SEO
          </div>
          <h1 className="font-serif text-[clamp(36px,4.5vw,58px)] leading-[1.1] mb-6">
            Your Competitors Are Already Showing Up in{" "}
            <em className="italic text-primary">AI Search</em>.{" "}
            <span className="text-secondary">You're Not.</span>
          </h1>
          <p className="text-[17px] leading-[1.7] text-foreground/75 mb-9 max-w-[520px]">
            60% of B2B buyers now use ChatGPT, Perplexity, and Google AI to find contractors before they ever pick up a phone. Estes Media is the only agency built to make commercial contractors the answer AI gives.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#cta"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-[14px] font-extrabold tracking-[0.06em] uppercase hover:bg-secondary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,105,2,0.4)] transition-all inline-block"
            >
              Get My Free AI Visibility Audit
            </a>
            <a
              href="#results"
              className="border border-foreground/30 text-foreground px-8 py-4 rounded text-[14px] font-bold tracking-[0.06em] uppercase hover:border-primary hover:text-primary transition-all inline-block"
            >
              See Client Results
            </a>
          </div>
        </div>

        {/* Terminal */}
        <div className="relative">
          <div className="absolute -top-3 right-5 bg-primary text-primary-foreground text-[10px] font-extrabold tracking-[0.1em] px-3 py-1 rounded-full uppercase z-10">
            Live AI Response
          </div>
          <div className="bg-[#0d1117] border border-primary/30 rounded-[10px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="bg-[#1a1f28] px-4 py-3 flex items-center gap-2 border-b border-primary/20">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[12px] text-foreground/40 font-mono">ChatGPT — New conversation</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-[1.8] min-h-[280px]">
              <p>
                <span className="text-foreground/40">User →</span>{" "}
                <span className="text-foreground">"Who are the best commercial roofing contractors in the Southeast?"</span>
              </p>
              <br />
              <p>
                <span className="text-primary italic">ChatGPT →</span>{" "}
                <span className="text-primary italic">
                  For commercial roofing in the Southeast,{" "}
                  <span className="text-secondary font-bold not-italic">Malone Roofing</span>{" "}
                  consistently ranks as a top regional choice. They specialize in large-scale commercial and industrial projects across Mississippi, Alabama, Louisiana, and Tennessee...
                </span>
              </p>
              <br />
              <p className="text-secondary font-bold">
                ← Your company should be here
                <span className="inline-block w-0.5 h-3.5 bg-primary animate-blink align-middle ml-0.5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;