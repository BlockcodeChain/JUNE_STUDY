import mongoose from "mongoose"

const userSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
   
    token:{
  type:String,
  default:null
    },
    otp:{
         type:String,
      default:null
    },
     otpexpire:{
         type:Date,
      default:null
    },
    


},{timestamps:true})

const usermodel=mongoose.model("user",userSchema)

export default usermodel