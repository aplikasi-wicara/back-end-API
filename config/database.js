import { Sequelize } from "sequelize";

const db = new Sequelize('rahasia','root','',{
    host: "rahasia",
    dialect: "mysql"
})

export default db;
