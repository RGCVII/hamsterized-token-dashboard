import type { Metadata } from "next";
import '@fontsource/uncial-antiqua';
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource/space-mono';
import "./globals.css";
import Providers from "../components/WalletProvider";

export const metadata: Metadata = {
    title: "Hamster Dashboard",
    description: "View the Hamsterized Token Dashboard",
};

async function getInitialConfig() {
    if (
        !process.env.WALLETCONNECT_ID ||
        !process.env.BASE_RPC ||
        !process.env.BASE_TESTNET_RPC
    ) {
        throw new Error("Missing required environment variables");
    }

    return {
        walletConnectId: process.env.WALLETCONNECT_ID,
        baseRpc: process.env.BASE_RPC,
        baseTestnetRpc: process.env.BASE_TESTNET_RPC,
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const initialConfig = await getInitialConfig();

    return (
        <html lang="en">
            <body className="font-family: 'Plus Jakarta Sans Variable', sans-serif">
            {/* <body className="font-family: 'Space Mono', monospace"> */}
                <Providers initialConfig={initialConfig}>{children}</Providers>
            </body>
        </html>
    );
}
