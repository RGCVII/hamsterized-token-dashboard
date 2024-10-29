"use client";

import Image from "next/image";
import { UserWallet } from "@/components/dashboard/UserWallet";
import { TokenSupply } from "@/components/dashboard/TokenSupply";
import { TokenLore } from "@/components/dashboard/TokenLore";
import { TokenManagement } from "@/components/dashboard/TokenManagement";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { CohortProjects } from "@/components/dashboard/CohortProjects";
import { useTokenBalances, useTokenInfo } from "./hooks/useTokenData";

const TOKEN_ADDRESS = "0x11dc980faf34a1d082ae8a6a883db3a950a3c6e8";
const DAO_ADDRESS = "0x4d5a5b4a679b10038e1677c84cb675d10d29fffd";
const TOP_HOLDERS_LIMIT = 10;
export interface Token {
    name: string;
    symbol: string;
    price: number;
    priceChange: number;
    volume: string;
    marketCap: string;
    totalSupply: string;
    contractAddress: string;
    description: string;
}

export interface TokenHolder {
    address: string;
    holdings: number;
    stakedAmount: number;
    votingParticipation: string;
}

export default function Home() {

  const {
    data: tokenInfo,
    isLoading: isTokenLoading,
    error: tokenError,
  } = useTokenInfo(TOKEN_ADDRESS);

  const {
    data: topHolders,
    isLoading: isBalancesLoading,
    error: balancesError,
  } = useTokenBalances(DAO_ADDRESS, tokenInfo, TOP_HOLDERS_LIMIT);

  if (isTokenLoading || isBalancesLoading) {
    return <div className="p-4">Loading token information...</div>;
  }

  if (tokenError) {
    return (
      <div className="p-4 text-red-500">
        Error loading token: {tokenError.message}
      </div>
    );
  }

  if (balancesError) {
    return (
      <div className="p-4 text-red-500">
        Error loading token: {balancesError.message}
      </div>
    );
  }

  if (!tokenInfo) {
    return <div className="p-4">No token information available</div>;
  }

  console.log(topHolders, tokenInfo);

  
    const selectedTokenSymbol = "RGCVII";

    const tokens: Token[] = [
        {
            name: "RGCVII",
            symbol: "RGCVII",
            price: 1234.56,
            priceChange: 5.67,
            volume: "45.6M",
            marketCap: "789.1M",
            totalSupply: "1,000,000,000",
            contractAddress: "0x68f2...abc",
            description:
                "In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch! In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch!",
        },
    ];
    const tokenHolders: TokenHolder[] = [
        {
            address: "0x68f2...abc",
            holdings: 55_555,
            stakedAmount: 0,
            votingParticipation: "5/12",
        },
        {
            address: "0x78f2...abd",
            holdings: 123_555,
            stakedAmount: 120_000,
            votingParticipation: "12/12",
        },
        {
            address: "0x88f2...abe",
            holdings: 987_123_555,
            stakedAmount: 150_000,
            votingParticipation: "0/12",
        },
        {
            address: "0x98f2...abf",
            holdings: 10,
            stakedAmount: 0,
            votingParticipation: "0/12",
        },
        {
            address: "0x1232...aca",
            holdings: 1337,
            stakedAmount: 337,
            votingParticipation: "3/12",
        },
        {
            address: "0x2132...fcc",
            holdings: 1_000_000_217,
            stakedAmount: 1_000_000_217,
            votingParticipation: "11/12",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen text-white">
            <main className="flex-1 bg-gradient-to-r from-[#1A202C] to-[#40557b]">
                <div className="container mx-auto p-4 sm:p-6 flex flex-col gap-4 h-full">
                    <h1 className="text-5xl text-rg-red font-serif my-8">
                        RGC Token Dashboard
                    </h1>
                    <UserWallet tokens={tokens} />
                    <div className="grid grid-cols-3 gap-4 auto-rows-[400px]">
                        <TokenSupply tokens={tokens} />
                        <TokenLore tokens={tokens} />
                        <TokenManagement />
                        <Leaderboard
                            selectedToken={selectedTokenSymbol}
                            tokenHolders={tokenHolders}
                        />
                    </div>
                    <CohortProjects />
                </div>
            </main>

            <footer className="py-4 flex justify-center bg-[#1A202C]">
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
