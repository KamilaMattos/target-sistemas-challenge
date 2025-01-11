import { Request, Response } from "express"
import question3Controller from "../../controllers/question3.controller"
import * as service from "../../services/question3.service"

describe("question3Controller", () => {
  it("should return the processed revenue data successfully", () => {
    jest.spyOn(service, "processRevenueData").mockReturnValue({
      minRevenue: 100,
      maxRevenue: 400,
      daysAboveAverage: 10,
    })

    const req = {} as Request
    const res = {
      json: jest.fn(),
    } as unknown as Response

    question3Controller(req, res)

    expect(service.processRevenueData).toHaveBeenCalled()

    expect(res.json).toHaveBeenCalledWith({
      minRevenue: 100,
      maxRevenue: 400,
      daysAboveAverage: 10,
    })
  })

  it("should handle errors from the service gracefully", () => {
    jest.spyOn(service, "processRevenueData").mockImplementation(() => {
      throw new Error("Erro ao processar os dados de faturamento")
    })

    const req = {} as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question3Controller(req, res)

    expect(res.status).toHaveBeenCalledWith(500)

    expect(res.json).toHaveBeenCalledWith({
      error: "Erro ao processar os dados de faturamento",
    })
  })
})
