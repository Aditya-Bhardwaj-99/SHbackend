import changeStateDB from "../module/changeStateDB.js"
export default function changeState(mongoConnector,responder){
    return async (req,res,next)=>{
        try {
            let data = req.body
            console.log(data)
            let app = data.app
            let state = data.state
            let varState = data.varState
            let resp = changeStateDB(app,state,varState,mongoConnector,next)
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