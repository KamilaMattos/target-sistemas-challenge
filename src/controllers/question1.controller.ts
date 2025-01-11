import { Request, Response } from "express"
import { calculateSum } from "../services/question1.service"

export default (req: Request, res: Response) => {
  const sum = calculateSum()
  res.json({ result: `O valor da variável SOMA será ${sum}` })
}
