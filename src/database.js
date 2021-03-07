const mongoose = require("mongoose"),
const connection="mongodb+srv://Admin-D:123.Probando@Stick-a-Note/Stick-a-Note?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));