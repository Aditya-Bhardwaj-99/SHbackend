import {verifyToken} from '../lib/JWT.js'

export default function jwtAuth(){
    return async (req,res,next)=>{
        try{
            let resp = await verifyToken(req.headers.token)
            if(resp){
                next()
                return
            } else {
                res.json({status:"Failed", desc:"access denied"}).status(403)
            }
        } catch(error) {
            res.json({status:"Failed", desc:"access denied"}).status(403)
        }
    }
}