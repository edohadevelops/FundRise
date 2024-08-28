import { Model,DataTypes, Sequelize } from 'sequelize';
import sequelize from "../config/db.js";

class Notification extends Model {

}

Notification.init(
    {
        notification_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reciever_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        entity_type: {
            type: DataTypes.ENUM('Follow','Like','Donation'),
            allowNull: false
        },
        entity_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'Notification'
    }
)

export default Notification