import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectCloudinary from './cloud.js'
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

dotenv.config();

const app = express()
const PORT = process.env.port || 5090

const connectDB = async () => {
    mongoose.connection.on("CONNECTED",() => {
        console.log("MY DB HAS BEEN CONNECTED");
    })
    await mongoose.connect(process.env.MONGODB_URI)
}
connectDB();
connectCloudinary()

// cloud();

//middlewares
app.use(express.json())
app.use(cors())

//APIs 
app.use('/api/user',userRouter)
app.use("/api/product",productRouter)

app.get('/', (req,res)=>{
    res.send('MY APIs IS WORKING JUST FINE')
})


app.listen(PORT, ()=> console.log(`My server is running on port: ${PORT}`)
)