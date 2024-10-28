import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TokenManagement = () => {
  return (
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
  )
}

export { TokenManagement };