import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TokenManagement = () => {
  return (
    <Card className="bg-gradient-to-b from-[#262f41] to-[#475778] backdrop-blur-sm border-white row-span-2">
      <CardHeader className="flex flex-row items-center justify-between border-b border-white p-5">
        <CardTitle className="w-full text-2xl font-serif text-rg-red">Token Management</CardTitle>
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
  )
}

export { TokenManagement };