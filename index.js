
const mongoose = require("mongoose")
const express = require("express")
const { application } = require("express")

const app = express()

//Levantar servidor
app.listen(8080,()=>{
    console.log("Server listening...")
})

const URL = "mongodb+srv://Rechy:kodemia123@kodemia.hnuc479.mongodb.net/kodemia"