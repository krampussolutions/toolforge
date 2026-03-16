import { NextResponse } from "next/server";

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.utilhubx.com";

export async function POST(req: Request) {
  try {
    if (!INDEXNOW_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing INDEXNOW_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const urls = Array.isArray(body?.urls) ? body.urls : [];

    if (!urls.length) {
      return NextResponse.json(
        { ok: false, error: "No URLs provided" },
        { status: 400 }
      );
    }

    const host = new URL(SITE_URL).host;

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    const text = await res.text();

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      response: text || null,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "IndexNow submission failed" },
      { status: 500 }
    );
  }
}