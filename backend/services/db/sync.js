import sequelize from "../../config/db.js";
import models from './association.js'
// import { User,Category } from '../../models/index.js'

export const SyncDB = () => {
    sequelize.sync({})
    .then(()=>{
        console.log("Successfully synced");
    })
    // .then((data)=>{
    //     console.log("Data while updating",data)
    // })
    .catch((err)=>{
        console.log("Error syncing db",err)
    })
}