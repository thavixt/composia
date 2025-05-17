import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface ComboboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultOpen?: boolean;
  disabled?: boolean;
  emptyPlaceholder?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  values: Array<{value: string; label: string}>;

  onChange?: (value: string) => void;
}

export function Combobox({
  defaultOpen,
  disabled,
  emptyPlaceholder = "No value found",
  placeholder = "Select a value...",
  searchPlaceholder = "Search for a value...",
  values,
  onChange,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(defaultOpen ?? false);
  const [value, setValue] = React.useState("");

  const onSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false);
    onChange?.(currentValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          disabled={disabled}
        >
          {value
            ? values.find((v) => v.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyPlaceholder}</CommandEmpty>
            <CommandGroup>
              {values.map((v) => (
                <CommandItem
                  key={v.value}
                  value={v.value}
                  onSelect={onSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === v.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {v.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
