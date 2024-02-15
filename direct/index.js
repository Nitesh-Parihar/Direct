// const express = require("express");
import express from 'express'
import router from './route/route.js'
import dbconnect from './dbms.js';
dbconnect().then(()=>{
  console.log('success');
}).catch((e)=>{
  console.log(e);
})  
// import bodyParser from "body-parser";

const app = express();
// require("./dbms");
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",router);


app.listen(5000, () => {
  console.log(`Server running at port 5000 `);
});
