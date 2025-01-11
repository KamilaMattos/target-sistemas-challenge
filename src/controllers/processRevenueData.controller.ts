import { Request, Response } from "express"
import { processRevenueData } from "../services/processRevenueData.service"

export default (req: Request, res: Response) => {
  try {
    const result = processRevenueData()
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar os dados de faturamento" })
  }
}
