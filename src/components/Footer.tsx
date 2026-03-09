const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-foreground/[0.07] py-10 px-10 text-center bg-noise">
      <div className="mb-4 flex items-center justify-center gap-2">
        <div className="w-7 h-7 rounded bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-xs tracking-tight">
          EM
        </div>
        <span className="text-[16px] font-bold tracking-[0.12em] uppercase">Estes Media</span>
      </div>
      <p className="text-[12px] text-foreground/30 leading-[1.8]">
        © 2025 Estes Media · New Jersey · estesmedia.com<br />
        Rated 5 Stars on Google &amp; SEMrush · UpCity National Excellence 2024 · DesignRush Top Agency
      </p>
    </footer>
  );
};

export default Footer;