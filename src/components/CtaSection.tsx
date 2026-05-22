import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ctaMascot from "@/assets/cta-mascot.webp";

const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    referer_url: document.referrer || "",
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_id: params.get("utm_id") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    utm_keyword: params.get("utm_keyword") || "",
    utm_matchtype: params.get("utm_matchtype") || ""
  };
};

const CtaSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });
  const [hiddenFields, setHiddenFields] = useState(getUtmParams);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setHiddenFields(getUtmParams());
  }, []);

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
          ...hiddenFields
        }
      });

      if (error) throw error;

      setForm({ name: "", company: "", email: "", phone: "" });
      // Full page load (not SPA navigate) so GTM re-initializes and the
      // "Thank You page" PAGEVIEW trigger fires its conversion tags.
      window.location.assign("/thank-you");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-24 px-5 bg-gradient-to-br from-primary/[0.12] to-background relative overflow-hidden bg-grid bg-radial-glow mx-0 text-center md:px-[184px]">
      <img
        src={ctaMascot}
        alt="Mascot"
        className="absolute right-[5%] bottom-0 h-[300px] w-auto opacity-90 pointer-events-none drop-shadow-[0_0_40px_rgba(25,149,205,0.3)] hidden lg:block" />
      
      <div className="max-w-[640px] mx-auto relative z-10">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Request Consultation</p>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.2] mb-5">
          Find Out If AI Search Is Costing You <em className="italic text-primary">Leads Right Now</em>
        </h2>
        <p className="text-[16px] text-foreground/70 leading-[1.7] mb-9">
          Get a free AI Visibility Audit. We'll show you exactly where your company stands in ChatGPT, Perplexity, and Google AI — and what it's costing you in missed bids.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[440px] mx-auto mb-6">
          {/* Hidden UTM fields */}
          <input type="hidden" name="referer_url" value={hiddenFields.referer_url} />
          <input type="hidden" name="utm_source" value={hiddenFields.utm_source} />
          <input type="hidden" name="utm_medium" value={hiddenFields.utm_medium} />
          <input type="hidden" name="utm_id" value={hiddenFields.utm_id} />
          <input type="hidden" name="utm_campaign" value={hiddenFields.utm_campaign} />
          <input type="hidden" name="utm_term" value={hiddenFields.utm_term} />
          <input type="hidden" name="utm_content" value={hiddenFields.utm_content} />
          <input type="hidden" name="utm_keyword" value={hiddenFields.utm_keyword} />
          <input type="hidden" name="utm_matchtype" value={hiddenFields.utm_matchtype} />

          <input
            id="name"
            autoComplete="name"
            aria-label="Your Name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full" />
          
          <input
            id="company"
            autoComplete="organization"
            aria-label="Company Name"
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full" />
          
          <input
            id="email"
            autoComplete="email"
            aria-label="Work Email"
            type="email"
            name="email"
            placeholder="Work Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full" />
          
          <input
            id="phone"
            autoComplete="tel"
            aria-label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-foreground/[0.07] border border-foreground/15 rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors focus:border-primary placeholder:text-foreground/35 w-full" />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-[14px] font-extrabold tracking-[0.06em] uppercase hover:bg-secondary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,105,2,0.4)] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
            
            {isSubmitting ? "Submitting..." : "Request Consultation →"}
          </button>
        </form>
        <p className="text-[12px] text-foreground/40">No commitment. No BS. Just clarity on where you stand.</p>
      </div>
    </section>);

};

export default CtaSection;