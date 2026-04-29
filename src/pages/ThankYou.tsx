import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ctaMascot from "@/assets/cta-mascot.webp";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center relative overflow-hidden pt-[120px] pb-20 px-5 md:px-10 bg-gradient-to-br from-primary/[0.12] via-[#0a1520] to-background bg-grid bg-radial-glow">
        <div className="max-w-[720px] mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-4 py-1.5 text-[12px] font-bold tracking-[0.1em] uppercase text-primary mb-5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
            Request Received
          </div>
          <h1 className="font-serif text-[clamp(36px,4.5vw,58px)] leading-[1.1] mb-6">
            Thanks — Your <em className="italic text-primary">AI Visibility Audit</em> Is On The Way.
          </h1>
          <p className="text-[17px] leading-[1.7] text-foreground/75 mb-9 max-w-[560px] mx-auto">
            We got your details. A senior strategist will review your company's presence across ChatGPT, Perplexity, and Google AI and reach out within one business day with your audit.
          </p>

          <div className="bg-foreground/[0.04] border border-foreground/10 rounded-[10px] p-6 md:p-8 text-left mb-10">
            <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">What happens next</p>
            <ol className="space-y-4 text-[15px] text-foreground/80 leading-[1.6]">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">01.</span>
                <span>We run your company through ChatGPT, Perplexity, and Google AI Overviews to see where (and how) you're showing up.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">02.</span>
                <span>We benchmark you against the contractors AI is recommending instead — so you know exactly what's costing you bids.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">03.</span>
                <span>You get a short call walking through the findings and the fastest path to becoming the answer AI gives.</span>
              </li>
            </ol>
          </div>

          <Link
            to="/"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-[14px] font-extrabold tracking-[0.06em] uppercase hover:bg-secondary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,105,2,0.4)] transition-all inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <img
          src={ctaMascot}
          alt="Mascot"
          className="absolute right-[5%] bottom-0 h-[300px] w-auto opacity-90 pointer-events-none drop-shadow-[0_0_40px_rgba(25,149,205,0.3)] hidden lg:block"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
