const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'database-1.chkoptbrsykk.ap-northeast-2.rds.amazonaws.com',
    post: 3306,
    user: 'admin',
    password: '789456123a',
    database: 'sc'
});

module.exports = {
    pool: pool
};