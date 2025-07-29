// require("dotenv").config({path: ".env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });









// ( async () =>{
//   try {

//    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

//   } catch (error) {
//     console.log(error);
//   }
// })()
