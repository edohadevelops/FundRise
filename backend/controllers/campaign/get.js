import { Category } from "../../models/index.js";

export default (req,res,next) => {
    Category.findAll()
    .then((data)=>{
        // const categories = data.dataValues;
        console.log(data);

    })
    .catch((error)=>{
        req.error = error;
        console.log(error)
    })
    

}