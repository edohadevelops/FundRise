import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Donation extends Model {

}

Donation.init(
    {
        donation_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        backer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id'
            }
        },
        campaign_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Campaign',
                key: 'campaign_id'
            }
        },
        // owner_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'User',
        //         key: 'user_id'
        //     }
        // },
        donation_message: DataTypes.STRING,
        donation_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        donation_status: {
            type: DataTypes.ENUM('pending','success','failed'),
            defaultValue: "pending"   
        },
        donation_information: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        donation_type: {
            type: DataTypes.ENUM("One off","Monthly recurring"),
            allowNull: false
        }
        
    },
    {
        sequelize,
        modelName: 'Donation'
    }
)
export default Donation;