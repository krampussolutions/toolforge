"use client";
import { useEffect } from "react";
import { ADSENSE_CLIENT } from "@/lib/site";
declare global { interface Window { adsbygoogle: unknown[]; } }
export default function AdBanner({ slot = "1234567890" }: { slot?: string }) {
  useEffect(() => { try { window.adsbygoogle = window.adsbygoogle || []; window.adsbygoogle.push({}); } catch {} }, []);
  return <div className="ad"><ins className="adsbygoogle" style={{display:"block",width:"100%"}} data-ad-client={ADSENSE_CLIENT} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" /></div>;
}
