import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './src/routes/index.routes.js'
import errorHandler from './src/middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
dotenv.config()
app.use(cors())
app.use('/v1', router)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`DB conected and server runing on port ${PORT}`);

})

