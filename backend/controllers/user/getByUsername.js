import { col, fn, literal } from "sequelize";
import models from "../../services/db/association.js";

export default (req,res,next) => {

    const { username } = req.params;

    models.User.findOne(
        {
            where: { username },
            include: [
                {
                    model: models.Campaign,
                    attributes: [],
                    required: false
                },
                {
                    model: models.Donation,
                    attributes: [],
                    where: {
                        donation_status: true
                    },
                    required: false
                },
                {
                    model: models.Follower,
                    attributes: [],
                    // where: {
                    //     status: true,
                    // },
                    required: false
                }
            ],
            attributes: {
                include: [
                    [fn('COUNT',fn('DISTINCT',col('Campaigns.campaign_id'))),'totalCampaigns'],
                    [fn('COUNT',fn('DISTINCT',col('Donations.donation_id'))),'totalDonations'],
                    [
                        literal(`
                            (SELECT COUNT(*) 
                            FROM Followers AS F 
                            WHERE F.leader_id = User.user_id AND F.status = true
                        )`), 'totalFollowers'
                    ]
                ]
            },
            group: ['User.user_id']
        }
    )
    .then((user)=>{
        const userData = user.toJSON();

        // if(!userData.user_id)
        //     return res.status(404).send({message: "User does not exist"})

        return res.status(200).send({message: "User gotten successfully",userDetails: userData})
    })
    .catch((err)=>{
        console.log("The error when getting user details is: ",err)
        req.error = err;
        return next()
    })
}