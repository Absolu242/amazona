import express from 'express'
import User from '../models/userModel';

const router = express.Router();

router.get("/api/users/createadmin"), async (req,res) => {
    try{
        const user = new User ({
            name : "Absolu",
            email: "absolu01leibniz@gmail.com",
            password:"12345678",
            isAdmin:true
        })
        const newUser = await user.save();
        res.send(newUser);
    }catch(error){
        res.semd({msg:error.message});
    }
}