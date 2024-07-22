import { Campaign } from "../../models/index.js";
import models from "../../services/db/association.js";

export default (req,res,next) => {
    Campaign.findAll({
        include: [
            {
                model: models.Category,
                attributes: ['category_name']
            },
            {
                model: models.User,
                attributes: ['username','user_id']
            }
        ],
        order: [['createdAt','DESC']]
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