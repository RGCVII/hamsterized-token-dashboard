import { useState, useEffect } from "react";

interface Config {
    walletConnectId: string;
    baseRpc: string;
    baseTestnetRpc: string;
    graphApiKeyMainnet: string;
}

export function useConfig() {
    const [config, setConfig] = useState<Config | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchConfig() {
            try {
                const response = await fetch("/api/config");
                if (!response.ok) {
                    throw new Error("Failed to fetch config");
                }
                const data = await response.json();
                setConfig(data);
            } catch (err) {
                setError(
                    err instanceof Error ? err : new Error("Unknown error")
                );
            } finally {
                setLoading(false);
            }
        }

        fetchConfig();
    }, []);

    return { config, loading, error };
}
