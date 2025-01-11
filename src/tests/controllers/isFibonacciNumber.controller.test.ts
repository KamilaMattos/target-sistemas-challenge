import { Request, Response } from "express"
import question2Controller from "../../controllers/isFibonacciNumber.controller"
import * as service from "../../services/isFibonacciNumber.service"

describe("question2Controller", () => {
  it("should return a valid Fibonacci response for a valid number in the sequence", () => {
    jest
      .spyOn(service, "isFibonacciNumber")
      .mockReturnValue({ isFibonacci: true })

    const req = { body: { number: 21 } } as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question2Controller(req, res)

    expect(service.isFibonacciNumber).toHaveBeenCalledWith(21)

    expect(res.json).toHaveBeenCalledWith({
      isFibonacci: true,
      message: "O número 21 pertence à sequência Fibonacci!",
    })
  })

  it("should return a valid Fibonacci response for a number not in the sequence", () => {
    jest
      .spyOn(service, "isFibonacciNumber")
      .mockReturnValue({ isFibonacci: false })

    const req = { body: { number: 25 } } as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question2Controller(req, res)

    expect(service.isFibonacciNumber).toHaveBeenCalledWith(25)

    expect(res.json).toHaveBeenCalledWith({
      isFibonacci: false,
      message: "O número 25 NÃO pertence à sequência Fibonacci.",
    })
  })

  it("should return a 400 error for invalid input (non-number)", () => {
    const req = { body: { number: "not a number" } } as unknown as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question2Controller(req, res)

    expect(res.status).toHaveBeenCalledWith(400)

    expect(res.json).toHaveBeenCalledWith({
      error: "Por favor, forneça um número válido no corpo da requisição.",
    })
  })

  it("should return a 400 error for NaN input", () => {
    const req = { body: { number: NaN } } as unknown as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question2Controller(req, res)

    expect(res.status).toHaveBeenCalledWith(400)

    expect(res.json).toHaveBeenCalledWith({
      error: "Por favor, forneça um número válido no corpo da requisição.",
    })
  })
})
