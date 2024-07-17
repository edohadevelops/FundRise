import sequelize from "../../config/db.js";
import models from './association.js'
import { User,Category } from '../../models/index.js'

export const SyncDB = () => {
    sequelize.sync({})
    .then(()=>{
        console.log("Successfully synced");
        // User.update(
        //     {
        //         first_name: "Amen",
        //         last_name: "Edoha",
        //         bio: "I have a strong passion for helping small tech businesses react their desired potential",   
        //     },
        //     {
        //         where: {
        //             user_id: 1
        //         }
        //     }
        // )
    })
    // .then((data)=>{
    //     console.log("Data while updating",data)
    // })
    .catch((err)=>{
        console.log("Error syncing db",err)
    })
}