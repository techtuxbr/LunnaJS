const Router = require("../core/Router");

const router = new Router();

module.exports = [
    router.GET("","WelcomeController@main")
];