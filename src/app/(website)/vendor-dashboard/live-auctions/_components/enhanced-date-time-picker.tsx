"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format, addDays, isBefore, isAfter, set } from "date-fns"
import { CalendarIcon, Clock, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface EnhancedDateTimePickerProps {
  value?: Date
  onChange: (date: Date | undefined) => void
  minDate?: Date
  maxDate?: Date
  isStartDate?: boolean
  endDate?: Date
  className?: string
  showHelpText?: boolean
}

export function EnhancedDateTimePicker({
  value,
  onChange,
  minDate,
  maxDate,
  isStartDate = false,
  endDate,
  className,
  showHelpText = false,
}: EnhancedDateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value)
  const [isOpen, setIsOpen] = useState(false)

  // Generate hours and minutes for select dropdowns
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5)

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return

    // If we have a selected date already, preserve the time
    if (selectedDate) {
      const newDate = set(date, {
        hours: selectedDate.getHours(),
        minutes: selectedDate.getMinutes(),
      })
      setSelectedDate(newDate)
      onChange(newDate)
    } else {
      setSelectedDate(date)
      onChange(date)
    }
  }

  const handleTimeChange = (type: "hours" | "minutes", value: string) => {
    if (!selectedDate) return

    const newDate = new Date(selectedDate)
    if (type === "hours") {
      newDate.setHours(Number.parseInt(value))
    } else {
      newDate.setMinutes(Number.parseInt(value))
    }

    setSelectedDate(newDate)
    onChange(newDate)
  }

  const handleQuickSelect = (days: number) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const newDate = addDays(today, days)

    // Set time to noon for better UX
    newDate.setHours(12, 0, 0, 0)

    setSelectedDate(newDate)
    onChange(newDate)
    setIsOpen(false)
  }

  // Format the display value
  const formattedValue = selectedDate
    ? `${format(selectedDate, "MMM d, yyyy")} at ${format(selectedDate, "h:mm a")}`
    : "Select date and time"

  return (
    <div className={cn("relative", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal h-[51px] border-[#9C9C9C]",
              !selectedDate && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formattedValue}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="presets">Quick Select</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar" className="p-4 pb-0">
              <div className="space-y-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => {
                    // Disable dates before minDate
                    if (minDate && isBefore(date, minDate)) return true
                    // Disable dates after maxDate
                    if (maxDate && isAfter(date, maxDate)) return true
                    // For end date, disable dates before start date
                    if (!isStartDate && endDate && isBefore(date, endDate)) return true
                    return false
                  }}
                  initialFocus
                />
                <div className="flex items-center space-x-2 pb-4">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Time:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <Select
                      value={selectedDate ? selectedDate.getHours().toString() : "12"}
                      onValueChange={(value) => handleTimeChange("hours", value)}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={hour} value={hour.toString()}>
                            {hour.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={selectedDate ? Math.floor(selectedDate.getMinutes() / 5) * 5 + "" : "0"}
                      onValueChange={(value) => handleTimeChange("minutes", value)}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Min" />
                      </SelectTrigger>
                      <SelectContent>
                        {minutes.map((minute) => (
                          <SelectItem key={minute} value={minute.toString()}>
                            {minute.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="presets" className="p-4">
              <div className="flex flex-col space-y-2">
                <Button variant="outline" onClick={() => handleQuickSelect(0)}>
                  Today
                </Button>
                <Button variant="outline" onClick={() => handleQuickSelect(1)}>
                  Tomorrow
                </Button>
                <Button variant="outline" onClick={() => handleQuickSelect(7)}>
                  In a week
                </Button>
                <Button variant="outline" onClick={() => handleQuickSelect(14)}>
                  In two weeks
                </Button>
                <Button variant="outline" onClick={() => handleQuickSelect(30)}>
                  In a month
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          <div className="p-4 pt-0">
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      {showHelpText && (
        <div className="mt-1 flex items-center text-xs text-muted-foreground">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-3 w-3 mr-1 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{isStartDate ? "When the auction will begin" : "When the auction will end"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span>{isStartDate ? "Select when your auction will start" : "Select when your auction will end"}</span>
        </div>
      )}
    </div>
  )
}

