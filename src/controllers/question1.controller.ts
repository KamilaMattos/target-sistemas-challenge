import { Request, Response } from "express"
import { calculateSum } from "../services/question1.service"

export default (req: Request, res: Response) => {
  try {
    const sum = calculateSum()
    res.json({ result: `O valor da variável SOMA será ${sum}` })
  } catch (error) {
    res.status(500).json({ error: "Erro ao calcular a soma" })
  }
}
