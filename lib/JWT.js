import jsonwebtoken from "jsonwebtoken";

const Secret = 'aSecureSecret'

const signToken = async (user) => {
    return new Promise(resolve=>{
        resolve(jsonwebtoken.sign({
            user:user
          }, Secret, { expiresIn: 60 * 60 }))
    })
}

const verifyToken = async (token) => {
    return new Promise(resolve=>{
        resolve(jsonwebtoken.verify(token,Secret))
    }) 
}

export {signToken,verifyToken}