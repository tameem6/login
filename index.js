/* var express= require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');
var cors = require('cors');
app.use('/static', express.static('static'));
app.use(cors());
app.use(bodyParser.json());
var urlEncodedParser = bodyParser.urlencoded({extended : false});

app.listen(process.env.PORT || 8080);

app.get('/',function(req,res){
    console.log("Server Running");
    res.sendFile(__dirname + '/login_page.html');
});

app.post('/profile', urlEncodedParser, (req,res)=> {
    var flag = 0;
    var info ="";
    for(i=0;i<obj.length;i++)
    {
        if(obj[i].username===req.body.username && obj[i].password === req.body.password)
        {
            info +="Username: " +obj[i].username + "\n Name : "+ obj[i].name + " \n Age : "+ obj[i].age;
            res.send("\n" + info);
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
app.get('/api/:token',(req,res)=>{
    var decoded = jwt.decode(req.params.token);
    if(decoded.exp<Date.now()){
      res.send('Token Expired');
    }
    res.send(decoded);
  });  */
