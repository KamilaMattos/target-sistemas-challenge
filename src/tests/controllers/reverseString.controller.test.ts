import { Request, Response } from "express"
import question5Controller from "../../controllers/reverseString.controller"
import * as service from "../../services/reverseString.service"

describe("question5Controller", () => {
  it("should return the reversed string successfully", () => {
    jest.spyOn(service, "reverseString").mockReturnValue("olleh")

    const req = { body: { input: "hello" } } as Request
    const res = {
      json: jest.fn(),
    } as unknown as Response

    question5Controller(req, res)

    expect(service.reverseString).toHaveBeenCalledWith("hello")

    expect(res.json).toHaveBeenCalledWith({
      reversed: "olleh",
    })
  })

  it("should handle an empty string", () => {
    jest.spyOn(service, "reverseString").mockReturnValue("")

    const req = { body: { input: "" } } as Request
    const res = {
      json: jest.fn(),
    } as unknown as Response

    question5Controller(req, res)

    expect(service.reverseString).toHaveBeenCalledWith("")

    expect(res.json).toHaveBeenCalledWith({
      reversed: "",
    })
  })

  it("should handle errors when input is not provided", () => {
    const req = { body: {} } as Request
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response

    question5Controller(req, res)

    expect(res.status).toHaveBeenCalledWith(400)

    expect(res.json).toHaveBeenCalledWith({
      error: "O campo 'input' é obrigatório.",
    })
  })
})
