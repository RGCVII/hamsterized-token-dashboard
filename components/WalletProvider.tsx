"use client";

import {
    RainbowKitProvider,
    lightTheme,
    connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
    coinbaseWallet,
    injectedWallet,
    metaMaskWallet,
    rainbowWallet,
    trustWallet,
    walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode, useEffect, useState } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";

interface ConfigType {
    walletConnectId: string;
    baseRpc: string;
    baseTestnetRpc: string;
}

// Create a singleton for configuration
let configPromise: Promise<{
    walletConnectId: string;
    baseRpc: string;
    baseTestnetRpc: string;
}> | null = null;

const getConfig = async () => {
    if (!configPromise) {
        configPromise = fetch("/api/config", {
            credentials: "same-origin",
            headers: {
                "Cache-Control": "no-cache",
            },
        }).then((res) => {
            if (!res.ok) throw new Error("Failed to load configuration");
            return res.json();
        });
    }
    return configPromise;
};

// Pre-fetch configuration
if (typeof window !== "undefined") {
    getConfig().catch(console.error);
}

const Providers: FC<{
    children: ReactNode;
    initialConfig: ConfigType;
}> = ({ children, initialConfig }) => {
    const [mounted, setMounted] = useState(false);
    const [queryClient] = useState(() => new QueryClient());

    const connectors = connectorsForWallets(
        [
            {
                groupName: "Popular",
                wallets: [
                    metaMaskWallet,
                    rainbowWallet,
                    coinbaseWallet,
                    walletConnectWallet,
                    injectedWallet,
                    trustWallet,
                ],
            },
        ],
        {
            appName: "Hamster Dashboard",
            projectId: initialConfig.walletConnectId,
        }
    );

    const WalletConfig = createConfig({
        connectors: connectors,
        chains: [base, baseSepolia],
        transports: {
            [base.id]: http(initialConfig.baseRpc),
            [baseSepolia.id]: http(initialConfig.baseTestnetRpc),
        },
        ssr: true,
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <WagmiProvider config={WalletConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                  theme={lightTheme({
                    accentColor: '#2A9D90',
                    accentColorForeground: 'white',
                    borderRadius: 'small',
                    fontStack: 'system',
                    overlayBlur: 'small',
                  })}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default Providers;
