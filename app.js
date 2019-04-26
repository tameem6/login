var express= require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/static', express.static('static'));

var obj = [{
    "name": "Raj",
    "age": "23",
    "username" : "raj10",
    "password" : "wxyz"
},
{
    "name" : "Rahul",
    "age" : "27",
    "username" : "rahulk",
    "password" : "pass321"
},
{
    "name" : "Anjali",
    "age" : "25",
    "username" : "anjsharma",
    "password" : "lol"
},
{
    "name" : "Shreya",
    "age" : "24",
    "username" : "shreyakl",
    "password" : "abcd1234"
},
{
    "name" : "Tameem",
    "age" : "23",
    "username" : "tameem6",
    "password" : "hmm"
}
]
app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({extended : true});

app.listen(process.env.PORT || 8080);
console.log("Server Running");
app.get('/',function(req,res){
   
    res.sendFile(__dirname + '/login_page.html');
});

app.post('/profile', urlEncodedParser, function(req,res){
    var flag = 0;
    for(i=0;i<obj.length;i++)
    {
        if(obj[i].username===req.body.username && obj[i].password === req.body.password)
        {
            res.send("Username: " +obj[i].username + "\n Name : "+ obj[i].name + " \n Age : "+ obj[i].age);
            flag=1;
            break;
            
        }
        else if(obj[i].username===req.body.username && obj[i].password != req.body.password)
        {
            res.send("Wrong password. Go back and try again");
            flag=1;
            break;
        }
    }
    if(flag==0)
            res.send("Username not found");
});