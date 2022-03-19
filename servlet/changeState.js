import changeStateDB from "../module/changeStateDB.js"
export default function changeState(mongoConnector,responder){
    return async (req,res,next)=>{
        try {
            let data = req.body
            let app = data.app
            let state = data.state
            let resp = changeStateDB(app,state,mongoConnector,next)
            if(resp){
                responder(res,{state:state})
            } else {
                next("CHANGE_FAILED")
            }
        } catch (error) {
            next(error)
        }
    }
}