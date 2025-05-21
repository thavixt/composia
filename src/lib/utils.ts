import { clsx, type ClassValue } from "clsx"
import type { Matcher } from "react-day-picker";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

export const noop = () => { };

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
