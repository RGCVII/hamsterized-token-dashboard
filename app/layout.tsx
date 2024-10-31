import type { Metadata } from "next";
import "@fontsource/uncial-antiqua";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource/space-mono";
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
        !process.env.BASE_TESTNET_RPC ||
        !process.env.GRAPH_API_KEY_MAINNET
    ) {
        throw new Error("Missing required environment variables");
    }

    return {
        walletConnectId: process.env.WALLETCONNECT_ID,
        baseRpc: process.env.BASE_RPC,
        baseTestnetRpc: process.env.BASE_TESTNET_RPC,
        graphApiKeyMainnet: process.env.GRAPH_API_KEY_MAINNET,
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
            <body>
                <Providers initialConfig={initialConfig}>{children}</Providers>
            </body>
        </html>
    );
}
