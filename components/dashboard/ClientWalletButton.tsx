"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

export default function ClientWalletButton() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ height: "38px", width: "180px" }} />; // Placeholder with approximate ConnectButton dimensions
    }

    return <ConnectButton />;
}
