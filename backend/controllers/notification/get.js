import { col } from "sequelize";
import { Notification, User } from "../../models/index.js";
import models from "../../services/db/association.js";


export default (req,res,next) => {
    const reciever_id = req.user.payload.user_id;

    Notification.findAll(
        {
            where: {
                reciever_id
            },
            include: [
                {
                    model: User,
                    attributes: ["username","user_id","profile_picture"],
                    as: "sender",
                    where: {
                        user_id: col('sender_id')
                    }
                }
            ]
        }
    )
    .then((data)=>{
        const notifications = data.map((notification)=>notification.toJSON())

        notifications.map((notification)=>{
            let entity;

            switch(notification.entity_type){
                case "Like":
                    models.Like.findByPk(notification.entity_id,{
                        attributes: [
                            "campaign_id"
                        ],
                        include: [
                            {
                                model: "Campaign",
                                as: "campaign",
                                attributes: ["title","campaign_img","campaign_id"]
                            }
                        ]
                    })
                    .then((data)=>{
                        entity = data.toJSON()
                    })
                    break;
                case "Donation":
                    models.Donation.findByPk(notification.entity_id,{
                        attributes: ["donation_amount","donation_message","campaign_id"],
                        include: [
                            {
                                model: "Campaign",
                                as: "campaign",
                                attributes: ["campaign_img","title","campaign_id"]
                            }
                        ]
                    })
                    .then((data)=>{
                        const jsonData = data.toJSON();
                        entity = jsonData;
                    })
                    break;
                default:
                    entity = {};
    
            }

            return {
                ...notification,
                entity
            }
        })

        console.log("Notifications gotten successfully");

        res.status(200).send({message: "Notifications gotten successfully",notifications})

    })
    .catch((err)=>{

        console.log("Error occured while trying to get notifications",err);
        req.error = err;
        next()

    })
}