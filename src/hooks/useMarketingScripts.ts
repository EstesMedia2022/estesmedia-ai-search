import { useEffect } from "react";

export const useMarketingScripts = () => {
  useEffect(() => {
    let triggered = false;

    const loadScripts = () => {
      if (triggered) return;
      triggered = true;

      // Google Tag Manager
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NSRBT4Z');`;
      document.head.appendChild(gtmScript);

      // Google Ads
      const gAdsScript = document.createElement("script");
      gAdsScript.async = true;
      gAdsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-703463633";
      document.head.appendChild(gAdsScript);

      const gAdsInit = document.createElement("script");
      gAdsInit.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-703463633');`;
      document.head.appendChild(gAdsInit);

      // Cleanup event listeners
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
    };

    window.addEventListener("scroll", loadScripts, { once: true, passive: true });
    window.addEventListener("mousemove", loadScripts, { once: true, passive: true });
    window.addEventListener("touchstart", loadScripts, { once: true, passive: true });

    const timeoutId = setTimeout(loadScripts, 3500);

    return () => {
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      clearTimeout(timeoutId);
    };
  }, []);
};
