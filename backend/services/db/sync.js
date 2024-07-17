import sequelize from "../../config/db.js";
import models from './association.js'
import { User,Category } from '../../models/index.js'

export const SyncDB = () => {
    sequelize.sync({alter: true})
    .then(()=>{
        console.log("Successfully synced");
        Category.bulkCreate([
            {
                category_name: "Medical"
            },
            {
                category_name: "Education"
            },
            {
                category_name: "Business"
            },
            {
                category_name: "Sports"
            },
            {
                category_name: "Others"
            }
        ])

    })
    .then((data)=>{
        console.log("Data while updating",data)
    })
    .catch((err)=>{
        console.log("Error syncing db",err)
    })
}