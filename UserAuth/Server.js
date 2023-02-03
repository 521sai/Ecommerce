const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const users = []
app.use(express.urlencoded({extended:false}))

app.post("/Register", async(req, res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        console.log(users)
        res.redirect("/Login")
    } catch (e) {
        console.log(e)
        res.redirect("/Register")
    }
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/Login',(req,res)=>{
    res.render('Login.ejs')
})

app.get('/Register',(req,res)=>{
    res.render('Register.ejs')
})

app.listen(3000)