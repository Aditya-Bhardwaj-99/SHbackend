export default async function changeStateDB(app,state,mongoConnector){
    try {
        let collection = await mongoConnector.db('SmartHome').collection('devices')
        let resp = await collection.updateOne({app:app},{$set:{state:state}})
        return true
    } catch(error) {
        next(error)
    }
    
}