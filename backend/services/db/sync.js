import sequelize from "../../config/db.js";
import models from './association.js'

export const SyncDB = () => {
    sequelize.sync({}).then(()=>{
        console.log("Successfully synced")
    }).catch((err)=>{
        console.log("Error syncing db",err)
    })
}