import { Router } from "express";
import * as blogController from "./blog.controller.js";
import { userAuth } from "../../middleware/auth.js";
const blogRouter=Router()

blogRouter.post('/addblog',userAuth,blogController.addBlog)
blogRouter.get('/getAllBlog',userAuth,blogController.getAllBlog)
blogRouter.get('/getUserBlog/:id',blogController.getUserBlog)
blogRouter.put('/updateBlog',userAuth,blogController.updateBlog)
blogRouter.delete('/deleteBlog',userAuth,blogController.deleteBlog)





export default blogRouter