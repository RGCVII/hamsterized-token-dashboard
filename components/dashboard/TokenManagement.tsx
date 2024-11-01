"use client";

import { TokenInfo } from "@/app/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import Image from "next/image";
import React from "react";

const TokenManagement = ({ token }: { token: TokenInfo }) => {
    const [stakingSelection, setStakingSelection] = React.useState("stake");

    const staking = {
        receive: 0,
        exchange: 0,
        cost: 0,
        rewardsFee: 0,
    };

    function stakeTokens() {
        console.log("NOT IMPLEMENTED");
    }

    const stakedChartData = [
        { staked: token?.staked },
        { unstaked: token?.unstaked },
    ];

    return (
        <Card className="bg-gradient-to-b from-[#262f41] to-[#475778] backdrop-blur-sm border-white row-span-2">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
                <CardTitle className="w-full text-2xl font-serif text-rg-red">
                    Token Management
                </CardTitle>
                <div className="flex border border-white rounded-2xl py-1 px-1">
                    <button
                        className={`${
                            stakingSelection === "stake"
                                ? "bg-red-500 rounded-2xl text-white"
                                : "text-[#71717a]"
                        } px-3 py-1 mr-1`}
                        onClick={() => setStakingSelection("stake")}
                    >
                        Stake
                    </button>
                    <button
                        className={`${
                            stakingSelection === "burn"
                                ? "bg-red-500 rounded-2xl text-white"
                                : "text-[#71717a]"
                        } py-1 px-3 ml-1`}
                        onClick={() => setStakingSelection("burn")}
                    >
                        Burn
                    </button>
                </div>
            </CardHeader>

            <CardContent className="text-white text-sm h-inherit">
                <div className="flex flex-col py-4 border-b border-white">
                    <span>Available to Stake</span>
                    <span className="text-4xl font-serif text-rg-red">
                        {token.availableHoldings}{" "}
                        <span className="text-base">{token.symbol}</span>
                    </span>
                </div>

                <div className="flex flex-col  py-4 border-b border-white">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <span>Staked Amount</span>
                            <span className="text-4xl font-serif text-rg-red">
                                {token.staked}{" "}
                                <span className="text-base">
                                    {token.symbol}
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span>APR</span>
                            <span className="text-4xl font-serif text-rg-red">
                                {token.apr}%
                            </span>
                        </div>
                    </div>

                    <div className="p-4 mt-8">
                        <div className="border border-[#e4e4e7] rounded-2xl">
                            <div className="flex flex-row justify-between items-center p-1">
                                <div className="flex flex-row items-center">
                                    <Image
                                        src="/images/ethereum-eth-logo.svg"
                                        alt="Ethereum ETH Logo"
                                        className="w-8 h-8"
                                        width="32"
                                        height={"32"}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Amount..."
                                        className="w-full p-2 bg-transparent placeholder-[#71717a]"
                                    />
                                </div>
                                <div>
                                    <button className="bg-red-500 text-white px-1 text-xs mr-1 rounded-sm">
                                        MAX
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs flex flex-row justify-between py-2 pt-4">
                            <span>You will receive</span>
                            <span>
                                {staking.receive} {token.symbol}
                            </span>
                        </div>
                        <div className="text-xs flex flex-row justify-between py-2">
                            <span>Exchange Rate</span>
                            <span>
                                {staking.exchange} {token.symbol}
                            </span>
                        </div>
                        <div className="text-xs flex flex-row justify-between py-2">
                            <span>Transaction Cost</span>
                            {staking.cost} {token.symbol}
                        </div>
                        <div className="text-xs flex flex-row justify-between py-2">
                            <span>Reward Fee</span>
                            {staking.rewardsFee} {token.symbol}
                        </div>
                        <button
                            className="w-full rounded-md font-serif border border-[#e4e4e7] block text-center mx-auto p-3 my-4"
                            onClick={stakeTokens}
                        >
                            Stake
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-center py-12 text-white">
                    <div className="flex flex-row justify-between items-center">
                        <span className="text-xl font-serif text-rg-red">
                            Statistics
                        </span>
                        <span className="text-xs">
                            {typeof token?.totalSupply !== "undefined" &&
                            typeof token?.staked !== "undefined"
                                ? (token.staked / parseInt(token.totalSupply)) *
                                  100
                                : "-"}
                            % Staked
                        </span>
                        <span className="text-xs">
                            {typeof token?.totalSupply !== "undefined" &&
                            typeof token?.unstaked !== "undefined"
                                ? (token.unstaked /
                                      parseInt(token.totalSupply)) *
                                  100
                                : "-"}
                            % Unstaked
                        </span>
                    </div>
                    <div className="flex justify-center items-center py-2 h-[160px] w-full">
                        <ResponsivePie
                            data={getFormattedChartData(stakedChartData)}
                            colors={{ scheme: "set2" }}
                            margin={{
                                top: 30,
                                right: 50,
                                bottom: 5,
                                left: 50,
                            }}
                            startAngle={-90}
                            endAngle={90}
                            innerRadius={0.5}
                            padAngle={2}
                            cornerRadius={7}
                            activeOuterRadiusOffset={2}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["brighter", 0.2]],
                            }}
                            arcLinkLabelsSkipAngle={2}
                            arcLinkLabelsTextColor="#fff"
                            arcLinkLabelsOffset={-1}
                            arcLinkLabelsStraightLength={4}
                            arcLinkLabelsThickness={2}
                            arcLinkLabelsColor="#fff"
                            arcLabelsSkipAngle={10}
                            arcLabelsTextColor="#fff"
                            valueFormat=" >-,r"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export { TokenManagement };

/* eslint-disable */
const getFormattedChartData = (chartData: Record<string, any>) => {
    return chartData.map((item: Record<string, any>) => {
        const label = Object.keys(item)[0];
        const value = Object.values(item)[0];

        return { id: label, label, value };
    });
};
/* eslint-enable */
