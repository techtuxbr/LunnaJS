var Route = require("./Route");
class Router{
    constructor(){
        
    }
    GET(path,controller){
        return new Route(0,path,controller);
    }
    POST(path,controller){
        return new Route(1, path,controller);
    }
}
module.exports = Router;