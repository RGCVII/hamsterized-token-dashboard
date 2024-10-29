import React from "react";
import { Token } from "@/app/page";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TokenSupply = ({ tokens }: { tokens: Token[] }) => {
  return (
    <Card className="bg-gradient-to-b from-[#262f41] to-[#475778] backdrop-blur-sm border-white">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
        <CardTitle className="w-full text-2xl font-serif text-rg-red">
          Total Supply
        </CardTitle>
        <div className="border-white rounded-sm text-xs text-white">
          Overview  Details
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 pt-8">
        <div>
          <p className="text-sm text-white">Circulating:</p>
          <p className="text-4xl font-serif text-rg-red">
            {tokens[0].totalSupply}
          </p>
        </div>
        <div>
          <p className="text-base text-rg-red font-serif">Charts</p>
          <p className="text-white text-xs">⏺️ Tokens burned</p>
          <p className="text-white text-xs">⏺️ Tokens locked</p>
        </div>
        <div>
          <p className="text-base text-rg-red font-serif">{tokens[0].name} Info</p>
          <p className="text-white text-xs">Information. This section can be some additional supplementary information. Whatever is deemed relevant.</p>
        </div>
      </CardContent>
    </Card>
  )
}

export { TokenSupply };