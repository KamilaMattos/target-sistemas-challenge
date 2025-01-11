import { isFibonacciNumber } from "../../services/isFibonacciNumber.service"

describe("isFibonacciNumber Service", () => {
  it("should return true for a number in the Fibonacci sequence", () => {
    const result = isFibonacciNumber(21)
    expect(result.isFibonacci).toBe(true)
  })

  it("should return false for a number not in the Fibonacci sequence", () => {
    const result = isFibonacciNumber(25)
    expect(result.isFibonacci).toBe(false)
  })

  it("should return true for 1, which appears twice in the Fibonacci sequence", () => {
    const result = isFibonacciNumber(1)
    expect(result.isFibonacci).toBe(true)
  })

  it("should handle large Fibonacci numbers correctly", () => {
    const result = isFibonacciNumber(144)
    expect(result.isFibonacci).toBe(true)
  })

  it("should return false for negative numbers", () => {
    const result = isFibonacciNumber(-5)
    expect(result.isFibonacci).toBe(false)
  })
})
