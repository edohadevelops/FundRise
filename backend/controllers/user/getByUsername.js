import { col, fn } from "sequelize";
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
                }
            ],
            attributes: {
                include: [
                    [fn('COUNT',fn('DISTINCT',col('Campaigns.campaign_id'))),'totalCampaigns'],
                    [fn('COUNT',fn('DISTINCT',col('Donations.donation_id'))),'totalDonations']
                ]
            }
        }
    )
    .then((user)=>{
        const userData = user.toJSON();

        if(!userData.user_id)
            return res.status(404).send({message: "User does not exist"})

        return res.status(200).send({message: "User gotten successfully",userDetails: userData})
    })
    .catch((err)=>{
        req.error = err;
        return next()
    })
}