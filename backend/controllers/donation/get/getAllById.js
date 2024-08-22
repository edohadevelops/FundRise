import { col, fn, literal } from 'sequelize';
import models from '../../../services/db/association.js';

export default (req,res,next) => {
    const { user_id } = req.params;

    models.Donation.findAll(
        {
            where: {
                // donation_status: "success",
                backer_id: user_id
            },
            include: [
                {
                    model: models.Campaign,
                    include: [
                        {
                            model: models.Like,
                            attributes: [],
                            where: {
                                like_status: true
                            },
                            required: false
                        },
                        {
                            model: models.Category,
                            attributes: ["category_name"]
                        },
                        {
                            model: models.Donation,
                            where: {
                                donation_status: true
                            },
                            attributes: []
                        },
                        {
                            model: models.User,
                            attributes: ['username']
                        }
                    ],
                    attributes: {
                        include: [
                            [fn('COUNT',fn('DISTINCT',col('Campaign->Donations.backer_id'))),'totalDonators'],
                            [fn('COUNT',fn('DISTINCT',col('Campaign->Likes.like_id'))),'totalLikes'],
                            [
                                literal(`
                                    MAX(CASE WHEN \`Campaign->Likes\`.\`user_id\` = ${user_id} THEN 1 ELSE NULL END)
                                `),'hasUserLiked'
                            ],
                            // 'title','campaign_img','current_amount','target_amount'
                        ]
                    },
                    group: ['Donation.donation_id']
                }
            ],
            attributes: ['donation_message','donation_amount','donation_status'],
            order: [["updatedAt",'DESC']],
            group: ['Donation.donation_id','Campaign.campaign_id']
            
        }
    )
    .then((data)=>{
        if(!data)
            return res.status(404).send({message: "No donations found"})
        const donations = data.map((donation)=>donation.toJSON());

        return res.status(200).send({message: "Donations gotten successfully",donations})
    })
    .catch((err)=>{
        console.log("Error occurred while getting donations",err);
        req.error = err;
        next()
    })
}