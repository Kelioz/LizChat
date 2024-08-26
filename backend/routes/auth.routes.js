import express from "express";

const router = express.Router()

router.get("/login", (req, res)=>{
    console.log("login")
    res.send("login route")
})
router.get("/signup", (req, res)=>{
    console.log("sign up")
    res.send("sign route")
})
router.get("/logout", (req, res)=>{
    console.log("logout")
    res.send("logout route")
})


export default router
