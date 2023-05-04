var express = require('express');

const sql_operations = require("./mysql_conn/mysql_butt")

var app = express();



const PORT = 25000;

app.get('/init', async function(req, res) {
    const TITLE = await sql_operations.title_company()
    const QUESTIONS = await sql_operations.questions_list()
    //res.send(TITLE);
    res.send([TITLE,QUESTIONS]);
});








// --------------------------------------------------------------------------------------------------------------
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on port `+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);