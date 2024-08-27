import models from "../db/association.js"

const updateCampaign = (id,amount) => {

    const actual_amount = amount / 100

    models.Campaign.update(
        {
            current_amount: actual_amount,
        },
        {
            where: {
                campaign_id: id,
            }
        }
    )
    .then((data)=>{
        console.log("Campaign amount updated successfully")
    })
    .catch((err)=>{
        console.log("Error occured while trying to update campaign",err)
    })

}

export default updateCampaign