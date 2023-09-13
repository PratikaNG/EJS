import express from "express"
import bodyParser from "body-parser"


const app = express()
const port  =  3000

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index2.ejs")
    
})

app.post("/submit",(req,res)=>{
    const numOfLetters = req.body["firstname"].length + req.body["lastname"].length
    res.render("index2.ejs",{numLetters:numOfLetters})
    console.log(numOfLetters)
})

app.listen(port,()=>{
    console.log(`server is listening to port: ${port}`)
})