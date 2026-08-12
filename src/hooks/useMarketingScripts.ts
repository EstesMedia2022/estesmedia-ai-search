import { useEffect } from "react";

const GTM_ID = "GTM-NSRBT4Z";
const GOOGLE_ADS_ID = "AW-703463633";
const FB_PIXEL_ID = "280824040008191";
const HUBSPOT_ID = "5953448";

const injectInline = (code: string) => {
  const script = document.createElement("script");
  script.textContent = code;
  document.head.appendChild(script);
};

const injectSrc = (src: string, id?: string) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  if (id) script.id = id;
  document.head.appendChild(script);
};

/**
 * Loads every third-party tag off the critical path.
 *
 * All of these tags — GTM, Google Ads, the Meta pixel, HubSpot — used to
 * contend with the app bundle and the fonts for bandwidth and main-thread
 * time during the initial paint. Together they are several hundred KB of
 * JavaScript that nothing above the fold depends on.
 *
 * They now load at the first of: any user interaction, the browser going
 * idle, or a hard timeout. requestIdleCallback usually fires within a
 * second or two of the page settling, so attribution stays intact while the
 * paint and the LCP happen against an uncontended main thread.
 */
export const useMarketingScripts = () => {
  useEffect(() => {
    let triggered = false;
    const events = ["scroll", "mousemove", "touchstart", "keydown", "pointerdown"] as const;

    const loadScripts = () => {
      if (triggered) return;
      triggered = true;
      cleanup();

      // Google Tag Manager
      injectInline(
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
          `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
          `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
          `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
          `})(window,document,'script','dataLayer','${GTM_ID}');`,
      );

      // Google Ads
      injectSrc(`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`);
      injectInline(
        `window.dataLayer = window.dataLayer || [];` +
          `function gtag(){dataLayer.push(arguments);}` +
          `gtag('js', new Date());` +
          `gtag('config', '${GOOGLE_ADS_ID}');`,
      );

      // Meta (Facebook) Pixel
      injectInline(
        `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?` +
          `n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;` +
          `n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;` +
          `t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,` +
          `document,'script','https://connect.facebook.net/en_US/fbevents.js');` +
          `fbq('init', '${FB_PIXEL_ID}');` +
          `fbq('set','agent','tmgoogletagmanager', '${FB_PIXEL_ID}');` +
          `fbq('track', 'PageView');`,
      );

      // HubSpot
      injectSrc(`https://js.hs-scripts.com/${HUBSPOT_ID}.js`, "hs-script-loader");
    };

    let idleId: number | undefined;
    const timeoutId = window.setTimeout(loadScripts, 4000);

    const cleanup = () => {
      events.forEach((event) => window.removeEventListener(event, loadScripts));
      window.clearTimeout(timeoutId);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };

    events.forEach((event) => window.addEventListener(event, loadScripts, { once: true, passive: true }));

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadScripts, { timeout: 4000 });
    }

    return cleanup;
  }, []);
};
