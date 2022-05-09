// para conectar la base de datos
const mongoose = require("mongoose");

const url = "mongodb+srv://desafio2111:rl1234rl@cluster0.nk4q7.mongodb.net/carpooling-challenge?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Base de datos de Mongo conectada");
    })
    .catch((err) => {
        console.error(err);
    });