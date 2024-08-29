// import models from "../db/association.js";
import joi from 'joi'
import { Notification } from '../../models/index.js'

const validate = (data) => {

    const schema = joi.object({
        sender_id: joi.number().required(),
        reciever_id: joi.number().required(),
        entity_type: joi.string().required(),
        entity_id: joi.number().required(),
    })

    return schema.validate(data)
}

const CreateNotification = async(details) => {

    const { error } = validate(details);

    if(error)
        return {
            error: error.details[0].message
    }
    try{
        const notification = await Notification.create(details);

        const promise = await notification.toJSON()

        console.log("Notification created successfully", promise);

        return {
            notification: promise
        }
    }catch(err){
        console.log("Error occured when trying to create Notification: ",err)
        return {
            error: `An error occured trying to create the notification`
        }
    }




}

export default CreateNotification