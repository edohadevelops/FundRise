import { col, fn, literal, Op, where} from "sequelize";
import { Campaign } from "../../models/index.js";
import models from "../../services/db/association.js";

export default (req,res,next) => {

    const { user_id } = req.user.payload
    console.log("User object is: ",req.user)
 
    Campaign.findAll({
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
        order: [['createdAt','DESC']],
        group: ['Campaign.campaign_id','Category.id','User.user_id']
    })
    .then((data)=>{
        const jsonData = data.map((instance)=>instance.toJSON())
        console.log(data);
        return res.status(200).send({
            message: "Campaigns gotten successfully",
            campaigns: jsonData 
        })
    })
    .catch((error)=>{
        req.error = error;
        console.log(error)
        next();
    })
    

}