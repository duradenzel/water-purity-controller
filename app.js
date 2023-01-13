import  Express  from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config()


const app = Express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(Express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
  })
  con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
 
  app.get("/", (req, res) => {
        con.query('SELECT * FROM `scanresult`', function (error, results) {
        if (error) throw error
            else{
            res.send(JSON.stringify(results));    
            }
        })
    });

app.listen(process.env.PORT, () => {
  console.log(`Express Server listening on ${process.env.PORT}`);
});