import { Request, Response } from "express"
import { processRevenueData } from "../services/question3.service"

export default (req: Request, res: Response) => {
  const result = processRevenueData()
  res.json(result)
}
