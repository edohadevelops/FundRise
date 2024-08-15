// import { Like } from "../../models";
import models from "../../services/db/association.js";

export default (req,res,next) => {
    const { user_id } = req.user.payload
    const campaign_id = req.params.campaign_id;


    models.Like.findOne(
        {
            where: {
                user_id,
                campaign_id
            }
        }
    )
    .then(like => {
        if(like){
            return like.update({
                like_status: !like.like_status
            })
        }
        else{
            return models.Like.create({
                user_id,
                campaign_id
            })
        }
    })
    .then(data => {
        console.log("Like updated");
        return res.status(200).send({message: "Like has been updated"})
    })
    .catch(err => {
        console.lof("Error occured finding or updating a like",err);
        req.error = error;
        next();
    })

    // models.Like.create(
    //     payload
    // )
    // .then((data)=>{
    //     console.log("Like created successfully");
    //     return res.status(200).send({message: "Like created successfully",like: data.toJSON()})
    // })
    // .catch((error)=>{
    //     req.error = error;
    //     next()
    // })
}