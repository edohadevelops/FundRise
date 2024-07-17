import { Campaign } from "../../models/index.js";
import joi from 'joi'

const validate = (data) => {
    const schema = joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        target_amount: joi.number().required(),
        current_amount: joi.number().required(),
        beneficiary_type: joi.string().required(),
        fundraising_target: joi.string().required(),
        start_date: joi.date().required(),
        end_date: joi.date().required(),
        campaign_img: joi.string().required() 
        // campaign_img: joi.object({
        //     mimetype:
        // })
    })
    return schema.validate(data)
}

export default (req,res,next) => {
    const payload = {...req.body,campaign_img: req.file};
    console.log(payload)

    const { error } = validate(payload);

    if(error)
        return res.status(400).send({message: "Bad request", error: error.details[0]});
    Campaign.create(payload)
    .then((data)=>{
        console.log("Campaign created successfully");
        const campaign = data.toJSON();
        return res.status(200).send({message: "Campaign created successfully", campaign })
    })
    .catch((error)=>{
        console.log("Error creating campaign: ",error);
        return next()
    })

}