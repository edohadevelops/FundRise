import sequelize from "../../config/db.js";
import models from './association.js'
import { User } from '../../models/index.js'

export const SyncDB = () => {
    sequelize.sync({}).then(()=>{
        console.log("Successfully synced")
        // User.update(
        //     {
        //       "first_name": "Amen",
        //       "last_name": "Edoha",
        //       "bio": "I have a passion for creating innovative solutions that solve world problems!",
        //     },
        //     {
        //       where: {
        //         "user_id": 2
        //       }
        //   })
        // })
        // .then((data)=>{
        //   console.log("Data while updating",data)
        // })
        })
        .catch((err)=>{
        console.log("Error syncing db",err)
    })
}