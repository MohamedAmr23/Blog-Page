import { Router } from "express";
import * as blogController from "./blog.controller.js";

const blogRouter=Router()

blogRouter.post('/addblog',blogController.addBlog)
blogRouter.get('/getAllBlog',blogController.getAllBlog)
blogRouter.get('/getUserBlog/:id',blogController.getUserBlog)
blogRouter.put('/updateBlog',blogController.updateBlog)
blogRouter.delete('/deleteBlog',blogController.deleteBlog)





export default blogRouter