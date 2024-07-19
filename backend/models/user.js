import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import { hashedPassword } from '../services/auth/hash.js';

class User extends Model {

}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        bio: DataTypes.STRING,
        profile_picture: DataTypes.STRING,
        role: {
            type: DataTypes.ENUM('super-admin','admin','user'),
            defaultValue: 'user'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value){
                const password = hashedPassword(value);
                this.setDataValue('password',password)
            }
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export default User;
