const express = require("express");
const bodyParser =  require("body-parser");
const morgan =  require("morgan");


const app =  express();

const port  = process.env.PORT || 9000 

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.send("Everthing Works! :)");
});


app.listen(port,e =>console.log(`works in port ${port}`));

