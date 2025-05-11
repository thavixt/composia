import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Matcher } from "react-day-picker"
 
/**
 * A date picker component with range and presets.
 */
export function DatePicker() {
  const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export function isDateRange(value: Matcher | Matcher[]): value is Matcher[] {
  return Array.isArray(value) && value.length === 2 && value.every(isDate);
}

export function isDate(value: Matcher | Matcher[]): value is Matcher {
  return value instanceof Date;
}

export function getCalendarDate(value: Matcher | Matcher[] | undefined | boolean): Matcher | Matcher[] {
  if (!value) {
    return new Date();
  }
  if (value === true) {
    return new Date();
  }

  return value;
}
