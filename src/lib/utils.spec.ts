import { describe, it, expect } from "vitest"
import { cn } from "./utils"

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