import { MongoClient, ServerApiVersion } from "mongodb"

const ConnectMongo = async () => {
    const uri = "mongodb+srv://aladsss:lpacafcs@unogame.oxplv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    return await client.connect()
}

export {ConnectMongo}