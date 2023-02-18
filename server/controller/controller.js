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
    
}

// update a user by user id
exports.update = (req, res) => {
    
}

// delete a user by user id
exports.delete = (req, res) => {
    
}

