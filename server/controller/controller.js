var userdb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({ message: "Content Can not be empty!" });
        return;
    }

    // new user
    const user = new userdb({

        first_name: req.body.first_name,
        last_name: req.body.last_name,  
        email: req.body.email,  
        phone: req.body.phone,
        address: req.body.address,

    })

    // save user in db
    user
      .save(user)
      .then(data => {
          res.send(data)
      })
      .catch(err => {
          res.status(500).send({
             message: err.message || "Some error occured while creating a new user"
          });
      });
}

// retrive and return all user/ return a single user
exports.find = (req, res) => {
    userdb.find()
    .then(user => {
        res.send(user)
    })  
    .catch(err => {
        res.status(500).send({
           message: err.message || "Some error occured while Retriving User Information"
        });
    });  
}

// update a user by user id
exports.update = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({ message: "Content Can not be empty!" });
        return;
    }

    // get id from request parameter
    const id = req.params.id;
    userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
              res.status(404).send({ message: "Cann't update user.. Maybe, User not found"})   
        }else{
            res.send(data)
        }
    })

    // if any error occur during update
    .catch(err => {
        res.status(500).send({
           message: err.message || "Some error occured while Updating User Information"
        });
    });
}

// delete a user by user id
exports.delete = (req, res) => {
     const id = req.params.id;
     
     userdb.findByIdAndDelete(id)
     .then(data => {
        if(!data){
            res.status(404).send({ message: "Cann't delete user.. Maybe, the Id is wrong"})   
        }else{
            res.send({
                message: "User deleted Successsfully"
            })
        }
     })

     // if any error occur during delete
    .catch(err => {
        res.status(500).send({
           message: err.message || "Some error occured while Deleting User Information"
        });
    });
}