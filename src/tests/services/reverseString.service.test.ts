import { reverseString } from "../../services/question5.service"

describe("reverseString Service", () => {
  it("should correctly reverse a regular string", () => {
    const result = reverseString("hello")
    expect(result).toBe("olleh")
  })

  it("should correctly reverse a string with spaces", () => {
    const result = reverseString("hello world")
    expect(result).toBe("dlrow olleh")
  })

  it("should handle an empty string", () => {
    const result = reverseString("")
    expect(result).toBe("")
  })

  it("should handle a single-character string", () => {
    const result = reverseString("a")
    expect(result).toBe("a")
  })

  it("should handle a string with special characters", () => {
    const result = reverseString("!@#$%^&*()")
    expect(result).toBe(")(*&^%$#@!")
  })

  it("should handle a string with numbers", () => {
    const result = reverseString("12345")
    expect(result).toBe("54321")
  })

  it("should handle a string with mixed case", () => {
    const result = reverseString("AbCdEf")
    expect(result).toBe("fEdCbA")
  })
})
