const mysql = require("mysql");
require("dotenv").config();

const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "spotify",
    multipleStatements: true,
});

mysqlCon.connect(function (err) {
    if (err) {
        console.log(
            `try to connect ${process.env.USER} ${process.env.PASSWORD} and fail`
        );
        throw err;
    }
    console.log("Connected to DB!");
});

module.exports = mysqlCon;
