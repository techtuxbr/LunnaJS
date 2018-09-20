const Controller = require("./Controller");

class WelcomeController extends Controller{
    constructor(){
        super();
    }
    main(req,res,next){
        res.render("welcome",{message: "Welcome to LunnaJS!"});   
    }
}

module.exports = WelcomeController;