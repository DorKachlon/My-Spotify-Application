require("dotenv").config(); // this is important!
module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_DEV,
        host: process.env.DB_HOST,
        dialect: "mysql",
        define: { underscored: true },
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_TEST,
        host: "127.0.0.1",
        dialect: "mysql",
        define: { underscored: true },
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};