import { col, fn, literal, where } from "sequelize";
import models from "../../../services/db/association.js";


export default (req,res,next) => {

    const follower_id = req.user.payload.user_id

    models.Campaign.findAll(
        {
            include: [
                {
                    model: models.User,
                    attributes: ["user_id","username","first_name","last_name"],
                    include: [
                        {
                            model: models.Follower,
                            as: 'Leader',
                            where: {
                                follower_id
                            },
                            required: true
                        },
                    ],
                    required: true
                },
                {
                    model: models.Category,
                    attributes: ['category_name']
                },
                {
                    model: models.Like,
                    where: {
                        // user_id,
                        like_status: true
                    },
                    required: false
                },
                {
                    model: models.Donation,
                    attributes: [],
                    where: {
                        donation_status: "success"
                    },
                    required: false
                }
            ],
            attributes: {
                include: [
                    [fn('COUNT',fn('DISTINCT',col('Likes.like_id'))),'totalLikes'],
                    [fn('COUNT',fn('DISTINCT',col('Donations.backer_id'))),'totalDonators'],
                    [
                        literal(`
                            MAX(CASE WHEN Likes.user_ID = ${follower_id} THEN 1 ELSE NULL END)
                        `),
                        'hasUserLiked'
                    ]
                ]
            },
            order: [['createdAt','DESC']],
            group: ['Campaign.campaign_id','Category.id','User.user_id']
        }
    )
    .then((data)=>{
        const myFollowingCampaigns = data.map(user=>user.toJSON());


        res.status(200).send({message: "Following campaigns: ",myFollowingCampaigns})
    })
    .catch((err)=>{
        req.error = err;
        next();
    })
}