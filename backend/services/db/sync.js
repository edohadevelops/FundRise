import sequelize from "../../config/db.js";
import User from "../../models/user.js";
import Campaign from "../../models/campaign.js";

export const SyncDB = () => {
    sequelize.sync().then(()=>{
        console.log("Successfully synced")
    }).catch((err)=>{
        console.log("Error syncing db",err)
    })
}