import userAuthentication from "../module/userAuthentication.js"
import {signToken} from '../lib/JWT.js'

export default function login (mongoConnector,responder) {
    return async (req,res,next)=>{
        let data = req.body
        let user = data.user
        let password = data.password
        let resp = await userAuthentication(user,password,mongoConnector,next)
        if(resp){
            try {
                let token = await signToken(user)
                responder(res,{jwt:token})
            } catch (error) {
                next(error)
            }
        } else{
            next(new Error("NO_USER_FOUND"))
        }
    }
}