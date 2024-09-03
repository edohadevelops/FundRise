import { col } from "sequelize";
import { Notification } from "../../models/index.js";
import models from "../../services/db/association.js";


export default async(req,res,next) => {

    try{
        const reciever_id = req.user.payload.user_id;

        console.log("Reciever is: ",reciever_id)

        const notificationsList = await Notification.findAll(
            {
                where: {
                    reciever_id
                },
                include: [
                    {
                        model: models.User,
                        attributes: ["username","user_id","profile_picture"],
                        as: 'Sender',
                        required: true
                    }
                ]
            }
        )

        const jsonNotifications = notificationsList.map((notification)=>notification.toJSON())


        const myNotifications = await Promise.all(jsonNotifications.map(async(notification)=>{
            let entity;

            if(notification.entity_type === "Like"){
                const likeDetails = await models.Like.findByPk(notification.entity_id,{
                    attributes: [
                        "campaign_id"
                    ],
                    include: [
                        {
                            model: models.Campaign,
                            attributes: ["title","campaign_img","campaign_id"]
                        }
                    ]
                })

                return {
                    ...notification,
                    entity: likeDetails
                }
            }
            else if(notification.entity_type === "Donation"){
                const donationDetails = await models.Donation.findByPk(notification.entity_id,{
                    attributes: ["donation_amount","donation_message","campaign_id"],
                    include: [
                        {
                            model: models.Campaign,
                            attributes: ["campaign_img","title","campaign_id"]
                        }
                    ]
                })
                entity = donationDetails.toJSON()
                return {
                    ...notification,
                    entity
                }
            }

            return notification
        }))

        console.log("Notifications gotten successfully",myNotifications);
        

        res.status(200).send({message: "Notifications gotten successfully",myNotifications})


    }catch(err){
        console.log("Error occured while trying to get notifications",err);
        req.error = err;
        next()
    }

    // Notification.findAll(
    //     {
    //         where: {
    //             reciever_id
    //         },
    //         include: [
    //             {
    //                 model: models.User,
    //                 attributes: ["username","user_id","profile_picture"],
    //                 where: {
    //                     user_id: col('sender_id')
    //                 }
    //             }
    //         ]
    //     }
    // )
    // .then((data)=>{
    //     const notifications = data.map((notification)=>notification.toJSON())

    //     const myNotifications = notifications.map((notification)=>{
    //         let entity;

    //         switch(notification.entity_type){
    //             case "Like":
    //                 models.Like.findByPk(notification.entity_id,{
    //                     attributes: [
    //                         "campaign_id"
    //                     ],
    //                     // include: [
    //                     //     {
    //                     //         model: "Campaign",
    //                     //         attributes: ["title","campaign_img","campaign_id"]
    //                     //     }
    //                     // ]
    //                 })
    //                 .then((data)=>{
    //                     entity = data.toJSON();
    //                     console.log("Then enitity is: ",entity)
    //                 })
    //                 break;
    //             case "Donation":
    //                 models.Donation.findByPk(notification.entity_id,{
    //                     attributes: ["donation_amount","donation_message","campaign_id"],
    //                     include: [
    //                         {
    //                             model: "Campaign",
    //                             attributes: ["campaign_img","title","campaign_id"]
    //                         }
    //                     ]
    //                 })
    //                 .then((data)=>{
    //                     const jsonData = data.toJSON();
    //                     entity = jsonData;
    //                 })
    //                 break;
    //             default:
    //                 entity = {}; 
    //         }

    //         return {
    //             ...notification,
    //             entity
    //         }
    //     })

    //     console.log("Notifications gotten successfully");
        

    //     res.status(200).send({message: "Notifications gotten successfully",myNotifications})

    // })
    // .catch((err)=>{

    //     console.log("Error occured while trying to get notifications",err);
    //     req.error = err;
    //     next()

    // })
}