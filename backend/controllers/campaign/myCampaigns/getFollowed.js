import { where } from "sequelize";
import models from "../../../services/db/association.js";


export default (req,res,next) => {

    const follower_id = req.user.payload.user_id

    models.Campaign.findAll(
        {
            include: [
                {
                    model: models.User,
                    attributes: ["user_id"],
                    include: [
                        {
                            model: models.Follower,
                            as: 'Leader',
                            where: {
                                follower_id
                            },
                            required: true
                        }
                    ],
                    required: true
                }
            ]
        }
    )
    .then((data)=>{
        const myFollowers = data.map(user=>user.toJSON());


        res.status(200).send({message: "Following campaigns: ",myFollowers})
    })
    .catch((err)=>{
        console.log("Error occurred in getting following campiagns sha: ",err)
    })
}