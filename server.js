const express = require("express");
const dotenv = require("dotenv");  //allows us to separate our secrate from our source code  and very useful when we work in collaborative environmnet when you want to share yr code with others  //Exmpe PORT Kenyafa Dhoksu Minamin
const morgan = require("morgan");
const bodyParser = require("body-parser");  
const session = require("express-session");
const {v4: uuidv4} = require("uuid");
const path  = require("path");

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080;

//session
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

//log request >> morgan module allows us to log request on console whnever we make a request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({
    extended: true
}))

//set view engine
app.set("view engine", "ejs")  //By Default Views folderii Keesssaa ejs filin keenya Jira Tanan Kana Fayyadamu Dandeenya.Bqiidha.
//app.set("views", path.resolve(__dirname, "views/ejsfolder"))  //Kana Kan Fayyadmnu Yeroo ejs file kenya folderii bira kan views keessa jiru keessa galeera yoo ta'edha. for example bezi example views keessa lixne achin ejsfolder keessa jira yoo tae ejs filin keenya line kana uncomment goone itti dabalu qabna.

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))  //lemisale  css/style.css   jenne wamne fayyadamu dndeenya wanta css folder keessa jiru fayyadamuuf
app.use('/images', express.static(path.resolve(__dirname, "assets/images")))  //to load images
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))    //to load javascript files
app.use('/fonts',express.static(path.resolve(__dirname,"assets/fonts")))

//load routers
app.use('/', require('./server/routes/router'));



app.listen(PORT, ()=>{
    console.log("The Server Is Listening On Port", PORT);
})

