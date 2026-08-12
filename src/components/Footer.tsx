import logo from "@/assets/estes-media-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-foreground/[0.07] py-10 px-10 text-center bg-noise">
      <div className="mb-4 flex items-center justify-center">
        <img
          src={logo}
          alt="Estes Media"
          width={220}
          height={216}
          loading="lazy"
          decoding="async"
          className="h-24 w-auto"
        />
      </div>
      <p className="text-[12px] text-foreground/30 leading-[1.8]">
        © {new Date().getFullYear()} Estes Media · New Jersey · estesmedia.com<br />
        Rated 5 Stars on Google &amp; SEMrush · UpCity National Excellence 2024 · DesignRush Top Agency
      </p>
    </footer>
  );
};

export default Footer;
