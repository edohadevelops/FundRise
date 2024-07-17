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
            allowNull: false,
            get(){
                const filename = this.getDataValue('campaign_img');
                const url = `${process.env.CAMPAIGN_IMG_PATH}/${filename}`
                return url;
            }
        },
        target_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        current_amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        beneficiary_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fundraising_target: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'user_id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'Campaign'
    }
);


export default Campaign;