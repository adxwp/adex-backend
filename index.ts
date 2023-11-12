import indexRouter from './routes/index'
import categoryRouter from './routes/category'
import productRouter from './routes/product'
import orderRouter from './routes/order'
import orderLinesRouter from './routes/orderLines'

import express, { Express, json } from 'express'
const app: Express = express()

import 'dotenv/config'
import './db/connect'

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000

app.use(json());
// app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', indexRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/order-lines', orderLinesRouter)

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`))
