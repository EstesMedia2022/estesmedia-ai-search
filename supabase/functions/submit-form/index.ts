import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const WEBHOOK_URL = "https://wbhook.estesmedia.com/webhook/ffd58db6-da33-4fe9-9ddc-33301e75c54e";

const formSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(30),
  referer_url: z.string().max(2000).optional().default(""),
  utm_source: z.string().max(500).optional().default(""),
  utm_medium: z.string().max(500).optional().default(""),
  utm_id: z.string().max(500).optional().default(""),
  utm_campaign: z.string().max(500).optional().default(""),
  utm_term: z.string().max(500).optional().default(""),
  utm_content: z.string().max(500).optional().default(""),
  utm_keyword: z.string().max(500).optional().default(""),
  utm_matchtype: z.string().max(500).optional().default(""),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const data = formSchema.parse(body);

    // Save to database
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { error: dbError } = await supabase.from('form_submissions').insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      referer_url: data.referer_url || null,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_id: data.utm_id || null,
      utm_campaign: data.utm_campaign || null,
      utm_term: data.utm_term || null,
      utm_content: data.utm_content || null,
      utm_keyword: data.utm_keyword || null,
      utm_matchtype: data.utm_matchtype || null,
    });

    if (dbError) {
      console.error('DB insert error:', dbError);
    }

    // Forward to webhook
    const originUrl = req.headers.get('origin') || 'https://tinker-edit-build.lovable.app';
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': originUrl,
        'User-Agent': `EstesMediaBot/1.0 (${originUrl})`,
      },
      body: JSON.stringify(data),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: 'Invalid form data', details: error.errors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
