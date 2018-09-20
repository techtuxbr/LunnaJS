const express = require("express");
const WrongType = require("./exceptions/WrongType");
const InvalidControllerFormat = require("./exceptions/InvalidControllerFormat");
const Route = require("./Route");
const exphbs = require('express-handlebars');

class Server{
    constructor(){
        this.app = express();
        // Register Handlebars view engine
        this.app.engine('.hbs', exphbs({extname: '.hbs'}));
        // Use Handlebars view engine
        this.app.set('view engine', '.hbs');
    }
    connect(port, callback,routes){
        try{
            this._routes(routes);
            this.app.listen(port,callback);
        }catch(error){
            console.log(error.name + " : " + error.message);        
        }
    }
    _routes(routes){
        if(routes instanceof Array){
            for(var i = 0; i < routes.length; i++){
                if(routes[i] instanceof Route){
                    var r = routes[i];
                    if(!(r.controller.constructor.name === "String")){           
                        throw new WrongType("Type error, you are passing an invalid type in your controller routes, it should be a string. Eg. controller@method FILE: Server.js , Line: 21","Server.js",21);
                    }
                    if(!r.controller.includes("@")){
                        throw new InvalidControllerFormat("Invalid controller format: " + r.controller + " it should be: controller@method","Server.js",26);                 
                    }
                    if(r.name[0] != '/'){
                        r.name = '/' + r.name;
                    }
                    const controllerArgs = r.controller.split("@");
                    const ControllerClass = require("../controllers/"+controllerArgs[0]);
                    const controller = new ControllerClass();
                    switch(r.method){
                        case 0:
                            controller.route = r; 
                            this.app.get(r.name,controller[controllerArgs[1]]);
                            break;
                        case 1:
                            console.log("Is POST");
                            break;
                        case 2:
                            console.log("Is DELETE");
                            break;
                        default:
                            break;    
                    }
                }else{
                    throw new WrongType("Type error, you are passing an invalid type in your routes, on the Server connection method. FILE: Server.js , Line: 17","Server.js",20);
                }
            }   
        }else{
            throw new WrongType("Type error, you are passing an invalid type in your routes, on the Server connection method. FILE: Server.js , Line: 17","Server.js",17);
        }
    }
}

module.exports = Server;