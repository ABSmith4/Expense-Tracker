const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
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

const db = async () => {
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