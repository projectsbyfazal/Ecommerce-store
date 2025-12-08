import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/cookie";

export async function POST() {
    let response = NextResponse.json({
        success: true,
        message: "Logged out successfully",
    });

    response = clearAuthCookie(response);

    return response;
}
