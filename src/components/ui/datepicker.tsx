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
import type { SelectSingleEventHandler } from "react-day-picker"

interface DatePickerProps {
  defaultValue: Date;
  onChange: (date: Date | undefined) => void;
}

/**
 * A date picker component with range and presets.
 */
export function DatePicker({ defaultValue, onChange }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultValue);

  const onSelect: SelectSingleEventHandler = (value) => {
    setDate(value);
    onChange?.(value);
  }

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
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
