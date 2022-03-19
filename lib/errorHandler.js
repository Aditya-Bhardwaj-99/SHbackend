import { readJSON } from "../utils/readFile.js"
export default function errorHandler(){
    return (err,req,res,next) => {
        res.json({
            status: "failed",
            data:{
                code:500,
                description:"",
                message:err.message
            }
        }).status(400)
    }
}  