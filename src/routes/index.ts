import { Router } from "express"
import question1Controller from "../controllers/question1.controller"
import question2Controller from "../controllers/question2.controller"
import question3Controller from "../controllers/question3.controller"
import question4Controller from "../controllers/question4.controller"
import question5Controller from "../controllers/question5.controller"

const router = Router()

router.get("/question1", question1Controller)
router.post("/question2", question2Controller)
router.post("/question3", question3Controller)
router.get("/question4", question4Controller)
router.post("/question5", question5Controller)

export default router
