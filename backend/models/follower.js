import { Model,DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Follower extends Model {

}

Follower.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        follower_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id'
            }
        },
        leader_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize,
        modelName: 'Follower'
    }
);

export default Follower
