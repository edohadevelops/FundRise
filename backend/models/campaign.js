import { Model,DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.js';
class Campaign extends Model {


}

Campaign.init(
    {
        campaign_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id'
            }
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        target_amount: DataTypes.INTEGER,
        current_amount: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: 'Campaign'
    }
);


export default Campaign;