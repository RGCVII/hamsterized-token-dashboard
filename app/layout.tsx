import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./components/WalletProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers initialConfig={initialConfig}>{children}</Providers>
            </body>
        </html>
    );
}
