import { processRevenueData } from "../../services/processRevenueData.service"
import { DailyRevenue } from "../../types/faturamento"

jest.mock("../../data/faturamento.json", () => [
  { dia: 1, valor: 100 },
  { dia: 2, valor: 200 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 300 },
  { dia: 5, valor: 0 },
  { dia: 6, valor: 400 },
])

describe("processRevenueData Service", () => {
  it("should calculate the correct minimum revenue", () => {
    const result = processRevenueData()
    expect(result.minRevenue).toBe(100)
  })

  it("should calculate the correct maximum revenue", () => {
    const result = processRevenueData()
    expect(result.maxRevenue).toBe(400)
  })

  it("should calculate the correct number of days above the average revenue", () => {
    const result = processRevenueData()
    expect(result.daysAboveAverage).toBe(2)
  })

  it("should exclude days with zero revenue", () => {
    const result = processRevenueData()
    expect(result.minRevenue).not.toBe(0)
  })
})
