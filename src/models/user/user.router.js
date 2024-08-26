import { Router } from "express";

import * as userController from './user.controller.js' 
import { signUpSchema,signInSchema } from "./user.validation.js";
import { validation } from "../../middleware/validation.js";
const userRouter=Router()

userRouter.post('/signup',validation(signUpSchema),userController.signup)
userRouter.post('/signin',validation(signInSchema),userController.signIn)

export default userRouter