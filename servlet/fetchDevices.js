import fetchDevicesDB from "../module/fetchDevicesDB.js"

export default function fetchDevices(mongoConnector,responder){
    return async (req,res,next)=>{
        try{
            let resp = await fetchDevicesDB(mongoConnector,next)
            responder(res,resp)
        } catch(error){
            next(error)
        }
    }
}