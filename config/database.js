import { Sequelize } from "sequelize";

const db = new Sequelize('wicara','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default db;