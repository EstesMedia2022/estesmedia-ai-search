import logo from "@/assets/estes-media-logo.webp";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20 px-5 md:px-10 flex items-center justify-between h-[72px]">
      <a href="#top" className="flex items-center gap-3" aria-label="Estes Media home">
        <img
          src={logo}
          alt="Estes Media"
          width={220}
          height={216}
          fetchPriority="high"
          decoding="async"
          className="h-12 w-auto"
        />
      </a>
      <a
        href="#cta"
        className="bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 rounded text-[12px] sm:text-[13px] font-bold tracking-[0.05em] uppercase hover:bg-primary/85 transition-all hover:-translate-y-px"
      >
        Get Your Free AI Audit
      </a>
    </nav>
  );
};

export default Navbar;
