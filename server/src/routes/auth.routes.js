import { Router } from "express";
import {
  signInCtrl,
  getMeCtrl,
  signUpCtrl,
} from "../controllers/auth.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import {
  signInValidation,
  signUpValidation,
} from "../validations/auth.validations.js";
import { applyValidations } from "../validations/apply.validations.js";
import { createJwt } from "../helpers/createJwt.js";

const authRouter = Router();

authRouter.post(
  "/sign-in",
  signInValidation,
  applyValidations,
  createJwt,
  signInCtrl
);
authRouter.post(
  "/sign-up",
  signUpValidation,
  applyValidations,
  createJwt,
  signUpCtrl
);
authRouter.get("/me", validateJwt, getMeCtrl);

export { authRouter };
