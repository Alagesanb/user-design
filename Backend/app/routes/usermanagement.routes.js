module.exports = app => {
    const usermanagement = require("../controllers/usermanagement.controller");
  
    var router = require("express").Router();
  
    // Create a new user management
    router.post("/create", usermanagement.create);
    router.post("/login", usermanagement.login)
  
    app.use('/api/usermanagement', router);
  };