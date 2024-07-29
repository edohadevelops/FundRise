import models from "../../services/db/association.js";

export default (req,res,next) => {

    const campaign_id = req.params.campaign_id

    models.Campaign.findByPk(campaign_id,{
        include: [
            {
                model: models.User,
                attribute: ["username","user_id","first_name","last_name"]
            },
            {
                model: models.Category,
                attributes: ["category_name"]
            }
        ]
    })
    .then((data)=>{
        const jsonData = data.toJSON()
        console.log(jsonData);
        return res.status(200).send({message: "Campaign gotten successfully",campaign: jsonData})
    })
    .catch((err)=>{
        console.log("error occured while getting campaign",err)
        req.error = err;
        next()
    })
}