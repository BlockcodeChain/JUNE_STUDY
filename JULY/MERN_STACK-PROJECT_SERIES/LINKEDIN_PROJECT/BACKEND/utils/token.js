import jwt from "jsonwebtoken"

const gentoken = (id)=>{
   const token= jwt.sign({id},process.env.JWT_SECRETKEY,{
        expiresIn:"20m"
    })
    return token;
}

export default gentoken