"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import TokenDashboard from "./components/TokenDashboard/TokenDashboard";
import { useAccount } from "wagmi";

// Dynamically import the ClientWalletButton with no SSR
const ClientWalletButton = dynamic(
  () => import("./components/ClientWalletButton"),
  { ssr: false }
);

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-b from-[#1A202C] to-[#566A92]">
        <div className="container mx-auto p-4 sm:p-6 flex flex-col gap-8 h-full">
          <ClientWalletButton />
          {isConnected && <TokenDashboard />}
        </div>
      </main>

      <footer className="py-4 flex justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://app.charmverse.io/raidguild-cohort-season-7/hamsterized-token-dashboard-0771957381100139"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Project Details →
        </a>
      </footer>
    </div>
  );
}
