const axios = require('axios');  //helps us to make request 

const credential = {
    email: "fani@gmail.com",
    password: "faniman"
}

exports.homeRoutes = (req, res)=>{
    //make a get request to /api/users
    // axios.get('http://localhost:3000/api/comments')
    // .then(function(response){
        // console.log(response.data);
        // res.render('index', {users: response.data});
        res.render('index');

    // })
    // .catch(err=>{
    //     res.send(err);
    // })
    
}

exports.add_comment = (req, res)=>{
    res.render('add_comment');
}


exports.select_dept = (req, res)=>{
    res.render('select_dept');
}

exports.login_page = (req, res)=>{
    res.render('login')
}

//var user;
exports.admin_page = (req, res) =>{
  //  axios.get('http://localhost:3000/api/comments')
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email
        console.log(req.session)
        console.log(req.session.user);
        axios.get('http://localhost:3000/api/comments')
        .then(function(response){ 
            console.log(response.data);
            res.render('admin_home_page', {comments: response.data});
          //  console.log(comments);
    
        })
        .catch(err=>{
            res.send(err);
        })
    }else{
        res.end("Invalid Username");
    }


   // res.render('admin_page')
}

exports.logout_page = (req, res) =>{
    console.log(req.session)
    // delete req.session;
    // res.render('base', {title:"Express",logout:"Logout Successfully..!"});

    //or We Can Use The Following Option
    req.session.destroy(function(err){
        if(err){
           // console.log(req.session);
            console.log(err);
            res.send("Error");
        }else{
            res.render('login', {title:"Login Form Faniman",logout:"Logged out Successfully..!"})
        }
    })
  //  console.log(req.session);

}


//render admin_page Which Loads Admin Page 
// exports.admin_page = (req, res)=>{
//     console.l
//     console.log(req.session);
//     if(req.body.email == credential.email && req.body.password == credential.password){
//         req.session.emaile = req.body.email;
//         req.session.passworde = req.body.password;

//     }else{
//         res.send("Incorrect Input Man");

//     }

//     req.session.destroy(function(err){
//         if(err){
//             res.send("Error Occured Here WHile Loading HomePage")
//         }else{
//             res.render('admin_page')
//         }
    
// res.send("Which One Of The FOllowing Is True In Which One Of THe Following And Until When Does")
//     })
// }











// exports.select_dept = (req, res)=>{
//     axios.get('http://localhost:3000/api/users', {params:{id:req.query.id}})  //ye anduan user data yagegnal malet new bezi
//       .then(function(userdata){
//         res.render('update_user',{user: userdata.data});

//       })
    
// }