// import { Like } from "../../models";
import models from "../../services/db/association.js";
import CreateNotification from "../../services/notification/notify.js";

export default async(req,res,next) => {
    const { user_id } = req.user.payload
    const campaign_id = req.params.campaign_id;
    const {reciever_id} = req.body

    try{
        const existingLike = await models.Like.findOne(
            {
                where: {
                    user_id,
                    campaign_id
                }
            }
        )

        if(existingLike){
            const updatedLike = await existingLike.update({
                like_status: !existingLike.like_status
            })
            console.log("Like updated");
            if(existingLike.like_status && reciever_id !== user_id){
                const details = {
                    sender_id: user_id,
                    reciever_id,
                    entity_type: "Like",
                    entity_id: existingLike.like_id
                }
                const notification = CreateNotification(details);
                if(notification.error){
                    return res.status(400).send({message: "Something went wrong to send notification",error: notification.error})
                }

                console.log("The notification is: ",notification)
            }
            return res.status(200).send({message: "Like updated successfully"})
        }else{
            const newLike = await models.Like.create({
                user_id,
                campaign_id
            })

            const jsonLike = await newLike.toJSON()

            console.log("Json like is: ",jsonLike)

            if(reciever_id !== user_id){
                const details = {
                    sender_id: user_id,
                    reciever_id,
                    entity_type: "Like",
                    entity_id: jsonLike.like_id
                }
                const notification = CreateNotification(details);
                if(notification.error){
                    return res.status(400).send({message: "Something went wrong to send notification",error: notification.error})
                }
            }
            console.log("Like created successfully")
            return res.status(200).send({message: "Like created successfully"})
        }

    }catch(err){
        console.log("Error occurred in creating or updating like",err)
        req.error = err;
        next()
    }


    // models.Like.findOne(
    //     {
    //         where: {
    //             user_id,
    //             campaign_id
    //         }
    //     }
    // )
    // .then(like => {
    //     if(like){
    //         return like.update({
    //             like_status: !like.like_status
    //         })
    //     }
    //     else{
    //         return models.Like.create({
    //             user_id,
    //             campaign_id
    //         })
    //     }
    // })
    // .then(data => {
    //     console.log("Like updated");
    //     return res.status(200).send({message: "Like has been updated"})
    // })
    // .catch(err => {
    //     console.log("Error occured finding or updating a like",err);
    //     req.error = err;
    //     next();
    // })

    // models.Like.create(
    //     payload
    // )
    // .then((data)=>{
    //     console.log("Like created successfully");
    //     return res.status(200).send({message: "Like created successfully",like: data.toJSON()})
    // })
    // .catch((error)=>{
    //     req.error = error;
    //     next()
    // })
}