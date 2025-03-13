import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const actualPassword = "ILU";
var userIsAuthorised = "false";

app.use(bodyParser.urlencoded({extended : true}));

function checkPassword(req, res, next){
    const password = req.body["password"];
    if(password === actualPassword){
        userIsAuthorised = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (req, res) => {
    if(userIsAuthorised === true){
        res.sendFile(__dirname + '/public/secret.html');
    }
    else{
        res.sendFile(__dirname + '/public/index.html');
    }
});

app.listen(port, ()=>{
    console.log(`Listening ${port}`);
})