"use client";

import { TokenSupply } from "@/components/dashboard/TokenSupply";
import { TokenLore } from "@/components/dashboard/TokenLore";
import { TokenManagement } from "@/components/dashboard/TokenManagement";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { LoadingIndicator } from "@/components/ui/LoadingIndicator";
import { TokenInfo } from "../../app/utils/types";
import { useDaoData, useTokenData } from "../../app/hooks/useTokenData";

export const TOKEN_ADDRESS = "0x11dc980faf34a1d082ae8a6a883db3a950a3c6e8";
const DAO_ADDRESS = "0x4d5a5b4a679b10038e1677c84cb675d10d29fffd";
const TOP_HOLDERS_LIMIT = 10;

export default function Dashboard() {
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
            price: tokenData.token.derivedETH * tokenData.bundle.ethPriceUSD,

            totalSupply: daoData?.formattedTotalShares || "0",
            description:
                "In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch! In a land ruled by tiny paws, the hamsters empire. With bravery and wit, they sail the Uniswap seas, conquer the Dune Desert, and protect their kingdom through DAOhaus. Join them on their quest to defeat Moloch!",
            staked: 0,
            unstaked: daoData?.formattedTotalShares
                ? parseInt(daoData.formattedTotalShares)
                : 0,
            apr: 0,
            availableHoldings: 0,
        },
    ];

    // FIXME: hack for now until we have real data
    const totalSupply = daoData?.formattedTotalShares
        ? parseInt(daoData.formattedTotalShares, 10)
        : 0;

    const burned = totalSupply * 0.3,
        locked = daoData?.members?.reduce(
            (highest, member) =>
                member.formattedAmount > highest.formattedAmount
                    ? member
                    : highest,
            daoData.members[0]
        )?.formattedAmount;

    const unburned = totalSupply - burned,
        unlocked = totalSupply - locked;

    const supplyChartData = {
        burned: [{ burned }, { unburned }],
        locked: [{ locked }, { unlocked }],
    };

    return (
        <div className="grid grid-cols-3 gap-4 auto-rows-[450px]">
            <TokenSupply
                tokens={tokens}
                daoData={daoData}
                chartData={supplyChartData}
            />
            <TokenLore />
            <TokenManagement token={tokens[0]} />
            <Leaderboard
                selectedToken={selectedTokenSymbol}
                tokenHolders={daoData?.members}
            />
        </div>
    );
}
