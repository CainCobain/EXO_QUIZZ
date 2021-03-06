var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Add headers
app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
//JSON Data question and answers
var Questions = ({
             Question:"Aimez-vous React ?"
            ,Answers:["Oui","Non"]
            ,GoodA:"Oui"
        });

//--------> GET Questions <<<<------
app.get('/quizz',(req,res)=>{
    res.json(Questions);
});

app.listen(3001,(err)=>{
  if(err) throw err;
})
