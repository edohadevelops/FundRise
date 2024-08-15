import models from "../../services/db/association.js";

export default (req,res,next) => {
    const like_id = req.params.like_id;

    models.Like.destroy({
        where: {
            like_id
        }
    })
}