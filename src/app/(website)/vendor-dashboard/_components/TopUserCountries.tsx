"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

// Define our data type
interface CountryData {
  country: string;
  code: string;
  percentage: number;
  flag: string;
}

// Sample data for different years
const countryDataByYear: { [key: string]: CountryData[] } = {
  "2024": [
    {
      country: "United States",
      code: "US",
      percentage: 90,
      flag: "/assets/flag/usa.png"
    },
    {
      country: "Canada",
      code: "CA",
      percentage: 26,
      flag: "/assets/flag/canada.png"
    },
    {
      country: "Mexico",
      code: "MX",
      percentage: 18,
      flag: "/assets/flag/mexico.png"
    },
    {
      country: "Thailand",
      code: "TH",
      percentage: 14,
      flag: "/assets/flag/thiland.png"
    },
    {
      country: "Germany",
      code: "DE",
      percentage: 92,
      flag: "/assets/flag/germany.png"
    }
  ],
  "2023": [
    {
      country: "United States",
      code: "US",
      percentage: 60,
      flag: "/assets/flag/usa.png"
    },
    {
      country: "Canada",
      code: "CA",
      percentage: 26,
      flag: "/assets/flag/canada.png"
    },
    {
      country: "Mexico",
      code: "MX",
      percentage: 28,
      flag: "/assets/flag/mexico.png"
    },
    {
      country: "Thailand",
      code: "TH",
      percentage: 14,
      flag: "/assets/flag/thiland.png"
    },
    {
      country: "Germany",
      code: "DE",
      percentage: 42,
      flag: "/assets/flag/germany.png"
    }
  ],
  "2022": [
    {
      country: "United States",
      code: "US",
      percentage: 10,
      flag: "/assets/flag/usa.png"
    },
    {
      country: "Canada",
      code: "CA",
      percentage: 56,
      flag: "/assets/flag/canada.png"
    },
    {
      country: "Mexico",
      code: "MX",
      percentage: 18,
      flag: "/assets/flag/mexico.png"
    },
    {
      country: "Thailand",
      code: "TH",
      percentage: 74,
      flag: "/assets/flag/thiland.png"
    },
    {
      country: "Germany",
      code: "DE",
      percentage: 32,
      flag: "/assets/flag/germany.png"
    }
  ]
};

// Color scheme for all years
const colorScheme = ["#e8eaf6", "#1a237e"];

declare global {
  interface Window {
    google: any;
  }
}

export default function GeoChart() {
  const [year, setYear] = useState("2024");
  const [zoom, setZoom] = useState(1);
  const [activeButton, setActiveButton] = useState<"plus" | "minus" | null>(
    null
  );

  useEffect(
    () => {
      const loadGoogleCharts = () => {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.onload = () => {
          if (window.google) {
            window.google.charts.load("current", {
              packages: ["geochart"]
            });
            window.google.charts.setOnLoadCallback(drawChart);
          }
        };
        document.head.appendChild(script);
      };

      const drawChart = () => {
        if (!window.google || !window.google.visualization) return;

        const data = new window.google.visualization.DataTable();
        data.addColumn("string", "Country");
        data.addColumn("number", "Percentage");

        countryDataByYear[year].forEach(({ code, percentage }) => {
          data.addRow([code, percentage]);
        });

        const chart = new window.google.visualization.GeoChart(
          document.getElementById("geo-chart")
        );

        const options = {
          colorAxis: { colors: colorScheme },
          backgroundColor: "#ffffff",
          datalessRegionColor: "#f5f5f5",
          defaultColor: "#f5f5f5",
          legend: "none",
          zoom
        };

        chart.draw(data, options);
      };

      loadGoogleCharts();

      const handleResize = () => {
        if (window.google && window.google.visualization) {
          drawChart();
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    [zoom, year]
  );

  return (
    <Card className="w-full max-w-5xl mx-auto col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[28px] text-[#494949] font-bold ">
          Top User Countries
        </CardTitle>
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[90px] bg-primary text-white dark:bg-pinkGradient border-none ">
            <SelectValue>
              {year}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-[#FFFFFF] border-none">
            <SelectItem
              className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]"
              value="2024"
            >
              2024
            </SelectItem>
            <SelectItem
              className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]"
              value="2023"
            >
              2023
            </SelectItem>
            <SelectItem
              className="text-[#000000] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A]"
              value="2022"
            >
              2022
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <div id="geo-chart" className="w-full h-[576px]" />
          <div className="absolute  left-4 flex space-x-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={() => {
                setZoom(prev => Math.min(prev + 0.5, 4));
                setActiveButton("plus");
              }}
              className={`${activeButton === "plus"
                ? "bg-primary dark:bg-pinkGradient text-white"
                : "bg-[#E6EEF6] dark:bg-[#482D721A]"}`}
            >
              <Plus
                className={`h-4 w-4 ${activeButton === "plus"
                  ? "text-white"
                  : "text-[#444444]"}`}
              />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => {
                setZoom(prev => Math.max(prev - 0.5, 1));
                setActiveButton("minus");
              }}
              className={`${activeButton === "minus"
                ? "bg-primary dark:bg-pinkGradient text-white"
                : "bg-[#E6EEF6] dark:bg-[#482D721A]"}`}
            >
              <Minus
                className={`h-4 w-4 ${activeButton === "minus"
                  ? "text-white"
                  : "text-[#444444]"}`}
              />
            </Button>
          </div>
        </div>

        <div className="pt-[55px]">
          <div className="mt-3 space-y-4 pt-5 border-t-[1px]  border-[#B0B0B0]">
            {countryDataByYear[year].map(({ country, percentage, flag }) =>
              <div key={country} className="flex items-center gap-4  ">
                <Image
                  src={flag}
                  alt={`${country} flag`}
                  width={24}
                  height={18}
                  className="w-8 h-auto rounded-sm"
                />
                <span className="w-32 text-[#000000] text-base font-medium  ">
                  {country}
                </span>
                <div className="flex-1 h-[18px] bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-500 dark:bg-pinkGradient"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: colorScheme[1]
                    }}
                  />
                </div>
                <span className="w-12 text-right text-[#000000] font-medium z-40  ">
                  {percentage}%
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
