import { User } from "../../models/index.js";
import Joi from "joi";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(7).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(25)
    });
    return schema.validate(data)
}

export const registerController = async(req,res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const token = jwt.sign(
            {
                id: newUser.user_id,
                role: newUser.role
            },
            process.env.JWT_SECRET,
            {expiresIn: '2d'});

        return res.status(200).send({message: "Sign up successful"})

    }catch(err){
        if(err.name === 'SequelizationValidationError')
            return res.status(402).send({message: 'Error creating user',err})
        return res.status(500).send({message: 'Internal Server Error',error: err})
    }
}