import { Sequelize } from "sequelize";

const db = new Sequelize('wicara_db','root','password',{
    host: "34.101.150.123",
    dialect: "mysql"
})

export default db;
