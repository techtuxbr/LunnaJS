class Route{
    constructor(method,name,controller){
        this.method = method;
        this.name = name;
        this.controller = controller;
    }
}
module.exports = Route;