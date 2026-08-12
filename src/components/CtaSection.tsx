import { useEffect, useRef, useState } from "react";
import ctaMascot from "@/assets/cta-mascot.webp";
import { getUtmParams, submitLead } from "@/lib/submitLead";

type FieldName = "name" | "company" | "email" | "phone";

const FIELDS: {
  name: FieldName;
  label: string;
  type: string;
  autoComplete: string;
  inputMode?: "text" | "email" | "tel";
}[] = [
  { name: "name", label: "Your Name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company Name", type: "text", autoComplete: "organization" },
  { name: "email", label: "Work Email", type: "email", autoComplete: "email", inputMode: "email" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", inputMode: "tel" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (form: Record<FieldName, string>) => {
  const errors: Partial<Record<FieldName, string>> = {};
  if (!form.name.trim()) errors.name = "Tell us who to address the audit to.";
  if (!form.company.trim()) errors.company = "We need your company to run the audit.";
  if (!form.email.trim()) errors.email = "Enter your work email.";
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "That email doesn't look right.";
  if (!form.phone.trim()) errors.phone = "Enter a phone number we can reach you on.";
  return errors;
};

const inputClass =
  "bg-foreground/[0.07] border rounded px-[18px] py-3.5 text-foreground font-sans text-sm outline-none transition-colors placeholder:text-foreground/35 w-full";

const CtaSection = () => {
  const [form, setForm] = useState<Record<FieldName, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hiddenFields = useRef(getUtmParams());

  // document.referrer and the query string are only available in the browser,
  // so re-read once on mount rather than trusting the initial render pass.
  useEffect(() => {
    hiddenFields.current = getUtmParams();
  }, []);

  const setField = (name: FieldName, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        ...hiddenFields.current,
      });

      // Full page load (not SPA navigate) so GTM re-initializes and the
      // "Thank You page" PAGEVIEW trigger fires its conversion tags.
      window.location.assign("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again, or email hello@estesmedia.com.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="cta"
      className="py-24 px-5 bg-gradient-to-br from-primary/[0.12] to-background relative overflow-hidden bg-grid bg-radial-glow mx-0 text-center md:px-[184px]"
    >
      <img
        src={ctaMascot}
        alt=""
        aria-hidden="true"
        width={620}
        height={600}
        loading="lazy"
        decoding="async"
        className="absolute right-[5%] bottom-0 h-[300px] w-auto opacity-90 pointer-events-none drop-shadow-[0_0_40px_rgba(25,149,205,0.3)] hidden lg:block"
      />

      <div className="max-w-[640px] mx-auto relative z-10">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Get Started Today</p>
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[1.2] mb-5">
          Find Out If AI Search Is Costing You <em className="italic text-primary">Leads Right Now</em>
        </h2>
        <p className="text-[16px] text-foreground/70 leading-[1.7] mb-9">
          Get a free AI Visibility Audit. We'll show you exactly where your company stands in ChatGPT, Perplexity, and
          Google AI — and what it's costing you in missed bids.
        </p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 max-w-[440px] mx-auto mb-6">
          {FIELDS.map((field) => (
            <div key={field.name} className="text-left">
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                inputMode={field.inputMode}
                autoComplete={field.autoComplete}
                aria-label={field.label}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                placeholder={field.label}
                value={form[field.name]}
                onChange={(e) => setField(field.name, e.target.value)}
                className={`${inputClass} ${
                  errors[field.name] ? "border-destructive" : "border-foreground/15 focus:border-primary"
                }`}
              />
              {errors[field.name] && (
                <p id={`${field.name}-error`} role="alert" className="text-[12px] text-destructive mt-1.5 px-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded text-[14px] font-extrabold tracking-[0.06em] uppercase hover:bg-secondary/85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(230,105,2,0.4)] transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Get My Free AI Visibility Audit →"}
          </button>

          {submitError && (
            <p role="alert" className="text-[13px] text-destructive mt-1">
              {submitError}
            </p>
          )}
        </form>

        <p className="text-[12px] text-foreground/40">No commitment. No BS. Just clarity on where you stand.</p>
      </div>
    </section>
  );
};

export default CtaSection;
