export default async function userAuthentication (user,password,mongoConnector,next) {
    try {
        const collection = await mongoConnector.db("SmartHome").collection("userData")
        var result = await collection.find({user:user}).toArray()
        if(result[0]?.password === password){
            return true
        } else if(result[0]?.password !== password) {
            return false
        }
    } catch (error) {
        next(error)
    }
}