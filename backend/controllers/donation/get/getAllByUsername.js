import models from "../../../services/db/association.js";

export default (req,res,next) => {
    const { username } = req.params;

    models.Donation.findAll(
        {
            include: [
                {
                    model: models.User,
                    where: {
                        username
                    },
                    attributes: []
                },
                {
                    model: models.Campaign,
                    attributes: ["campaign_img","campaign_id"]
                }
            ],
            where: {
                donation_status: "success"
            },
            attributes: []
        }
    )
    // models.Campaign.findAll(
    //     {
    //         // where: {
    //         //     donation_status: "success"
    //         // },
    //         include: [
    //             {
    //                 model: models.User,
    //                 where: {
    //                     username
    //                 },
    //                 attributes: [],
    //                 required: true
    //             },
    //             {
    //                 model: models.Donation,
    //                 where: {
    //                     donation_status: "success"
    //                 },
    //                 required: true,
    //                 attributes: [],
    //                 // limit: 1
    //             }
    //         ],
    //         // attributes: ["campaign_img","campaign_id"],
    //         order: [["updatedAt","DESC"]]
    //     }
    // )
    .then((data)=>{
        if(!data)
            return res.status(400).send({message: "Unable to find donations for this user"})
        const donations = data.map((donation)=>donation.toJSON());

        res.status(200).send({message: "Donation gotten successfully",donations})
    })
    .catch((err)=>{
        console.log("Error occurred while getting donations",err);

        req.error = err;
        next();
    })
    
}