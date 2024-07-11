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
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        campaign_img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        target_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        current_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'Campaign'
    }
);


export default Campaign;