import fs from "fs"
import {dirname,resolve} from "path"
import { fileURLToPath } from 'url';

const __dirname = resolve(dirname(fileURLToPath(import.meta.url)),'../')

const readJSON = (pathFromHome) => {
    const readPath = resolve(__dirname,pathFromHome)
    let data = fs.readFileSync(readPath).toString()
    return JSON.parse(data)
}

const readString = (pathFromHome) => {
    const readPath = resolve(__dirname,pathFromHome)
    let data = fs.readFileSync(readPath).toString()
    return data
}

export {readJSON,readString}