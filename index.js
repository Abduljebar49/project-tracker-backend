const express = require('express');
const cors = require('cors');
const db = require('./sequelize');




const app = express();
app.use(cors());
app.use(express.json());

app.listen(4000,async (req,res,next)=>{
    console.log("listening on port 4000");
})