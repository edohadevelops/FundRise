import models from "../../services/db/association.js";

export default (req,res,next) => {
    const follower_id = req.user.payload.user_id;
    const { leader_id } = req.params;

    if(follower_id === leader_id)
        return res.status(400).send({message: "User cannot follow himself"})

    models.Follower.findOne(
        {
            where: {
                follower_id,
                leader_id
            }
        }
    )
    .then((follower) => {
        if(follower){
            follower.update({
                status: !follower.status
            })
            return res.status(200).send({message: "Follower updated successfully"})
        }else{
            models.Follower.create(
                {
                    leader_id,
                    follower_id
                }
            )
            return res.status(200).send({message: "Follower created successfully"})
        }
    })
    .catch((err)=>{
        console.log("The error occured while trying to follow a user is: ",err)
        req.err = err;
        next()
    })

}