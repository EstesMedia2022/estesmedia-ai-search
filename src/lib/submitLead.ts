const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const ENDPOINT = `${SUPABASE_URL}/functions/v1/submit-form`;

export type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  referer_url: string;
  utm_source: string;
  utm_medium: string;
  utm_id: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  utm_keyword: string;
  utm_matchtype: string;
};

/**
 * Posts the audit request to the submit-form edge function.
 *
 * This used to go through @supabase/supabase-js, which cost ~110 KB gzipped
 * of client JS for a single POST. The function runs with verify_jwt = false
 * and Access-Control-Allow-Origin *, so a plain fetch with the same headers
 * the SDK sent is equivalent.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`submit-form responded ${response.status}`);
  }
}

export const getUtmParams = (): Omit<LeadPayload, "name" | "company" | "email" | "phone"> => {
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
    utm_matchtype: params.get("utm_matchtype") || "",
  };
};
