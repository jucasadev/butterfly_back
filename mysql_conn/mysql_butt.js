var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'database-1.cvfgryexc2fp.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'maicaflorencia95',
    database: 'poritivethinking'
});

async function title_company() {
    var result = await connector('SELECT * FROM company_info')
    console.log(result)
    return result[0].company_name
}

async function questions_list() {
    var result = await connector('SELECT * FROM questions_table')
    console.log(result)
    return result
}

function connector(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);

        });
    });
}



module.exports = {
    title_company,
    questions_list
}





