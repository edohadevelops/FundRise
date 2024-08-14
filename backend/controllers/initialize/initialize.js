import models from "../../services/db/association.js";

export default (req,res,next) => {

    const { user_id } = req.user.payload;

    models.User.findByPk(
        user_id,{
        attributes: {
            exclude: ["password"]
        }
    })
    .then((data)=>{
        const jsonData = data.toJSON();

        const payload = jsonData;

        console.log("Data gotten is: ",payload);

        return res.status(200).send({message: "Authorized user",initialData: payload})
    })
    .catch((err)=>{
        req.error = err;
        return next()
    })

    
}