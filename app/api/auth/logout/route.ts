import { NextResponse } from "next/server";
import { API_ENDPOINTS } from "@/lib/api";

export async function POST(request: Request) {
  try {
    const token = request.headers.get("authorization") || "";
    const res = await fetch(API_ENDPOINTS.LOGOUT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { status: false, message: "Logout proxy error", error: String(error) },
      { status: 500 }
    );
  }
}


