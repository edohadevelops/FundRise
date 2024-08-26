import { col, fn } from "sequelize";
import models from "../../services/db/association.js";

export default (req,res,next) => {

    const { user_id } = req.user.payload;

    models.User.findByPk(
        user_id,
        {
        attributes: {
            exclude: ["password"],
            include: [
                [fn('COUNT',fn('DISTINCT',col('Campaigns.campaign_id'))),'totalCampaigns'],
                [fn('COUNT',fn('DISTINCT',col('Donations.donation_id'))),'totalDonations']
            ]
        },
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
        group: ['User.user_id']
    })
    .then((data)=>{
        const jsonData = data.toJSON();

        const payload = jsonData;

        console.log("Data gotten is: ",payload);

        return res.status(200).send({message: "Authorized user",initialData: payload})
    })
    .catch((err)=>{
        req.error = err;
        console.log(err)
        return next()
    })

    
}