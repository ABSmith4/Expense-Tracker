import 'dotenv/config.js'
import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.config.js';
import cors from 'cors';
import index from './routes/index.js';
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api', index); 

dotenv.config()


const PORT = process.env.PORT || 8080;
const server = () => {
  db()
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

server();
export default app;