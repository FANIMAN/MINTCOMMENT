var Commentdb = require('../model/model');
// var selecteddep = require('../model/index2');
// nameOfDep:selecteddep.currentID,

// var selecteddep = require('../../assets/js/index');
// var selecteddep = require('/js/index');


//create and save new comment
exports.create = (req, res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content Can not be empty"});
        return;
    }
    
    //new comment
    const comment = new Commentdb({
        question1: req.body.question1,
        question2:req.body.question2,
        question3:req.body.question3,
        question4:req.body.question4,
        comment:req.body.comment
    })

    //save comment in database
    comment
      .save(comment)
      .then(data=>{
          //res.send(data)
          res.redirect('/')
      })
      .catch(err=>{
          res.status(500).send({
              message:err.message || "Some error occurred while submitting a create operation"
          });
      });

}

//retrieve and return all comments/ retrieve and return a single comment
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Commentdb.findById(id)
        .then(data=>{
            if (!data) {
                res.status(404).send({message: "Not found comment with id = " +id});
            } else {
                res.send(data);
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retrieving comment with id = " +id});
        })
    }
    else{
        Commentdb.find()
        .then(comment=>{
            res.send(comment)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error occurred while retrieving comment information"
            });
    
        })

    }
  
    
}

//Update a new identified comment by comment id 
exports.update = (req, res)=>{
    if(!req.body){
        return res
          .status(400)
          .send({message: "Data to update Can not be empty"});

    }
    
    const id = req.params.id;   //Used For URL Parameter not Query Parameter
    Commentdb.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
    .then(data=>{
        if (!data) {
            res.status(404).send({message: `Can not update comment with ${id}, May be comment Not Found`});
        } else {
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error update comment Information"})
    })
}

//Delete a comment with specified  comment id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;   //Used For URL Parameter not Query Parameter
    Commentdb.findByIdAndDelete(id)
    .then(data=>{
        if (!data) {
            res.status(404).send({message: `Can not dekete comment with id  ${id}, May be id is wrong`});
        } else {
            res.send({message: "comment was succesfully Deleted"});
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Could not delete comment with id = " +id
    });
    });
    
}