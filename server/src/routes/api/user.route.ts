import { Router, Request, Response } from "express";
import {
  validateRequest,
  tryCatchMiddleware,
  comparePassword,
  isExistUserMiddleware,
  authMiddleware,
} from "../../middleware";
import { userSignupSchema, userLoginSchema } from "../../schemas/user.schema";
import userController from "../../controllers/user.controller";

const router: Router = Router();

router.post(
  "/sign-up",
  [validateRequest(userSignupSchema), isExistUserMiddleware(true)],
  tryCatchMiddleware(userController.signup.bind(userController))
);
router.post(
  "/login",
  [
    validateRequest(userLoginSchema),
    isExistUserMiddleware(false),
    comparePassword(),
  ],
  tryCatchMiddleware(userController.login.bind(userController))
);

router.get(
  "/contacts",
  [authMiddleware],
  tryCatchMiddleware(userController.getContacts.bind(userController))
);
router.post('/user' , [authMiddleware] , tryCatchMiddleware(userController.getUser.bind(userController)))
export default router;
