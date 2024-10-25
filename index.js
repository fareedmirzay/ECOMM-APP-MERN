import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express()
const port = process.env.port || 5090

//middlewares

app.use(express.json())
app.use(cors())

//API 

app.get('/', (req,res)=>{
    res.send('MY APIs IS WORKING JUST FINE')
})


app.listen(port, ()=> console.log(`My server is running on port: ${port}`)
)