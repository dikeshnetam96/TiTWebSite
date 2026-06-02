// import mongoose from "mongoose";

// const connectionToDataBase = async () => {
//     try{
//         await mongoose.connect(process.env.MongoURL)
//         console.log("Connected to db")
//     }
//     catch(err){
//         console.log("err")
//     }
// }

// export default connectionToDataBase

// lib/mongoose.js
// lib/mongoose.ts
import mongoose from 'mongoose';

const connectionToDataBase = async () => {
  if (mongoose.connections[0].readyState) return;

  // support multiple env var names and provide a helpful error when missing
  const uri = process.env.MONGODB_URI || process.env.MONGOURL || process.env.MONGO_URI;
  if (!uri || typeof uri !== 'string') {
    throw new Error(
      'MONGODB_URI is not set. Add it to .env.local or your environment and restart the dev server.'
    );
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectionToDataBase;
