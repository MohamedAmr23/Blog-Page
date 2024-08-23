import { Router } from "express";

import * as userController from './user.controller.js' 
const userRouter=Router()

userRouter.post('/signup',userController.signup)
userRouter.post('/signin',userController.signIn)

export default userRouter