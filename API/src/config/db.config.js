import mongoose from 'mongoose';

async function db() {
  try {
      mongoose.set('strictQuery', false)
      await mongoose.connect(process.env.Mongo_URL)
      console.log('Db Connected')
  } catch (error) {
      console.log('DB Connection Error');
  }
}

export default db;