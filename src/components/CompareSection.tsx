const rows = [
  { feature: "Construction-specific expertise", us: true, them: [true, false, false] },
  { feature: "AEO / GEO (AI search optimization)", us: true, them: [false, false, false] },
  { feature: "Commercial contractor focus", us: true, them: ["Residential", false, false] },
  { feature: "Proven $1M+ revenue results", us: true, them: ["—", "—", "—"] },
  { feature: "No lock-in + results guarantee", us: true, them: [false, false, false] },
  { feature: "In-house team (no offshore)", us: true, them: [true, false, false] },
  { feature: "Weekly meetings + ClickUp access", us: true, them: [false, false, false] },
  { feature: "5-star Google & SEMrush reviews", us: true, them: ["—", "—", "—"] },
];

const competitors = ["Hook Agency", "WebFX", "Thrive"];

const CellValue = ({ val }: { val: boolean | string }) => {
  if (val === true) return <span className="text-green-500 text-lg">✓</span>;
  if (val === false) return <span className="text-foreground/20 text-lg">✗</span>;
  return <span className="text-foreground/40 text-sm">{val}</span>;
};

const CompareSection = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-foreground/[0.015] bg-noise">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-primary mb-3">Why Estes Media</p>
        <h2 className="font-serif text-[clamp(30px,3.5vw,46px)] leading-[1.2]">
          Not All Agencies Are Built for <em className="italic text-primary">This</em>
        </h2>
        {/* min-w forces the table to overflow and scroll on a phone instead of
            crushing five columns into 390px, where none of it is readable. */}
        <div className="overflow-x-auto mt-12 -mx-5 px-5 md:mx-0 md:px-0">
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-[12px] font-extrabold tracking-[0.1em] uppercase text-foreground/50 border-b-2 border-foreground/10" />
                <th className="p-4 text-center text-[12px] font-extrabold tracking-[0.1em] uppercase text-primary border-b-2 border-foreground/10 bg-primary/5">
                  Estes Media
                </th>
                {competitors.map((c) => (
                  <th key={c} className="p-4 text-center text-[12px] font-extrabold tracking-[0.1em] uppercase text-foreground/40 border-b-2 border-foreground/10">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-foreground/[0.02]">
                  <td className="p-3.5 text-left text-[13px] text-foreground/70 font-semibold border-b border-foreground/5">{r.feature}</td>
                  <td className="p-3.5 text-center border-b border-foreground/5 bg-primary/5">
                    <CellValue val={r.us} />
                  </td>
                  {r.them.map((v, j) => (
                    <td key={j} className="p-3.5 text-center border-b border-foreground/5">
                      <CellValue val={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;