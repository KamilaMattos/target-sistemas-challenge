import { Request, Response } from "express"
import { calculatePercentages } from "../services/question4.service"

export default (req: Request, res: Response) => {
  const result = calculatePercentages()
  res.json(result)
}
