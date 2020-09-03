const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Pizza=require('./model/pizza')

const mongoUrl="mongodb://localhost:27017/pizzaDB"
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")


mongoose.connect(mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err)
    console.log("Not connected");
    else
    console.log("Yes Connected");
})

app.get("/",(req,res)=>{
    Pizza.find().sort({createdAt:-1})
        .then((data)=>{
            res.render("index",{title:"Home", orders :data})
        })
        .catch((err)=>{
            console.log(err);
        })
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
})

app.get("/orders",(req,res)=>{
    res.render("order",{title:"About"})
})

app.post("/orders",(req,res)=>{
    const pizza =new Pizza(req.body)

    pizza.save()
        .then(()=>{
            res.redirect("/")
            console.log("Succesfully placed order");
        })
        .catch(()=>{
            console.log("Error placing order, Try again!");
        })
})

app.use((req,res)=>{
    res.render("404",{title:Error})
})


app.listen(2020,()=>console.log("Server running on 2020"))