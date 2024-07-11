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
        // backer_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Users',
        //         key: 'user_id'
        //     }
        // },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id'
            }
        },
        message: DataTypes.STRING,
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
    },
    {
        sequelize,
        modelName: 'Donation'
    }
)
export default Donation;