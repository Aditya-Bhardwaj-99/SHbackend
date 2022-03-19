export default function responder (res,data) {
    res.json({
        status: "success",
        data:data
    }).status(200)
}