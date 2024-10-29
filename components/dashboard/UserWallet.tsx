"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Token } from "@/app/page";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Dynamically import the ClientWalletButton with no SSR
const ClientWalletButton = dynamic(
  () => import("./ClientWalletButton"),
  { ssr: false }
);

const UserWallet = ({ tokens }: { tokens: Token[] }) => {
  return (
    <Card className="bg-gradient-to-l from-[#262f41] to-[#475778] backdrop-blur-sm border-white w-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="h-12 px-6 flex items-center gap-2 bg-rg-aqua text-white hover:text-slate-600 font-bold"
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
          <ClientWalletButton />
        </div>
      </CardContent>
    </Card>
  )
}

export { UserWallet };