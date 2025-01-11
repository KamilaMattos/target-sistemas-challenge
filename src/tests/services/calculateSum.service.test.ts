import { calculateSum } from "../../services/calculateSum.service"

describe("calculateSum Service", () => {
  it("should calculate the correct sum for INDEX = 13", () => {
    const result = calculateSum()
    expect(result).toBe(91)
  })

  it("should return a positive value", () => {
    const result = calculateSum()
    expect(result).toBeGreaterThan(0)
  })

  it("should return a finite number", () => {
    const result = calculateSum()
    expect(result).not.toBe(Infinity)
  })

  it("should not be NaN", () => {
    const result = calculateSum()
    expect(result).not.toBeNaN()
  })
})
