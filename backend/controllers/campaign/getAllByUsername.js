import models from '../../services/db/association.js';

export default (req,res,next) => {

    console.log("Request was made")

    const { username } = req.params

    models.Campaign.findAll(
        {
            include: [
                {
                    model: models.User,
                    where: {
                        username
                    },
                    required: true,
                    attributes: []
                }
            ],
            attributes: ["campaign_img","campaign_id"],
            order: [
                ['createdAt','DESC']
            ],
            limit: 6
            
        }
    )
    .then((data)=>{
        if(!data)
            return res.status(404).send({message: "Camapigns for this user not found"})
        const campaigns =  data.map((campaign)=>campaign.toJSON());

        return res.status(200).send({message: "Campaigns found succesfully", campaigns})
    })
    .catch((err)=>{
        console.log("Error occured while making request: ",err);

        req.error = err;
        next()
    })
}