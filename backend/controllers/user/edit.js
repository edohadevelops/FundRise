import models from "../../services/db/association.js";
import joi from 'joi'


const validate = (data) => {

    const schema = joi.object(
        {
            username: joi.string(),
            email: joi.string().email(),
            first_name: joi.string(),
            last_name: joi.string(),
            bio: joi.string(),
            profile_picture: joi.string()
        }
    )

    return schema.validate(data)

}

export default (req,res,next) => {
    const {user_id} = req.user.payload;

    const filename = req.file?.filename;
    console.log("File name is: ",filename)



    const payload = {
        ...req.body,
        profile_picture: filename
    };

    const { error } = validate(filename ? payload : req.body)

    if(error)
        return res.status(400).send({message: error.details[0].message})
    
    models.User.update(
        payload,
        {
            where: {
                user_id
            }
        }
    )
    .then((data)=>{
        console.log("User updated successfully with profile photo");
        return res.status(200).send({message: "User updated successfully!"})
    })
    .catch((err)=>{
        console.log("Error occurred while updating user with photo: ",err);
        req.error = err;
        next();
    })
}

// export const updateWithoutProfilePicture = (req,res,next) => {

//     const {profile_picture} = req.body;

//     if(profile_picture)
//         return next()

//     const { user_id } = req.user.payload;

//     const payload = req.body;

//     const { error } = validate(payload);

//     if(error)
//         return res.status(400).send({message: error.details[0].message})

//     models.User.update(payload,{
//         where: {
//             user_id
//         }
//     })
//     .then((data)=>{
//         console.log("User edited without profile photo");
//         return res.status(200).send({message: "User edited without profile photo successfully"})
//     })
//     .catch((err)=>{
//         console.log("Error occured while attempting to edit user without profile photo",err)
//         return res.status(500).send({message: "Interna,#l server error", error: err})
//     })


// }