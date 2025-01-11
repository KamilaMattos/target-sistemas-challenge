import { calculatePercentages } from "../../services/question4.service"

describe("calculatePercentages Service", () => {
  it("should calculate correct percentages for all states", () => {
    const result = calculatePercentages()

    expect(result["SP"]).toBeCloseTo(37.53, 2)
    expect(result["RJ"]).toBeCloseTo(20.29, 2)
    expect(result["MG"]).toBeCloseTo(16.17, 2)
    expect(result["ES"]).toBeCloseTo(15.03, 2)
    expect(result["Outros"]).toBeCloseTo(10.98, 2)
  })

  it("should return percentages that sum up to 100%", () => {
    const result = calculatePercentages()
    const totalPercentage = Object.values(result).reduce(
      (sum, perc) => sum + perc,
      0
    )
    expect(totalPercentage).toBeCloseTo(100, 2)
  })
})
