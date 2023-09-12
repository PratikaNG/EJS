import express from "express";
const app = express()
const port = 3000



// app.get("/",(req,res)=>{

//     const today = new Date("September 16,2023")
//     const day = today.getDay()
//     let type = "a weekday"
//     let adv = "to work hard"

//     if (day === 0 || day === 6){
//         type = "the weekend"
//         adv = "for some fun"
//     }
// res.render("index.ejs",{dayType:type,advice:adv})
// })


app.get("/",(req,res)=>{
    const data = {
        title:"EJS Tags",
        seconds: new Date().getSeconds(),
        items:["apple","banana","cherry","mango"],
        htmlContent:"<em>this is some em text</em>"
    }
    res.render("index.ejs",data)
})


app.listen(port,()=>{
    console.log(`Server is listening to ${port}`)
})