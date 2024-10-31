"use client";

import { FormattedDao, TokenInfo } from "@/app/utils/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsivePie } from "@nivo/pie";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { TOKEN_ADDRESS } from "./Dashboard";

const TokenSupply = ({
    tokens,
    chartData,
    daoData,
}: {
    tokens: TokenInfo[];
    chartData: FormattedDao;
    daoData: Record<string, any>[];
}) => {
    const [selectedChart, setSelectedChart] = useState("tokens-burned");

    const handleChartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedChart(event.target.value);
    };

    return (
        <Card className="bg-gradient-to-b from-[#262f41] to-[#475778] backdrop-blur-sm border-white">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
                <CardTitle className="w-full text-2xl font-serif text-rg-red">
                    Total Supply
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="pt-2">
                    <div className="flex flex-row justify-between items-center py-1">
                        <p className="text-sm text-white">Circulating</p>
                        <p className="text-xl font-serif text-rg-red">
                            {tokens?.[0]?.totalSupply?.toLocaleString() || "-"}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center py-1">
                        <p className="text-sm text-white">Volume</p>
                        <p className="text-xl font-serif text-rg-red">
                            {tokens?.[0]?.volume?.toLocaleString() || "-"}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center py-1">
                        <p className="text-sm text-white">Amount of Holders</p>
                        <p className="text-xl font-serif text-rg-red">
                            {daoData?.members?.length?.toLocaleString() || "-"}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between items-center py-1">
                        <p className="text-sm text-white">Contract Address</p>
                        <p className="text-sm font-serif text-rg-red truncate text-ellipsis max-w-[200px] break-all">
                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <p className="text-xl font-serif text-rg-red truncate text-ellipsis max-w-[200px] break-all">
                                            {TOKEN_ADDRESS.slice(0, 6) +
                                                "..." +
                                                TOKEN_ADDRESS.slice(-4)}
                                        </p>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            className="select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none text-violet11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
                                            sideOffset={5}
                                        >
                                            {TOKEN_ADDRESS}
                                            <Tooltip.Arrow className="fill-white" />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row justify-between text-white text-xs">
                        <p className="text-base text-rg-red font-serif">
                            Charts
                        </p>
                        <label
                            className={`py-1 ${
                                selectedChart === "tokens-burned"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <input
                                className="mr-1"
                                type="radio"
                                name="charts"
                                value="tokens-burned"
                                checked={selectedChart === "tokens-burned"}
                                onChange={handleChartChange}
                            />
                            Tokens burned
                        </label>
                        <label
                            className={`py-1 ${
                                selectedChart === "tokens-locked"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <input
                                className="mr-1"
                                type="radio"
                                name="charts"
                                value="tokens-locked"
                                checked={selectedChart === "tokens-locked"}
                                onChange={handleChartChange}
                            />
                            Tokens locked
                        </label>
                    </div>

                    <div className="flex justify-center items-center h-[130px] w-full">
                        <ResponsivePie
                            data={getFormattedChartData(
                                chartData,
                                selectedChart
                            )}
                            colors={{ scheme: "spectral" }}
                            margin={{
                                top: 30,
                                right: 50,
                                bottom: 10,
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

export { TokenSupply };

const getFormattedChartData = (
    chartData: Record<string, any>,
    selectedChart: string
) => {
    const data =
        selectedChart === "tokens-locked" ? chartData.locked : chartData.burned;

    return data.map((item: Record<string, any>) => {
        const label = Object.keys(item)[0];
        const value = Object.values(item)[0];
        // const color = index === 0 ?  "rgb(239, 67, 67)": "rgb(42, 157, 144)";

        return { id: label, label, value }; // color };
    });
};
