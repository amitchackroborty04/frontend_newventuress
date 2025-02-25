"use client"

import { useState } from "react"
import { Pie, PieChart, Sector, Cell } from "recharts"
import type { PieSectorDataItem } from "recharts/types/polar/Pie"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the structure of our data
interface DataItem {
  name: string
  value: number
  color: string
}

// Define valid month keys
type MonthKey = "Nov" | "Dec" | "Jan"

const monthData: Record<MonthKey, DataItem[]> = {
  Nov: [
    { name: "Total Vendor", value: 50, color: "rgb(19,34,83)" },
    { name: "Active vendor", value: 15, color: "#DBB0E4" },
    { name: "Customer", value: 35, color: "#7ABFFF" },
  ],
  Dec: [
    { name: "Total Vendor", value: 50, color: "rgb(19,34,83)" },
    { name: "Active vendor", value: 25, color: "#DBB0E4" },
    { name: "Customer", value: 25, color: "#7ABFFF" },
  ],
  Jan: [
    { name: "Total Vendor", value: 70, color: "rgb(19,34,83)" },
    { name: "Active vendor", value: 20, color: "#DBB0E4" },
    { name: "Customer", value: 10, color: "#7ABFFF" },
  ],
}

const getMaxValueIndex = (data: DataItem[]) => {
  return data.reduce(
    (maxIndex, item, currentIndex, array) => (item.value > array[maxIndex].value ? currentIndex : maxIndex),
    0,
  )
}

const chartConfig = {
  value: {
    label: "Value",
  },
  "Total Vendor": {
    label: "Total Vendor",
    color: "rgb(19,34,83)",
  },
  "Active vendor": {
    label: "Active vendor",
    color: "#DBB0E4",
  },
  Customer: {
    label: "Customer",
    color: "#7ABFFF",
  },
} satisfies ChartConfig

export default function AnalyticsChart() {
  const [month, setMonth] = useState<MonthKey>("Nov")
  const [activeIndex, setActiveIndex] = useState(() => getMaxValueIndex(monthData["Nov"]))

  const data = monthData[month]
  // const totalValue = data[0]?.value || 0

  const handleSectorClick = (index: number) => {
    setActiveIndex(index)
  }

  const renderActiveShape = (props: PieSectorDataItem) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={(outerRadius ?? 0) + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    )
  }

  return (
    <Card className="w-full bg-white rounded-xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-[28px] font-semibold text-[#494949]">Analytics</CardTitle>
        <Select
          value={month}
          onValueChange={(value) => {
            const newMonth = value as MonthKey
            setMonth(newMonth)
            setActiveIndex(getMaxValueIndex(monthData[newMonth]))
          }}
        >
          <SelectTrigger className="w-[90px] bg-primary dark:bg-pinkGradient text-primary-foreground focus:ring-0 dark:text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="w-[90px]  text-[12px] rounded-[8px] bg-[#FFFFFF] border-none">
            <SelectItem className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]" value="Nov">Nov 24</SelectItem>
            <SelectItem className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]" value="Dec">Dec 24</SelectItem>
            <SelectItem className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]" value="Jan">Jan 25</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-col items-center pb-6">
        <ChartContainer config={chartConfig} className="relative h-[218px] w-[222px]">
          <div className="relative">
            <PieChart width={222} height={218}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={80}
                strokeWidth={0}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                startAngle={90}
                endAngle={450}
                onClick={(_, index) => handleSectorClick(index)}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-[#444444]">{data[activeIndex].value}%</span>
              <span className="text-sm text-muted-foreground dark:text-[#444444]">{data[activeIndex].name}</span>
            </div>
          </div>
        </ChartContainer>

        <div className="mt-6 flex justify-center gap-1 2xl:gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleSectorClick(index)}
            >
              <div
                className={`h-3 w-4 2xl:w-3 rounded-full ${activeIndex === index ? "ring-2 ring-offset-2" : ""}`}
                style={{ backgroundColor: item.color }}
              />
              <span className={`text-sm text-[#444444] ${activeIndex === index ? "font-bold" : ""}`}>{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}