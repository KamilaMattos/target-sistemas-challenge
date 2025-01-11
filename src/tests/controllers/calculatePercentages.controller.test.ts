import { Request, Response } from "express"
import question4Controller from "../../controllers/question4.controller"
import * as service from "../../services/question4.service"

it("should handle errors from the service gracefully", () => {
  jest.spyOn(service, "calculatePercentages").mockImplementation(() => {
    throw new Error("Erro ao calcular percentuais")
  })

  const req = {} as Request
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  } as unknown as Response

  question4Controller(req, res)

  expect(res.status).toHaveBeenCalledWith(500)

  expect(res.json).toHaveBeenCalledWith({
    error: "Erro ao calcular percentuais",
  })
})
