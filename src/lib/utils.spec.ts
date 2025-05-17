import { describe, it, expect } from "vitest"
import { cn } from "./utils"
import { isDateRange } from "./utils"
import { getCalendarDate } from "./utils"

describe("cn", () => {
  it("returns empty string for no arguments", () => {
    expect(cn()).toBe("")
  })

  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    // eslint-disable-next-line no-constant-binary-expression
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz")
    // eslint-disable-next-line no-constant-binary-expression
    expect(cn("foo", 0 && "bar", "baz")).toBe("foo baz")
    expect(cn("foo", null, undefined, "bar")).toBe("foo bar")
  })

  it("merges tailwind classes correctly", () => {
    expect(cn("p-2", "p-4")).toBe("p-4")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("handles array of classes", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz")
  })

  it("handles object syntax", () => {
    expect(cn({ foo: true, bar: false }, "baz")).toBe("foo baz")
  })
})

describe("isDateRange", () => {
  it("returns true for array of two Dates", () => {
    const range = [new Date(2023, 0, 1), new Date(2023, 0, 2)]
    expect(isDateRange(range)).toBe(true)
  })

  it("returns false for array of one Date", () => {
    const range = [new Date(2023, 0, 1)]
    expect(isDateRange(range)).toBe(false)
  })

  it("returns false for array of three Dates", () => {
    const range = [new Date(2023, 0, 1), new Date(2023, 0, 2), new Date(2023, 0, 3)]
    expect(isDateRange(range)).toBe(false)
  })

  it("returns false for array with non-Date values", () => {
    const range = [new Date(2023, 0, 1), "not a date"]
    // @ts-expect-error testing wrong type
    expect(isDateRange(range)).toBe(false)
  })

  it("returns false for a single Date", () => {
    expect(isDateRange(new Date(2023, 0, 1))).toBe(false)
  })

  it("returns false for undefined", () => {
    // @ts-expect-error testing wrong type
    expect(isDateRange(undefined)).toBe(false)
  })

  it("returns false for null", () => {
    // @ts-expect-error testing wrong type
    expect(isDateRange(null)).toBe(false)
  })
})

describe("getCalendarDate", () => {
  it("returns new Date when value is undefined", () => {
    const result = getCalendarDate(undefined)
    expect(result).toBeInstanceOf(Date)
  })

  it("returns new Date when value is null", () => {
    // @ts-expect-error testing wrong type
    const result = getCalendarDate(null)
    expect(result).toBeInstanceOf(Date)
  })

  it("returns new Date when value is false", () => {
    const result = getCalendarDate(false)
    expect(result).toBeInstanceOf(Date)
  })

  it("returns new Date when value is true", () => {
    const result = getCalendarDate(true)
    expect(result).toBeInstanceOf(Date)
  })

  it("returns the value when value is a Date", () => {
    const date = new Date(2023, 0, 1)
    const result = getCalendarDate(date)
    expect(result).toBe(date)
  })

  it("returns the value when value is an array of Dates", () => {
    const range = [new Date(2023, 0, 1), new Date(2023, 0, 2)]
    const result = getCalendarDate(range)
    expect(result).toBe(range)
  })

  it("returns the value when value is an empty array", () => {
    const arr: never[] = []
    const result = getCalendarDate(arr)
    expect(result).toBe(arr)
  })

  it("returns false for array with one non-Date and one Date", () => {
    const range = ["not a date", new Date(2023, 0, 2)]
    // @ts-expect-error testing wrong type
    expect(isDateRange(range)).toBe(false)
  })

  it("returns false for array with two non-Date values", () => {
    const range = ["foo", "bar"]
    // @ts-expect-error testing wrong type
    expect(isDateRange(range)).toBe(false)
  })

  it("returns false for empty array", () => {
    expect(isDateRange([])).toBe(false)
  })

  it("returns false for array with undefined values", () => {
    // @ts-expect-error testing wrong type
    expect(isDateRange([undefined, undefined])).toBe(false)
  })

  it("returns false for array with null values", () => {
    // @ts-expect-error testing wrong type
    expect(isDateRange([null, null])).toBe(false)
  })
})