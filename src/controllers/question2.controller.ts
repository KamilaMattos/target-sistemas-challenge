import { Request, Response } from "express"
import { isFibonacciNumber } from "../services/question2.service"

export default (req: Request, res: Response) => {
  const { number } = req.body
  
  if (typeof number !== "number" || isNaN(number)) {
    res.status(400).json({
      error: "Por favor, forneça um número válido no corpo da requisição.",
    })
    return
  }

  const { isFibonacci } = isFibonacciNumber(number)
  const message = isFibonacci
    ? `O número ${number} pertence à sequência Fibonacci!`
    : `O número ${number} NÃO pertence à sequência Fibonacci.`

  res.json({ isFibonacci, message })
}
