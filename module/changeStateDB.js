export default async function changeStateDB(app,state,varState,mongoConnector){
    try {
        let collection = await mongoConnector.db('SmartHome').collection('devices')
        if(state != undefined || state!=null){
            let resp = await collection.updateOne({app:app},{$set:{state:state}})
        }
        if(varState){
            let resp = await collection.updateOne({app:app},{$set:{varState:varState}})
        }
        return true
    } catch(error) {
        next(error)
    }
    
}