import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CohortProjects = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-gray-600 col-span-2">
      <CardHeader>
        <CardTitle className="text-gray-200">CohortVII Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[140px] flex items-center justify-center bg-white/5 rounded-lg">
          <p className="text-gray-400">list</p>
        </div>
      </CardContent>
    </Card>
  )
}

export { CohortProjects };