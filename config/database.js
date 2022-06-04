import { Sequelize } from "sequelize";

const db = new Sequelize('wicara','root','password',{
    host: "34.101.156.203",
    dialect: "mysql"
})

export default db;
