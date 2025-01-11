import { Request, Response } from "express"
import { reverseString } from "../services/question5.service"

export default (req: Request, res: Response) => {
  const { input } = req.body
  const result = reverseString(input)
  res.json({ reversed: result })
}
