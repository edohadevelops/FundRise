import models from '../../services/db/association.js';
import Joi from 'joi';

const validate = (data) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone_number: Joi.string().required(),
        profile_picture: Joi.string().required()
    })

    return schema.validate(data)

}

export default (req,res,next) => {

    const filename = req.file.filename

    const payload = {
        ...req.body,
        profile_picture: filename,
    };
    
    const user = req.user

    const {error} = validate(payload);

    if(error)
        return res.status(400).send({message: "Bad user input",error: error.details[0].message})

    models.User.update(
        payload,
        {
            where: {
                user_id: user.user_id
            }
        }
    )
    .then(()=>{
        console.log("Updated user successfully");
        res.status(200).send({message: "Onboarding process was successful"})
    })
    .catch((error)=>{
        req.error = error;
        next();
    })

    

}