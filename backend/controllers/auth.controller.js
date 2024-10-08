import User from "../models/user.model.js";
import bcriptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) =>{
    try{
        const {fullName, username, password, confirmPassword, gender}= req.body
        if (password !== confirmPassword){
            return res.status(400).json({error: "Passwords don't match"})
        }
        const user = await User.findOne({username})
        if (user){
            return res.status(400).json({error: "User name already exists"})
        }
        //HASH PASSWORD
        const salt = await bcriptjs.genSalt(10)
        const hashedPassword = await bcriptjs.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const helicopterProfilePic = `https://avatars.mds.yandex.net/i?id=691f274a99dc82c65f0a0864ebfef7445c9a8538-12738984-images-thumbs&n=13`

        function checkGender(){
            if (gender === "male"){
                return boyProfilePic
            }
            else  if (gender === "female"){
                return girlProfilePic
            }
            else if (gender === "helicopter"){
                return helicopterProfilePic
            }
        }

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic:checkGender()
        })

        if (newUser){
        //Generate JWT
        generateTokenAndSetCookie(newUser._id, res)

        await newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        })
        }else {
            res.status(400).json({error:"Invalid user data"})
        }
    }catch (error){
        console.log("Error is signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }

}
export const login = async (req, res) =>{
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcriptjs.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }
        generateTokenAndSetCookie(user._id, res)
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })

    }catch (error){
        console.log("Error is login controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const logout =  (req, res) =>{
    try{
        res.cookie("jwt","",{maxAge: 0})
        res.status(200).json({message:"Logged out successfully"})

    }catch (error){
        console.log("Error is logout controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}


