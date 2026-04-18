import mascot1 from "@/assets/mascot-1.webp";
import mascot2 from "@/assets/mascot-2.webp";
import mascot3 from "@/assets/mascot-3.webp";

const features = [
  { img: mascot1, title: "Built Around Revenue", desc: "Every strategy we build is tied to bids, inbound calls, and signed contracts — not vanity metrics or pretty dashboards." },
  { img: mascot2, title: "Strategy-Led Execution", desc: "We don't guess. We build a foundation of research, competitive analysis, and AI visibility mapping before executing a single tactic." },
  { img: mascot3, title: "Your Embedded Team", desc: "Weekly meetings, full ClickUp access, real-time reporting. You're never in the dark about what's being done and why." },
];

const MascotSection = () => {
  return (
    <section className="py-16 px-5 md:px-10 bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.05] bg-noise">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="text-center px-5">
            <img src={f.img} alt={f.title} className="h-[180px] w-auto mx-auto mb-5 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" />
            <h3 className="text-[16px] font-extrabold mb-2 text-primary">{f.title}</h3>
            <p className="text-[13px] text-foreground/65 leading-[1.7]">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MascotSection;