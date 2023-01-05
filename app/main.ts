import express from "express"
import path from "path"

const app : express.Application = express()
app.use(express.static(path.join(__dirname,"/dist")))
const PORT : string | undefined = process.env.PORT
if(PORT){
    const ADDRESS : string = `0.0.0.0:${PORT}`
    console.log(`app started listening at ${ADDRESS}`)
    app.listen(PORT)
}else{
    console.log("no port was given")
}