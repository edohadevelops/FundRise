import { Category } from "../../models/index.js";

export default (req,res) => {
    Category.findAll()
    .then((data)=>{
        const categories = data.map((instance)=>instance.toJSON());
        return res.status(200).send({message: "Categories gotten successfully",categories})
    })
    .catch((error)=>{
        req.error = error;
        next();
    })
}