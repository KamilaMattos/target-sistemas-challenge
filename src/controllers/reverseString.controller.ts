import { Request, Response } from "express"
import { reverseString } from "../services/reverseString.service"

export default (req: Request, res: Response) => {
  const { input } = req.body

  if (typeof input !== "string") {
    res.status(400).json({ error: "O campo 'input' é obrigatório." })
    return
  }

  const result = reverseString(input)
  res.json({ reversed: result })
}
