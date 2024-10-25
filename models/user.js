import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartDate: {
        type: Object,
        default: {}
    }
},{minimize:false})


//if product model is available then it will be used other it will create a new product schema
const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel

