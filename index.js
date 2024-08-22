import express from 'express'
import { dbConnect } from './database/dbConnection.js'
import userRouter from './src/models/user/user.router.js'
const app = express()
const port = 2000
app.use(express.json())
app.use('/users',userRouter)
dbConnect()


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))