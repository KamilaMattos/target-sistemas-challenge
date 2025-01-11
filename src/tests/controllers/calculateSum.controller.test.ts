import { Request, Response } from "express"
import question1Controller from "../../controllers/calculateSum.controller"
import * as service from "../../services/calculateSum.service"

describe("question1Controller", () => {
  it("should call calculateSum and return the correct response", () => {
    jest.spyOn(service, "calculateSum").mockReturnValue(91)

    const req = {} as Request
    const res = {
      json: jest.fn(),
    } as unknown as Response

    question1Controller(req, res)

    expect(service.calculateSum).toHaveBeenCalled()

    expect(res.json).toHaveBeenCalledWith({
      result: "O valor da variável SOMA será 91",
    })
  })

  it("should handle errors in the service gracefully", () => {
    jest.spyOn(service, "calculateSum").mockImplementation(() => {
      throw new Error("Erro ao calcular a soma")
    })

    const req = {} as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question1Controller(req, res)

    expect(res.status).toHaveBeenCalledWith(500)

    expect(res.json).toHaveBeenCalledWith({ error: "Erro ao calcular a soma" })
  })
})
