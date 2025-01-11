import { User } from "../../models/index.js";
import Joi from "joi";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { Op } from "sequelize";

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(7).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(25)
    });
    return schema.validate(data)
}

export const registerController = async(req,res,next) => {
    try{
        // console.log("Register controller reached:")
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});
        const alreadyExists = await User.findOne({
            where: {
                [Op.or]:{
                    "username": req.body.username,
                    "email": req.body.email
                }
            }
        })
        // console.log("The output of already exists is: ",alreadyExists)
        if(alreadyExists){
            // console.log("User already exists", alreadyExists)
            return res.status(400).send({message: "User already exists with this username or password"})
        }
            

        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        // console.log("New user is: ",newUser)

        const {password,...userPayload} = newUser.toJSON();

        const token = jwt.sign(
            {
                payload: userPayload
            },
            process.env.JWT_SECRET,
            {expiresIn: '2d'});

        

        return res.status(200).send({message: "Sign up successful",payload: userPayload,token})

    }catch(err){
        return next();
        // if(err.name === 'SequelizationValidationError')
        //     return res.status(402).send({message: 'Error creating user',err})
        // return res.status(500).send({message: 'Internal Server Error',error: err})
    }
}