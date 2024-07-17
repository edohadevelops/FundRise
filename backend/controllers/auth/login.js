import { User } from "../../models/index.js";
import bcrypt from 'bcryptjs';
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';
import Joi from "joi";
import 'dotenv/config';

const validate = (data) => {
    const schema = Joi.object({
        user: Joi.string().min(7).required(),
        password: Joi.string().min(8).max(25).required()
    });
    return schema.validate(data)
}

const loginController = async(req,res,next) => {
    try{

        console.log(req.body)
        const {error} = validate(req.body);

        if(error)
            return res.status(400).send({message: error.details[0].message})
        
        const existingUser = await User.findOne({
            where: {
                [Op.or] : [
                    {username: req.body.user},
                    {email: req.body.user}
                ]
            }
        })

        if(!existingUser)
            return res.status(404).send({message: 'User does not exist'});

        const isValidPassword = await bcrypt.compare(req.body.password,existingUser.password);

        if(!isValidPassword)
            return res.status(400).send({message: 'Invalid username or password'});

        const {password,...userPayload} = existingUser.toJSON();
        const token = jwt.sign(
            { 
                payload: userPayload
            },
            process.env.JWT_SECRET,
            {expiresIn: '2d'}
        )
        return res.status(200).send({
            message: 'Logged in succesfully!',
            token,
            payload: userPayload
        });

    }catch(err){
        return next();
    }


}

export default loginController