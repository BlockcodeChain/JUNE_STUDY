import mongoose from "mongoose"

const ConnectDB =async()=>{
try{
        await mongoose.connect(process.env.MONGODB_URL)
          console.log("DB  connected successfully ✅")
}
catch(err){
    console.log("DB not connected ❌",err)
}
}

export default ConnectDB