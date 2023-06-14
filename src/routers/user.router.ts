import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.findAll);
router.post("/", userMiddleware.isCreateVadid, userController.create);
router.get("/:userId", userController.findById);
router.put("/:userId", userMiddleware.isUpdateValid, userController.updateById);
router.delete("/:userId", userController.deleteById);

export const userRouter = router;
