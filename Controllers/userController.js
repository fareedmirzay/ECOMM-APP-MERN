import userModel from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import validator from "validator";



const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}



//Route for user login
const loginUser = async (req,res) => {
    try {

        const {email,password} = req.body;

        const user = await userModel.findOne({email})

        //checking if user already exits
        if (!user) {
            return res.json({success:false, message:"User doesnt exits"})
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({sucess:true,token})
        }
        else {
            res.json({success:false, message: "Invalid credentails"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }
};



//Route for user register
const registerUser = async (req,res) => {
    try {

        const { name, email, password } = req.body;
        //checking of the user already exits
        const exits = await userModel.findOne({email});
        if (exits) {
            return res.json({success:false, message:"User already exits"})
        }
        //validaing email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please enter a valid email"})
        }

        if (password.length < 10) {
            return res.json({success:false, message:"Please enter a strong password"})
        }

        ///hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({sucess:true,token})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:error.message})
    }
}


//Route for admin login
const adminLogin = async (req,res) => {
}

export { loginUser,registerUser,adminLogin }