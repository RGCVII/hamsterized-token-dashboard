import React from "react";
import { Token } from "@/app/page";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TokenLore = ({ tokens }: { tokens: Token[] }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-gray-600">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-200">
          {tokens[0].name} Lore
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">
          {tokens[0].description}
        </div>
      </CardContent>
    </Card>
  )
}

export { TokenLore };