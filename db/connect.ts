import { Schema, model, connect } from 'mongoose';

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/tecso');
  console.log('Db Connected ...')
}