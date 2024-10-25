import mongoose, { Mongoose } from "mongoose";
// import BestSeller from "../../FRONT-End/online-store/src/components/BestSeller";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        typr: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    BestSeller: {
        type: Boolean,
    },
    startDate: {
        type: Date,
      },
    endDate: {
        type: Date,
    },
    createdAt: {
            type: Date,
            default: Date.now(),
    },
})

//if product model is available then it will be used other it will create a new product schema
const product = mongoose.models.product || mongoose.model("product", productSchema)
export default product

