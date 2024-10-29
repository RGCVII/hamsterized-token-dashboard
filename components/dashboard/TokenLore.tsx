import React from "react";
import { Token } from "@/app/page";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TokenLore = ({ tokens }: { tokens: Token[] }) => {
  return (
    <Card className="bg-gradient-to-t from-[#262f41] to-[#475778] backdrop-blur-sm border-white pb-4">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
        <CardTitle className="w-full text-2xl font-serif text-rg-red">
          {tokens[0].name} Lore
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 pt-8">
        <div>
          <p className="text-base text-rg-red font-serif">External links</p>
          <div className="flex flex-row justify-between items-center text-center">
            <div className="h-[120px] w-[100px] border border-white rounded-sm py-8 px-3">
              <p className="text-base text-rg-red font-serif">Uniswap</p>
              <p className="text-xs text-white"> DEX token listing</p>
            </div>
            <div className="h-[120px] w-[100px] border border-white rounded-sm p-3">
              <p className="text-base text-rg-red font-serif">Dune</p>
              <p className="text-xs text-white">data exploration in the desert</p>
            </div>
            <div className="h-[120px] w-[100px] border border-white rounded-sm py-8 px-3">
              <p className="text-base text-rg-red font-serif">DAOHaus</p>
              <p className="text-xs text-white">the hamsters&apos; magical DAO</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-base text-rg-red font-serif">The cohort {tokens[0].name} journey</p>
          <p className="text-xs text-white h-[80px] overflow-y-scroll">{tokens[0].description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export { TokenLore };