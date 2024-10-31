"use client";

import Image from "next/image";
import { UserWallet } from "@/components/dashboard/UserWallet";
import { TokenSupply } from "@/components/dashboard/TokenSupply";
import { TokenLore } from "@/components/dashboard/TokenLore";
import { TokenManagement } from "@/components/dashboard/TokenManagement";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { CohortProjects } from "@/components/dashboard/CohortProjects";
import { LoadingIndicator } from "@/components/ui/LoadingIndicator";
import { TokenInfo } from "./utils/types";
import { useDaoData, useTokenData } from "./hooks/useTokenData";

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
    availableHoldings: number;
    staked: number;
    unstaked: number;
    apr: number;
}

export interface TokenHolder {
    address: string;
    holdings: number;
    stakedAmount: number;
    votingParticipation: string;
}

export default function Home() {
    const {
        data: tokenData,
        isLoading: isTokenLoading,
        error: tokenError,
    } = useTokenData(TOKEN_ADDRESS);

    const {
        data: daoData,
        isLoading: isDaoLoading,
        error: DaoError,
    } = useDaoData(DAO_ADDRESS, tokenData, TOP_HOLDERS_LIMIT);

    if (isTokenLoading || isDaoLoading) {
        return <LoadingIndicator />;
    }

    if (tokenError) {
        return (
            <div className="p-4 text-red-500">
                Error loading token: {tokenError.message}
            </div>
        );
    }

    if (DaoError) {
        return (
            <div className="p-4 text-red-500">
                Error loading Dao: {DaoError.message}
            </div>
        );
    }

    if (!tokenData || !daoData) {
        return <div className="p-4">No token information available</div>;
    }

    const selectedTokenSymbol = "RGCVII";

    const tokens: TokenInfo[] = [
        {
            ...tokenData.token,
            price: tokenData.token.derivedETH / tokenData.bundle.ethPriceUSD,
            totalSupply: daoData?.formattedTotalShares,
            description:
                "In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch! In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch!",
            staked: 0,
            unstaked: 0,
            apr: 0,
            availableHoldings: 0,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen text-white">
            <main className="flex-1 bg-gradient-to-r from-[#1A202C] to-[#40557b]">
                <div className="container mx-auto flex flex-col gap-4 h-full">
                    <h1 className="text-6xl text-rg-red font-serif mt-24 mb-8">
                        RGC Token Dashboard
                    </h1>
                    <UserWallet tokens={tokens} />
                    <div className="grid grid-cols-3 gap-4 auto-rows-[400px]">
                        <TokenSupply tokens={tokens} />
                        <TokenLore />
                        <TokenManagement token={tokens[0]} />
                        <Leaderboard
                            selectedToken={selectedTokenSymbol}
                            tokenHolders={daoData?.members}
                        />
                    </div>
                    <CohortProjects />
                </div>
            </main>

            <footer className="pb-12 pt-32 flex justify-center items-center gap-32 bg-[#1A202C]">
                <div className="flex flex-row gap-2">
                    <p>Made with</p>
                    <Image
                        aria-hidden
                        src="/RG-logo.png"
                        alt="Raid Guild icon"
                        width={28}
                        height={28}
                    />
                    <p>by RaidGuild CohortVII</p>
                </div>
                <a
                    href="https://github.com/RGCVII/hamsterized-token-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/Github_Invertocat_Light.png"
                        alt="Github icon"
                        width={32}
                        height={32}
                    />
                </a>
            </footer>
        </div>
    );
}
