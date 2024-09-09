import { col, literal } from "sequelize";
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
                ],
                attributes: {
                    include: [
                        [literal(`
                            CASE 
                            WHEN DATE(Notification.createdAt) = CURDATE() THEN 'Today'
                            WHEN DATE(Notification.createdAt) = DATE_SUB(CURDATE(), INTERVAL 1 DAY) THEN 'Yesterday'
                            WHEN Notification.createdAt >= DATE_SUB(CURDATE(), INTERVAL (WEEKDAY(CURDATE()) + 7) DAY)
                                AND Notification.createdAt < CURDATE() THEN 'Last Week'
                            ELSE 'Earlier'
                            END
                        `),`notification_date`]
                    ]
                },
                group: ["notification_date"]
            }
        )

        const jsonNotifications = notificationsList.map((notification)=>notification.toJSON());

        const todayNotifications = [];
        const yesterdayNotifications = [];
        const lastWeekNotifications = [];
        const earlierNotifications = [];


        await Promise.all(jsonNotifications.map(async(notification)=>{
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

                entity = likeDetails
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
                entity = donationDetails
            }
            else if(notification.entity_type === "Follow"){
                const followerDetails = await models.Follower.findOne({
                    attributes: [
                        [literal(`
                            MAX(CASE WHEN Follower.leader_id = ${notification.sender_id} AND Follower.follower_id = ${notification.reciever_id} AND Follower.status = ${true} THEN 1 ELSE 0 END)
                        `),'isUserFollowed']
                    ],
                    where: {
                        leader_id: notification.sender_id,
                        follower_id: notification.reciever_id
                    }
                })

                entity = followerDetails
            }

            if(notification.notification_date === "Today"){
                todayNotifications.push(
                    {
                        ...notification,
                        entity
                    }
                )
            }else if(notification.notification_date === "Yesterday"){
                yesterdayNotifications.push({
                    ...notification,
                    entity
                })
            }
            else if(notification.notification_date === "Last Week"){
                lastWeekNotifications.push(
                    {...notification,entity}
                )
            }
            else{
                earlierNotifications.push({...notification,entity})
            }
        }))
        const myNotifications = {
            todayNotifications,
            yesterdayNotifications,
            lastWeekNotifications,
            earlierNotifications
        }

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