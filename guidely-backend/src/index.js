const express = require("express")
require("dotenv").config()
const app = express();

const PORT_NO = process.env.PORT_NO || 5000

app.listen(PORT_NO , () =>{
    console.log(`Server is running on port no ${PORT_NO} `)
})