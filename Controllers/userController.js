import userModel from "../models/user";
import validator from "validator";

imp
//Route for user login
const loginUser = async (req,res) => {
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
        //validating email formaat & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Pleasd enter an valid email"})
        }

        if (password.lenght < 8) {
            return res.json({success:false, message:"Pleasd enter an strong password"})
        }
        


        
    } catch (error) {
        
    }
}


// const registerUser = async (req,res) => {
//     try {

//         const { name, email, password } = req.body;

//         //checking of the user already exits

//         const exits = await userModel.findOne({email});
//         if (exits) {
//             return res.json({success:false, message:"User already exits"})
//         }
//     } catch (e)

// }

//Route for admin login
const adminLogin = async (req,res) => {
}


export { loginUser,registerUser,adminLogin }