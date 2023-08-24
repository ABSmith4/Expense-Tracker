import express from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
import { readdirSync } from 'fs';
const app = express()

require('dotenv').config()

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function db() {
  try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(process.env.MONGO_URL)
      console.log('Db Connected')
  } catch (error) {
      console.log('DB Connection Error');
  }
}

db()
export default app;