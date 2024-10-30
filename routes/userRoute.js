import express from 'express'
import { loginUser,registerUser,adminLogin,listUsers,getUser,updateUser,deleteUser } from '../Controllers/userController.js'


const userRouter = express.Router();

userRouter.post('/register', registerUser) // Route to register users
userRouter.post('/login', loginUser) //Route to create login for users
userRouter.post('/admin',adminLogin)// Route to create admin login
userRouter.get('/list', listUsers); // Route to list all users
userRouter.post('/get', getUser); // Route to get a single user
userRouter.post('/update', updateUser); // Route to update user
userRouter.post('/delete', deleteUser); // Route to delete user


export default userRouter;

