import { NextResponse } from "next/server";
import { API_ENDPOINTS } from "@/lib/api";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const token = request.headers.get("authorization") || "";

    const res = await fetch(API_ENDPOINTS.VERIFY_EMAIL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
      body: form,
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { status: false, message: "Verify proxy error", error: String(error) },
      { status: 500 }
    );
  }
}


