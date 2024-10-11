import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "SEU USER",
    password: "SUA SENHA",
    database: "SEU BD"
})