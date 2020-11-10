const emailController = require("../controllers/email.controller");
const {authenticate} = require('../config/jwt.config');


module.exports = function(app){
    app.post("/api/email", emailController.send);
}