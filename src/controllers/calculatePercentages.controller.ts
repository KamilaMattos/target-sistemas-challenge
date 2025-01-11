import { Request, Response } from "express"
import { calculatePercentages } from "../services/calculatePercentages.service"

export default (req: Request, res: Response) => {
  try {
    const result = calculatePercentages()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: "Erro ao calcular percentuais" })
  }
}
