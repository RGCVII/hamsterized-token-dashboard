import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Copy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TokenDashboard = () => {
  const tokens = [
    {
      name: "Example Token",
      symbol: "ETK",
      price: 1234.56,
      priceChange: 5.67,
      volume: "45.6M",
      marketCap: "789.1M",
      totalSupply: "1,000,000,000",
      contractAddress: "0x68f2...abc",
      description: "In a land",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Card className="bg-white/10 backdrop-blur-sm border-gray-600 w-full">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="h-12 px-6 flex items-center gap-2"
                >
                  {tokens[0].symbol}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {tokens.map((token) => (
                  <DropdownMenuItem
                    key={token.symbol}
                    className="flex items-center gap-2"
                  >
                    <span>{token.name}</span>
                    <span className="text-gray-500 ml-auto">
                      {token.symbol}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-6">
              <div className="border border-gray-600 rounded-lg px-4 py-2 bg-white/5">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Total Supply</span>
                  <span className="text-white font-semibold">
                    {tokens[0].totalSupply}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Contract</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">
                      {tokens[0].contractAddress}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-semibold">ET</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-4 auto-rows-[240px]">
        <Card className="bg-white/10 backdrop-blur-sm border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">
              Total Supply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {tokens[0].totalSupply}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">
              Sharmverse Lore
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {tokens[0].description}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-gray-600 row-span-2">
          <CardHeader>
            <CardTitle className="text-gray-200">Token Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Chain</span>
                <span className="text-gray-200">Ethereum</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Holders</span>
                <span className="text-gray-200">10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Decimals</span>
                <span className="text-gray-200">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total Tx</span>
                <span className="text-gray-200">156,205</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-gray-600 col-span-2">
          <CardHeader>
            <CardTitle className="text-gray-200">Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[140px] flex items-center justify-center bg-white/5 rounded-lg">
              <p className="text-gray-400">list</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenDashboard;
