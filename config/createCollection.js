import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()

async function main() {
    const uri = process.env.DATABASE_URL_MONGODB;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      await client.connect();
      const db = client.db('UltraVoucher');
  
      await db.createCollection('User');
      await db.createCollection('Product');
      await db.createCollection('Category');
      await db.createCollection('Cart');
  
      console.log('Collections created!');
    } finally {
      await client.close();
    }
}
  
  main().catch(console.error);