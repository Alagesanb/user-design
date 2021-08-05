const db = require("../models");
const Signup = db.signups;
const Op = db.Sequelize.Op;

const create = (req, res) => {

    // Validate request
    if (!req.body.Username) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a signup
    const signup = {
        username: req.body.Username,
        email: req.body.Email,
        password: req.body.Password 
    };
  
    // Save signup in the database
    Signup.create(signup)
      .then(data => {
        res.json({
                    
          status:true,
          message: 'Signup Successfully'
      })
      })
      .catch(err => {
        res.status(500).send({
          status:false,
          message:
            err.message || "Some error occurred while creating the signup."
        });
      });
  };


  const login = (req, res) => {
    // console.log(req)
    const { Email, Password } = req.body;
    let email = Email;
    let password = Password;
    const user = Signup.findOne({ where: { email , password} });
    console.log(user);
    if(user){
      res.json({
                    
        status:true,
        message: 'Login Successfully'
      })
   }else{
    res.json({
                    
      status:false,
      message: 'Login Failed'
    })
    
    }
  // if the username / password is missing, we use status code 400
  // indicating a bad request was made and send back a message
  if (!Email || !Password) {
    return res.status(400).send(
      'Request missing username or password param'
    );
  }

  // Signup.authenticate = async function(Email, Password) {

  //   const user = await Signup.findOne({ where: { Email } });

    // bcrypt is a one-way hashing algorithm that allows us to 
    // store strings on the database rather than the raw
    // passwords. Check out the docs for more detail
  //   console.log(user);
  //   console.log(user);
  //   if (Password) {
  //     return user.authorize();
  //   }

  //   throw new Error('invalid password');
  // }

  // try {
  //   let user =  Signup.authenticate(Email, Password)

  //   user = user.authorize();
  //   console.log("authorized")
  //   console.log(user);
  //   return res.json(user);

  // } catch (err) {
  //   return res.status(400).send('invalid username or password');
  // }

  }

  module.exports = { create , login}