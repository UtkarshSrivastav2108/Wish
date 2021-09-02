import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/erroeMiddleware.js'

// Config Env
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 5000


// Database
connectDB();
const app = express();


app.get('/', (req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)