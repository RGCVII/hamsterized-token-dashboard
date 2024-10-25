import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
    // Get request headers
    const headersList = headers();

    // Verify the request is coming from our own domain
    const referer = headersList.get("referer");
    const host = headersList.get("host");

    if (!referer?.includes(host ?? "")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Add CORS and cache control headers
    const response = NextResponse.json({
        walletConnectId: process.env.WALLETCONNECT_ID,
        baseRpc: process.env.BASE_RPC,
        baseTestnetRpc: process.env.BASE_TESTNET_RPC,
    });

    response.headers.set("Cache-Control", "no-store");

    return response;
}
