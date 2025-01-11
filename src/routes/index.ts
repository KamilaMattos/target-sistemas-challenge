import { Router } from "express"
import calculateSum from "../controllers/calculateSum.controller"
import isFibonacciNumber from "../controllers/isFibonacciNumber.controller"
import processRevenueData from "../controllers/processRevenueData.controller"
import calculatePercentages from "../controllers/calculatePercentages.controller"
import reverseString from "../controllers/reverseString.controller"

const router = Router()

router.get("/question1", calculateSum)
router.post("/question2", isFibonacciNumber)
router.post("/question3", processRevenueData)
router.get("/question4", calculatePercentages)
router.post("/question5", reverseString)

export default router
