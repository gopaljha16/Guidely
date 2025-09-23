require("dotenv").config();
const express = require('express');
const app = express();

const PORT = process.env.PORT_NO;

app.listen(PORT, () =>{
    console.log("Server is listening on port no " , PORT)
})