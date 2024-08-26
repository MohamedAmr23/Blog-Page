import { Router } from "express";
import * as blogController from "./blog.controller.js";
import { userAuth } from "../../middleware/auth.js";
import { validation } from "../../middleware/validation.js";
import { addBlogSchema } from "./blog.validation.js";
const blogRouter=Router()

blogRouter.post('/addblog',validation(addBlogSchema),userAuth,blogController.addBlog)
blogRouter.get('/getAllBlog',userAuth,blogController.getAllBlog)
blogRouter.get('/getUserBlog/:id',blogController.getUserBlog)
blogRouter.put('/updateBlog',userAuth,blogController.updateBlog)
blogRouter.delete('/deleteBlog',userAuth,blogController.deleteBlog)





export default blogRouter