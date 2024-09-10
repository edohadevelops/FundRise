import { col, fn, literal } from "sequelize"
import models from "../../services/db/association.js"

export default (req,res,next) => {

    const {user_id} = req.user.payload

    // consoel.log("User id is: ",user_id)


    models.Campaign.findAll({
        include: [
            {
                model: models.Category,
                attributes: ['category_name']
            },
            {
                model: models.User,
                attributes: ['username','user_id','first_name','last_name']
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
                        MAX(CASE WHEN Likes.user_ID = ${user_id} THEN 1 ELSE NULL END)
                    `),
                    'hasUserLiked'
                ]
            ]
        },
        order: [['updatedAt','DESC']],
        group: ['Campaign.campaign_id','Category.id','User.user_id']
    })
    .then((data)=>{
        const likedCampaigns = data.map((campaign)=>campaign.toJSON())
        console.log("Liked campaigns gotten")
        return res.status(200).send({likedCampaigns})
    })
    .catch((err)=>{
        console.log("Error occurred while getting liked campaign",err)
        req.error = err;
        return next()
    })


}