import  Express  from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
//const express = require("express");
//const mysql = require("mysql");
//const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = Express();

app.use(cors());
app.use(Express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'water_purity_controller'
  })
  con.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  

  app.get("/", (req, res) => {
        con.query('SELECT * FROM `readings`', function (err, results) {
        if (err) throw err
            else{
            res.send(results);
            
            }
        })
    });




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});