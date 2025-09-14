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

  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectionToDataBase;
