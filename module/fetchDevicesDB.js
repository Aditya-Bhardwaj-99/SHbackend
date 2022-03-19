export default async function fetchDevicesDB(mongoConnector,next){
    try {
        let collection = await mongoConnector.db('SmartHome').collection('devices')
        let resp = await collection.find().toArray()
        return resp
    } catch(error) {
        next(error)
    }
    
}