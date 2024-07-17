import sequelize from "../config/db.js";
import { Model, DataTypes } from "sequelize";

class Category extends Model{

}

Category.init(
    {
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        modelName: 'Category',
        sequelize,
        timestamps: false
    }
);

export default Category