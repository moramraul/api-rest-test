const express = require("express")
const { json } = require("express/lib/response")
const app = express()
const morgan = require("morgan")
const router = require("./routes/routes")
var bodyParser = require('body-parser');
const connect = require("./database/database");

app.set("port", process.env.PORT || 3000)
app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json())


// Starting server
app.listen(app.get("port"), () => {
    console.log("App listening in port 3000")
})

// routes

app.use("/api", require("./routes/routes"))