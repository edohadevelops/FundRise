import { Sequelize,DataTypes } from 'sequelize';


// const sequelize = new Sequelize('fundrise','root','',{
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('sql7740398','sql7740398','hMWVcvzF9y',{
  host: 'sql7.freesqldatabase.com',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    connectTimeout: 10000, // Timeout after 10 seconds
  },
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
