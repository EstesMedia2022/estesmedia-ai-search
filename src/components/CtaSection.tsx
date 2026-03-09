import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ctaMascot from "@/assets/cta-mascot.png";

const CtaSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-form", {
        body: {
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        },
      });

      if (error) throw error;

      toast.success("Thanks! We'll be in touch soon.");
      setForm({ name: "", company: "", email: "", phone: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-24 px-5 md:px-10 bg-gradient-to-br from-primary/[0.12] to-background relative overflow-hidden text-center bg-grid bg-radial-glow">
      <img
        src={ctaMascot}
        alt="Mascot"
        className="absolute right-[5%] bottom-0 h-[300px] w-auto opacity-90 pointer-events-none drop-shadow-[0_0_40px_rgba(25,149,205,0.3)] hidden lg:block"
      />
      <div className="max-w-[640px] mx-auto relative z-10">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Get Started Today</p>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.2] mb-5">
          Find Out If AI Search Is Costing You <em className="italic text-primary">Leads Right Now</em>
        </h2>
        <p className="text-[16px] text-foreground/70 leading-[1.7] mb-9">
          Get a free AI Visibility Audit. We'll show you exactly where your company stands in ChatGPT, Perplexity, and Google AI — and what it's costing you in missed bids.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[440px] mx-auto mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full"
          />
          <input
            type="email"
            placeholder="Work Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-[14px] font-extrabold tracking-[0.06em] uppercase hover:bg-secondary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,105,2,0.4)] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Get My Free AI Visibility Audit →"}
          </button>
        </form>
        <p className="text-[12px] text-foreground/40">No commitment. No BS. Just clarity on where you stand.</p>
      </div>
    </section>
  );
};

export default CtaSection;
