import { Router, Request, Response } from "express";
import {
  validateRequest,
  tryCatchMiddleware,
  comparePassword,
  isExistUserMiddleware,
  authMiddleware,
} from "../../middleware";

import messageController from "../../controllers/messages.controller"
import { messageSchema } from "../../schemas/message.schema";

const router: Router = Router();

router.post(
  "/add",
  [validateRequest(messageSchema),authMiddleware],
  tryCatchMiddleware(messageController.addMessage.bind(messageController))
);
router.get(
  "/get-messages",
  [authMiddleware],
  tryCatchMiddleware(messageController.getAllMessages.bind(messageController))
);
// router.post(
//   "/login",
//   [
//     validateRequest(userLoginSchema),
//     isExistUserMiddleware(false),
//     comparePassword(),
//   ],
//   tryCatchMiddleware(userController.login.bind(userController))
// );

export default router;
