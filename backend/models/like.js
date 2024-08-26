import { Model,DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Like extends Model {

}

Like.init(
    {
        like_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        like_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'User',
        //         key: 'user_id'
        //     }
        // },
        // campaign_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Campaign',
        //         key: 'campaign_id'
        //     }
        // }
    },
    {
        sequelize,
        modelName: 'Like'
    }
);

export default Like
