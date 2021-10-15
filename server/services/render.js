const axios = require('axios');  //helps us to make request 

// const credential = {
//     email: "fani@gmail.com",
//     password: "faniman"
// }

const credential = [
{
    email: "fani@gmail.com",
    password: "faniman"
},
{
    email: "beli@gmail.com",
    password: "beliman"  
},
{
    email: "eyob@gmail.com",
    password: "eyobman"
},
{
    email: "nati@gmail.com",
    password: "natiman"  
},
{
    email: "sol@gmail.com",
    password: "soliman"  
}
]

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

exports.analysis_page = (req, res)=>{
    res.render('analysis')
}

//var user;
exports.admin_page = async (req, res) =>{   //async and await anatu itti dabable but Jijirama fida hin jiru
  //  axios.get('http://localhost:3000/api/comments')

      //validate request
      if(!req.body){
        res.status(406).json({err:"You Have to fill The Login Form"});
        return;
    } 

    //get user data
     let {email, password} = req.body

        if(!email || !password ){
            res.status(406).json({err:"Not All fields are Entered...Please Fill The Form"});

        }

        await credential.forEach(element =>{
        if(req.body.email == element.email && req.body.password == element.password){
            req.session.user = req.body.email
            console.log(req.session)
            console.log(req.session.user);
            axios.get('http://fierce-shore-20470.herokuapp.com/api/comments')
            // axios.get('http://localhost:3000/api/comments')
            // axios.get('/api/comments')
            .then(function(response){ 
                console.log(response.data);
                res.render('admin_home_page', {comments: response.data});
              //  console.log(comments);
        
            })
            .catch(err=>{
                res.send(err);
            })
        }
        // else{
        //     res.end("Invalid Username/Password");
        // }
        });


        //Kun Emmo Esa Duradha
    // if(req.body.email == credential.email && req.body.password == credential.password){
    //     req.session.user = req.body.email
    //     console.log(req.session)
    //     console.log(req.session.user);
    //     axios.get('http://localhost:3000/api/comments')
    //     .then(function(response){ 
    //         console.log(response.data);
    //         res.render('admin_home_page', {comments: response.data});
    //       //  console.log(comments);
    
    //     })
    //     .catch(err=>{
    //         res.send(err);
    //     })
    // }
    // // else{
    // //     res.end("Invalid Username/Password");
    // // }


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