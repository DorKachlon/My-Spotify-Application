const mysqlCon = require("./connection");

function specificID(req, res, table, column) {
    let sql = `SELECT * FROM ${table} WHERE ${column} = ${req.params.id}`;
    mysqlCon.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Post fetched...");
        res.send(result);
    });
}

function postReq(req, res, table) {
    let sql = `INSERT INTO ${table} SET ?`;
    mysqlCon.query(sql, req.body, (err, result) => {
        if (err) {
            res.send(err.message);
            throw err;
        }
        res.send(result);
    });
}

function deleteReq(req, res, table) {
    mysqlCon.query(
        `DELETE FROM ${table} WHERE ${table}_id = ${req.params.id}`,
        (error, results) => {
            if (error) {
                res.send(err.message);
                throw error;
            }
            res.send(results);
        }
    );
}

function putReq(req, res, table) {
    let sql = `UPDATE ${table} SET`;
    keyArray = Object.keys(req.body);
    for (const key of keyArray) {
        sql += ` ${key}='${req.body[key]}'`;
    }
    sql += `WHERE ${table}_id=${req.params.id}`;
    mysqlCon.query(sql, (error, results) => {
        if (error) {
            res.send(err.message);
            throw error;
        }
        res.send(results);
    });
}

module.exports = { putReq, deleteReq, postReq, specificID };
