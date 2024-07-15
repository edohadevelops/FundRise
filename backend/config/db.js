import { Sequelize,DataTypes } from 'sequelize';


const sequelize = new Sequelize('fundrise','root','',{
  host: 'localhost',
  dialect: 'mysql'
});

export const connectToDB = () => {
  sequelize.authenticate()
  .then(()=>{
    console.log("Connection to the database successful, Happy coding");
  })
  .catch((err)=>{
    console.log("Error occurred while trying to connect to the database: ",err)
  })

}
export default sequelize